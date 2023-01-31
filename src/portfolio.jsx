import { Container,Box,Flex,Heading,Card,CardBody,Stack,Button,Text,Image,CardFooter,SimpleGrid,Link } from "@chakra-ui/react"

import { motion } from "framer-motion";
import { useContext } from 'react';
import { LangContext } from './LangContext';
const galery=[
  {'title':'Minerador (XMR)','brief':'Minerador online de monero XMR através do uso da CPU','url':'https://xmr.fantinel.org','image':'/xmr.jpg'
  ,'title2':'Miner Monero (XMR)','brief2':'Monero Webminer (XMR) using CPU power' 
},
  {'title':'Minerador (TRTL) online','brief':'Minerador online de monero XMR através do uso da CPU','url':'https://trtl.fantinel.org','image':'/trtl.jpg'
  ,'title2':'Miner TurtleCoin (TRTL)','brief2':'TurtleCoin Webminer (TRTL) using CPU power'
},
  {'title':'Blog Euavisei','brief':'Blog com postagens de Humor, Variedades e curiosidades.','url':'https://euavisei.com','image':'/euavisei.jpg'
  ,'title2':'Euavisei Blog','brief2':'Humor daily web blog'
},
  {'title':'Globo Paineis','brief':'Empresa de publicidade em painéis de LED','url':'http://www.globopaineis.com.br/','image':'/globo.jpg'
  ,'title2':'Globo Paineis','brief2':'AD Company that sell dinamica outdoor ads'
},
  {'title':'Companhia Turismo','brief':'Agencia de Turismo de São Leopoldo-RS com pacotes escolares e grupos','url':'http://companhiaturismo.com.br/','image':'/ciatur.jpg'
  ,'title2':'Companhia Turismo','brief2':'Travel agency focused in School and private groups'
},
  
]


export default function Portfolio(){
  const {lang,getText}=useContext(LangContext)
   function RenderCards(){
 
    const dados= galery.map((element)=>{
      return(
        <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}   >
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={element.image}
              borderRadius='lg'  boxSize='290px' objectFit='cover'/>
            <Stack mt='4' hidden={lang==='US'}>
                <Heading size='md'>{element.title}</Heading>
                <Text>{element.brief}</Text>
            </Stack>
            <Stack mt='4' hidden={lang==='BR'}>
                <Heading size='md'>{element.title2}</Heading>
                <Text>{element.brief2}</Text>
            </Stack>
          </CardBody>
          
          <CardFooter>
               <Link href={element.url}>
                <Button variant='ghost' colorScheme='blue' >
                {getText(lang==='BR'?'9p':'9e')}
                </Button>
              </Link>
            
          </CardFooter>
        </Card>
        </motion.div>
      )
    })
    return(
      <SimpleGrid columns={[1, null, 3]} spacing={5} sx={{paddingLeft:'20px',paddingTop:'20px',paddingRight:'20px'}}>
       {dados}
        </SimpleGrid>  
    )
  }



return(

<Container  as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} maxW='2x1' style={{paddingTop:'20px'}} centerContent>   
  <Box as={motion.div} initial={{opacity:0}} animate={{opacity:1}} alignContent='center' justifyContent='center' minH='100%' bg='rgba(255, 255, 255, 0.7)' sx={{paddingTop:'20px',borderRadius:'10'}} p={2} w='100%' maxWidth='1080px' >
  <Flex p={5}>
  <Heading size='md'>Portfolio</Heading>

  </Flex>
  <SimpleGrid columns={[1, null, 3]} spacing={5} sx={{paddingLeft:'20px',paddingTop:'20px',paddingRight:'20px'}}>
 </SimpleGrid>  
    <RenderCards/>
  </Box>
 </Container> 

)    
}