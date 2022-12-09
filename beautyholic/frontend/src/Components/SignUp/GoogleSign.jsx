import React from 'react'
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Button, Stack } from '@chakra-ui/react';


const GoogleSign = () => {
  return (
    <Stack direction='row' spacing={4}>
  <Button leftIcon={<AiFillFacebook />} colorScheme='blue' variant='solid'>
    Sign in with Facebook
  </Button>
  <Button rightIcon={<FcGoogle />} colorScheme='red' variant='outline'>
  Sign in with Google
  </Button>
</Stack>
  )
}

export default GoogleSign