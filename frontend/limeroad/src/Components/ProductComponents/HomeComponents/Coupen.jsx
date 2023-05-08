import { Flex,VStack, Image, Text } from "@chakra-ui/react"

export const Coupen=()=>{
    return <Flex bgColor="pink" mt="30px" mb="20px">
        <Image src="https://img0.junaroad.com/images/icons/prepaid_resized.gif?imbypass=true" alt="" width="60px" />
        <VStack paddingLeft={["8px","50px"]} paddingTop="4px"
        fontSize={{ base: '12px', md: '15px' }}>
            <Text>	Pay Online & Get Flat 10% Off</Text>
            <Text>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</Text>
       </VStack>
    </Flex>
}