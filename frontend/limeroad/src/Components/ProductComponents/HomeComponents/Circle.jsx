import { Image, VStack,Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export const Circle=(props)=>{
    console.log("main",props);
    const {imgsrc,text}=props;
const navigate=useNavigate();
    return (<VStack cursor={'pointer'} onClick={()=>{navigate("/products")}}>
        <Image src={imgsrc} alt="" borderRadius="50%" width="50px"/>
        <Text fontSize="12px" >{text}</Text>
    </VStack>
    )
}