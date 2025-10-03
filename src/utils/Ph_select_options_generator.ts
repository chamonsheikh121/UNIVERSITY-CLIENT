import type { TOptions } from "@/components/form/Ph_Select";

type TOption_Generator<T> = {
  data?: {
    data?: T[];
  };
  expected_value: keyof T;
  expected_label: keyof T;
};

const Ph_select_options_generator = <T extends Record<string, any>>({
  data,
  expected_value,
  expected_label,
}: TOption_Generator<T>): TOptions[]=> {
  const options = data?.data?.map((item) => ({
    value: item[expected_value],
    label: item[expected_label],
  }));

  return options!;
};

export default Ph_select_options_generator;
