import { Link } from '@chakra-ui/next-js'
import { HStack, Heading } from '@chakra-ui/react'


export const NavBar = () => {
    return (
        <HStack w={"full"} h="60px" alignItems={'center'} justifyContent={"space-between"} bg="greyscale.600">
            <Heading>
                Next-Finance
            </Heading>
            <HStack padding={"20px"}>
                <Link href={"#"}>Account</Link>
                <Link href={"#"}>Sair</Link>
            </HStack>
        </HStack>
    )

}