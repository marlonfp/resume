import {useForm} from 'react-hook-form';
import { useContext } from 'react';
import { LangContext } from './LangContext';
import { FormControl,Box, FormLabel, Input, Button,FormErrorMessage, Textarea } from '@chakra-ui/react';
export default function Contactform(){
    const {lang,getText}=useContext(LangContext)
const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

const key='362c650a-a661-426b-9ab6-b423af73eea9'  
const onSubmit= async(values)=> {
    ///const formData= new FormData(values)
    
    let object=Object.assign(values,{'access_key':key});
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
  

  }


return(
  
  <Box p={5} m={5} bg='white' sx={{borderRadius:10}} flex={[1,null,1]}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl isInvalid={errors.name}>
      <FormLabel htmlFor='name'>{getText(lang==='BR'?'1p':'1e')}</FormLabel>
      <Input type='name' id='name' 
                  {...register('name', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })} 
      />
      <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>  
      <FormControl isInvalid={errors.email}>
      <FormLabel htmlFor='email'>{getText(lang==='BR'?'2p':'2e')}</FormLabel>
      <Input type='email' id='email' 
                  {...register('email', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })} 
      />
      <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.message}>
      <FormLabel htmlFor='message'>{getText(lang==='BR'?'3p':'3e')}</FormLabel>
      <Textarea type='text'  id='message' 
                  {...register('message', {
                    required: 'This is required',
                    minLength: { value: 10, message: 'Minimum length should be 10' },
                  })} 
      />
      <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>  
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>{getText(lang==='BR'?'4p':'4e')}</Button>
    </form>
  </Box>
  
)    
}