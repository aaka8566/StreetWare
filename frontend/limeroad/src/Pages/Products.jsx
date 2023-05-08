import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { getproductdata } from '../Redux/ProductReducer/ProductAction';
import { Productitem } from '../Components/ProductComponents/ProductsComponents/Productitem';
import { Box,Button,Flex,Grid, GridItem, Text,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, } from '@chakra-ui/react';
import {Sidebar} from "../Components/ProductComponents/ProductsComponents/Sidebar";
import styles from "../Components/ProductComponents/ProductsComponents/Styles/ProductPage.module.css"
import { Pagination } from '../Components/ProductComponents/ProductsComponents/Pagination';
import {useSearchParams,useLocation} from "react-router-dom";


export const Products = () => {
  const [page,setpage]=React.useState("1");
  let [searchParams, setSearchParams] = useSearchParams();
  const [tp,settp]=React.useState(0);
  const [limit,setlimit]=React.useState(6);
  const location=useLocation();
  const [wish,setwish]=React.useState([]);

const {products,isloading}=useSelector((store)=>store.ProductReducer);
const dispatch=useDispatch();


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
    <Box backgroundColor={' rgb(238,238,238)'}>

    <Flex margin={'auto'} border={'3px solid red'}  justifyContent={'space-between'}>
      <Box w={'20%'} border={'3px solid pink'} padding={'1rem'}>
        <Text paddingTop={'1rem'} align={'left'}>Filter & Sort</Text>
<Sidebar page={page} limit={limit}/>
      </Box>
      <Box w={'75%'}  border={'3px solid blue'}>
      <Grid templateColumns={'repeat(3,1fr)'} border={'2px solid green'} gap={'2rem'}>
     {products.length<=0? <div className={styles.spinner}></div>
        :
     
        (products.map((el,i)=>(
          <GridItem  key={i} borderRadius={'0.5rem'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
            <Productitem   el={el} wish={wish} setwish={setwish}/>
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

