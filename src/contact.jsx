import { Box,Flex,Heading, Image, Hide,Container } from "@chakra-ui/react"
import Contactform from "./Contactform"
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LangContext } from './LangContext';
export default function Contact(){
  const {lang,getText}=useContext(LangContext)
return(

<Container  as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} maxW='2x1' style={{paddingTop:'20px'}} centerContent>   <Box alignContent='center' justifyContent='center' minH='100%' bg='rgba(255, 255, 255, 0.7)'  sx={{paddingTop:'20px',borderRadius:'10'}} p={2} w='100%' maxWidth='1080px' >
  <Flex p={5} flex={2}>
  <Heading size='md'>{getText(lang==='BR'?'4p':'4e')}</Heading>

  </Flex >
  <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}   >
  <Flex direction={{base:'column',md:'row'}}>
    <Contactform />
    <Hide below="md">
      <Box  p={5} justify='center' flex={[1,null,null]} >
        <Image src="contact_me.jpg" borderRadius={10} boxSize='100%'/>
      </Box>
      </Hide>
    </Flex>
    </motion.div>
  </Box>
 </Container> 

)    
}