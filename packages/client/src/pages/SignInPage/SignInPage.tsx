import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Anchor,
  Button,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { FormField } from 'src/components';
import { appRoutes } from 'src/constants';
import { useAuth, useCurrentUser } from 'src/hooks';

import { signInFormValidationSchema } from './constants';
import { SignInFormData } from './types';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { refetchCurrentUser } = useCurrentUser();
  const {
    handleSubmit,
    register,
    control,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormValidationSchema),
  });

  const onSubmit: SubmitHandler<SignInFormData> = async data => {
    try {
      await signIn(data);
      refetchCurrentUser();
      navigate(appRoutes.app.index);
    } catch (error) {
      // TODO: Spawn notification
      console.error(error);
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
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do&apos;nt have an account yet?{' '}
        <Anchor size="sm" component={Link} to={appRoutes.auth.signup}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="xl" p={30} mt={30} radius="md" sx={{ width: 420 }} pos="relative">
        <LoadingOverlay visible={isSubmitting} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            component={TextInput}
            fieldProps={{
              ...register('email'),
              control,
              label: 'Email',
              required: true,
              placeholder: 'Your email',
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
              mt: 'md',
            }}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
};
