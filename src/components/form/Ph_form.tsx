import { Form } from "antd";
import type { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";

type PhFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TForm_Config;

type TForm_Config = {
  defaultValues?: Record<string, any>;
};

const Ph_form = ({ onSubmit, children, defaultValues }: PhFormProps) => {
  const form_config: TForm_Config = {};
  if (defaultValues) {
    form_config["defaultValues"] = defaultValues;
  }
  const methods = useForm(form_config);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default Ph_form;
