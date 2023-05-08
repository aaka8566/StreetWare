import React from 'react'
import {Box,Flex,Stack,Image,HStack,VStack, Text, Button,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,} from "@chakra-ui/react";
import styles from "./Styles/ProductItem.module.css";
import {AiFillHeart} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs"
import { useDispatch,useSelector } from 'react-redux';
import { addtocartdata } from '../../../Redux/ProductReducer/ProductAction';


export const Productitem = ({el,wish,setwish}) => {
    const [loading,setload]=React.useState(false);
    
    const {isadded}=useSelector((store)=>store.ProductReducer);
    const dispatch=useDispatch();
    const [size, setSize] = React.useState('');
   
    const { isOpen, onOpen:onOpen1, onClose } = useDisclosure();
    console.log(wish,"wish");
    const handleremove=(a)=>{
      dispatch(addtocartdata({a})).then((res)=>{
        let arr=wish.filter((el)=>{
          if(el._id!==a._id){
            return el
          };
         
        })
        setwish(arr);        
        ;setload(false)})
    }
  return (
    <VStack w={'100%'}>

<>
<Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Wishlist</DrawerHeader>
          <DrawerBody>
          <Box>
            {wish.map((el)=>(
              <Flex gap={'0.2rem'} borderBottom={'4px solid green'} >
              <Box w={'20%'}><Image src={el.image} alt="memo"/></Box>
              <VStack w={'50%'} textAlign={'center'}><Box>{el.title}</Box>
              <Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'}>₹{el.price}</Box>
              </VStack>
              <Box w={'25%'}><Button 
w={'80%'}
    isLoading={loading}
    loadingText='Adding'
    // colorScheme='rgb(153,204,51)'
     backgroundColor={' rgb(153,204,51)'}
     variant='solid' 
    border={'2px solid green'}
    onClick={()=>{setload(true);handleremove(el);}} 
  >
   Add To Cart
  </Button></Box>
            </Flex>
            ))}
          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>




<Box w={'100%'} border={'1px solid green'} position={'relative'}>

    <Image h={'100%'} border={'1px solid pink'} w={'100%'} src={el.image} alt='memo'/>
    <Text fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} w={'80%'}  position={'absolute'} opacity={'0.9'} textAlign={'left'} backgroundColor={'rgb(249,249,248)' } borderRadius={'0.5rem'}  left={'0rem'} top={'16rem'} padding={"0.3rem"}>{el.title}</Text>
</Box>
<VStack w={'100%'}  gap={'0.3rem'}>
<HStack w={'100%'} border={'1px solid green'} display={'flex'} justifyContent={'space-evenly'}><HStack>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'}>₹{el.price}</Box>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} color={'grey'} textDecoration={'line-through'}>₹{el.before_disc}</Box>
<Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'} color={'green'}>{el.offer_percent}% off</Box>
</HStack>
<HStack>
<Box fontSize={'3xl'} _hover={{cursor:"pointer"}} color={'pink.300'} onClick={()=>{
  setwish((prev)=>[...prev,el]);
  onOpen1();
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
    border={'2px solid green'}
    onClick={()=>{setload(true);dispatch(addtocartdata({el})).then((res)=>setload(false))}} 
  >
   Add To Cart
  </Button>
</Box>
</VStack>
    </VStack>
  )
}

