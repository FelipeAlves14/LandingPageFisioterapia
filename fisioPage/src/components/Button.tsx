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
    anchor,
    className,
    contact = false,
    children = "Entre em contato",
    onClick,
  } = props;
  return anchor === undefined ? (
    <button
      className={`bg-(--golden) cursor-pointer m-4 px-4 py-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <a
      className={`${
        contact && "bg-(--golden) cursor-pointer m-4 px-4 py-2 rounded-full"
      } ${className}`}
      href={anchor}
      target={anchor.startsWith("#") ? undefined : "_blank"}
    >
      {children}
    </a>
  );
}
