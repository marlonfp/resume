import { Container,Box,Heading,Flex} from "@chakra-ui/react"
import { motion } from "framer-motion";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {CalendarIcon } from '@chakra-ui/icons'
import { useContext } from 'react';
import { LangContext } from './LangContext';
const history=[
   {'position1':'Xcelis Solutions - Consultor Senior de Supply Chain',
    'position2':'Xcelis Solutions - Senior Supply Chain Consultant', 
    'location1':'São Leopoldo, RS Brasil',
    'location2':'São Leopoldo, RS Brazil',
    'activity1':'Network Design, Gestão de Inventário, S&OP, Planejamento e melhoria de processos.',
    'activity2':'Network Design, Intentory Management, S&OP, Demand Planning and Process Improvement',
    'date1':'2021-Atual',
    'date2':'2021-Actual',
  },
  {'position1':'Fockink - Consultor Senior de Supply Chain',
    'position2':'Fockink - Senior Supply Chain Consultant', 
    'location1':'Panambi, RS Brasil',
    'location2':'Panambi, RS Brazil',
    'activity1':'Gestão de Inventário, Desenvolvimento de Fornecedores , Planejamento e melhoria de processos.',
    'activity2':'Intentory Management, Supplier Developmento (BCC and domestic), Demand Planning and Process Improvement',
    'date1':'2020-2021',
    'date2':'2020-2021',
  },
  {'position1':'AGCO - Gerente de Planejamento de Materiais América do Sul',
    'position2':'AGCO - Material Planning Manager South America', 
    'location1':'Canoas, RS Brasil',
    'location2':'Canoas, RS Brazil',
    'activity1':'Gestão de Inventário,S&OP , Novos Produtos , Planejamento de produção, gestão da demanda e melhoria de processos.',
    'activity2':'Inventory management ,S&OP , new product introduction , production planning, demanda management and process improvement.',
    'date1':'2003-2020',
    'date2':'2003-2020',
  },

]

export default function Experience(){
  const {lang,getText}=useContext(LangContext)
function Timeline(){
  const dados=history.map((element)=>{
    return(
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0077B5', color: '#fff' }}
          contentArrowStyle={{ borderRight: '15px solid  #0077B5' }}
          date={lang==='BR'? element.date1:element.date2}
          iconStyle={{ background: '#0077B5', color: '#fff' }}
          icon={<CalendarIcon />}
          id={'a'+element.id}
        >
          <h3 className="vertical-timeline-element-title">{lang==='BR'? element.position1:element.position2}</h3>
          <h4 className="vertical-timeline-element-subtitle">{lang==='BR'? element.location1:element.location2}</h4>
          <p>{lang==='BR'? element.activity1:element.activity2}</p>
        </VerticalTimelineElement>
    )
  
  })
  
  return(
    <VerticalTimeline layout="1-column-left">
       {dados}
    </VerticalTimeline>

  )
}





return(
  <Container  as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} maxW='2x1' style={{paddingTop:'20px'}} centerContent> 
  <Box alignContent='center' justifyContent='center' minH='100%'  bg='rgba(255, 255, 255, 0.7)' sx={{paddingTop:'20px',borderRadius:'10'}} p={2} w='100%' maxWidth='1080px' >
  <Flex p={5}>
  <Heading size='md'>{getText(lang==='BR'?'10p':'10e')}</Heading>
    
  </Flex>
  <Box>
  <Timeline/>
  </Box>
  
  </Box>
  </Container> 
)    
}