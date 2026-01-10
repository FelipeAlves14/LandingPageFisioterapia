import type { ReactNode } from "react";

interface ButtonProps {
  anchor?: string;
  className?: string;
  contact?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const {
    anchor = "https://wa.me/5584921604246?text=Olá,+gostaria+de+iniciar+um+atendimento!",
    className,
    contact = false,
    children = "Entre em contato",
    onClick,
  } = props;
  return onClick === undefined ? (
    <a
      className={`${
        contact && "bg-(--golden) cursor-pointer m-2 sm:m-4 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm"
      } ${className}`}
      href={anchor}
      target={anchor.startsWith("#") ? undefined : "_blank"}
    >
      {children}
    </a>
  ) : (
    <button
      className={`bg-(--golden) cursor-pointer m-2 sm:m-4 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
