import { Box, Button, Input, Space, Stack, Title } from '@mantine/core';

export default function SignInPage() {
  return (
    <Box>
      <Title>Sign In</Title>

      <Space h={32} />

      <Stack maw={480} spacing={16}>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <Button>Sign In</Button>
      </Stack>
    </Box>
  );
}
