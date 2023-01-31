import { Box,Stack,Heading,Icon,Text,SimpleGrid,Progress,useDisclosure,Container,Circle } from "@chakra-ui/react"
import { SlBadge} from "react-icons/sl";
import { useState,useEffect } from "react"
import { motion } from "framer-motion"
import { useContext } from 'react';
import { LangContext } from './LangContext';
export default function Skills(){
  const {lang,getText}=useContext(LangContext)
//useEffect for each status till nivel
const certif=[
  {'id':1,'name':'Lean Six Sigma Black Belt','issuer':'CETEC'},
  {'id':2,'name':'Portfolio Management','issuer':'VE3'},
  {'id':3,'name':'Agile Coach','issuer':'IBAC'},
  {'id':4,'name':'FLAPs Team Management','issuer':'IBAC'},
  {'id':5,'name':'S&OP Master','issuer':'Cebralog'},
  {'id':6,'name':'LOGO Language','issuer':'Col São Luis'},
  {'id':7,'name':'Linux Network ADM','issuer':'Feevale'},
  {'id':8,'name':'Computer Network Design','issuer':'Feevale'},
  {'id':9,'name':'Oil Painting art','issuer':'Art7'},
 ]


function Renderskills(){
  


  const [habilidades,sethabilidades]=useState([
    
  {'id':1,'nome':'PowerBI','nivel':60,'status':0},
  {'id':2,'nome':'Tableu','nivel':70,'status':0},
  {'id':3,'nome':'Access','nivel':70,'status':0},
  {'id':4,'nome':'React','nivel':60,'status':0},
  {'id':5,'nome':'React Native','nivel':60,'status':0},
  {'id':6,'nome':'PHP','nivel':60,'status':0},
  {'id':7,'nome':'Nodejs','nivel':60,'status':0},
  {'id':8,'nome':'Delphi','nivel':60,'status':0},
  {'id':9,'nome':'PASCAL','nivel':60,'status':0},
  {'id':10,'nome':'VBA','nivel':70,'status':0},
  {'id':11,'nome':'AdonisJS','nivel':70,'status':0},
  {'id':12,'nome':'Python','nivel':60,'status':0},
  {'id':13,'nome':'Bisagi','nivel':75,'status':0},
  {'id':14,'nome':'React','nivel':60,'status':0},
  {'id':15,'nome':'Wordpress','nivel':75,'status':0},
  {'id':16,'nome':'Bootstrap','nivel':80,'status':0},
  {'id':17,'nome':'Tailwind','nivel':40,'status':0},
  {'id':18,'nome':'Chakra UI','nivel':60,'status':0},
  {'id':31,'nome':'Chat GPT','nivel':80,'status':0},
  {'id':19,'nome':'Network Design','nivel':80,'status':0},
    {'id':20,'nome':'Inventory Management','nivel':80,'status':0},
    {'id':21,'nome':'Material and Production Planning','nivel':80,'status':0},
    {'id':22,'nome':'Strategic Planning','nivel':80,'status':0},
    {'id':23,'nome':'Agile management','nivel':80,'status':0},
    {'id':24,'nome':'Process mapping and Improvement','nivel':80,'status':0},
    {'id':25,'nome':'Supplier development','nivel':80,'status':0},
    {'id':26,'nome':'Excel','nivel':95,'status':0},
    {'id':27,'nome':'WMS Implementation','nivel':75,'status':0},
    {'id':28,'nome':'SAP MM','nivel':50,'status':0},
    {'id':29,'nome':'JD Edwards','nivel':75,'status':0},
    {'id':30,'nome':'EDI','nivel':60,'status':0},
    
  
  
  ,])
  const {isOpen,onToggle}=useDisclosure();

  useEffect(() => {
    
    const timer = setInterval(() => {
    const updatedHabilidades = habilidades.map(habilidade => {
      if (habilidade.status !== habilidade.nivel) {
        const nprogress = habilidade.status + 5;
        return { ...habilidade, status: nprogress };
      }
      return habilidade;
    });
    sethabilidades(updatedHabilidades);
    }, 50);
    if(habilidades.every(habilidade => habilidade.status === habilidade.nivel)) {
      clearInterval(timer);
      return;
    }
    return () => {
      clearInterval(timer);
    };
  }, [habilidades]);


const dados= habilidades.map((element)=>{
  return(
    
    <Box key={'a'+element.id}>
      <Heading key={'b'+element.id} as='h5' size='xs' sx={{paddingBottom:'5px'}}>{element.nome}</Heading>
    <Progress key={'c'+element.id} isAnimated hasStripe  colorScheme='blue' height='25px' value={element.status} />
    </Box>
    
  )
})
return(
  <SimpleGrid  bgColor='white' columns={[1, null, 2]} spacing={5} sx={{padding:'20px',borderRadius:10}}>
  
  {dados}
  </SimpleGrid>
)  

}

const Hgrid=()=>{
  const badges=certif.map((element)=>{
    return(
      <Box as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} key={'f'+element.id}>
        <Stack flex={1} flexDirection='row' align='center'>
          <Circle bgColor='#0077B5' size='25px' color='white' sx={{marginRight:3}}><Icon as={SlBadge} /></Circle>
        
         <Heading key={'g'+element.id} as='h4' size='sm' sx={{paddingBottom:'5px'}}>{element.name}</Heading>
         </Stack>
         <Text sx={{paddingLeft:'37px'}} fontSize='xs'>{element.issuer}</Text>
      </Box>
    )
  })

  return(
    <SimpleGrid bgColor='white' columns={[1, null, 2]} spacing={5} sx={{padding:'20px',borderRadius:10}}>
    
    {badges}
    </SimpleGrid>
  )
}


return(
  <Container  as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} maxW='2x1' style={{paddingTop:'20px'}} centerContent> 
  <Box  alignContent='center' p={5} justifyContent='center' minH='100%' bg='rgba(255, 255, 255, 0.7)' sx={{paddingTop:'20px',backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPositionY:'top',borderRadius:'10'}}  w='100%' maxWidth='1080px'>
  <Heading size='md' p={5}>{getText(lang==='BR'?'7p':'7e')}</Heading>  
  <Hgrid/>
  <Heading size='md' p={5}>{getText(lang==='BR'?'8p':'8e')}</Heading>
  <Renderskills />
  
  
  </Box>
  </Container>
 

)    
}