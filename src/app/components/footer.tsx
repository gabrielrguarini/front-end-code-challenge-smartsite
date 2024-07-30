import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-white h-52 w-full bg-dark-grey">
      <Image src="images/logo.svg" alt="Smart Fit" width={120} height={120} />
      <p>Todos os direitos reservados - 2020</p>
    </footer>
  );
}
