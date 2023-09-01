import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../../@/components/ui/select";

type PropsType = {
  onValueChange: (value: string) => void;
  defaultValue: string;
};

export function SelectPageSize({onValueChange, defaultValue}: PropsType) {
  return (
    <div className="inline-block">
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-fit mx-2">
          <SelectValue className="p-12" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
