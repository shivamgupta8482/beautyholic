import { Box, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
// import MakeUpTab from "./MakeUpTab";


export default function HomeTabs ( ){
    return (
        <>
        <Tabs w={{base : '100%', md :'85%'}}  m='auto' mt='3%' colorScheme={'pink'}>
            <TabList className="HomeTablist">
                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}} >
                    <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} color='white' src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Make Up</Text>
                    </Box>
                </Tab>
                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}} >
                   <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/skin.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Skin</Text>
                    </Box>
                </Tab>

                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}}>
                   <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/hair.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Hair</Text>
                    </Box>
                </Tab>
                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}}>
                   <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Personal Care</Text>
                    </Box>
                </Tab>

                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}}>
                     <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Mom & Baby Care</Text>
                    </Box>
                </Tab>
                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}}>
                   <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Eye</Text>
                    </Box>
                </Tab>

                <Tab w={'25%'} _hover={{backgroundColor:"#D3D3D3"}}>
                    <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Fragrance</Text>
                    </Box>
                </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading>MakeupTab</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading>SkinTab</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading>HairTab</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading>PersonalCareTab</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading>MummyAndBbyTab</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading>EyeTab</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading>FragranceTab</Heading>
                    </TabPanel>
                </TabPanels>
         </Tabs>
        </>
    )
}