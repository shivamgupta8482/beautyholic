import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex,FormControl,FormLabel,Heading,Image,Input,Select,Text,Stack, Spacer, Center } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
const Cart = () => {
  const data =[
    {
      "title": "2PCS EELHOE Men Face Cream Collagen Anti Wrinkle Hyaluronic Acid Vitamin E Cream",
      "link": "https://www.ebay.com/itm/334419315772?hash=item4ddcf1cc3c:g:UTwAAOSwSyZiZ5r~&amdata=enc%3AAQAHAAAAwDG%2Fd4Ush0OowFr9M5RP4%2Fsn%2B9eM4RU%2F0wtGYfcwAB34dnyvPAo3fqSd3qazcuW3jN2dcO%2BQaB2sr7sTmJpijZJT4w%2B0ay%2BmHt9UI8D4HQnCpNBJL%2FVPtKNa0zh7NQEQJi1rsrLQRjajr8EsdRFpdyuK2gayWx1xOEhM1FD1yw1kLHwx1oKNTAmCBnFSvD88rO28U53rDauxujylTwU1WeuFZiVXbyVoJhit3xcyjxFBAOwZE%2FUYmdL5%2BXvhVmF4kQ%3D%3D%7Ctkp%3ABlBMUPDyoveqYA",
      "condition": "Brand New",
      "price": {
        "raw": "11.94",
        "extracted": 11.94
      },
      "top_rated": true,
      "returns": "Free returns",
      "extensions": [
        "or Best Offer"
      ],
      "thumbnail": "https://i.ebayimg.com/thumbs/images/g/UTwAAOSwSyZiZ5r~/s-l225.jpg"
    },
    {
      "title": "540 Titanium Microneedle Scar Derma Roller Dermaroller Micro Needle Skin Therapy",
      "link": "https://www.ebay.com/itm/124040445887?hash=item1ce162ffbf:g:hc4AAOSwRjteGCJd&amdata=enc%3AAQAHAAAA4FaXb6WDAgSlGihj%2FByGZvOZVqYVbhLS87XCTocHuyCcIw7bwair0Z3bv15V64bewMm36AYX317mVzHD6JeIF8LC9XueZ0vD0V0xWzVB1sTmAWDj%2BcMNBQJHvU0%2F2Bz9OJm8zvrs0tbBv1VxL5MCoJt4UUz7KJm7k2EcYjSQoRlcDv5YHqrcl17CSHGEPpvrKKOEIrVFPGRk2%2BSptcIoE1Dpud6DQWN1urovHsovZ1dfufUJhX2HyfOSJkgjxssOk9lLmkihly7%2FJPOnMf8bKy4rBU4FqGH63oQ7BE5OraJP%7Ctkp%3ABFBM8PKi96pg",
      "condition": "Brand New",
      "price": {
        "raw": "4.99",
        "extracted": 4.99
      },
      "shipping": "Free shipping",
      "extensions": [
        "Buy It Now",
        "771+ sold"
      ],
      "thumbnail": "https://i.ebayimg.com/thumbs/images/g/hc4AAOSwRjteGCJd/s-l225.jpg"
    },
    {
      "title": "Serious Skincare Insta-Tox Instant Wrinkle-Smoothing Serum 0.75 oz NEW & SEALED",
      "link": "https://www.ebay.com/itm/295031783003?epid=77883960&hash=item44b143be5b:g:3LcAAOSwKTNio199&amdata=enc%3AAQAHAAAA4ASKq7nncm%2B%2Fr%2BtJxA5oYVLl3IoOxj%2Fxq%2F1ve0Fw7QqEEswf%2FMqir%2FoUbx8qNEQ3JWXwQBUixUV6Bh5TofMN%2F9F%2B0vdRc1cjUvQM0qRv7nrheJadyDNdbnB7ZeGwvCH7B7SGSj337tUv4e3WjGq63o0cBeJxP6l0zycGf0czZvhgEo8dCtAkEXN9BOaFqZiYv2auSRzd3DMpV8wVMYzWBAUpS9mzWJxe%2BHaDTwHj1O0LkGy5tWvPuTuDQyhpSIh%2FPiasORPVzZ19fWH4RdagMzi3esNn44QN9Gr4iBfyFalf%7Ctkp%3ABFBM8PKi96pg",
      "condition": "Brand New",
      "reviews": 157,
      "price": {
        "raw": "25.21",
        "extracted": 25.21
      },
      "extensions": [
        "Buy It Now"
      ],
      "thumbnail": "https://i.ebayimg.com/thumbs/images/g/3LcAAOSwKTNio199/s-l225.jpg"
    },
    {
      "title": "Instant Wrinkle Remover Anti-Aging Retinol Face Cream Skin Tightening Firming US",
      "link": "https://www.ebay.com/itm/334383263079?hash=item4ddacbad67:g:MRAAAOSwmntiYNfk&amdata=enc%3AAQAHAAAA4K51EHYYzVqlDCln9ZulHL0TfHEYiA05N5QNBtF2ra4rRafgXwlSdnwbU02tS7AqUxwNxqyX2KlYSImNILRf4geVx8%2FGsOTpB%2Fqx7BCJev1YEKOJE%2BMeYP5eMfVNenDkw4a1MyeZvCYxDEsurIgYLcYNA5g8NC%2BelLQJ76OVvwoQd4aRXiOCSr4x3j2bmNLoXlO2gtqDO0C%2F11i6evgdriFZcRj10HPC0xHG2b8HLgkWozbWUnaF5R2WtQ0%2FsTVaoF%2Fh4Ioj9t2%2FJudRc%2Fqh7KVBMgbBegIg23p4xfau%2FA%2Bb%7Ctkp%3ABFBM8PKi96pg",
      "condition": "Brand New",
      "price": {
        "raw": "10.94",
        "extracted": 10.94
      },
      "extensions": [
        "or Best Offer"
      ],
      "thumbnail": "https://i.ebayimg.com/thumbs/images/g/MRAAAOSwmntiYNfk/s-l225.jpg"
    }
  ]


  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1070);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <>
    <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
    
    <Flex className="CheckOutMainFlex"  direction={{base :'column', md :'row'}} w={{base :'95%', md :'95%', lg :'90%'}} rowGap='30px'> 
      <Box  w={{base : '100%', md :'60%', lg : '70%'}}>
          <Text>ITEM</Text>
          <Divider borderWidth= '2px'/>

        
        
          {data.map((elem)=>{
              return (
                 <>
                  <Flex  mt='20px'>
                      <Box  width='30%'  justifyContent='center'>
                          <Image m='auto' boxSize={{base : '80px', md :'70px', lg :'190px'}} src={elem.thumbnail}/>
                         <br />
                         <Stack spacing={4} direction='row' align='center' marginLeft="10%">
                           {
                            isDesktop? <Button>Edit</Button>:<></>
                           }
                            {
                              isDesktop?<Button>Remove Item</Button>:<Button>Remove</Button>
                            }
                            </Stack>
<br />
                            
                         
                      </Box>

                      <Box width='50%' fontSize={{base : '12px', md : '12px'}}>
                    {
                      isDesktop?  <Heading as='h5' size='sm' fontWeight='550'>{elem.title}</Heading>:  <Text>{elem.title}</Text>
                    }
                      {/* <Text>Brand : {elem.condition}</Text> */}
                      </Box>

                      <Box  width='20%' fontSize='14px'>
                          <Text>{Number(elem.price.raw)+Number(elem.price.extracted)}</Text>
                      </Box>

                    {
                      isDesktop?  <Box  width='20%' fontSize='14px' >
                      <Text border="1px solid pink">{Number(elem.price.raw)+Number(elem.price.extracted)}</Text>
                  </Box>:<></>
                    }

{
                      isDesktop?  <Box  width='20%' fontSize='14px'>
                      <Text>{Number(elem.price.raw)+Number(elem.price.extracted)}</Text>
                  </Box>:<></>
                    }
                    
                  </Flex>
                  <Divider borderWidth= '2px'/>
                 </>
                  
              )
              
          })}
          
      </Box>
      

      <Box w={{base : '100%', md :'40%', lg : '30%'}} h={{base : '100%', md :'40%', lg : '100%'}} border={'1px solid #dd2985'} padding="20px">
          <Heading as='h4' size='md' textAlign='center'>SUMMARY</Heading>
        <Flex mt='20px'>
        <Text>Subtotal</Text>
        <Spacer />
        <Text>458</Text>
        </Flex>
        <Divider borderWidth= '2px'/>
        <Flex mt='20px'>
        <Text>Shipping</Text>
        <Spacer />
        <Text>458</Text>
        </Flex>
         <Divider borderWidth= '2px' />
         <Flex mt='20px'>
        <Text>Order</Text>
        <Spacer />
        <Text>458</Text>
        </Flex>
         <Divider borderWidth= '2px'/>
         <Accordion allowToggle mt="20px">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         Apply Discount Code
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>Enter Discount Code</Text>
     <Flex>
      <Input placeholder='Enter Discount Code'></Input>
      <Button>Apply</Button>
     </Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Center>
<Button mt="25px" colorScheme="pink">
  PROCEED TO CHECKOUT
</Button>
</Center>
      </Box>
    </Flex>
   
  </>
  )
}

export default Cart