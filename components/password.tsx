import { Input } from "@heroui/react";
import React from "react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "./icons";

export interface PasswordInputProps {
  name: string;
  label: string;
}

export const PasswordInput = ({ name, label }: PasswordInputProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Input
      isRequired
      endContent={
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
          ) : (
            <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
          )}
        </button>
      }
      label={label}
      labelPlacement="outside"
      name={name}
      radius="sm"
      size="lg"
      type={isVisible ? "text" : "password"}
      variant="bordered"
    />
  );
};
