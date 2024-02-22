import React from "react";
import { Flex, Box, useColorModeValue, Button, useDisclosure, VStack, HStack } from "@chakra-ui/react";

const Index = () => {
  const defaultColor = useColorModeValue("gray.100", "gray.700");
  const [colors, setColors] = React.useState(new Array(6).fill(defaultColor));

  const changeColorGradually = () => {
    let newColors = [...colors];
    for (let i = 0; i < newColors.length; i++) {
      setTimeout(() => {
        newColors[i] = `hsl(${(i / newColors.length) * 240}, 100%, 50%)`; // Gradual color based on the hue
        setColors([...newColors]);
      }, i * 500); // Increase delay for each box
    }

    // Reset the colors back to default after the full gradient effect
    setTimeout(() => {
      setColors(new Array(6).fill(defaultColor));
    }, newColors.length * 500);
  };

  return (
    <VStack spacing={4}>
      <Button onClick={changeColorGradually} mb={4}>
        Change Colors Gradually
      </Button>
      <Flex justify="center" align="center">
        {colors.map((color, index) => (
          <Box key={index} w="300px" h="600px" bg={color} m={1} transition="background-color 0.5s ease" />
        ))}
      </Flex>
    </VStack>
  );
};

export default Index;
