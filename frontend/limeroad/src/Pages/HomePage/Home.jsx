import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/ProductComponents/HomeComponents/Navbar'

import { Men } from './MensPage'
import { Women } from './WomenPage'

export const Home = () => {
  return (
    <Box width="95%" margin="auto">
      <Navbar/>
      <Box width="70%" margin="auto">     
      <Flex margin="1%">
          <Link to="/men">Men  |  </Link>
          <hr />
          <Link to="/women">|  Women</Link>
        </Flex>
      <Women/>
      </Box>
    </Box>
    
  )
}

