

import {
    Box,
    Image,
    Flex,
    VStack,
    Text,
    IconButton,
    Button,
    Grid,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import React from 'react';
import { DrawerdataContext } from '../ProductsComponents/Drawer';
import { addtocartdata } from '../../../Redux/ProductReducer/ProductAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen:isOpen1, onOpen:onOpen1,onClose:onClose1 } = useDisclosure();
    // const { isOpen:isOpen2, onOpen:onOpen2,onClose:onClose2 } = useDisclosure();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {data,setdata,loading,setload}=React.useContext(DrawerdataContext);
    const handleremoveadd=(a)=>{
      dispatch(addtocartdata({a})).then((res)=>{
        let arr=data.filter((el)=>{
          if(el._id!==a._id){
            return el
          };
         
        })
        setdata(arr);        
        ;setload(false)})

     }
     const handleremove=(a)=>{
     
        let arr=data.filter((el)=>{
          if(el._id!==a._id){
            return el
          };
         
        })
        setdata(arr);        
        setload("")

     }
    return (
      <Box>

<Drawer onClose={onClose1} isOpen={isOpen1} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Wishlist</DrawerHeader>
          <DrawerBody>
          <Box>
            {data.length<=0?<><img src="https://media0.giphy.com/media/jtECu4KjK3cqiAUMyR/giphy.gif?cid=ecf05e47qzodlwkv6bjkqd9svvyifiva4dmpstgcuj34kp4r&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="memeo" />
            <Text textAlign={'center'} fontWeight={'extrabold'} fontSize={'4xl'} color={'green.500'}>
Wishlist  Empty
            </Text>
            </>
            :data.map((el,i)=>(
              <Flex key={i} gap={'0.2rem'} borderBottom={'4px solid green'} >
              <Box w={'20%'}><Image src={el.image} alt="memo"/></Box>
              <VStack w={'50%'} textAlign={'center'}><Box>{el.title}</Box>
              <Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'}>₹{el.price}</Box>
              <Box fontFamily={'"Roboto",Roboto,"Helvetica",Helvetica,"Arial",Arial,sans-serif'}>Q={el.Quantity}</Box>
              </VStack>
              <VStack w={'25%'}><Button 
w={'80%'}
    isLoading={el._id===loading}
    loadingText='Adding'
    // colorScheme='rgb(153,204,51)'
     backgroundColor={' rgb(153,204,51)'}
     variant='solid' 
    border={'2px solid green'}
    onClick={()=>{setload(el._id);handleremoveadd(el);}} 
  >
   Add To Cart
  </Button>
  <Button 
w={'80%'}
    
    
    // colorScheme='rgb(153,204,51)'
     backgroundColor={' red'}
     variant='solid' 
    border={'2px solid green'}
    onClick={()=>{setload(true);handleremove(el);}} 
  >
  Remove
  </Button>
  </VStack>
            </Flex>
            ))}
          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>



        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image  
            onClick={()=>navigate("/")}
            cursor={'pointer'}
            w={'8%'}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              src="./street_ware_logo.png"/>
              
            
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <VStack
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            onClick={()=>onOpen1()}
          >
              <Image width="25px" src="data:image/png;base64,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"/>
              <Text fontSize="12px">SCRAPBOOK</Text>
            </VStack>
            <VStack
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
              <Image height="20px" src="data:image/png;base64,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"/>
              <Text fontSize="12px">SEARCH</Text>
            </VStack>
            <VStack
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/cart'}>
              <Image height="25px" src="data:image/png;base64,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"/>
              <Text fontSize="12px">CART</Text>
            </VStack>
            <Popover trigger="hover">
  <PopoverTrigger>
            <VStack
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
              <Image height="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0PXgAh7ba4WdsiCzZWGTZOZK6OhDOi67mA&usqp=CAU"/>
              <Text fontSize="12px">PROFILE</Text>
            </VStack>
           
  </PopoverTrigger>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Account & Settings</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody > 
       <Stack gap={'0.5rem'} >
       <Box w={'100%'}
        justifyContent={'left'} borderBottom={'2px solid grey'} gap={'1rem'}  paddingBottom={'0.1rem'}>
        <Text  fontSize={'2xl'}>Hello! USer</Text>
          <Button onClick={()=>{localStorage.removeItem("token");navigate("/")}} align={'left'} bg={'green.400'}>Logout</Button>
        </Box>
     <Box borderBottom={'2px solid grey'} gap={'1rem'} paddingBottom={'0.1rem'}>
     <Text _hover={{color:'red',cursor:'pointer'}} textAlign={'left'}  color={'black'}>ORDERS</Text>
       <Text _hover={{color:'red',cursor:'pointer'}} textAlign={'left'}  color={'black'}>RETURN REPLACEMENT</Text>
       <Text _hover={{color:'red',cursor:'pointer'}} textAlign={'left'}  color={'black'}>SETTINGS</Text>
     </Box>
    <Box borderBottom={'2px solid grey'} gap={'1rem'} paddingBottom={'0.1rem'}>
    <Text _hover={{color:'red',cursor:'pointer'}} textAlign={'left'}  color={'black'}>CUSTOMER SUPPORT</Text>
       <Text _hover={{color:'red',cursor:'pointer'}} textAlign={'left'}  color={'black'}>FAQ & HELP  </Text>
    </Box>
    <Box borderBottom={'2px solid grey'} gap={'1rem'} paddingBottom={'0.1rem'}>
    <Button onClick={()=>{navigate("/adminlogin")}} align={'left'} bg={'red.400'}>Admin Login</Button>
    </Box>
       </Stack>
      </PopoverBody>
      {/* <PopoverFoote>This is the footer</PopoverFoote> */}
  
  </PopoverContent>
  

           
            
            </Popover>

 
 
    {/* 
      
     */}


            {/* <Button
              >
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem,i) => (
          <Box key={i+1}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: "red",
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'60vw'}
                  lineHeight="10px">
                  <Grid  
                  fontSize="14px"
                  templateColumns="repeat(5,1fr)"
                  rowGap="-10px"
                  >
                    {navItem.children.map((child,i) => (
                      <DesktopSubNav key={i+2} {...child} />
                    ))}
                  </Grid>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel,weight }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'} lineHeight="20px">
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={weight}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem,i) => (
          <MobileNavItem key={i+3} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href}) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child,i) => (
                <Link key={i+4} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'Women',
      href: '#',
      children: [
        {
          label: 'Ethnic Wear',     
          weight:"900",     
          href: '#',
        },
        {
          label: 'Western Wear',
          weight:"900",
          href: '#',
        },
        {
          label: 'SportsWear',
          weight:"900",
          href: '#',
        },
        {
          label: 'Jwewellery',
          weight:"900",
          href: '#',
        },
        {
          label: 'Brands',
          weight:"900",
          href: '#',
        },
        {
          label: 'Kurta Kurtis',
          weight:"600",
          href: '#',
        },
        {
          label: 'Tops',
          weight:"600",
          href: '#',
        },
        {
          label: 'Swim Wear',
          weight:"600",
          href: '#',
        },
        {
          label: 'Fashion Jwellery',
          weight:"600",
          href: '#',
        },
        {
          label: 'Karigari',
          weight:"600",
          href: '#',
        },
        {
          label: 'Sarees',
          weight:"600",
          href: '#',
        },
        {
          label: 'Dresses',
          weight:"600",
          href: '#',
        },
        {
          label: 'Top Wear',
          weight:"600",
          href: '#',
        },
        {
          label: 'Earrings',
          weight:"600",
          href: '#',
        },
        {
          label: 'Aurelia',
          weight:"600",
          href: '#',
        },
        {
          label: 'Lehangas',
          weight:"600",
          href: '#',
        },
        {
          label: 'Jumpsuits',
          weight:"600",
          href: '#',
        },
        {
          label: 'Shoes',
          weight:"600",
          href: '#',
        },
        {
          label: 'Rings',
          weight:"600",
          href: '#',
        },
        {
          label: 'Shaily',
          weight:"600",
          href: '#',
        },
        {
          label: 'Dupattas',
          weight:"600",
          href: '#',
        },
        {
          label: 'Kaftans',
          weight:"600",
          href: '#',
        },
        {
          label: 'Footwear',
          weight:"900",
          href: '#',
        },
        {
          label: 'Bangles',
          weight:"600",
          href: '#',
        },
        {
          label: 'Oxolloxo',
          weight:"600",
          href: '#',
        },
        {
          label: 'Ethnic Dresses',
          weight:"600",
          href: '#',
        },
        {
          label: 'Pants',
          weight:"600",
          href: '#',
        },
        {
          label: 'Flats',
          weight:"600",
          href: '#',
        },
        {
          label: 'Bracelets',
          weight:"600",
          href: '#',
        },
        {
          label: 'Trendif',
          weight:"600",
          href: '#',
        },
        {
          label: 'Plazos',
          weight:"600",
          href: '#',
        },
        {
          label: 'Shrugs',
          weight:"600",
          href: '#',
        },
        {
          label: 'Heals',
          weight:"600",
          href: '#',
        },
        {
          label: 'Necklace',
          weight:"600",
          href: '#',
        },
        {
          label: 'Pluss',
          weight:"600",
          href: '#',
        },


      ],
    },
    {
      label: 'Men',
      href: '#',
      children: [
        {
          label: 'Top Wear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Ethinic Wear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Footwear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Accessories',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Brands',          
          weight:"900",
          href: '#',
        },
        {
          label: 'T-Shirts',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Kurtas',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Casual Shoes',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Caps & Hats',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Arrow',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Polo T-Shirts',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Ethnic Wear',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Formal Shoes',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Handkerchiefs',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Aeropostale',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Casual Shirts',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Nehru Jackets',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Sports Shoes',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Ties',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Campus',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Formal Shirts',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Bottom Wear',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Slippers',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Headphones',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Ruggers',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Jackets',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Sports Wear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Socks',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Innerwear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Alcis',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Bottom Wear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Track Pants',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Watches',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Boxers',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Canary London',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Jeans',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Track Suits',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Sunglasses',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Vests',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Hang Up',          
          weight:"600",
          href: '#',
        },
      ],
    },
    {
      label: 'Kids',      
      href: '#',
      children: [
        {
          label: 'Boys',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Girls',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Footwear',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Brands',          
          weight:"900",
          href: '#',
        },
        {
          label: 'Shop by age',          
          weight:"900",
          href: '#',
        },
        {
          label: 'T-Shirts',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Dresses & Frocks',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Sandals',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Giny & Jony',          
          weight:"600",
          href: '#',
        },
        {
          label: '0-2 Years',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Shirts',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Tees & Tops',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Slippers',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Monte Carlo',          
          weight:"600",
          href: '#',
        },
        {
          label: '2-6 Years',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Bottom Wear',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Bottom Wear',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Casual Shoes',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Cherokee',          
          weight:"600",
          href: '#',
        },
        {
          label: '6-12 Years',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Ethnic Wear',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Ethnic Wear',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Sports Shoes',          
          weight:"600",
          href: '#',
        },
        {
          label: 'NeuVin',          
          weight:"600",
          href: '#',
        },
        {
          label: '12-16 Years',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Jackets',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Cardigans',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Formal Shoes',          
          weight:"600",
          href: '#',
        },
        {
          label: 'Beebay',          
          weight:"600",
          href: '#',
        },
        

      ]
    },
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Offers',
      href: '#',
    },
  ];