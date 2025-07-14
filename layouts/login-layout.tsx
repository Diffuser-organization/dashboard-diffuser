import Image from "next/image";

import { ThemeSwitch } from "@/components/theme-switch";

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center bg-content2">
      <ThemeSwitch className="fixed top-5 right-5" />
      <div className="container mx-auto max-w-7xl md:h-4/5 flex-grow flex h-full w-full shadow-lg">
        {/* Lado izquierdo */}
        <div className="flex flex-1 items-center justify-center p-3 bg-content1">
          {children}
        </div>
        {/* Lado derecho */}
        <div className="hidden md:flex flex-1 flex-col justify-end items-start bg-gray-100 relative">
          <Image
            fill
            alt="Imagen decorativa"
            className="absolute inset-0 w-full h-full object-cover"
            src="/Shapes.svg"
          />
          <div className="relative z-10 w-full pb-10 pl-10">
            <p className="text-white text-3xl font-semibold drop-shadow-md">
              Hey! <br />
              Bienvenido a Diffuser_Logo
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
    </div>
  );
};
