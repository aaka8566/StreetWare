import React, { useRef } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box,Checkbox, Text, HStack, Radio
  } from '@chakra-ui/react'
export const Sidebar = () => {

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
     <HStack><Radio colorScheme='green' border={'1px solid rgb(153,204,51)'}></Radio><Text>Low Price</Text></HStack>
     <HStack><Radio colorScheme='green' border={'1px solid rgb(153,204,51)'}></Radio><Text>High Price</Text></HStack>
     <HStack><Radio colorScheme='green' border={'1px solid rgb(153,204,51)'}></Radio><Text>Discount</Text></HStack>
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
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>0 To 499</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>500 To 999</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>1000 To 1499</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>1500 To 1999</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>2000 To 16999</Text></HStack>
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
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text> 1% To 20%</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>21% To 40%</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>41% To 60%</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>61% To 80%</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>81% To 100%</Text></HStack>
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
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Formal Shoes</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Sleeve less</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>T-Shirts</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Formal Shirts</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Dress</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Pants</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Top</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Shorts</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Jacket</Text></HStack>
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
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Levanse</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>V Mart</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Deshbandhu Khadi</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Canary London</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Ad By Arvind</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Asciiblues</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Allen Kniel</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Fashion Fricks</Text></HStack>
     <HStack><Checkbox colorScheme='green' border={'1px solid rgb(153,204,51)'}></Checkbox><Text>Fashion Fricks</Text></HStack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
  )
}

