import { useCallback, useState } from "react";

type UseModalFormHandlerType = () => [boolean, () => void, () => void];

export const useModalFormHandler: UseModalFormHandlerType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return [isOpen, open, close];
};
