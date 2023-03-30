import { VStack, HStack, Text } from '@chakra-ui/react'

export const MoneyBoard = () => {
    return (
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
    )
}