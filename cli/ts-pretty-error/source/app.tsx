import React, { useState } from "react";

import { Box, Text } from "ink";
import { TextInput } from "@inkjs/ui";

import { prettyErrorMessage } from "./formatter";

export default function App() {
  const [msg, setMsg] = useState("");

  return (
    <Box flexDirection="column" gap={1}>
      <TextInput
        placeholder="Enter your Typescript error message"
        onSubmit={(msg) => {
          setMsg(msg);
        }}
      />

      <Text>
        {prettyErrorMessage(msg)}
      </Text>
    </Box>
  );
}
