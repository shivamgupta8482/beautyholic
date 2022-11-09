import { Center,Box, Flex, InputGroup, InputLeftElement,Wrap,SimpleGrid,Button , Stack,Input,Image,Text,Progress,Select, WrapItem } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import React from "react"

import { getAudioProjectData,handleFilterAudio,handleSort,filterAudioData,sortAudioData } from "../../Redux/ProductPageRedux/action"
import { useEffect,useState } from "react"
import { BiSearch } from 'react-icons/bi'
import {AiOutlineHeart} from "react-icons/ai"
import { NavLink } from "react-router-dom"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

import { useDisclosure } from "@chakra-ui/react"

import { Link } from 'react-router-dom'




const ProductsPage = () => {

    //----------------------------------------------------------responsive sizes--------------------------------

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 1050);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

//-------------------------------------------------------------------------------------------------------------------

//----------------------------------------------getting data and logics-----------------------------------------------

    const audioData = useSelector((state)=>state.productPageReducer.audioProjects)
    
    const dispatch = useDispatch() 
 
    console.log(audioData)
 
 
    const handleFilterAudio = (e) =>{ 
        
        let value = e.target.value 
         
 
        if(value === "All")
        {
         dispatch(getAudioProjectData())
        }
        else{
            console.log("from filter", value)
           dispatch(filterAudioData(value))
        }
    }
 
    const handleSort = (e) =>{ 
 
     let value = e.target.value 
     console.log(value) 
     dispatch(sortAudioData(value))
    }
 
    useEffect(()=>{
        if(audioData.length === 0 ){
            dispatch(getAudioProjectData())
        }
    },[dispatch, audioData.length])

