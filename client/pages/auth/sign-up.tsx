import { Box, Button, Input, Space, Stack, Title } from '@mantine/core';

export default function SignInPage() {
  return (
    <Box>
      <Title>Sign Up</Title>

      <Space h={32} />

      <Stack maw={480} spacing={16}>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <Input type="text" placeholder="Repeat Password" />
        <Button>Sign Up</Button>
      </Stack>
    </Box>
  );
}
