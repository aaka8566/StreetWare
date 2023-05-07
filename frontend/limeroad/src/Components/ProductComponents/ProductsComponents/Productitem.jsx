import React from 'react'
import {Box,Flex,Stack,Image,HStack,VStack, Text, Button} from "@chakra-ui/react";
import styles from "./Styles/ProductItem.module.css";
import {AiFillHeart} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { addtocartdata } from '../../../Redux/ProductReducer/ProductAction';
export const Productitem = ({price,before_disc,offer_percent,title,image,_id,size,Quantity}) => {
    const [loading,setload]=React.useState(true);
    const dispatch=useDispatch();
  return (
    <VStack w={'100%'}>

<Box w={'100%'} border={'1px solid green'} position={'relative'}>

    <Image h={'100%'} border={'1px solid pink'} w={'100%'} src={image} alt='memo'/>
    <Text fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} w={'80%'}  position={'absolute'} opacity={'0.9'} textAlign={'left'} backgroundColor={'rgb(249,249,248)' } borderRadius={'0.5rem'}  left={'0rem'} top={'16rem'} padding={"0.3rem"}>{title}</Text>
</Box>
<VStack w={'100%'}  gap={'0.3rem'}>
<HStack w={'100%'} border={'1px solid green'} display={'flex'} justifyContent={'space-evenly'}><HStack>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'}>₹{price}</Box>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} color={'grey'} textDecoration={'line-through'}>₹{before_disc}</Box>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} color={'green'}>{offer_percent}% off</Box>
</HStack>
<HStack>
<Box fontSize={'3xl'} color={'pink.300'}><AiFillHeart/></Box>
<Box fontSize={'2xl'}  color={'green.700'}><BsWhatsapp/></Box>
</HStack>
</HStack>
<Box w={'100%'}>
<button onClick={()=>{dispatch(addtocartdata({price,before_disc,offer_percent,title,image,_id,size,Quantity}))}}  className={styles.buttonadd}>Add To Cart</button>
</Box>
</VStack>
    </VStack>
  )
}

