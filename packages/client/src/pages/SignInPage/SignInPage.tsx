import React from 'react';

import { Anchor, Button, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useSignInMutation } from 'src/graphql';

export const SignInPage: React.FC = () => {
  const [signIn] = useSignInMutation();

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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button
          fullWidth
          mt="xl"
          onClick={async () => {
            const { data } = await signIn({
              variables: {
                data: { email: 'test@test.ru', password: 'test' },
              },
            });
            console.log(data?.signIn.accessToken);
          }}
        >
          Sign in
        </Button>
      </Paper>
    </React.Fragment>
  );
};
