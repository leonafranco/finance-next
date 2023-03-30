// app/layout.tsx
'use client'


import { Link } from '@chakra-ui/next-js'
import { Box, Center, Flex, Spacer, HStack, Text, Heading, VStack, Card, Stack, CardBody, Image, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { MoneyBoard } from './component/Moneyboard/index'
import { NavBar } from './component/NavBar/index'


export default function Home() {
  return (
    <Flex color='white' h={'100vh'} flexDirection='column'>
      <NavBar />
      <Flex h={"full"} flexDirection={"row"}>
        <Flex w={"66%"} bg='tomato' flexDirection={"column"}>
          <Flex w={"full"} flex="1" bg={'blue.400'}>
            <MoneyBoard />
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
