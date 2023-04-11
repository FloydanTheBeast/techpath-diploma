import React from 'react';

import { TextInput, PasswordInput, Anchor, Paper, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import { appRoutes } from 'src/constants';

export const SignUpPage: React.FC = () => {
  return (
    <React.Fragment>
      <Title align="center" sx={{ fontWeight: 900 }}>
        New here?
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component={Link} to={appRoutes.auth.signin}>
          Log in
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" sx={{ width: 420 }}>
        <TextInput label="Email" placeholder="Your email" required type="email" />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <TextInput label="First name" placeholder="Your first name" required mt="md" />
        <TextInput label="Last name" placeholder="Your last name" required mt="md" />
        <Button fullWidth mt="xl">
          Sign up
        </Button>
      </Paper>
    </React.Fragment>
  );
};
