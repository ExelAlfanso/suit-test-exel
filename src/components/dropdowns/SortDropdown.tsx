import Dropdown, { DropdownProps } from "./Dropdown";

interface SortDropdownProps extends Omit<DropdownProps, "onChange"> {
  updateQuery: (params: { sort: string | number }) => void;
}

export default function SortDropdown({
  updateQuery,
  value,
  ...props
}: SortDropdownProps) {
  return (
    <Dropdown
      label="Sort by"
      value={value}
      onChange={(value) => updateQuery({ sort: value })}
      {...props}
    />
  );
}
