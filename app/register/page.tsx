"use client";

import React from "react";
import {Button, Input, Link, Form} from "@heroui/react";
import Image from "next/image";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <div className="flex h-full items-center justify-center bg-content2">
      <div className="container mx-auto max-w-7xl md:h-4/5 flex-grow flex h-full w-full shadow-lg">
        {/* Lado izquierdo */}
        <div className="flex flex-1 items-center justify-center p-3 bg-content1">
          <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
            <div className="flex flex-col items-left">
              <p className="text-2xl font-medium">Registrarse</p>
            </div>
            <Form
              className="flex flex-col gap-3"
              validationBehavior="native"
              onSubmit={handleSubmit}
            >
              <Input
                isRequired
                label="Nombre de Usuario"
                labelPlacement="outside"
                name="username"
                placeholder=""
                radius="sm"
                size="lg"
                type="text"
                variant="bordered"
              />
              <Input
                isRequired
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder=""
                radius="sm"
                size="lg"
                type="email"
                variant="bordered"
              />
              <Input
                isRequired
                // endContent={
                //   <button type="button" onClick={toggleVisibility}>
                //     {isVisible ? (
                //       <Icon
                //         className="pointer-events-none text-2xl text-default-400"
                //         icon="solar:eye-closed-linear"
                //       />
                //     ) : (
                //       <Icon
                //         className="pointer-events-none text-2xl text-default-400"
                //         icon="solar:eye-bold"
                //       />
                //     )}
                //   </button>
                // }
                label="Contraseña"
                labelPlacement="outside"
                name="password"
                placeholder=""
                radius="sm"
                size="lg"
                type={isVisible ? "text" : "password"}
                variant="bordered"
              />
              <Input
                isRequired
                // endContent={
                //   <button type="button" onClick={toggleVisibility}>
                //     {isVisible ? (
                //       <Icon
                //         className="pointer-events-none text-2xl text-default-400"
                //         icon="solar:eye-closed-linear"
                //       />
                //     ) : (
                //       <Icon
                //         className="pointer-events-none text-2xl text-default-400"
                //         icon="solar:eye-bold"
                //       />
                //     )}
                //   </button>
                // }
                label="Repetir Contraseña"
                labelPlacement="outside"
                name="repeatPassword"
                radius="sm"
                size="lg"
                type={isVisible ? "text" : "password"}
                variant="bordered"
              />
              <Button
                className="w-full"
                color="primary"
                radius="sm"
                size="lg"
                type="submit"
              >
                Registrarse
              </Button>
            </Form>
            {/* <div className="flex items-center gap-4 py-2">
              <Divider className="flex-1" />
              <p className="shrink-0 text-tiny text-default-500">OR</p>
              <Divider className="flex-1" />
            </div> */}
            <div className="flex flex-col gap-2">
              <Button
                className="bg-white text-default"
                //startContent={<Icon icon="flat-color-icons:google" width={24} />}
                radius="sm"
                size="lg"
                variant="bordered"
              >
                Continuar con Google
              </Button>
            </div>
            <div className="flex w-full justify-center px-1 py-2">
              <p className="text-small">
                ¿Ya tenés cuenta?&nbsp;
                <Link href="/login" size="sm">
                  Iniciar Sesión
                </Link>
              </p>
            </div>
          </div>
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
}
