"use client";

import React from "react";
import {Button, Input, Checkbox, Link, Form, Divider} from "@heroui/react";
import Image from 'next/image';

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <div className="flex h-full w-full">
      {/* Lado izquierdo */}
      <div className="flex flex-1 items-center justify-center p-3 bg-white">
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium">Iniciar Sesión</p>
          </div>
          <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
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
            <Button
              className="w-full"
              color="primary"
              radius="sm"
              size="lg"
              type="submit"
            >
              Iniciar Sesión
            </Button>
          </Form>
          {/* <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div> */}
          <div className="flex flex-col gap-2">
            <Button
              //startContent={<Icon icon="flat-color-icons:google" width={24} />}
              radius="sm"
              size="lg"
              variant="bordered"
            >
              Continuar con Google
            </Button>
          </div>
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Link href="#" size="sm">
              Registrarse
            </Link>
            <p className="text-small">
              ¿No tenés cuenta?&nbsp;
              <Link href="#" size="sm">
                Olvidé mi contraseña
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
  );
}
