import React from 'react'
import {Box,Flex,Stack,Image,HStack,VStack, Text, Button,
  useDisclosure,
  useToast,} from "@chakra-ui/react";
import styles from "./Styles/ProductItem.module.css";
import {AiFillHeart} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs"
import { useDispatch,useSelector } from 'react-redux';
import { addtocartdata } from '../../../Redux/ProductReducer/ProductAction';
import { useModal } from './Drawer';

export const Productitem = ({el,data,setdata,onOpen,setsingleproduct}) => {
    const [loading,setload]=React.useState(false);
    
    const {isadded}=useSelector((store)=>store.ProductReducer);
    const dispatch=useDispatch();
    const [size, setSize] = React.useState('');
    const toast = useToast()
    // onClick={()=>{setsingleproduct(el);onOpen()}}
  return (
    <VStack  w={'100%'}>


<Box w={'100%'} border={'px solid green'} position={'relative'} >

    <Image h={'100%'} border={'1px solid pink'} w={'100%'} src={el.image} alt='memo'/>
    <Text fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} w={'80%'}  position={'absolute'} opacity={'0.9'} textAlign={'left'} backgroundColor={'rgb(249,249,248)' } borderRadius={'0.5rem'}  left={'0rem'} top={'16rem'} padding={"0.3rem"}>{el.title}</Text>
</Box>
<VStack w={'100%'}  gap={'0.3rem'}>
<HStack w={'100%'} border={'px solid green'} display={'flex'} justifyContent={'space-evenly'}><HStack>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'}>₹{el.price}</Box>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} color={'grey'} textDecoration={'line-through'}>₹{el.before_disc}</Box>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} color={'green'}>{el.offer_percent}% off</Box>
</HStack>
<HStack>
<Box fontSize={'3xl'} _hover={{cursor:"pointer"}} color={'pink.300'} onClick={()=>{
  let arr=[...data];let flag=false;
let arr1=arr.map((ell)=>{
  if(ell._id===el._id){
    flag=true;
return{...el,Quantity:Number(ell.Quantity)+1}
  }
  return ell;
})
if(flag===false){setdata([...data,el])}
else{setdata(arr1)}
toast({
  title: 'Wishlist',
  description: "Product Addded To Wishlist",
  status: 'success',
  duration: 9000,
  isClosable: true,
})
  }}><AiFillHeart/></Box>
<Box fontSize={'2xl'}  color={'green.700'}><BsWhatsapp/></Box>
</HStack>
</HStack>
<Box w={'100%'}>
{/* <button onClick={()=>{dispatch(addtocartdata({price,before_disc,offer_percent,title,image,_id,size,Quantity}))}}  className={styles.buttonadd}>Add To Cart</button> */}
<Button 
w={'80%'}
    isLoading={loading}
    loadingText='Adding'
    // colorScheme='rgb(153,204,51)'
     backgroundColor={' rgb(153,204,51)'}
     variant='solid' 
    border={'px solid green'}
    onClick={()=>{setload(true);dispatch(addtocartdata(el)).then((res)=>setload(false))
    toast({
      title: 'Cart',
      description: "Product Adding To Cart",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }} 
  >
   Add To Cart
  </Button>
</Box>
</VStack>
    </VStack>
  )
}

