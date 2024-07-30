export const extractAddressAndCity = (html: string) => {
  const cleanedHTML = html
    .replace(/<br\s*\/?>/gi, "\n") // Substitui <br> por quebra de linha
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove todas as tags HTML
    .replace(/&#8211;/g, "-") // Substitui a entidade HTML por hífen
    .replace(/&amp;/g, "&") // Substitui a entidade HTML &amp; por &
    .replace(/&lt;/g, "<") // Substitui a entidade HTML &lt; por <
    .replace(/&gt;/g, ">") // Substitui a entidade HTML &gt; por >
    .replace(/&quot;/g, '"') // Substitui a entidade HTML &quot; por "
    .replace(/&#39;/g, "'") // Substitui a entidade HTML &#39; por '
    .trim(); // Remove espaços no início e no final da string

  // Dividir a string pela quebra de linha
  const parts = cleanedHTML.split("\n");

  // Verificar se há pelo menos duas partes para evitar erros
  const address = parts.length > 1 ? parts[0].trim() : "";
  const city = parts.length > 1 ? parts[1].trim() : "";

  // Retornar o objeto com o endereço e a cidade
  return {
    adress: address,
    city: city,
  };
};
