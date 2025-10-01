import { Label } from "@radix-ui/react-label";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPh_Input_Props = {
  type: string;
  name: string;
  id: string;
  place_holder: string;
  label: string;
};

const Ph_Input = ({ type, name, id, place_holder, label }: TPh_Input_Props) => {

  return (
    <div className="flex items-start gap-2 flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Controller
        name={name}
        render={({field}) => (
          <Input
            {...field}
            id={id}
            type={type}
            placeholder={place_holder}
          />
        )}
      />
    </div>
  );
};

export default Ph_Input;
