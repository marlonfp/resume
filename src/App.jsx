
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';
import LangProvider from './LangContext';

import AnimatedRoutes from './AnimatedRoutes';
function App( ) {
    
  return (
    
    <ChakraProvider>
      <LangProvider>
      <Header/>
      <Router>
        
         <AnimatedRoutes/>
      </Router>
      </LangProvider>
    
    

    </ChakraProvider>
    
  )
}

export default App
