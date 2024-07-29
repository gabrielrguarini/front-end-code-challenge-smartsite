import Image from "next/image";
import localFont from "next/font/local";
const gothamBold = localFont({
  src: "../../fonts/gotham-bold.woff2",
});

export default function Legend() {
  return (
    <div className="flex flex-row flex-wrap overflow-hidden min-w-60 gap-4  p-6 bg-gray-100">
      <div className="flex flex-col gap-2 max-w-xs m-auto">
        <h3 className={`${gothamBold.className} text-center`}>Máscara</h3>
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              src={"/images/required-mask.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Obrigatório</p>
          </div>
          <div>
            <Image
              src={"/images/recommended-mask.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 m-auto">
        <h3 className={`${gothamBold.className} text-center`}>Toalha</h3>
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              src={"/images/required-towel.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Obrigatório</p>
          </div>
          <div>
            <Image
              src={"/images/recommended-towel.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 m-auto">
        <h3 className={`${gothamBold.className} text-center`}>Bebedouro</h3>
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              src={"/images/partial-fountain.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Obrigatório</p>
          </div>
          <div>
            <Image
              src={"/images/forbidden-fountain.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Recomendado</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 m-auto">
        <h3 className={`${gothamBold.className} text-center`}>Vestiários</h3>
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              src={"/images/required-lockerroom.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Liberado</p>
          </div>
          <div>
            <Image
              src={"/images/partial-lockerroom.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Parcial</p>
          </div>
          <div>
            <Image
              src={"/images/forbidden-lockerroom.png"}
              width={70}
              height={70}
              alt="Máscara Obrigatório"
              className="m-auto"
            />
            <p>Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
