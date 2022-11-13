import React from "react";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Radio,
  Select,
  Text,
  RadioGroup,
  Stack,
  Button,
  Accordion,
  AccordionButton,
  Spacer,
  Center,
  Heading,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Paymentpage = () => {
  const [cartdata, setCartData] = useState([]);

  const handleRoute = () => {
    navigate("/PaymentPage");
  };
  const CartData = useSelector((data) => data);
  useEffect(() => {
    setCartData(CartData.AuthReducer.cartdata);
    console.log(CartData.AuthReducer.cartdata);
  }, []);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1070);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const navigate = useNavigate();
  const toast = useToast();
  const handleSuccess = () => {
    toast({
      title: `Payment Sucessful`,
      status: "success",
      duration: 900,
      position: "top",
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/ThankYou");
    }, 1000);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box h={{ base: "110px", md: "155px", lg: "220px" }}></Box>

      <Flex
        className="CheckOutMainFlex"
        direction={{ base: "column", md: "row" }}
        w={{ base: "95%", md: "95%", lg: "90%" }}
        rowGap="30px"
      >
        <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
          <Heading as="h4" size="md">
            PAYMENT METHOD
          </Heading>
          <Divider />

          <RadioGroup defaultValue="1">
            <Stack spacing={"30px"}>
              <Radio mt="25px" value="1">
                Cash On Delivery
              </Radio>
              <Divider />
              <Radio value="2" onClick={onOpen}>
                Debit/Credit Card/Net banking/Wallet - PayUmoney
              </Radio>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Card Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {
                      <Box>
                        <Flex>
                          <Image
                            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
                            alt=""
                          />
                          <Image
                            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
                            alt=""
                          />
                          <Image
                            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
                            alt=""
                          />
                          <Image
                            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg"
                            alt=""
                          />
                          <Image
                            src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg"
                            alt=""
                          />{" "}
                          <br></br>
                        </Flex>
                        <br></br>
                        <Flex>
                          <Text fontSize="lg">Name on Card</Text>
                        </Flex>
                        <Input
                          type="text"
                          variant="outline"
                          placeholder="Card Name"
                        />
                        <br></br>
                        <br></br>
                        <Flex>
                          <Text fontSize="lg">Card Number</Text>
                        </Flex>
                        <Input
                          variant="outline"
                          placeholder="Card Number"
                          type="number"
                        />
                        <br></br>
                        <br></br>
                        <Flex>
                          <Text fontSize="lg">Expiration date</Text>
                          <select required>
                            <option>Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                          </select>
                          <select required>
                            <option>Year</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                          </select>
                        </Flex>
                        <br></br>
                        <Box>
                          <Text fontSize="lg">Security Code</Text>
                          <Input
                            variant="outline"
                            type="password"
                            placeholder="CVV"
                          />
                        </Box>
                      </Box>
                    }
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      CLOSE
                    </Button>
                    <Link href="#">
                      <Button colorScheme="blue" mr={3}>
                        CHECKOUT
                      </Button>
                    </Link>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </RadioGroup>

          {isDesktop ? (
            <Button ml="85%" colorScheme={"green"} onClick={handleSuccess}>
              PLACE ORDER
            </Button>
          ) : (
            <Center>
              <Button mt="20px" colorScheme={"green"}>
                PLACE ORDER
              </Button>
            </Center>
          )}
          <Divider mt="15px" />

          <>
        <Box
          border={"2px solid #dd2985"}
          w={{ base: "90%", md: "60%", lg: "40%" }}
          // m="auto"
          ml="100px"
          mt="5%"
          padding="10px"
        >
          <Text fontSize={{ base: "19px", md: "22px" }} fontWeight="550">
            SHIP TO,
          </Text>
          <Box fontSize={{ base: "14px", md: "16px" }} lineHeight="35px">
            <Text>Name :shivam Gupta</Text>
            <Text>Address : Tulsi Nagar 522</Text>
            <Text>Country :India </Text>
            <Text>Phone :8418072379 </Text>
          </Box>
          {/* <AlertDialogExample data={data}/> */}
        </Box>
      </>

        </Box>
        <Box w={{ base: "100%", md: "80%", lg: "30%" }}>
          <Box
            w={{ base: "100%", md: "100%", lg: "100%" }}
            h={{ base: "100%", md: "40%", lg: "100%" }}
            // border={"1px solid #dd2985"}
            padding="20px"
          >
            <Heading as="h4" size="md" textAlign="center">
              SUMMARY
            </Heading>
            <Flex mt="20px">
              <Text>Subtotal</Text>
              <Spacer />
              <Text>458</Text>
            </Flex>
            <Divider borderWidth="2px" />
            <Flex mt="20px">
              <Text>Shopping</Text>
              <Spacer />
              <Text>58</Text>
            </Flex>
            <Divider borderWidth="2px" />
            <Flex mt="20px">
              <Text>GST</Text>
              <Spacer />
              <Text>45</Text>
            </Flex>
            <Divider borderWidth="2px" />
            <Box w={{ base: "100%", md: "40%", lg: "100%" }}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ORDER SUMMARY
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {cartdata.map((elem) => {
                      return (
                        <Flex mt="20px">
                          <Box
                            width="30%"
                            display="flex"
                            justifyContent="center"
                          >
                            <Image
                              m="auto"
                              boxSize={{
                                base: "80px",
                                md: "60px",
                                lg: "100px",
                              }}
                              src={elem.api_featured_image}
                            />
                          </Box>

                          <Box
                            width="50%"
                            fontSize={{ base: "12px", md: "12px" }}
                          >
                            <Text fontWeight="550">{elem.brand}</Text>
                            <Text>Brand : {elem.brand}</Text>
                          </Box>

                          <Box width="20%" fontSize="14px">
                            <Text>{(elem.price + 1) * 78}</Text>
                          </Box>
                        </Flex>
                      );
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            {/* <Accordion allowToggle mt="20px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Items In Cart
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <>
                    {data.map((elem) => {
                      return (
                        <Flex mt="20px">
                          <Box
                            width="30%"
                            display="flex"
                            justifyContent="center"
                          >
                            <Image
                              m="auto"
                              boxSize={{ base: "80px", md: "60px", lg: "50px" }}
                              src={elem.thumbnail}
                            />
                          </Box>

                          <Box
                            width="50%"
                            fontSize={{ base: "12px", md: "12px" }}
                          >
                            <Text>{elem.title}</Text>
                            <Text>Brand : {elem.brand}</Text>
                          </Box>

                          <Box width="20%" fontSize="14px">
                            <Text>{elem.price.raw}</Text>
                          </Box>
                        </Flex>
                      );
                    })}
                  </>
                </AccordionPanel>
              </AccordionItem>
            </Accordion> */}
            <Center></Center>
          </Box>
          {/* <Box border={'2px solid #dd2985'} w={{base : '90%', md : '100%', lg : '120%'}}  m='auto' mt='5%' padding='10px'>
            <Text fontSize={{base : '19px', md : '22px'}} fontWeight='550'>Shipped To,</Text>
            <Box fontSize={{base : '14px', md : '16px'}} lineHeight='35px'>
                <Text>Name :shivam Gupta</Text>
                <Text>Address : Tulsi Nagar 522</Text>
                <Text>Country :India </Text>
                <Text>Phone :8418072379 </Text>
            </Box>
             <AlertDialogExample data={data}/>
         </Box> */}
        </Box>
      </Flex>
      <>
        {/* <Box
          border={"2px solid #dd2985"}
          w={{ base: "90%", md: "60%", lg: "40%" }}
          // m="auto"
          ml="100px"
          mt="5%"
          padding="10px"
        >
          <Text fontSize={{ base: "19px", md: "22px" }} fontWeight="550">
            SHIP TO,
          </Text>
          <Box fontSize={{ base: "14px", md: "16px" }} lineHeight="35px">
            <Text>Name :shivam Gupta</Text>
            <Text>Address : Tulsi Nagar 522</Text>
            <Text>Country :India </Text>
            <Text>Phone :8418072379 </Text>
          </Box> */}
          {/* <AlertDialogExample data={data}/> */}
        {/* </Box> */}
      </>
    </>
  );
};

export default Paymentpage;
