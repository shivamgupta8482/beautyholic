import React, { useEffect, useState } from 'react'
import { Box, Divider, Flex,FormControl,FormLabel,Image,Input,Select,Text,Button } from "@chakra-ui/react";

const SignUpform = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1070);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <Box  border={'1px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='1%' padding='30px' >
    <Text  fontSize='2xl'>PERSONAL INFORMATION</Text>

    <Divider/>
    
   
   

    <FormControl isRequired mt='20px' >
        <FormLabel>Full Name</FormLabel>
        <Input size='md' mt='1px' focusBorderColor='#dd2985' type='text' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px' >
        <FormLabel>Email</FormLabel>
        <Input size='md' mt='1px' focusBorderColor='#dd2985' type='text' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px' >
        <FormLabel>Phone</FormLabel>
        <Input size='md' mt='1px' focusBorderColor='#dd2985' type='text' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px'>
        <FormLabel>Password</FormLabel>
        <Input size='md' mt='1px' focusBorderColor='#dd2985' border='1px solid #dd2985' type='text' name='Fname'  value={FormData.Fname} />
    </FormControl>

    <FormControl isRequired mt='20px'>
        <FormLabel>Confirm Password</FormLabel>
        <Input size='md' mt='1px' focusBorderColor='#dd2985' border='1px solid #dd2985' type='text' name='Fname'  value={FormData.Fname} />
    </FormControl>
    <br />
<Flex>
<Button   size='sm'
height='48px'
width='190px'
border='2px'
borderColor='green.500' colorScheme="green">CREATE AN ACCOUNT </Button>

</Flex>
    
</Box>
  )
}

export default SignUpform