import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
  LoadingOverlay,
  Stack,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useSignUpMutation } from '@shared/graphql';
import { IconCheck, IconX } from '@tabler/icons-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { FormField } from 'src/components';
import { appRoutes } from 'src/constants';

import { signUpFormValidationSchema } from './constants';
import { SignUpFormData } from './types';

export const SignUpPage: React.FC = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormValidationSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async ({ repeatPassword: _, ...formData }) => {
    try {
      await signUp({ variables: { data: formData } });
      navigate(appRoutes.auth.signin);
      notifications.show({
        title: 'Success',
        message: 'Your account has been created',
        color: 'green',
        withCloseButton: true,
        icon: <IconCheck />,
        withBorder: true,
      });
    } catch (error) {
      notifications.show({
        title: 'Something went wrong',
        message: error.message,
        color: 'red',
        withCloseButton: true,
        icon: <IconX />,
        withBorder: true,
      });
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Title
        align="center"
        sx={{ fontWeight: 900 }}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      >
        New here?
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component={Link} to={appRoutes.auth.signin}>
          Log in
        </Anchor>
      </Text>

      <Paper withBorder shadow="xl" p={30} mt={30} radius="md" sx={{ width: 420 }} pos="relative">
        <LoadingOverlay visible={isSubmitting} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <FormField
              component={TextInput}
              fieldProps={{
                ...register('firstName'),
                control,
                label: 'First Name',
                placeholder: 'Your first name',
                required: true,
              }}
            />
            <FormField
              component={TextInput}
              fieldProps={{
                ...register('lastName'),
                control,
                label: 'Last Name',
                placeholder: 'Your last name',
                required: true,
              }}
            />
            <FormField
              component={TextInput}
              fieldProps={{
                ...register('email'),
                control,
                label: 'Email',
                placeholder: 'Your email',
                required: true,
              }}
            />
            <FormField
              component={PasswordInput}
              fieldProps={{
                ...register('password'),
                control,
                label: 'Password',
                placeholder: 'Your password',
                required: true,
              }}
            />
            <FormField
              component={PasswordInput}
              fieldProps={{
                ...register('repeatPassword'),
                control,
                label: 'Repeat Password',
                placeholder: 'Repeat your password',
                required: true,
              }}
            />
            <Button fullWidth mt="xl" type="submit">
              Sign up
            </Button>
          </Stack>
        </form>
      </Paper>
    </React.Fragment>
  );
};
