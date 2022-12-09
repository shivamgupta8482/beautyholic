import { Center, Heading,Text,Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GoogleSign from '../Components/SignUp/GoogleSign'
import SignUpform from '../Components/SignUp/SignUpform'

const Signup = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1070);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
    
    <Center>
     {
      isDesktop? <Heading>CREATE NEW CUSTOMER ACCOUNT</Heading>:  <Heading>CREATE NEW ACCOUNT</Heading>
     }
     
     </Center>
     {
      isDesktop?<Center marginTop="15px"><Stack spacing={3}> <GoogleSign /><Center><Text>--OR--</Text></Center></Stack></Center>:<></>
     }
    
      <SignUpform />
    </div>
  )
}

export default Signup