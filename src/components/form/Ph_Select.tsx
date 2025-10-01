import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

export type TOptions = {
  value: string;
  label: string;
};

type TSelect = {
  name: string;
  label: string;
  options: TOptions[];
  place_holder: string;
};

const Ph_Select = ({ name, label, options, place_holder }: TSelect) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            showSearch
            size="large"
            onChange={onChange}
            placeholder={place_holder}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
          {error && <p className="text-red-800">{error.message}</p>}
        </Form.Item>
      )}
    />
  );
};

export default Ph_Select;
