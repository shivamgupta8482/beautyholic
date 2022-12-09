import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { getProjectData } from "../../Redux/ProductPageRedux/action";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Select,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";

export const SingleProductpage = () => {
  const { id } = useParams();
  const [singlProductData, setSingleProductData] = useState({});
  const spData = useSelector(
    (state) => state.productPageReducer.audioProjects
  );

  let productData=Array.from(spData)
  const dispatch = useDispatch();

  //console.log(productData);
  useEffect(() => {
    if (productData.length === 0) {
      dispatch(getProjectData());
    }
  }, [productData.length, dispatch]);

  useEffect(() => {
    if (id) {
      const updatedProductData = productData.find(
        (elem) => elem.id === Number(id)
      );
      updatedProductData && setSingleProductData(updatedProductData);
    }
  }, [productData, id]);

  return (
    <div>
      <Flex
        gap="10px"
        w={{ base: "100%", md: "90%", lg: "80%" }}
        m="auto"
        direction={{ base: "column", md: "row" }}
        mt="5%"
      >
        <Box m="auto" w={{ base: "70%", md: "50%" }}>
          <Image
            m="auto"
            w={{ base: "200px", md: "300px", lg: "400px" }}
            src={singlProductData.api_featured_image}
          />
        </Box>

        <Box m="auto" w={{ base: "70%", md: "50%" }} padding="10px">
          <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            w={"90%"}
            fontWeight="550"
            ml="0x"
          >
            {singlProductData.name}
          </Text>
          <Flex>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Flex>
          <Flex
            color="#dd2985"
            gap="7px"
            mt={{ base: "10px", md: "15px" }}
            fontSize={{ base: "12px", md: "16px" }}
            alignItems="center"
          >
            <TiTick />
            <Text>stock</Text>
          </Flex>

          <Flex
            gap="10px"
            fontWeight="550"
            mt={{ base: "10px", md: "15px" }}
            fontSize={{ base: "12px", md: "16px" }}
          >
            <Text color="gray" textDecoration="line-through">
            ₹{(singlProductData.price)*75}{" "}
            </Text>
            <Text color="#dd0285">₹{((singlProductData.price)*75)*0.88}</Text>
            <Text color="green">12%off</Text>
          </Flex>
          <Text color="grey" fontSize={{ base: "12px", md: "12px" }}>
            (Inclusive of all taxes)
          </Text>

          <Text
            fontSize={{ base: "12px", md: "16px" }}
            mt={{ base: "10px", md: "15px" }}
            color="gray"
            fontWeight="550"
          >
            Brand : {singlProductData.brand}
          </Text>
          <Text></Text>
          <Text  fontSize={{ base: "11px", md: "15px" }}
            mt={{ base: "10px", md: "15px" }}
            color="Black"
            textAlign='justify'
            fontWeight="550">Description:-<br/>{singlProductData.description}</Text>
          <br />
          <Flex gap="15px">
            <Text>Qty</Text>
            <Select value="1" placeholder="1" width={"20%"} size="sm" >
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Select>
            <Box w={{ base: "150px", md: "150px" }}>
              <Button
                bg="#dd0285"
                size="sm"
                colorScheme="none"
                className="AddToCartBtn"
                disabled={singlProductData.out_of_stock === "Out of stock"}
              >
                <Flex gap="5px">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  <Text fontSize="15px">Add to Cart</Text>
                </Flex>
              </Button>
            </Box>
            <Box w={{ base: "150px", md: "150px" }}>
              <Button
                bg="gray"
                color={"black"}
                size="sm"
                colorScheme="none"
                fontSize="20px"
                className="AddToCartBtn"
                disabled={singlProductData.out_of_stock === "Out of stock"}
              >
                <AiOutlineHeart />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};
