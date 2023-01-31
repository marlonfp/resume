import { Box,Flex,Switch,FormControl,Text,Stack,Collapse,Link,IconButton,useColorModeValue,useDisclosure,HStack, Image } from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons';
  import Flag from 'react-flagkit';
 import { useContext } from "react";
 import { LangContext } from "./LangContext";
 
const RenderLink=({url,texto})=>{
    const linkColor = useColorModeValue('#063970', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    return(
        <Link
           p={2}
           href={url}
           fontSize={'sm'}
           fontWeight={500}
           color={linkColor}
           _hover={{
           textDecoration: 'none',
           color: linkHoverColor,
                }}>{texto}</Link>
    )
}

  const MobileNavItem = ({ label, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
            
          }}>
          <Text
            fontWeight='bold'
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Flex>
      </Stack>
    );
  };
export default function Header(){
    const {isOpen, onToggle}=useDisclosure();
    const {lang,changelang}=useContext(LangContext)
    const MobileNav = () => {
      return (
        <Stack
          bg={useColorModeValue('rgba(255, 255, 255, 0.5)', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
          <MobileNavItem label={lang==='BR'?'Sobre':'About'} href='/' />
          <MobileNavItem label={lang==='BR'?'Habilidades':'Skills'} href='/skills' />
          <MobileNavItem label={lang==='BR'?'Experiência':'Experience'} href='/experience' />
          <MobileNavItem label={lang==='BR'?'Portfólio':'Portfolio'} href='/portfolio' />
          <MobileNavItem label={lang==='BR'?'Contato':'Contact'} href='/contact' />
          <Flex alignItems='center' >
          <Flag country="BR" />
      <Switch id='language' sx={{paddingLeft:2,paddingRight:2}} onChange={changelang} isChecked={lang==='US'} colorScheme='red' />
  <Flag country="US" />   

          </Flex>
        </Stack>
      );
    };
    const DesktopNav = () => {
      return(
          <>
       <RenderLink url='/' texto={lang==='BR'?'Sobre':'About'} />
       <RenderLink url='/skills' texto={lang==='BR'?'Habilidades':'Skills'} />
       <RenderLink url='/experience' texto={lang==='BR'?'Experiência':'Experience'} />
       
       <RenderLink url='/portfolio' texto={lang==='BR'?'Portfólio':'Portfolio'} />
       <RenderLink url='/contact' texto={lang==='BR'?'Contato':'Contact'} />
       <Flag country="BR" />
  
       <FormControl display='flex' alignItems='center'>
           <Switch id='language' onChange={changelang} isChecked={lang==='US'} colorScheme='red' />
       </FormControl>
       <Flag country="US" />   
  
       </>
      )
  }    


return(
    <Box >
      <Flex
        bg={useColorModeValue('rgba(255, 255, 255, 0.7)', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
                   <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>

                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                      <Link href="/">
                        <Image src="/Logo_fantinel.png" width='120px' style={{marginRight:'10px'}} objectFit='contain'/>
                        </Link>  
                            
                          
                    </Flex>
                    
                    <Stack
                      flex={{ base: 1,md: 0 }}
                      justify='center'
                      direction={'row'}
                      spacing={6}>
                      <Flex display={{ base: 'none', md: 'flex' }} justify='center' sx={{paddingRight:10}} gap={2}>
                          <DesktopNav />
                      </Flex>
                  
                  </Stack>  
        </Flex>
                  
        
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
    </Box>

)


   
}