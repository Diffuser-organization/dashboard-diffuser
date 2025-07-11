import { title, subtitle } from "@/components/primitives";
import { LoginButton } from "@/components/LoginButton";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-full">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Bienvenid@ a</span>
        <br />
        <span className={title({ color: "violet" })}>Diffuser&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Difunde tus marcas favoritas y gana recompensas
        </div>
      </div>

      <div className="flex gap-3">
        <LoginButton />
      </div>
    </section>
  );
}
