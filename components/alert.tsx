import { Alert } from "@heroui/react";

export interface AlertProps {
  title: string;
  description?: string;
  isVisible: boolean;
  onClose?: () => void;
}

export const Success = ({
  title,
  description,
  isVisible,
  onClose,
}: AlertProps) => (
  <Alert
    className="fixed top-4 right-4 left-4 z-50 w-auto p-7 sm:left-auto sm:max-w-sm md:max-w-md lg:max-w-lg"
    color="success"
    description={description}
    isVisible={isVisible}
    title={title}
    variant="flat"
    onClose={onClose}
  />
);