//-------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------Drawer--------------------------------------

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

 //------------------------------------------------------------------------------------------------------










  return (
      <div>
        {
            isDesktop?(
                <div>
                    
         <Box  style={{width:"80%",margin:"auto",display:"flex"}}>
             <div style={{width:"25%",textAlign:"left",paddingRight:"20px"}}>
                  <h2 style={{marginTop:"45px",fontSize:"18px",fontWeight:"550"}}>Filter Results</h2>
                <h1  style={{marginTop:"20px",fontSize:"15px",fontWeight:"550",color:"gray"}}>Price</h1>
                <hr />
                <div style={{marginTop:"20px"}} onChange = {handleFilterAudio}>
                          <div style={{padding:"10px"}}>
                              <input type={"radio"} value="All" name='a'/>
                              <label  style={{paddingLeft:"8px"}}>Below 1,000</label>
                          </div>
                          <div style={{padding:"10px"}}>
                              <input type={"radio"} value="Launching soon" name='a' />
                              <label style={{paddingLeft:"8px"}}>1,000 - 2,000</label>
                          </div>
                          <div style={{padding:"10px"}}>
                              <input type={"radio"} value="Just Launched" name='a'/>
                              <label  style={{paddingLeft:"8px"}}>2,000 and above</label>
                          </div>      
                </div>
             </div>
              <div style={{width:"100%"}} >
                  {/* <hr  style={{marginTop:"40px"}} /> */}
                 <Box mt={"40px"} mb="20px">
                     <Flex justifyContent={"start"} gap="10px" alignItems={"center"}>
                          <Box>
                              <Select w={"120px"} borderRadius="0" onChange={handleSort}>
                                <option value=''>Sort by</option> 
                                <option value='asc'>Trending</option>
                                <option value='desc'>Most Funded</option>
                              </Select>
                          </Box>   
                     </Flex>
                 </Box>
                  <SimpleGrid minChildWidth="230px"  spacing="40px" >
                         
                        {   
                            audioData.length > 0 && 
 
                            audioData.map((elem)=>(
                            <Wrap spacing="10px">
                                 <WrapItem>
                                 <Box key={elem.id} style={{height:"600px"}}  border="1px solid #e1e1e1" textAlign="left"  >

                               

                               <Link to={`/SingleProductPage/${elem.id}`}>

                                 <Image src={elem.thumbnail} w="100%"/>
                                 <Box padding={"20px"}>
                                   <Box mb={"10px"}>
                                          <Flex  justifyContent="space-between" gap="10px" alignItems={"center"}>
                                               <Text fontSize='sm' color="teal">{elem.category}</Text> 
                                                <AiOutlineHeart /> 
                                          </Flex>
                                   </Box> 
                                   <hr /> 
                                   <Text fontSize='lg' fontWeight="550">{elem.title}</Text>
                                   <p fontWeight="500" style={{fontSize:"13.5px",color:"rgb(122,121,121)",marginBottom:"20px"}}>{elem.features}</p> 
                                   
                                   <h3>AUDIO</h3>
                                   <Box>
                                       <Flex justifyContent={"space-between"} alignItems={"center"}>
                                           <Box >
                                                   <h2>{elem.fund}</h2>
                                                   <p>raised</p>
                                           </Box>
                                           <Box>
                                             <p>{elem.percentage}%</p>
                                           </Box>
                                       </Flex>
                                   </Box> 
                                   <Progress borderRadius={"10px"} colorScheme='green' size='sm' value={elem.percentage} />
                                    <Box >
                                     {
                                       elem.daysLeft === "Now Funding through InDemand" 
                                     }
                                     <p>{elem.daysLeft === "Now Funding through InDemand" ? elem.daysLeft: elem.daysLeft + " days left"}</p>
                                    </Box>
                                 </Box>
                                 </Link>
                              </Box>
                                 </WrapItem>

                            </Wrap>
                            ))
                        }
                  </SimpleGrid>
              </div>
         </Box>
                </div>
            ):(
                <div>
                     <Box w="100%" m="auto" h="240px"  bgImage="url('https://g2.iggcdn.com/assets/explore/desktop/audio-8434cab3949e95a7e4bc1b1128b55e0b0a6e30ca708286929610a41498cd9280.jpg')" >
                     <Center>
            <Text fontSize='4xl'color='white' pt="50px">Audio</Text>
           
            </Center>
            <Center>
           
            <Text fontSize='3xl' color="white" pt="2px">Life in hi-hi</Text>
            </Center>
         </Box>
         <Box display="flex" w="80%" m="auto" >
             
              <div style={{width:"100%"}} >
                  <Box mt={"50px"} >
                      <Stack>
                      <InputGroup>
                           <InputLeftElement
                             pointerEvents='none'
                             children={<BiSearch color='gray.300' />}
                           />
                           <Input type='search' placeholder='Search for campaigns' borderRadius={"0px"}/>
                         </InputGroup>
                      </Stack>
                  </Box>
                 <br />
               
{/* --------------------------------------------------------Drawer filter -------------------------------------------- */}
<>  
    
    
  
    
    
   <div >
   <Center>
   <Button  ref={btnRef}   size='md'
  height='48px'
  width="80%"
  border='2px'
  borderColor='green.500' onClick={onOpen}>
        Sort
      </Button>
   </Center>
   </div>
      
     







      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>All Categories</DrawerHeader>

          <DrawerBody >
        <NavLink to="/ProductsPage">
        <Text>Audio</Text> 
          </NavLink><br />
          <Text>Camera Gear</Text> <br />
          <Text>Education</Text> <br />
          <Text>Energy & Green Tech</Text> <br />
          <Text>Fashion & Wearables</Text> <br />
          <Text>Food & Beverages</Text> <br />
          <Text>Health & Fitness</Text> <br />
          <Text>Home</Text> <br />           
          </DrawerBody>

          <DrawerFooter>
          
          
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>


<br />
{/* ---------------------------------------------------------------------------------------------------------------- */}

                  <br />
                 
                  <SimpleGrid minChildWidth="230px"  spacing="40px" >
                         
                        {   
                            audioData.length > 0 && 
 
                            audioData.map((elem)=>(
                            <Wrap spacing="10px">
                                 <WrapItem>
                                 <Box key={elem.id}   border="1px solid #e1e1e1" textAlign="left"  >
                               <Link to={`/SingleProductPage/${elem.id}`}>
                                 <Image src={elem.cover} w="100%"/>
                                 <Box padding={"20px"} >
                                   <Box mb={"10px"}>
                                          <Flex  justifyContent="space-between" gap="10px" alignItems={"center"}>
                                               <Text fontSize='sm' color="teal">{elem.category}</Text> 
                                               {/* <AiOutlineHeart /> */}
                                          </Flex>
                                   </Box> 
                                   <hr /> 
                                   <Text fontSize='lg' fontWeight="550">{elem.title}</Text>
                                   <p fontWeight="500" style={{fontSize:"13.5px",color:"rgb(122,121,121)",marginBottom:"20px"}}>{elem.features}</p> 
                                   
                                   <h3>AUDIO</h3>
                                   <Box>
                                       <Flex justifyContent={"space-between"} alignItems={"center"}>
                                           <Box >
                                                   <h2>{elem.fund}</h2>
                                                   <p>raised</p>
                                           </Box>
                                           <Box>
                                             <p>{elem.percentage}%</p>
                                           </Box>
                                       </Flex>
                                   </Box> 
                                   <Progress borderRadius={"10px"} colorScheme='green' size='sm' value={elem.percentage} />
                                    <Box >
                                     {
                                       elem.daysLeft === "Now Funding through InDemand" 
                                     }
                                     <p>{elem.daysLeft === "Now Funding through InDemand" ? elem.daysLeft: elem.daysLeft + " days left"}</p>
                                    </Box>
                                 </Box>
                                 </Link>
                              </Box>
                                 </WrapItem>

                            </Wrap>
                            ))
                        }
                  </SimpleGrid>
              </div>
         </Box>
                </div>
            )
        }
     </div>
  )
}

export default ProductsPage