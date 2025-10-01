import { Label } from "@radix-ui/react-label";
import { Form, Input } from "antd";
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
    <div>
      <Controller
        name={name}
        render={({ field, fieldState:{error} }) => (
          <Form.Item label={label}>
            <Input {...field} id={id} size="large" type={type} placeholder={place_holder} />
            {error && <>{error.message}</>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default Ph_Input;
