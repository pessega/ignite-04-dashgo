import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andressa Duarte</Text>
          <Text color="gray.300" fontSize="small">
            andressaxduarte@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Andressa Duarte" />
    </Flex>
  );
}
