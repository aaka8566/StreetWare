import { Image, VStack,Text } from "@chakra-ui/react"

export const Circle=(props)=>{
    console.log("main",props);
    const {imgsrc,text}=props;
    
    return (<VStack >
        <Image src={imgsrc} alt="" borderRadius="50%" height="50px" w="55px"/>
        <Text fontSize="12px" >{text}</Text>
    </VStack>
    )
}