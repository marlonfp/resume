import { createContext,useState } from "react";
import { i18n } from "./i18n";
export const LangContext=createContext({});
function LangProvider({children}){
   const [lang,setLang]=useState('BR');
   

function getText(text){
    let value = i18n.map(obj => obj.key === text ? obj.text : null).filter(val => val !== null)[0];
    return value;

}

function changelang(){
    if (lang==='BR'){setLang('US');console.log('Lang selected is:US')}else{setLang('BR');console.log('Lang selected is:BR')}
    
}   
return(
   <LangContext.Provider value={{lang,changelang,getText}}>
     {children}
   </LangContext.Provider>
)    
}
export default LangProvider;