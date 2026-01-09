interface PaginationButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function PaginationButton({
  disabled,
  onClick,
  children,
  className,
}: PaginationButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} cursor-pointer disabled:cursor-auto text-sm text-black px-5 py-4 rounded-md hover:bg-gray-100  disabled:text-gray-400`}
    >
      {children}
    </button>
  );
}
