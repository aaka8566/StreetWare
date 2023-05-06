import { Box,Text,Flex, Grid } from "@chakra-ui/react"
import { Circle } from "../../Components/ProductComponents/HomeComponents/Circle"
import { Coupen } from "../../Components/ProductComponents/HomeComponents/Coupen"
import { SingleCard } from "../../Components/ProductComponents/HomeComponents/SingleCard"
import { Slider1 } from "../../Components/ProductComponents/HomeComponents/Slider"

export const Women=()=>{
    const circledata=[
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/kurtas.png",
            text:"KURTAS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/tops.png",
            text:"TOPS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/dresses.png",
            text:"DRESSES"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/sarees.png",
            text:"SAREES"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/suits.png",
            text:"SUITS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/ethnicsets.png",
            text:"ETHNIC SETS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/bottoms.png",
            text:"BOTTOMS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/bags.png",
            text:"BAGS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/footwear.png",
            text:"FOOTWEAR"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/kids.png",
            text:"KIDS"
        },
    ]
    const CardData=[
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_644ba5abfd1d3c58d5b7c117-1682929423.jpeg",
            heading:"GET ON THE TREND TRAIN",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"39"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_64490e31f47b700827dfebcf-1682589488.jpeg",
            heading:"HERE FOR GO 'CART'ING",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"42"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_64479fd0f380570824489d0b-1682487528.jpeg",
            heading:"CART NEW COLOUR TREND",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"72"
        },
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_644b7441f47b70081ab0ac7b-1682682793.jpeg",
            heading:"FOLLOW THIS MICRO TREND",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"23"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_644b891bcc8b5e082bfae60a-1682686817.jpeg",
            heading:"WE'RE BLOWN AWAY",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"25"
        },
        {
            imagesrc:"https://img3.junaroad.com/stories/story_p_64464c39b388b0082def8689-1682487297.jpeg",
            heading:"FRESH TREND ON BOARD",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"51"
        },
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_6442d0cafd1d3c0e0f24b896-1682584524.jpeg",
            heading:"SAMANTHA IN OPTIC WHITE",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"45"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_64426dbe13cb38081f3c54b0-1682075574.jpeg",
            heading:"READY TO CART?",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"39"
        },
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_643e3f0efd1d3c0e0f1d0968-1682591148.jpeg",
            heading:"GO REGAL THIS WEDDING SZN",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"50"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_643cf636f38057081c851082-1681983422.jpeg",
            heading:"PREPARE TO BE INSPIRED",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"55"
        },
        {
            imagesrc:"https://img3.junaroad.com/stories/story_p_643d2a8213cb3808253aab45-1682591253.jpeg",
            heading:"WEDDING SPECIAL STYLES",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"33"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_62cdb20213cb380818480dbd-1657647618.jpeg",
            heading:"A-LINE DETAILS | EMBROIDERE",
            secimagesrc:"https://img1.junaroad.com/user_profile/32.jpg",
            bytext:"Shivangi",
            follower:"31K",
            likeno:"31"
        },       
    ]
    
    return <Box>        
        <Flex gap="30px">
            <div>
                <Text 
                color="red" 
                border="1px solid red" 
                borderRadius="50%"
                height="50px"
                padding="10px">
                    MY
                </Text>
                <Text>MY FEED</Text>
            </div>      <hr />      
            {circledata.map((ele,i)=>{
                return <Circle key={i} imgsrc={ele.imgsrc} text={ele.text} />
            })}          
        </Flex>
        
        <Coupen/>
        <Slider1/>
        <Grid 
        templateColumns={"repeat(3,1fr)"}
        >
            {CardData.map((ele,i)=>{
                return <SingleCard key={i} {...ele}/>
            })}
        </Grid>
        
    </Box>
}