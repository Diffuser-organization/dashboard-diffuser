"use client";

import React from "react";
import { Button, Input, Link, Form } from "@heroui/react";

import { LoginLayout } from "@/components/layouts/login-layout";
import { GoogleIcon } from "@/components/icons";
import { Success } from "@/components/alert";
import { PasswordInput } from "@/components/password";

export default function RegisterPage() {
  const [isSuccessVisible, setIsSuccessVisible] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccessVisible(true);
  };

  return (
    <LoginLayout>
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
          <PasswordInput label="Contraseña" name="password" />
          <PasswordInput label="Repetir Contraseña" name="repeatPassword" />
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
        <div className="flex flex-col gap-2">
          <Button color="secondary" radius="sm" size="lg" variant="ghost">
            <GoogleIcon />
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
      <Success
        description="Tu cuenta ha sido creada con éxito. Ahora puedes iniciar sesión."
        isVisible={isSuccessVisible}
        title="¡Registro exitoso!"
        onClose={() => setIsSuccessVisible(false)}
      />
    </LoginLayout>
  );
}
