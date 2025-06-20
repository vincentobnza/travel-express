import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RoleSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

const RoleSelector = ({ value, onValueChange }: RoleSelectorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-medium text-gray-700">
        Account Type
      </label>
      <Select value={value} onValueChange={onValueChange} name="role">
        <SelectTrigger className="w-full h-10">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Role</SelectLabel>
            <SelectItem value="passenger">Passenger</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RoleSelector;
