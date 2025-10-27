interface ButtonProps {
  placeholder?: string;
}

export default function Button(props: ButtonProps) {
  const { placeholder = "Entre em contato" } = props;
  return (
    <button
      className="bg-(--golden) cursor-pointer m-4 px-4 py-2 rounded-lg"
      onClick={() => fetch}
    >
      {placeholder}
    </button>
  );
}
