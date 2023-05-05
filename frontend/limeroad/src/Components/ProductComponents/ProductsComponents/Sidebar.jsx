import React, { useRef } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box,Checkbox, Text, HStack, Radio, RadioGroup, Input, Stack, VStack
  } from '@chakra-ui/react';
  import { useSearchParams } from 'react-router-dom';
export const Sidebar = () => {
const [value,setvalue]=React.useState("");
const [inpvalue,setinpvalue]=React.useState("");
const [trigger,settrigger]=React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [data,setdata]=React.useState(
{
"price":searchParams.get("price"),
"discount":searchParams.get("discount"),
"brand":searchParams.getAll("brand"),
"type":searchParams.getAll("type"),
"offer_percent":searchParams.getAll("offer_percent"),
"price1":searchParams.getAll("price1")
}
||
{
"price":null,
"discount":null,
"brand":[],
"type":[],
"price1":[],
"offer_percent":[]
}
  );

const handlechange=(e)=>{
console.log(e.target.checked);
if(e.target.checked){
  
}
}

React.useEffect(()=>{
  console.log(searchParams.get("price"),"null",data.price);
  if(value){
    if(value==='/price_sort/asc'||value==="/price_sort/desc"){
      data.price=value;
      setSearchParams(data.price);
    }
    else if(value==='/discount/asc'||value==="/discount/desc"){
    data.discount=value;
    setSearchParams(data.discount);
    }
      
   }
  //  else if(in)

},[value,trigger]);
console.log(inpvalue)
  return (
    <Box backgroundColor={'white'} marginTop={'2rem'}>
        <Accordion allowToggle isfocusable="true">
        <AccordionItem>
    <h2 >
      <AccordionButton   _expanded={{ bg: 'rgb(153,204,51)', color: 'Black' }}>
        <Box  as="span" flex='1' textAlign='left'>
        Sort By
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
     <RadioGroup onChange={setvalue} value={value} >
      <VStack align={'left'} direction='row'>
        <Radio value='/price_sort/asc'colorScheme='green' border={'1px solid rgb(153,204,51)'}>Low Price</Radio>
        <Radio value='/price_sort/desc'colorScheme='green' border={'1px solid rgb(153,204,51)'}>High Price</Radio>
        <Radio value='/discount/asc'colorScheme='green' border={'1px solid rgb(153,204,51)'}>Discount Low</Radio>
        <Radio value='/discount/desc'colorScheme='green' border={'1px solid rgb(153,204,51)'}>Discount High</Radio>
      </VStack>
    </RadioGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'rgb(153,204,51)', color: 'Black' }}>
        <Box as="span" flex='1' textAlign='left'>
        Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
     <HStack><Checkbox name='price1' value={'0 To 499'} onChange={(e)=>{setinpvalue(e.target.value);handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>0 To 499</Text></HStack>
     <HStack><Checkbox name='price1' value={'500 To 999'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>500 To 999</Text></HStack>
     <HStack><Checkbox name='price1' value={'1000 To 1499'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>1000 To 1499</Text></HStack>
     <HStack><Checkbox name='price1' value={'1500 To 1999'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>1500 To 1999</Text></HStack>
     <HStack><Checkbox name='price1' value={'2000 To 16999'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>2000 To 16999</Text></HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'rgb(153,204,51)', color: 'Black' }}>
        <Box as="span" flex='1' textAlign='left'>
       Discount
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
     <HStack><Checkbox name='discount' value={'1% To 20%'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text> 1% To 20%</Text></HStack>
     <HStack><Checkbox name='discount' value={'21% To 40%'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>21% To 40%</Text></HStack>
     <HStack><Checkbox name='discount' value={'41% To 60%'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>41% To 60%</Text></HStack>
     <HStack><Checkbox name='discount' value={'61% To 80%'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>61% To 80%</Text></HStack>
     <HStack><Checkbox name='discount' value={'81% To 100%'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>81% To 100%</Text></HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem >
    <h2>
      <AccordionButton _expanded={{ bg: 'rgb(153,204,51)', color: 'Black' }}>
        <Box as="span" flex='1' textAlign='left'>
       Type
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
     <HStack><Checkbox name='type' value={'Formal Shoes'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Formal Shoes</Text></HStack>
     <HStack><Checkbox name='type' value={'Sleeve less'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Sleeve less</Text></HStack>
     <HStack><Checkbox name='type' value={'T-Shirts'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>T-Shirts</Text></HStack>
     <HStack><Checkbox name='type' value={'Formal Shirts'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Formal Shirts</Text></HStack>
     <HStack><Checkbox name='type' value={'Dress'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Dress</Text></HStack>
     <HStack><Checkbox name='type' value={'Pants'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Pants</Text></HStack>
     <HStack><Checkbox name='type' value={'Top'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Top</Text></HStack>
     <HStack><Checkbox name='type' value={'Shorts'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Shorts</Text></HStack>
     <HStack><Checkbox name='type' value={'Jacket'} onChange={(e)=>{handlechange(e)}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Jacket</Text></HStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem >
    <h2>
      <AccordionButton _expanded={{ bg: 'rgb(153,204,51)', color: 'Black' }}>
        <Box as="span" flex='1' textAlign='left'>
       Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
     <HStack><Checkbox name='brand' value={'Levanse'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Levanse</Text></HStack>
     <HStack><Checkbox name='brand' value={'V Mart'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>V Mart</Text></HStack>
     <HStack><Checkbox name='brand' value={'Deshbandhu Khadi'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Deshbandhu Khadi</Text></HStack>
     <HStack><Checkbox name='brand' value={'Canary London'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Canary London</Text></HStack>
     <HStack><Checkbox name='brand' value={'Ad By Arvind'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Ad By Arvind</Text></HStack>
     <HStack><Checkbox name='brand' value={'Asciiblues'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Asciiblues</Text></HStack>
     <HStack><Checkbox name='brand' value={'Allen Kniel'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Allen Kniel</Text></HStack>
     <HStack><Checkbox name='brand' value={'Fashion Fricks'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Fashion Fricks</Text></HStack>
     <HStack><Checkbox name='brand' value={'Fashion Fricks'} onChange={(e)=>{setinpvalue(e.target.value);}} colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Fashion Fricks</Text></HStack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
  )
}

