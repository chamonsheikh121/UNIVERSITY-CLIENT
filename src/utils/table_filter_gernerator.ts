type TOption_Generator<T> = {
  data?: {
    data?: T[];
  };
  expected_text: keyof T;
  expected_value: keyof T;
};

type TData = { text: string; value: string };

const table_filter_generator = <T extends Record<string, any>>({
  data,
  expected_text,
  expected_value,
}: TOption_Generator<T>): TData[] => {
  const options = data?.data?.map((item) => {
    console.log(item);
    return {
      text: item.email,
      value: item.email,
    };
  });
  console.log(options);

  return options!;
};

export default table_filter_generator;
