import React from 'react';

import { Control, useController } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseProps = { name?: string; control?: Control<any, any> };

type FormFieldProps<P extends BaseProps> = {
  component: React.ComponentType<P>;
  fieldProps: P & { [i in keyof BaseProps]-?: BaseProps[i] };
};

export const FormField = <P extends BaseProps>({ component, fieldProps }: FormFieldProps<P>) => {
  const { name, control } = fieldProps;
  const {
    fieldState: { error },
  } = useController({ name, control });

  const Component = component;
  return <Component {...fieldProps} error={error?.message} />;
};
