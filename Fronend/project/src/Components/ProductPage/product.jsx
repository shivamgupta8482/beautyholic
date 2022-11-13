import {
  Box,
  Flex,
  Wrap,
  SimpleGrid,
  Button,
  Image,
  Text,
  Select,
  WrapItem,Center, useToast
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  getProjectData,
  filterData,
  sortData,
} from "../../Redux/ProductPageRedux/action";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
import { addtocart } from "../../Redux/AuthReducer/action";

const ProductsPage = () => {
  //----------------------------------------------------------responsive sizes--------------------------------
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1050);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //-------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------getting data and logics-----------------------------------------------

  const productData = useSelector(
    (state) => state.productPageReducer.audioProjects
  );

  const dispatch = useDispatch();

  // filter function 

  const handleFilterAudio = (e) => {
    let value = e.target.value;

    if (value === "All") {
      dispatch(getProjectData());
    } else {
      console.log("from filter", value);
      dispatch(filterData(value));
    }
  };

  // sorting function 

  const handleSort = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(sortData(value));
  };

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(getProjectData());
    }
  }, [dispatch, productData.length]);


//-------------------------handleaddtocart---------------------------------------------------------------------

const toast = useToast();
const handleAddToCart=(id)=>{
const targetproduct =  productData.filter(e=>{
  return e.id==id;
})
  dispatch(addtocart(targetproduct))
  .then(r=>{
    console.log(r);
    if(r.payload=="note created"){
      toast({
              title: `Product added to cart successfully`,
              status: "success",
              duration: 900,
              position: "top",
              isClosable: true,
            });
           
    }
  })
}





  //-------------------------------------------------------------------------------------------------------
  return (
    <div>
      {isDesktop ? (
        <div>
          <Box style={{ width: "80%", margin: "auto", display: "flex" }}>
            <div
              style={{ width: "25%", textAlign: "left", paddingRight: "20px" }}
            >
              <h2
                style={{
                  marginTop: "45px",
                  fontSize: "18px",
                  fontWeight: "550",
                }}
              >
                Filter Results
              </h2>
              <h1
                style={{
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "550",
                  color: "gray",
                }}
              >
                Price
              </h1>
              <hr />
              <div style={{ marginTop: "20px" }} onChange={handleFilterAudio}>
                <div style={{ padding: "10px" }}>
                  <input type={"radio"} value="All" name="a" />
                  <label style={{ paddingLeft: "8px" }}>Below 1,000</label>
                </div>
                <div style={{ padding: "10px" }}>
                  <input type={"radio"} value="Launching soon" name="a" />
                  <label style={{ paddingLeft: "8px" }}>1,000 - 2,000</label>
                </div>
                <div style={{ padding: "10px" }}>
                  <input type={"radio"} value="Just Launched" name="a" />
                  <label style={{ paddingLeft: "8px" }}>2,000 and above</label>
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <Box mt={"40px"} mb="20px">
                <Flex justifyContent={"start"} gap="10px" alignItems={"center"}>
                  <Box>
                    <Select w={"120px"} borderRadius="0" onChange={handleSort}>
                      <option value="">Sort by</option>
                      <option value="asc">Trending</option>
                      <option value="desc">Price</option>
                    </Select>
                  </Box>
                </Flex>
              </Box>
              <SimpleGrid minChildWidth="230px" spacing="20px">
                {productData.length > 0 &&
                  productData.map((elem) => (
                    <Wrap spacing="5px">
                      <WrapItem>
                        <Box
                          key={elem.id}
                          style={{ height: "" }}
                          border="1px solid #e1e1e1"
                          textAlign="left"
                          overflow="hidden"
                          padding={"10px"}
                          width="312px"
                          class="Productbox"
                        >
                          <Link to={`/SingleProductPage/${elem.id}`}>
                            <Image className="ProductImage" src={elem.api_featured_image} w="100%" h="200px" />
                            <Box padding={"20px"} >
                              <Box mb={"10px"}  >
                                <Flex
                                  justifyContent="space-between"
                                  gap="10px"
                                  alignItems={"center"}
                                >
                                  <Text fontSize="sm" color="teal" mt="5px">
                                    {elem.brand}
                                  </Text>
                                </Flex>
                              </Box>
                              <hr />
                             <Box height="50px">
                             <Text fontSize="lg" fontWeight="550" className="ProductText" mt="5px">
                                {elem.name}
                              </Text>
                             </Box>
                              {/* <Text fontSize="lg" fontWeight="550">
                                {elem.description}
                              </Text> */}
                              <Text
                                fontWeight="500"
                                style={{
                                  fontSize: "13.5px",
                                  color: "rgb(122,121,121)",
                                  marginBottom: "2px",
                                }}
                                mt="5px"
                              >
                                {elem.features}
                              </Text>
                              <Flex>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </Flex>
                              <br />
                              <Box>
                                <Flex
                                  justifyContent={"space-between"}
                                  alignItems={"center"}
                                >
                                  <Box>
                                    <h2
                                      style={{ textDecoration: "line-through" }}
                                    >
                                      ₹{(elem.price)*75==0?356:(elem.price)*75}
                                    </h2>
                                  </Box>
                                  <Box>
                                    <h2>₹{((elem.price)*75)*0.88==0?236:((elem.price)*75)*0.88}</h2>
                                  </Box>
                                  <Box>
                                    <p>12%off</p>
                                  </Box>
                                </Flex>
                                
                                <br />
                               
                              </Box>
                            </Box>
                            </Link>
                            
                            <Flex gap="15px">
                                  <Button colorScheme="pink" onClick={()=>handleAddToCart(elem.id)}>
                                    Add To Cart
                                  </Button>
                                  <Button>
                                    <AiOutlineHeart />{" "}
                                  </Button>
                                </Flex>
                            
                        </Box>
                      </WrapItem>
                    </Wrap>
                  ))}
              </SimpleGrid>
            </div>
          </Box>
        </div>
      ) : (
        <div>
          <Box display="flex" w="80%" m="auto">
            <div style={{ width: "100%" }}>
              <br />

              <br />

              <br />

              <SimpleGrid minChildWidth="230px" spacing="40px">
                {productData.length > 0 &&
                  productData.map((elem) => (
                    <Wrap spacing="10px">
                      <WrapItem>
                        <Box
                          key={elem.id}
                          border="1px solid #e1e1e1"
                          textAlign="left"
                        >
                          <Link to={`/SingleProductPage/${elem.id}`}>
                            <Image src={elem.api_featured_image} w="100%" />
                            <Box padding={"20px"}>
                              <Box mb={"10px"}>
                                <Flex
                                  justifyContent="space-between"
                                  gap="10px"
                                  alignItems={"center"}
                                >
                                  <Text fontSize="sm" color="teal">
                                    {elem.brand}
                                  </Text>
                                </Flex>
                              </Box>
                              <hr />
                              <Text fontSize="lg" fontWeight="550">
                                {elem.name}
                              </Text>
                              <p
                                fontWeight="500"
                                style={{
                                  fontSize: "13.5px",
                                  color: "rgb(122,121,121)",
                                  marginBottom: "20px",
                                }}
                              >
                                {elem.features}
                              </p>

                              <Box>
                                <Flex
                                  justifyContent={"space-between"}
                                  alignItems={"center"}
                                >
                                  <Box>
                                    <h2
                                      style={{ textDecoration: "line-through" }}
                                    >
                                     ₹{(elem.price)*75}
                                    </h2>
                                  </Box>
                                  <Box>
                                    <h2>₹{((elem.price)*75)*0.88}</h2>
                                  </Box>
                                  <Box>
                                    <p>12%off</p>
                                  </Box>
                                </Flex>
                               
                              </Box>
                            </Box>
                          </Link>
                          <Flex gap="15px">
                                  <Button colorScheme="pink" onClick={()=>handleAddToCart(elem.id)}>
                                    Add To Cart
                                  </Button>
                                  <Button>
                                    <AiOutlineHeart />{" "}
                                  </Button>
                                </Flex>
                        </Box>
                      </WrapItem>
                    </Wrap>
                  ))}
              </SimpleGrid>
            </div>
          </Box>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
