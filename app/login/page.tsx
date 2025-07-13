"use client";

import React from "react";
import { Button, Input, Link, Form } from "@heroui/react";

import { LoginLayout } from "../../layouts/login-layout";

import { GoogleIcon } from "@/components/icons";
import { PasswordInput } from "@/components/password";

export default function LoginPage() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <LoginLayout>
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-left">
          <p className="text-2xl font-medium">Iniciar Sesión</p>
        </div>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
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
          <PasswordInput label="Contraseña" name="password" />
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
        <div className="flex flex-col gap-2">
          <Button color="secondary" radius="sm" size="lg" variant="ghost">
            <GoogleIcon />
            Continuar con Google
          </Button>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-between px-1 py-2">
          <Link className="pb-5 md:pb-0" href="#" size="sm">
            Olvidé mi contraseña
          </Link>
          <p className="text-small">
            ¿No tenés cuenta?&nbsp;
            <Link href="/register" size="sm">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </LoginLayout>
  );
}
