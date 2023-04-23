import React from 'react';

import type { SimpleObject } from '@shared/types';
import type { SubmitHandler } from 'react-hook-form';

export type CreateUpdateFormProps<T extends SimpleObject> = {
  onSubmit: SubmitHandler<T>;
  onCancel: () => void;
  defaultValues?: T;
  isUpdate?: boolean;
};

export type CreateUpdateModalArgs<
  C extends React.FC<P>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends Pick<CreateUpdateFormProps<any>, 'onSubmit' | 'defaultValues'> = any,
> = {
  onSubmit: React.ComponentProps<C>['onSubmit'];
  defaultValues?: React.ComponentProps<C>['defaultValues'];
};
