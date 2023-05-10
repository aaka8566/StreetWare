import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { addtocartdata, getproductdata } from '../Redux/ProductReducer/ProductAction';
import { Productitem } from '../Components/ProductComponents/ProductsComponents/Productitem';
import { Box,Button,Flex,Grid, GridItem, Text,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  Image,
  Stack, useToast} from '@chakra-ui/react';
import {Sidebar} from "../Components/ProductComponents/ProductsComponents/Sidebar";
import styles from "../Components/ProductComponents/ProductsComponents/Styles/ProductPage.module.css"
import { Pagination } from '../Components/ProductComponents/ProductsComponents/Pagination';
import {useSearchParams,useLocation} from "react-router-dom";
import { DrawerdataContext } from '../Components/ProductComponents/ProductsComponents/Drawer';
import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

export const Products = () => {
  const [page,setpage]=React.useState("1");
  let [searchParams, setSearchParams] = useSearchParams();
  const [tp,settp]=React.useState(0);
  const [limit,setlimit]=React.useState(6);
  const location=useLocation();
  const [wish,setwish]=React.useState([]);
 const {isOpen,onOpen,onClose}=useDisclosure();
const [singleproduct,setsingleproduct]=React.useState({});
const toast=useToast();
const {products,isloading,isadded}=useSelector((store)=>store.ProductReducer);
const dispatch=useDispatch();
const {data,setdata}=React.useContext(DrawerdataContext);

const [loading,setloading]=React.useState(false);

React.useEffect(()=>{
let obj={};
// if(searchParams.getAll("gender").length>0){
//   obj["gender"]=searchParams.get("gender");
//   obj["_page"]=searchParams.get("_page");
//   obj["_limit"]=searchParams.get("_limit");
// }
if(searchParams.getAll("brand").length>0){
  obj["brand"]=searchParams.getAll("brand");
  obj["_page"]=searchParams.get("_page");
  obj["_limit"]=searchParams.get("_limit");
}
if(searchParams.getAll("type").length>0){
  obj["type"]=searchParams.getAll("type");
  obj["_page"]=searchParams.get("_page");
  obj["_limit"]=searchParams.get("_limit");
}
obj["_page"]=searchParams.get("_page");
obj["_limit"]=searchParams.get("_limit");
// if(searchParams.getAll("brand").length>0){
//   obj["brand"]=searchParams.getAll("brand");
// }
// if(searchParams.getAll("brand").length>0){
//   obj["brand"]=searchParams.getAll("brand");
// }
console.log(obj,"obj1")
  dispatch(getproductdata(obj))
  .then((res)=>{
    console.log(res)
  })
},[page,location.search]);


//console.log(history);
//console.log(products);
  return (
    <Box backgroundColor={' rgb(238,238,238)'} paddingTop={'2rem'} paddingBottom={'2rem'}>

{/* single product drawer */}
<Drawer onClose={onClose} isOpen={isOpen} size="full" >
        <DrawerOverlay />
        <DrawerContent backgroundColor={'rgb(237,237,237)'}>
          <DrawerCloseButton />
          <DrawerHeader ><Text w={'80%'}  paddingLeft={'4rem'}  fontSize={'3xl'} color={'green'}>{singleproduct.type}</Text></DrawerHeader>
          <DrawerBody>
           <Box>
          
<Grid  templateColumns={"repeat(2,1fr)"} w={'90%'} margin={'auto'}>
<GridItem

transformOrigin={"center"}
border={'px solid green'}
w={'90%'} backgroundColor={'white'}><Image paddingTop={'2rem'} border={'px solid green'}  margin={'auto'} w={'70%'} src={singleproduct.image} /></GridItem>
<GridItem paddingTop={'1rem'} paddingLeft={'1rem'} w={'95%'} backgroundColor={'white'} margin={'auto'} border={'px solid brown'} >
<Stack gap={'0.3rem'}>
  <Box><Text>{singleproduct.title}</Text></Box>
  <Box><Text>{singleproduct.model}</Text></Box>
  <Box><Text><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Text></Box>
  <HStack fontSize={'2xl'}><ExternalLinkIcon/> <BsWhatsapp/></HStack>
  <Box>Select Size</Box>
  <HStack>
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} color={'black'} _hover={{backgroundColor:"black",color:"white"}}>S</Button>
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} color={'black'} _hover={{backgroundColor:"black",color:"white"}}>M</Button>
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} color={'black'} _hover={{backgroundColor:"black",color:"white"}}>L</Button>
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} color={'black'} _hover={{backgroundColor:"black",color:"white"}}>Xl</Button>
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} color={'black'} _hover={{backgroundColor:"black",color:"white"}}>XXL</Button>
  </HStack>
  <Box>Select Colour</Box>
  <HStack>
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} backgroundColor={'green '} borderRadius={'3rem'}></Button >
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} backgroundColor={'blue'} borderRadius={'3rem'}></Button >
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} backgroundColor={'pink'} borderRadius={'3rem'}></Button >
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} backgroundColor={'grey'} borderRadius={'3rem'}></Button >
    <Button onClick={(e)=> e.currentTarget.style.border = '3px solid green'} backgroundColor={'red'} borderRadius={'3rem'}></Button>
  </HStack>
  <Box><Text>M.R.P : <s> ₹{singleproduct.before_disc}</s></Text></Box>
  <Flex w={'70%'} justifyContent={'space-between'}><Box><Text color={'pink.800'}>Price :  ₹{singleproduct.price}</Text></Box>
  <Box w={'55%'}>
  <Text  color={'green'}>OFFER</Text>
  </Box>
  </Flex>
  <Flex w={'70%'} justifyContent={'space-between'}><Box><Text color={'green'}>You Save :  {singleproduct.offer_percent}%</Text></Box>
  <Box > <Text color={'green'}>Pay Online & Get Flat 10% Off</Text></Box>
  </Flex>
  <Box><Text color={'grey'}>M.R.P. inclusive of all taxes</Text></Box>
  <Flex gap={'1rem'} border={'px solid brown'}  w={'100%'}><Button m={'auto'} backgroundColor={'rgb(153,204,51)'} fontSize={'xl'}
  onClick={()=>{
    let arr=[...data];let flag=false;
  let arr1=arr.map((ell)=>{
    if(ell._id===singleproduct._id){
      flag=true;
  return{...singleproduct,Quantity:Number(ell.Quantity)+1}
    }
    return ell;
  })
  if(flag===false){setdata([...data,singleproduct])}
  else{setdata(arr1)}
  toast({
    title: 'Wishlist',
    description: "Product Addded To Wishlist",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
    }}
  ><AiFillHeart/></Button>
  <Button m={'auto'} w={'80%'} backgroundColor={'rgb(153,204,51)'} 
    isLoading={loading}
     loadingText='Adding'
      variant='solid' 
     border={'px solid green'}
     onClick={(e)=>{setloading(true);dispatch(addtocartdata(singleproduct)).then((res)=>setloading(false))
     toast({
       title: 'Cart',
       description: "Product Adding To Cart",
       status: 'success',
       duration: 6000,
       isClosable: true,
     })
   }} 
  >Add To Cart</Button>
  </Flex>
  <Box></Box>
  <Box></Box>
  </Stack>
</GridItem>
</Grid>

           </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    {/* single product drawer */}
  


    <Flex margin={'auto'} border={'px solid red'}  justifyContent={'space-between'}>
      <Box w={'20%'} border={'px solid pink'} padding={'1rem'}>
        <Text paddingTop={'1rem'} align={'left'}>Filter & Sort</Text>
<Sidebar page={page} limit={limit}/>
      </Box>
      <Box w={'75%'}  border={'px solid blue'}>

      <div className='pinkbanner' style={{width:"100%",margin:"1rem"}} >
 <img className='SmallImage' src="https://img0.junaroad.com/images/icons/prepaid_resized.gif?imbypass=true" alt="logo"/>
<div style={{display:"flex",flexDirection:"column",textAlign:"left"}} >
  <p><b>Pay Online & Get FLAT 10% OFF</b></p>
  <p>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</p>
</div>
 </div>


      <Grid templateColumns={'repeat(3,1fr)'} border={'px solid green'} gap={'2rem'}>
     {products.length<=0? <div className={styles.spinner}></div>
        :
     
        (products.map((el,i)=>(
          <GridItem  key={i} borderRadius={'0.5rem'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
            <Productitem setsingleproduct={setsingleproduct} onOpen={onOpen} el={el} data={data} setdata={setdata}/>
          </GridItem>
        )))
     
        }
      </Grid>
      </Box>
    </Flex>
    <Flex w={'100%'} justifyContent={'center'} margin={'1rem'}>
      {!isloading?<Pagination tp={tp} page={page} setpage={setpage}/>:null}
    </Flex>
    </Box>
  )
}

