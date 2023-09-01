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

export function SelectDeletePeriodic({onValueChange, defaultValue}: PropsType) {
  return (
    <div>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-fit mx-2">
          <SelectValue className="p-12" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="0">Off</SelectItem>
            <SelectItem value="30">30 Days</SelectItem>
            <SelectItem value="60">60 Days</SelectItem>
            <SelectItem value="90">90 Days</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
