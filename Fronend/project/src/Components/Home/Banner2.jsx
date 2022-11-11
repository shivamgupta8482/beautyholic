import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Banner2 ( ){
    return (
        <>
        <SimpleGrid className="ThirtyPercentBannerSimpleGrid" m="auto" gap="3%" columns={[1,1,2]} w={{base : '95%' , md : '95%' , lg : '90%'}}>
          <Box  w={{base : '95%', md :'90%', lg : '100%'}} >
            <Link to={'/mombabycare'}><Image w="100%" src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"/></Link>
          </Box>

          <Box  w={{base : '95%', md :'90%', lg : '100%'}}>
            <Link to='/hair'><Image  w="100%" src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"/></Link>
          </Box>
        </SimpleGrid>
        </>
    )
}