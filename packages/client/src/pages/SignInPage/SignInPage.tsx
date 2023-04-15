import React from 'react';

import { Anchor, Button, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { SignInMutationVariables } from '@shared/graphql';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useAuth } from 'src/hooks';

type SignInFormData = SignInMutationVariables['data'];

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { handleSubmit, register } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async data => {
    try {
      await signIn(data);
      navigate(appRoutes.app.index);
    } catch (error) {
      // TODO: Spawn notification
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Title align="center" sx={{ fontWeight: 900 }}>
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component={Link} to={appRoutes.auth.signup}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" sx={{ width: 420 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput {...register('email')} label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            {...register('password')}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
};
