import Dropdown, { DropdownProps } from "./Dropdown";

interface SizeDropdownProps extends Omit<DropdownProps, "onChange"> {
  updateQuery: (params: { size: string | number }) => void;
}

export default function SizeDropdown({
  updateQuery,
  value,
  ...props
}: SizeDropdownProps) {
  return (
    <Dropdown
      label="Show per page:"
      value={value}
      onChange={(value) => updateQuery({ size: value })}
      {...props}
    />
  );
}
