import React from "react";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import GoogleSign from "../Components/SignUp/GoogleSign";
import { useState, useEffect } from "react";

const Loginpage = () => {

//local states--------------------------------------------------------------------------------------------------
const [email,setEmail] =useState("");
const [password,setPassword] = useState("");
const [message,setMessage]=useState([]);


const dispatch = useDispatch();
const navigate =useNavigate();


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
const handleClick=()=>{
  let loginData = {
    email: email,
    password: password,
  };
  //let loggeduser = loginData.username;
  if (email && password) {
    dispatch(login(loginData)).then(r =>
      setMessage(r.payload)
      // navigate('/', { state: loggeduser })  
    )
    if(message.message=="Login Successful"){
      alert("login successful");
     // setEmail(""),
//setPassword("")
    }else if(message.message=="User not exists"){
      alert("inalid credentials");
    //  setEmail(""),
//setPassword("")
    }
   
  }else{
    alert("fill all fields");
  }
 
  
}




  return (
    <>
      <Box h={{ base: "110px", md: "155px", lg: "220px" }}></Box>
      {isDesktop ? (
        <Box width="30%">
          <Center>
            <Heading>CUSTOMER LOGIN</Heading>
          </Center>
        </Box>
      ) : (
        <Box width="100%">
          <Center>
            <Heading>CUSTOMER LOGIN</Heading>
          </Center>
        </Box>
      )}
      <br />
      {isDesktop ? (
        <Box marginLeft="12%" marginBottom={"-3%"}>
          <GoogleSign />
          <br />
          <Text marginLeft="15%">--OR--</Text>
        </Box>
      ) : (
        <></>
      )}

      <Flex
        className="CheckOutMainFlex"
        gap="30px"
        direction={{ base: "column", md: "row" }}
        w={{ base: "95%", md: "95%", lg: "90%" }}
        rowGap="30px"
      >
        <Box
          border={"2px solid #dd2985"}
          w={{ base: "90%", md: "60%", lg: "40%" }}
          m="auto"
          mt="5%"
          padding="30px"
          w={{ base: "100%", md: "60%", lg: "70%" }}
        >
          <Text fontSize="2xl">REGISTERED CUSTOMERS</Text>

          <Divider />
          <br />
          <br />
          <Text>If you have an account, sign in with your email address.</Text>
          <br />

          <FormControl isRequired mt="20px">
            <FormLabel>Email</FormLabel>
            <Input
              size="sm"
              mt="10px"
              focusBorderColor="#dd2985"
              type="text"
              _selected={{ border: "none" }}
            />
          </FormControl>

          <FormControl isRequired mt="20px">
            <FormLabel>Password</FormLabel>
            <Input
              size="sm"
              mt="10px"
              focusBorderColor="#dd2985"
              border="1px solid #dd2985"
              type="text"
              name="Fname"
              value={FormData.Fname}
            />
          </FormControl>
          <br />
          <Flex>
            <Button
              size="sm"
              height="48px"
              width="150px"
              border="2px"
              borderColor="green.500"
              colorScheme="green"
            >
              SIGN IN{" "}
            </Button>
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

        <Box
          border={"2px solid #dd2985"}
          w={{ base: "90%", md: "60%", lg: "40%" }}
          m="auto"
          mt="5%"
          height="462px"
          padding="30px"
          w={{ base: "100%", md: "60%", lg: "70%" }}
        >
          <Text fontSize="2xl">NEW CUSTOMERS</Text>

          <Divider />
          <br />
          <br />
          <Text>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </Text>
          <br />

          <br />
          <Flex>
            <Button
              size="sm"
              height="48px"
              width="250px"
              border="2px"
              borderColor="green.500"
              colorScheme="green"
            >
              CREATE AN ACCOUNT{" "}
            </Button>
          </Flex>
        </Box>
      </Flex>
      {/* <PaymentPage data={FormData}/> */}
    </>
  );
};

export default Loginpage;
