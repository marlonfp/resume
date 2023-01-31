
import { Container } from "@chakra-ui/react"
import { motion } from "framer-motion";
export default function Layout({children}){
    

    return(
        <>
        
        <Container  maxW='2x1' style={{paddingTop:'20px'}} centerContent>
            
            {children}
        </Container>
        
        </> 
    )

  }