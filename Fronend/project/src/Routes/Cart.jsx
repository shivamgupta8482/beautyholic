import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Stack,
  Spacer,
  Center,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { cartproductdelete, getcartdata } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
 import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [price,setPrice]=useState(0);




const navigate = useNavigate();
// const navigate = useNavigate();
const dispatch = useDispatch();

const handleDelete=(id,cost)=>{
  //setPrice(price-cost)
  
  //  setPrice(prev => prev-cost)
   
  dispatch(cartproductdelete(id))
  .then(r=>{
    console.log(r.payload);
   // setData(r.payload)
  })
  
 setLoading(true);
}



const handleRoute=()=>{
  navigate("/CheckoutPage");
}


useEffect(()=>{
setPrice(0);
  dispatch(getcartdata())
  .then(r=>{
    console.log(r.payload);
    setData(r.payload)
    // shippingprice();
  })

  const wholeprice=data.map((e)=>(
      setPrice(prev => prev+e.price)
     ))
  setLoading(false);
 
},[data && loading])

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
      <Box h={{ base: "110px", md: "155px", lg: "220px" }}></Box>

      <Flex
        className="CheckOutMainFlex"
        direction={{ base: "column", md: "row" }}
        w={{ base: "95%", md: "95%", lg: "90%" }}
        rowGap="30px"
      >
        <Box w={{ base: "100%", md: "60%", lg: "70%" }}>
          <Text>ITEM</Text>
          <Divider borderWidth="2px" />

         {
          data.length==0?<></>
          :<> { data?.map((elem) => {
            return (
              <>
                <Flex mt="20px">
                  <Box width="30%" justifyContent="center">
                    <Image
                      m="auto"
                      boxSize={{ base: "80px", md: "70px", lg: "190px" }}
                      src={elem.api_featured_image
                      }
                    />
                    <br />
                    <Stack
                      spacing={4}
                      direction="row"
                      align="center"
                      marginLeft="10%"
                    >
                      {isDesktop ? <Button>Edit</Button> : <></>}
                      {isDesktop ? (
                        <Button onClick={()=>{handleDelete(elem._id,elem.cost)}}>Remove Item</Button>
                      ) : (
                        <Button>Remove</Button>
                      )}
                    </Stack>
                    <br />
                  </Box>

                  <Box width="50%" fontSize={{ base: "12px", md: "12px" }}>
                    {isDesktop ? (
                      <Heading as="h5" size="sm" fontWeight="550">
                        {elem.description
}
                      </Heading>
                    ) : (
                      <Text>{elem.description
                      }</Text>
                    )}
                    {/* <Text>Brand : {elem.condition}</Text> */}
                  </Box>

                  {/* <Box width="20%" fontSize="14px">
                    <Text>
                      {Number(elem.price.raw) + Number(elem.price.extracted)}
                    </Text>
                  </Box> */}

                  {/* {isDesktop ? (
                    <Box width="20%" fontSize="14px">
                      <Text border="1px solid pink">
                        {Number(elem.price.raw) + Number(elem.price.extracted)}
                      </Text>
                    </Box>
                  ) : (
                    <></>
                  )} */}

                  {/* {isDesktop ? (
                    <Box width="20%" fontSize="14px">
                      <Text>
                        {Number(elem.price.raw) + Number(elem.price.extracted)}
                      </Text>
                    </Box>
                  ) : (
                    <></>
                  )} */}
                </Flex>
                <Divider borderWidth="2px" />
              </>
            );
          })}</>
         }
        </Box>

        <Box
          w={{ base: "100%", md: "40%", lg: "30%" }}
          h={{ base: "100%", md: "40%", lg: "100%" }}
          border={"1px solid #dd2985"}
          padding="20px"
        >
          <Heading as="h4" size="md" textAlign="center">
            SUMMARY
          </Heading>
          <Flex mt="20px">
            <Text>Subtotal</Text>
            <Spacer />
            <Text>{price*75}</Text>
          </Flex>
          <Divider borderWidth="2px" />
          <Flex mt="20px">
            <Text>Shipping</Text>
            <Spacer />
            <Text>458</Text>
          </Flex>
          <Divider borderWidth="2px" />
          <Flex mt="20px">
            <Text>Order</Text>
            <Spacer />
            <Text>458</Text>
          </Flex>
          <Divider borderWidth="2px" />
          <Accordion allowToggle mt="20px">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Apply Discount Code
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>Enter Discount Code</Text>
                <Flex>
                  <Input placeholder="Enter Discount Code"></Input>
                  <Button>Apply</Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Center>
            {/* <Link to="/PaymentPage"> */}
            <Button mt="25px" colorScheme="pink" onClick={handleRoute}>
              PROCEED TO CHECKOUT
            </Button>
            {/* </Link> */}
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;












//   const [qty,setQty]=useState(1);
//   const [totalPrice,setTotalPrice] = useState(0);
//   const getTotal=  ()=>{
//     data.map((el)=>{
//       console.log(el.data.price.extracted)
//       return setTotalPrice((prev)=>{
//         prev= prev+ (+el.data.price.extracted);
      
//         return prev;
//          })
//     })
//    }
  
//   useEffect(()=>{getTotal()},
    
//   [data]);
//   const getdata =async()=>{
//     const res = await fetch("/cart");
//     let data = await res.json();
//     setData(data)
//     console.log("c",data);

//   }
//  useEffect(()=>{
  
//   getdata();
//  },[])
 
//  const handleDelete =async(id)=>{
//   const res =await fetch("/cart/"+id,{
//     method: "DELETE",
//    headers: {'Content-Type': 'application/json'}
//   })
//   let newdata= await res.json();
//   // setData(newdata);
 
//   console.log(newdata,id);
//   setTotalPrice(0)
//   getdata();
//   // getTotal();
//   console.log("check",totalPrice)
 
//  }