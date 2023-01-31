import { Route,Routes,useLocation } from 'react-router-dom';
import Home from './home';
import Skills from './skills';
import Experience from './experience';
import Portfolio from './portfolio';
import Contact from './contact';
import { AnimatePresence } from 'framer-motion';
export default function AnimatedRoutes(){
    const location=useLocation()
return(
        <AnimatePresence>   
        <Routes location={location} key={location.pathname} >
           <Route path='/' element={<Home/>}/>
           <Route path='/contact' element={<Contact/>} />
           <Route path='/portfolio' element={<Portfolio/>} />
           <Route path='experience' element={<Experience/>}/>
           <Route path='/skills' element={<Skills/>} />
         </Routes>
         </AnimatePresence>

)
}