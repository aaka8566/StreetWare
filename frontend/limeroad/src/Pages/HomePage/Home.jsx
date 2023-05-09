import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/ProductComponents/HomeComponents/Navbar'
import Footer from '../../Components/ProductComponents/HomeComponents/Footer'

import { Men } from './MensPage'
import { Women } from './WomenPage'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/AuthReducer/AuthAction'

export const Home = () => {
  const dispatch=useDispatch();
  return (
    <Box width="95%" margin="auto">
      <button onClick={()=>dispatch(logout())}>logout</button>
      <Box width="70%" margin="auto">     
      <Flex margin="1%">
          <Link to="/men">Men  |  </Link>
          <hr />
          <Link to="/women">|  Women</Link>
      </Flex>    
      </Box>
      {/* <Men/> */}
    </Box>
    
  )
}

