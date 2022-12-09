


import React from 'react'
import { Box, Divider, Flex,FormControl,FormLabel,Image,Input,Select,Text,Button,Center,Heading, AlertDialogCloseButton } from "@chakra-ui/react";
import GoogleSign from '../Components/SignUp/GoogleSign';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { login } from '../Redux/AuthReducer/action';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Signigfun } from "../Redux/AuthReducer/action";

const Loginpage = () => {

//local states--------------------------------------------------------------------------------------------------
const [email,setEmail] =useState("");
const [password,setPassword] = useState("");
const [msg,setMsg]=useState("");


const dispatch = useDispatch();
const navigate =useNavigate();
const toast=useToast();


//-------------------------------------------------------------------------------------------------------------
//usemedia hook------------------------------------------------------------------------------------------------
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1070);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


//--------------------------------------------------------------------------------------------------------------
//handlecreate----------------------------------------------------------------------------------------------
const handleCreate=()=>{
  navigate("/signup");
}
//---------------------------------------------------------------------------------------------------------------


const isauth =useSelector(data=>(data.AuthReducer.payload)); 

const SendSignInRequest = e => {
 // e.preventDefault();
  let loginData = {
    email: email,
    password: password,
  };
  let loggeduser = loginData.email;
  if (email && password) {
    setMsg("");
     dispatch(login(loginData))
   .then( r=>{
    //console.log(r.payload.token)
    if(!r.payload.token){
    }else{
      localStorage.setItem("token2",r.payload.token)
    }
    if(r.payload.message=="Login Successful"){
      toast({
              title: `Login Successfull`,
              status: "success",
              duration: 900,
              position: "top",
              isClosable: true,
            });
            setTimeout(() => {
                    navigate("/");
                  }, 1000);
    }else if(r.payload.message=="User not exists"){
      toast({
        title: `Sign Up First`,
        status: "error",
        duration: 900,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
              navigate("/signup");
            }, 1000);
    }else if(r.payload.message=="Invalid Credentials"){
      toast({
        title: `Invalid Crediantials`,
        status: "error",
        duration: 900,
        position: "top",
        isClosable: true,
      });
    }
    handlesetData();
   })
   
  }
  
  
};
const handlesetData=async()=>{
setEmail("");
setPassword("");
}

  return (
    <>

    
    <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
   {
    isDesktop?<Box width="30%" >
    <Center><Heading>CUSTOMER LOGIN</Heading></Center>
    </Box>:<Box width="100%" >
   <Center><Heading>CUSTOMER LOGIN</Heading></Center>
   </Box>
   }
    <br />
 {
  isDesktop?  <Box marginLeft="12%" marginBottom={"-3%"}>
  <GoogleSign />
<br />
   <Text marginLeft="15%">--OR--</Text>
  
   
  </Box>:<></>
 }
   
   <Box>
   <Flex className="CheckOutMainFlex" gap="30px"   direction={{base :'column', md :'row'}} w={{base :'95%', md :'95%', lg :'90%'}} rowGap='30px'> 
     
     
     
     <Box  border={'2px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='5%' padding='30px' w={{base : '100%', md :'60%', lg : '70%'}}>
         <Text  fontSize='2xl'>REGISTERED CUSTOMERS</Text>

         <Divider/>
         <br /><br />
         <Text>If you have an account, sign in with your email address.</Text>
         <br />

         <FormControl isRequired mt='20px' >
             <FormLabel>Email</FormLabel>
             <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} size='lg' mt='10px' focusBorderColor='#dd2985' type='email' _selected={{border : 'none'}} />
         </FormControl>

         <FormControl isRequired mt='20px'>
             <FormLabel>Password</FormLabel>
             <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} size='lg' mt='10px' focusBorderColor='#dd2985' border='1px solid #dd2985' type='password' name='Fname'  />
         </FormControl>
         <br />
<Flex>
<Button   size='sm'
 height='48px'
 width='150px'
 border='2px'
 borderColor='green.500' colorScheme="green"   onClick={SendSignInRequest}>SIGN IN </Button>
<Text padding="15px" cursor={"pointer"}>Forgot Your Password?</Text> 
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

<Box border={'2px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='5%' height="100%" padding='30px' w={{base : '100%', md :'60%', lg : '70%'}}>
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
 borderColor='green.500' colorScheme="green" onClick={handleCreate}>CREATE AN ACCOUNT </Button>

</Flex>
         
     </Box>
   </Flex>
   </Box>
      {/* <PaymentPage data={FormData}/> Hello*/}
  </>
  )
}


export default Loginpage;



