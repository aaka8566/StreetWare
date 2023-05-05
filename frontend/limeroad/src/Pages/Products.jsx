import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { getproductdata } from '../Redux/ProductReducer/ProductAction';
import { Productitem } from '../Components/ProductComponents/ProductsComponents/Productitem';
import { Box,Flex,Grid, GridItem, Text } from '@chakra-ui/react';
import {Sidebar} from "../Components/ProductComponents/ProductsComponents/Sidebar";
import styles from "../Components/ProductComponents/ProductsComponents/Styles/ProductPage.module.css"
import { Pagination } from '../Components/ProductComponents/ProductsComponents/Pagination';

export const Products = () => {
  const [page,setpage]=React.useState(1);
  const [tp,settp]=React.useState(0);
  const [limit,setlimit]=React.useState(6);
const {products,isloading}=useSelector((store)=>store.ProductReducer);
const dispatch=useDispatch();
React.useEffect(()=>{
dispatch(getproductdata())
.then((res)=>{
  settp(Math.ceil(res.payload.length/limit))
})
},[]);
console.log(tp);
console.log(products);
  return (
    <Box backgroundColor={' rgb(238,238,238)'}>
    <Flex margin={'auto'} border={'3px solid red'}  justifyContent={'space-between'}>
      <Box w={'20%'} border={'3px solid pink'} padding={'1rem'}>
        <Text paddingTop={'1rem'} align={'left'}>Filter & Sort</Text>
<Sidebar/>
      </Box>
      <Box w={'75%'}  border={'3px solid blue'}>
      <Grid templateColumns={'repeat(3,1fr)'} border={'2px solid green'} gap={'2rem'}>
     {products.length<=0? <div className={styles.spinner}></div>
        :
     
        (products.map((el)=>(
          <GridItem  key={el._id} borderRadius={'0.5rem'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
            <Productitem key={el._id} {...el}/>
          </GridItem>
        )))
     
        }
      </Grid>
      </Box>
    </Flex>
    <Flex>
      {!isloading?<Pagination tp={tp} page={page}/>:null}
    </Flex>
    </Box>
  )
}

