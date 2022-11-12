import React from "react";
import BasicSlider from "./BasicSlider";
import {Box, Flex, Heading,Text } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import { Show, Hide } from '@chakra-ui/react'
function Sidebar(){

    return(
        <div>
  
            <Flex width="95%" gap="3%" m="auto" border="1px solid #D3D3D3" direction={["column-reverse", "flex", "row"]}>
            <Hide below='sm'>
                <Box w="20%">
                    <Heading display="flex" p="10px" mb="-30px" justifyContent="start" mt="30px" fontSize={20}><GiHamburgerMenu/>ALL CATEGORIES</Heading>
                    <Box w="100%">
                    <Flex className="sidebar-i" p="10px" mb="-30px" _hover={{border: "1px solid pink"}} display="flex" justifyContent="start" mt="30px">
                        <Box><img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Makeup</Text></Link></Box>
                    </Flex>
                    <Flex _hover={{border: "1px solid pink"}} className="sidebar-i" p="10px" mb="-30px" display="flex" justifyContent="start" mt="30px">
                        <Box><img src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Skin</Text></Link></Box>
                    </Flex>
                    <Flex className="sidebar-i" p="10px" mb="-30px" display="flex" _hover={{border: "1px solid pink"}} justifyContent="start" mt="30px">
                        <Box><img src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Hair</Text></Link></Box>
                    </Flex>
                    <Flex className="sidebar-i" p="10px" mb="-30px" display="flex" _hover={{border: "1px solid pink"}} justifyContent="start" mt="30px">
                        <Box><img src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Personal Care</Text></Link></Box>
                    </Flex>
                    <Flex className="sidebar-i" _hover={{border: "1px solid pink"}} p="10px" mb="-30px" display="flex" justifyContent="start" mt="30px">
                        <Box><img border="1px solid black" src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Mom & Baby Care</Text></Link></Box>
                    </Flex>
                    <Flex className="sidebar-i" _hover={{border: "1px solid pink"}} p="10px" mb="-30px" display="flex" justifyContent="start" mt="30px">
                        <Box><img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Fragrance</Text></Link></Box>
                    </Flex>
                    <Flex className="sidebar-i" _hover={{border: "1px solid pink"}} p="10px" mb="-30px" display="flex" justifyContent="start" mt="30px">
                        <Box><img src="	https://www.beautybebo.com/pub/media/ayurveda.png" alt="" /></Box>
                        <Box><Link to=""><Text fontSize={17}>Ayurveda</Text></Link></Box>
                    </Flex>
                    </Box>
                </Box>
                </Hide>
                <Box w="80%"><BasicSlider /></Box>
            </Flex>
            
        </div>
    )
}
export default Sidebar;