import { useColorMode, Switch, Flex, Button, IconButton, Box, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from "next/link"

function DropDownVavbar(){
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark"
    const [display, changeDisplay] = useState("none")

    return(
        <Flex>
      <Flex 
      pos="fixed"
      top="1rem"
      w="100%"
    //   right="1rem"
      align="center"
      >
        <Flex
          display={['none','none','flex','flex']}
          className="navbar"
        >
          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              MAKEUP
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>FACE</h5>
              <br/>
              <a href="#">BB CREAM </a>
              <a href="#">BLUSH</a>
              <a href="#">Bronzer </a>
              <a href="#">CC Cream </a>
              <a href="#">Contour </a>
              <a href="#">Concealer </a>
              <a href="#">Compact & Powder </a>
              <a href="#">Face Primer </a>
              <a href="#">Foundation </a>
              <a href="#">Highlighters </a>
              <a href="#">Loose Powder </a>
              <a href="#">Makeup Kits </a>
              <a href="#">Makeup Remover </a>
              <a href="#">Setting Spray </a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>EYE</h5>
              <br/>
              <a href="#"> Contact Lenses </a>
              <a href="#"> Eye Kit </a>
              <a href="#"> Eyeliner </a>
              <a href="#"> Eye Shadow </a>
              <a href="#"> Eye Primer </a>
              <a href="#"> Eye-Palettes </a>
              <a href="#"> Eye Makeup Remover </a>
              <a href="#"> Eye Brow Enhancers </a>
              <a href="#"> False Eyelashes </a>
              <a href="#"> Kajal </a>
              <a href="#"> Mascara </a>
              <a href="#"> Under Eye Concealer </a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>LIPS</h5>
              <br/>
              <a href="#">Lipstick</a>
              <a href="#">Liquid Lipstick</a>
              <a href="#">Lip Liner</a>
              <a href="#">Lip Gloss</a>
              <a href="#">Lip Balm</a>
              <a href="#">Lip Crayon</a>
              <a href="#">Lip Stain</a>
              <a href="#">Lip Stain</a>
            </div>

            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>NAILS</h5>
              <br/>
              <a href="#">Manicure & Pedicure Kits</a>
              <a href="#">Nail Polish</a>
              <a href="#">Nail Care</a>
              <a href="#">Nail Polish Sets</a>
              <a href="#">Nail Art Kits</a>
              <a href="#">Nail Polish Remover</a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>TOOL BRUSHES</h5>
              <br/>
              <a href="#">Blush Brush</a>
              <a href="#">Eyelash Curlers</a>
              <a href="#">Eye Brush</a>
              <a href="#">Face Brush</a>
              <a href="#">Lip Brush</a>
              <a href="#">Makeup Pouches</a>
              <a href="#">Mirrors</a>
              <a href="#">Sponges & Applicators</a>
              <a href="#">Sharpeners</a>
              <a href="#">Tweezers</a>
            </div>            
          </Box>
        </Box>
          </Box>

          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              SKIN
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
          <div className="column">
            <br/>
              <h5 className='dropdown-heading'>EYE CARE</h5>
              <br/>
              <a href="skin1.html">Dark Circles </a>
              <a href="#">Eye Contour Care</a>
              <a href="#">Eye Cream</a>
              <a href="#"> Eye Masks </a>
              <a href="#"> Eye Serums </a>
              <a href="#">Puffiness </a>
              <a href="#">Under Eye Creams </a>
              <a href="#">Under Eye Wrinkles</a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>FACE CARE</h5>
              <br/>
              <a href="#"> Anti- Ageing Creams </a>
              <a href="#"> Bleach Creams </a>
              <a href="#"> Brightening Cream </a>
              <a href="#"> Face Wash </a>
              <a href="#"> Facial Wipes </a>
              <a href="#"> Face Oil </a>
              <a href="#"> Face Cleansers </a>
              <a href="#"> Facial Kits </a>
              <a href="#"> Face Tools </a>
              <a href="#"> Moisturizer </a>
              <a href="#"> Mask & Peels </a>
              <a href="#">Serum</a>
              <a href="#">Toner & Astringents</a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>BODY CARE</h5>
              <br/>
              <a href="#"> All Cream</a>
              <a href="#">Body Moisturizers</a>
              <a href="#"> Body Toners</a>
              <a href="#">Body Sun Care</a>
              <a href="#">Brightening Lotion</a>
              <a href="#">Dark Circles & Wrinkles</a>
              <a href="#"> Day Cream</a>
              <a href="#">Foot Cream</a>
              <a href="#"> Hair Remover Cream</a>
              <a href="#"> Hand Creams</a>
              <a href="#">Hands & Feet</a>
              <a href="#"> Kits & Combost</a>
              <a href="#"> Night Cream</a>
              <a href="#"> Neck Creams</a>
            </div>

            {/* <div className="column">
              <h5><img width="800px" src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg" alt="" /></h5>
            </div> */}
          </Box>
        </Box>
          </Box>

          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              HAIR
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
          <div className="column">
            <br/>
              <h5 className='dropdown-heading'>HAIR CARE</h5>
              <br/>
              <a href="#">Color Protection </a>
              <a href="#">Dandruff</a>
              <a href="#">Dry Shampoo</a>
              <a href="#"> Gels & Waxes </a>
              <a href="#">Hair Spray</a>
              <a href="#">Hair Color/ Dye</a>
              <a href="#">Hair Creams & Masks </a>
              <a href="#">Hair Styling</a>
              <a href="#">Hairfall & Thinning </a>
              <a href="#">Straighteners </a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>HAIR LOSS</h5>
              <br/>
              <a href="#"> Conditioner </a>
              <a href="#"> Hair Oil </a>
              <a href="#"> Hair Serum </a>
              <a href="#"> Hair Growth Solutions </a>
              <a href="#"> Shampoo </a>
            </div>
            {/* <div className="column">
              <h5><img width="1000px" src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg" alt="" /></h5>
            </div>   */}
          </Box>
        </Box>
          </Box>
          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              PERSONAL CARE
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
          <div className="column">
            <br/>
              <h5 className='dropdown-heading'>BATH & BODY</h5>
              <br/>
              <a href="#">Body Cleansers </a>
              <a href="#">Body Massage Oil</a>
              <a href="#">Body Wash</a>
              <a href="#"> Creams </a>
              <a href="#">Essential Oils</a>
              <a href="#">Foot Cream</a>
              <a href="#">Scrubs & Exfoliants </a>
              <a href="#">Ubtan & Face Packs</a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>BATHING ACCESSORIES</h5>
              <br/>
              <a href="#"> Bath Brushes </a>
              <a href="#"> Loofahs </a>
              <a href="#"> Shower Caps </a>
              <a href="#"> Sponges </a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>BATH & SHOWER</h5>
              <br/>
              <a href="#"> Body Soaps </a>
              <a href="#"> Shower Ge </a>
              <a href="#"> Shower Caps </a>
            </div>
            {/* <div className="column">
              <h5><img width="700px" src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg" alt="" /></h5>
            </div> */}
          </Box>
        </Box>
          </Box>
          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              MOMS &BABY CARE
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
          <div className="column">
            <br/>
              <h5 className='dropdown-heading'>BABY CARE</h5>
              <br/>
              <a href="#">Bath Time </a>
              <a href="#">Diapers</a>
              <a href="#">Lotions & Creams</a>
              <a href="#"> Creams </a>
              <a href="#"> Oils</a>
              <a href="#">Powder</a>
              <a href="#">Shampoo</a>
              <a href="#">Soaps</a>
              <a href="#">Sterilizer & Cleaners</a>
              <a href="#">Rash Cream</a>
              <a href="#">Wipes</a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>MOM CARE</h5>
              <br/>
              <a href="#"> Lotions & Creams </a>
              <a href="#"> Personal Care </a>
            </div>
            {/* <div className="column">
              <h5><img width="1000px" src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg" alt="" /></h5>
            </div> */}
          </Box>
        </Box>
          </Box>
          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              FRAGRANCE
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
          <div className="column">
            <br/>
              <h5 className='dropdown-heading'></h5>
              <br/>
              <a href="#"> Perfumes </a>
              <a href="#">Deodorants roll ons</a>
              <a href="#">Body Mist/Spray</a>
            </div>
            {/* <div className="column">
              <h5><img width="300px" src="https://github.com/Harshitmax2022/beauty-bebo/blob/master/toppic4.jpg?raw=true" alt="" /></h5>
            </div> */}
          </Box>
        </Box>
          </Box>
          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              AYURVEDA
            </Button>
            <Box className="dropdown-content">
          <Box className="row">
          <div className="column">
            <br/>
              <h5 className='dropdown-heading'>NATURAL SKIN CARE</h5>
              <br/>
              <a href="#">Body Wash </a>
              <a href="#">Body Lotion</a>
              <a href="#">Lotions & Creams</a>
              <a href="#"> Cleansers </a>
              <a href="#"> Cream</a>
              <a href="#">Eye Care</a>
              <a href="#">Face Wash</a>
              <a href="#">Gel</a>
              <a href="#">Lip Care</a>
              <a href="#">Mask</a>
              <a href="#">Pack</a>
              <a href="#">Scrub</a>
              <a href="#">Sun Protection</a>
            </div>
            <div className="column">
            <br/>
              <h5 className='dropdown-heading'>ATURAL HAIR CARE</h5>
              <br/>
              <a href="#"> Conditioner</a>
              <a href="#"> Hair Oils </a>
              <a href="#"> Hair Serum </a>
              <a href="#"> Hair Gel</a>
              <a href="#"> Shampoo</a>
            </div>
            {/* <div className="column">
              <h5><img width="1000px" src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg" alt="" /></h5>
            </div> */}
          </Box>
        </Box>
          </Box>
          <Box className="dropdown" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              BRANDS
            </Button>
            <Box className="dropdown-content">
            <div className="brands">
            <h3>Top Brands</h3>
            <h3>View All</h3>
          </div>
          <div className="row brands">
            <div className="column extra">
              <div className="bransformation">
                <div>LAKME</div>
                <div>lOREAL-PARIS</div>
                <div>JOY</div>
                <div>AROMA MAGIC</div>
                <div>LOTUS HERBALS</div>
                <div>BIOTIQUE</div>
                <div>VLCC</div>
                <div>VEGA</div>
                <div>MAYBELLINE</div>
                <div>MAMAEARTH</div>
                <div>CHICCO</div>
                <div>NEUTROGENA</div>
              </div>
            </div>
          </div>
        </Box>
          </Box>
        </Flex>

        <Flex marginLeft="300px">
        <IconButton 
          aria-label='Open Menu'
          size = "lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex','flex','none','none']}
          onClick ={() => changeDisplay('flex')}
        />
        </Flex>
      </Flex>

      <Flex
        w="100vw"
        bgColor="#c60277"
        color="white"
        zIndex={20}
        h="100vh"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
            <IconButton 
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            color="black"
            icon={<CloseIcon />}
            onClick ={() => changeDisplay('none')}
            />
        </Flex>
        <Flex
          flexDir="column"
          align="center"
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">MAKEUP
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">SKIN
            </Button>
          </NextLink>

          <NextLink href="/product" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">HAIR
            </Button>
          </NextLink>
          <NextLink href="/product" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">PERSONAL CARE
            </Button>
          </NextLink>
          <NextLink href="/product" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">MOMS &BABY CARE
            </Button>
          </NextLink>
          <NextLink href="/product" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">FRAGRANCE
            </Button>
          </NextLink>
          <NextLink href="/product" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">AYURVEDA
            </Button>
          </NextLink>
        </Flex>
    
        </Flex>

      </Flex>

      
    )
}

export default DropDownVavbar;

