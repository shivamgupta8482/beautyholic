import { Container, Image } from "@chakra-ui/react";

export default function Banner4 ( ){
    return (
        <>
            <Container maxW={{base : '100%', md : '90%', lg :'90%'}} h={{base : '100px', md : '200px', lg : '300'}} mt='3%'>
                    <Image h='100%' w='100%' src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"/>
            </Container>
        </>
    );
};