import { Box, Button, Input, Space, Stack, Title } from '@mantine/core';

export default function ChatPage() {
  return (
    <Box>
      <Title>Chat Page</Title>

      <Space h={32} />

      <Stack maw={480} spacing={16}>
        <Input placeholder="Enter a chat Id" />
        <Button>Enter chat</Button>
      </Stack>
    </Box>
  );
}
