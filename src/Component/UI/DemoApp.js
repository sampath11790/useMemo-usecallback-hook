import React, { useMemo,useState} from "react";
import classes from './DemoApp.module.css'
import Button from "../Button/Button";

const DemoApp=(props)=>{
   const [ sortList,setoraderState]=useState(true)
   const [ c,setc]=useState([])
   const {items}=props
    
        let b;
        b= useMemo(()=>{
          return  items.sort((a,b)=>a-b)
        })
       
     console.log('demoApp')
     console.log(b)
      const x=b.map((item)=><li className={classes.li} key={item}>{item}</li>)
      const y=c.map((item)=><li className={classes.li} key={item}>{item}</li>)
      const onchangerOrder=()=>{
      const n=items.sort((a,b)=>b-a)
      console.log(n)
       setoraderState(!sortList) 
       setc([...n])
    } 



    return(
        <div >
            { sortList ? x:y}
        <Button Name='descending order' onClick={onchangerOrder}></Button>
        </div>
    )
}
export default React.memo(DemoApp)