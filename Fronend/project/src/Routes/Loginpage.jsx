import React from 'react'
import { Box, Divider, Flex,FormControl,FormLabel,Image,Input,Select,Text,Button } from "@chakra-ui/react";

const Loginpage = () => {
  return (
    <>
    <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
    
    <Flex className="CheckOutMainFlex" gap="30px"   direction={{base :'column', md :'row'}} w={{base :'95%', md :'95%', lg :'90%'}} rowGap='30px'> 
      <Box  border={'2px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='5%' padding='30px' w={{base : '100%', md :'60%', lg : '70%'}}>
          <Text  fontSize='2xl'>REGISTERED CUSTOMERS</Text>

          <Divider/>
          <br /><br />
          <Text>If you have an account, sign in with your email address.</Text>
          <br />

          <FormControl isRequired mt='20px' >
              <FormLabel>Email</FormLabel>
              <Input size='sm' mt='10px' focusBorderColor='#dd2985' type='text' _selected={{border : 'none'}} />
          </FormControl>

          <FormControl isRequired mt='20px'>
              <FormLabel>Password</FormLabel>
              <Input size='sm' mt='10px' focusBorderColor='#dd2985' border='1px solid #dd2985' type='text' name='Fname'  value={FormData.Fname} />
          </FormControl>
          <br />
<Flex>
 <Button   size='sm'
  height='48px'
  width='150px'
  border='2px'
  borderColor='green.500' colorScheme="green">SIGN IN </Button>
 <Text padding="15px">Forgot Your Password?</Text> 
</Flex>
          
      </Box>
       {/* <Box border={'2px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='5%' padding='10px'>
            <Text fontSize={{base : '19px', md : '22px'}} fontWeight='550'>Shipped To,</Text>
            <Box fontSize={{base : '14px', md : '16px'}} lineHeight='35px'>
                <Text>Name : </Text>
                <Text>Address : </Text>
                <Text>Country : </Text>
                <Text>Phone : </Text>
            </Box>
             <AlertDialogExample data={data}/>
         </Box> */}

<Box border={'2px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='5%' height="462px" padding='30px' w={{base : '100%', md :'60%', lg : '70%'}}>
          <Text  fontSize='2xl'>NEW CUSTOMERS</Text>

          <Divider/>
          <br /><br />
          <Text>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</Text>
          <br />

          
          <br />
<Flex>
 <Button   size='sm'
  height='48px'
  width='250px'
  border='2px'
  borderColor='green.500' colorScheme="green">CREATE AN ACCOUNT </Button>
 
</Flex>
          
      </Box>
    </Flex>
      {/* <PaymentPage data={FormData}/> */}
  </>
  )
}

export default Loginpage