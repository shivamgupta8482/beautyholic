import React, { useEffect, useState } from 'react'
import { Box, Divider, Flex,FormControl,FormLabel,Image,Input,Select,Text,Button, useToast } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const SignUpform = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
   const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [success,setSuccess]=useState(false);

const data = {
  first_name:name,
  last_name:userName,
  email:email,
  phone:phoneNo,
  password:password


}


  const postdata = (data) => {
    fetch('https://backendcwnem.onrender.com/customer/register', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
  // console.log(data);
   if(data.message=="User Already Exist"){
alert("user is already present")
   }
   else if(data.message=="Signup Successful") {
    alert("signup succesful");
   setSuccess(true);
   }

  
  })
  .catch((error) => {
   // console.error('Error:', error);
   return error;
  });
  
    
  }







const toast=useToast();

const handleClick=()=>{
  if(email && password && name && userName && userName && phoneNo && confirmpassword && password!=confirmpassword){
    
    toast({
      title: `password and confirm password not matches`,
      status: "error",
      duration: 900,
      position: "top",
      isClosable: true,
    });
   
    setPassword("");
    setConfirmpassword("");
  }
  else if(email && password && name && userName && userName && phoneNo && confirmpassword && password==confirmpassword){
 postdata(data)
 console.log(success);
 if(setSuccess){
  localStorage.setItem("userName",name)
  navigate("/login");
 }
  setEmail("");
  setName("");
  setPassword("");
  setPhoneNo("");
  setUserName("");
  setConfirmpassword("");

 }
else{
 
  toast({
    title: `Fill all the details`,
    status: "error",
    duration: 900,
    position: "top",
    isClosable: true,
  });
}

 
}






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
        <FormLabel >Full Name</FormLabel>
        <Input value={name} size='md'  onChange={(e)=>{setName(e.target.value)}} mt='1px' focusBorderColor='#dd2985' type='text' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px' >
        <FormLabel >Email</FormLabel>
        <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} size='md' mt='1px' focusBorderColor='#dd2985' type='email' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px' >
        <FormLabel >User Name</FormLabel>
        <Input value={userName} onChange={(e)=>{setUserName(e.target.value)}} size='md' mt='1px' focusBorderColor='#dd2985' type='text' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px' >
        <FormLabel >Phone</FormLabel>
        <Input value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} size='md' mt='1px' focusBorderColor='#dd2985' type='number' _selected={{border : 'none'}} />
    </FormControl>

    <FormControl isRequired mt='20px'>
        <FormLabel >Password</FormLabel>
        <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} size='md' mt='1px' focusBorderColor='#dd2985' border='1px solid #dd2985' type='password' name='Fname' />
    </FormControl>

    <FormControl isRequired mt='20px'>
        <FormLabel>Confirm Password</FormLabel>
        <Input value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} size='md' mt='1px' focusBorderColor='#dd2985' border='1px solid #dd2985' type='password' name='Fname'   />
    </FormControl>
    <br />
<Flex>
<Button   size='sm'
height='48px'
width='190px'
border='2px'
borderColor='green.500' colorScheme="green" onClick={handleClick}>CREATE AN ACCOUNT </Button>

</Flex>
    
</Box>
  )
}

export default SignUpform