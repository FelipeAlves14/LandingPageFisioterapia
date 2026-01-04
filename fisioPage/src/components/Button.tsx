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
        contact && "bg-(--golden) cursor-pointer m-4 px-4 py-2 rounded-full"
      } ${className}`}
      href={anchor}
      target={anchor.startsWith("#") ? undefined : "_blank"}
    >
      {children}
    </a>
  ) : (
    <button
      className={`bg-(--golden) cursor-pointer m-4 px-4 py-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
