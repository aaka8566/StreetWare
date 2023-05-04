import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { getproductdata } from '../Redux/ProductReducer/ProductAction';
import { Productitem } from '../Components/ProductComponents/ProductsComponents/Productitem';
import { Box,Flex,Grid, GridItem, Text } from '@chakra-ui/react';
import styles from "../Components/ProductComponents/ProductsComponents/Styles/ProductPage.module.css"

export const Products = () => {
const {products}=useSelector((store)=>store.ProductReducer);
const dispatch=useDispatch();
React.useEffect(()=>{
dispatch(getproductdata());
},[]);
console.log(products);
  return (
    <Box>
    <Flex margin={'auto'} border={'3px solid red'}  justifyContent={'space-between'}>
      <Box w={'15%'} border={'3px solid pink'}>
Products.
<Text>hello</Text>
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
    </Box>
  )
}

