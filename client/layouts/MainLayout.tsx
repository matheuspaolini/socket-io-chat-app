import { Box, Group } from '@mantine/core';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <Box p={16}>
      <Group spacing={16}>
        <Link href="/">Home</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/auth/sign-in">Sign In</Link>
        <Link href="/auth/sign-up">Sign Up</Link>
      </Group>

      <Box>
        {children}
      </Box>
    </Box>
  );
}
