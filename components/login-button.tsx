"use client";

import { Button } from "@heroui/react";

export function LoginButton() {
  return (
    <Button
      color="primary"
      radius="full"
      variant="solid"
      onPress={() => (window.location.href = "/login")}
    >
      Iniciar Sesión
    </Button>
  );
}
