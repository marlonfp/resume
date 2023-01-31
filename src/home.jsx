import { Heading,Text,VStack,Icon,Image,Box,Center, HStack, Circle,Flex,Link,Container } from "@chakra-ui/react"
import Layout from "./Layout"
import { FaFacebookF,FaLinkedinIn,FaTwitter,FaGithub,FaYoutube} from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LangContext } from './LangContext';
function Facelogo(){
    return (
        <Link href="https://www.facebook.com/euavisei">
    <Circle size='40px' color='white' bg='black' _hover={{backgroundColor:'#4267B2',width:'45px',height:'45px'}}>
    <Icon as={FaFacebookF} />
    </Circle>
    </Link>
    )
}
function Gitlogo(){
    return (
        <Link href="https://github.com/marlonfp">
    <Circle size='40px' color='white' bg='black' _hover={{backgroundColor:'#171515',width:'45px',height:'45px'}}>
    <Icon as={FaGithub} />
    </Circle>
    </Link>
    )
    }
    function Youtubelogo(){
        return (
            <Link href="https://www.youtube.com/channel/UClTl7AhunMMg24k-rH2HDGQ">
        <Circle size='40px' color='white' bg='black' _hover={{backgroundColor:'#FF0000',width:'45px',height:'45px'}}>
        <Icon as={FaYoutube} />
        </Circle>
        </Link>
        )
        }
function Linkedinlogo(){
    return (
        <Link href="https://www.linkedin.com/in/marlon-fantinel-pedroso-601b6420/">
        <Circle size='40px' color='white' bg='black' _hover={{backgroundColor:'#0077B5',width:'45px',height:'45px'}}>    
    <Icon as={FaLinkedinIn} /></Circle>
    </Link>
    )
}
function Twitterlogo(){
    return (
        <Link href="https://twitter.com/marlon_fp">
        <Circle size='40px' color='white' bg='black' _hover={{backgroundColor:'#1DA1F2',width:'45px',height:'45px'}}>    
    <Icon as={FaTwitter} /></Circle></Link>)
}

export default function Home(){
    const {lang,getText}=useContext(LangContext)

return(
    <Container  as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} maxW='2x1' style={{paddingTop:'20px'}} centerContent>  
  <Box alignContent='center' justifyContent='center' minH='100%' bg='rgba(255, 255, 255, 0.7)' sx={{paddingTop:'20px',backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPositionY:'top',borderRadius:'10'}} p={2} w='100%' maxWidth='1080px' >
    <Center>
        <Flex p={5}>
          <VStack>
            <Image boxSize='200px' borderRadius='full' src="/3x4.jfif"/>
          </VStack>
          </Flex>
    </Center>
    <Center>
            <Heading size='lg'>Marlon Fantinel Pedroso</Heading>
            </Center>
            <Center>
            <Text fontSize='md'>{getText(lang==='BR'?'6p':'6e')}</Text>
            </Center>
            <Center>
            <Flex p={5}>
            <HStack spacing='10px'>
                    
                    <Facelogo/>
                    <Linkedinlogo />
                    <Twitterlogo />
                    <Youtubelogo />
                    <Gitlogo />        
             </HStack>
            </Flex>
            </Center>
            <Flex  p={2}>
                <Box bg='white' as={motion.div} w='100%' sx={{borderRadius:'10'}} p={5} initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}  >
                    <Heading size='md'>{getText(lang==='BR'?'12p':'12e')}</Heading>
                    <Flex flex={1}>
                <Text  p={3}>{getText(lang==='BR'?'11p':'11e')}</Text>
            </Flex>

                </Box>
                
            </Flex>
    
  </Box>
  </Container>
)

}