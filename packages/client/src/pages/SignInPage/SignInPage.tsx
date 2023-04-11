import React from 'react';

import { Anchor, Button, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import { appRoutes } from 'src/constants';

export const SignInPage: React.FC = () => {
  return (
    <React.Fragment>
      <Title align="center" sx={theme => ({ fontWeight: 900 })}>
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
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </React.Fragment>
  );
};
