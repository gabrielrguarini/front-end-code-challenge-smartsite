import localFont from "next/font/local";
const gothamBold = localFont({
  src: "../../fonts/gotham-bold.woff2",
});

export default function Header() {
  return (
    <>
      {" "}
      <h1 className={`${gothamBold.className} text-4xl `}>
        REABERTURA SMART FIT
      </h1>
      <div className="h-2 w-20 bg-dark-grey"></div>
      <p>
        O horário de funcionamento de nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
    </>
  );
}
