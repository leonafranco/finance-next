// app/layout.tsx
'use client'


import { Link } from '@chakra-ui/next-js'
import { Box, Center, Flex, Spacer, HStack, Text, Heading, VStack, Card, Stack, CardBody, Image, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex color='white' h={'100vh'} flexDirection='column'>
      <Flex w={"full"} h="60px" alignItems={'center'} justifyContent={"space-between"} bg="red.500">
        <Heading>
          Next-Finance
        </Heading>
        <HStack padding={"20px"}>
          <Link href={"#"}>Account</Link>
          <Link href={"#"}>Sair</Link>
        </HStack>
      </Flex>
      <Flex h={"full"} flexDirection={"row"}>
        <Flex w={"66%"} bg='tomato' flexDirection={"column"}>
          <Flex w={"full"} flex="1" bg={'blue.400'}>
            <VStack w={"full"} bg={"red.500"}>
              <HStack w={"full"} justifyContent={"space-between"}>
                <Text>Personal Account</Text>
                <Text>Icon</Text>
              </HStack>

              <Text>Todays Balance</Text>
              <Text>500€</Text>
              <HStack justifyContent={"space-between"} w={"full"} bg={"white"}>
                <VStack>
                  <Text color='black'>Money In</Text>
                  <Text color='black'>1000€</Text>
                </VStack>
                <VStack>
                  <Text color='black'>Money Out</Text>
                  <Text color='black'>1000€</Text>
                </VStack>
                <VStack>
                  <Text color='black'>Total</Text>
                  <Text color='black'>1000€</Text>
                </VStack>
              </HStack>
            </VStack>
          </Flex>
          <Flex w={"full"} flex="1" bg={'blue.400'}>
            <Text>Isto vai levar um graph</Text>
          </Flex>
          <Flex w={"full"} flex="1" flexDirection={"row"} bg={'red'}>
            <HStack justifyContent={"space-evenly"} w={"full"} bg={"blue.400"}>
              <Text>Blue</Text>
              <Text>Blue</Text>
            </HStack>
          </Flex>
        </Flex>
        <Flex flex='1' bg='blue.500'>
          <Text>Box 3</Text>
        </Flex>
      </Flex>

    </Flex>
  )
}
