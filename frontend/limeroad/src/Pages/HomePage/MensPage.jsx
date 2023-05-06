import { Box,Text,Flex, Grid } from "@chakra-ui/react"
import { Circle } from "../../Components/ProductComponents/HomeComponents/Circle"
import { Coupen } from "../../Components/ProductComponents/HomeComponents/Coupen"
import { SingleCard } from "../../Components/ProductComponents/HomeComponents/SingleCard"
import { Slider1 } from "../../Components/ProductComponents/HomeComponents/Slider"

export const Men=()=>{
    const circledata=[
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/tshirts.png",
            text:"T-SHIRTS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/shirts.png",
            text:"SHIRTS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/jeans.png",
            text:"JEANS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/trousers.png",
            text:"TROUSERS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/ethnicsets.png",
            text:"ETHNIC SETS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/footwear.png",
            text:"FOOTWEAR"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/kids.png",
            text:"KIDS"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/women/home.png",
            text:"HOME"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/accessory.png",
            text:"ACCESSORY"
        },
        {
            imgsrc:"https://img0.junaroad.com/images/icons/men/winter.png",
            text:"WINTER"
        },
    ]
    const CardData=[
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_642fff17f3805708316f137e-1682445437.jpeg",
            heading:"REVAMP WITH PRINTS",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"41"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_643fcecaf38057081925c8da-1682396653.jpeg",
            heading:"9-TO-5 STYLES TO GRAB",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"27"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_644fab19f47b705ceb7e50d6-1682947184.jpeg",
            heading:"ALL-TIME FAVE STAPLES",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"22"
        },
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_643fd4a1fd1d3c0e0f1fa4b6-1682504554.jpeg",
            heading:"RESTOCK ON BASIC TEES",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"41"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_64425d8dadb8b83a5326e219-1682072777.jpeg",
            heading:"DURABILITY AT PEAK",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"21"
        },
        {
            imagesrc:"https://img3.junaroad.com/stories/story_p_643fd568f38057081925d22c-1682401261.jpeg",
            heading:"CELEBRATION MODE ON",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"30"
        },
        {
            imagesrc:"https://img0.junaroad.com/stories/story_p_644a2638f47b700816788d11-1682946488.jpeg",
            heading:"APT FOR EVERYDAY USE",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"8"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_644a2447b388b0081555ec43-1682947093.jpeg",
            heading:"OOTD GOT COOLER",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"5"
        },
        {
            imagesrc:"https://img3.junaroad.com/stories/story_p_644a121efd1d3c0e0f308845-1682950311.jpeg",
            heading:"FITS TO BEAT EVERYTHING",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"7"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_643e518ef3805708093a4660-1682030837.jpeg",
            heading:"SHADE YOU CAN'T MISS",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"63"
        },
        {
            imagesrc:"https://img3.junaroad.com/stories/story_p_644be48713cb380824ee3246-1682705919.jpeg",
            heading:"FORMAL EDIT | #SMARTENUP",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"58"
        },
        {
            imagesrc:"https://img2.junaroad.com/stories/story_p_6433e1e9fd1d3c5dfe457f9f-1681784996.jpeg",
            heading:"SLIP INTO #DARKFLORALS",
            secimagesrc:"https://img0.junaroad.com/user_profile/profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
            bytext:"Kanika.Cry",
            follower:"32K",
            likeno:"81"
        },




        
        
    ]
    
    return <Box >
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