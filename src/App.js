import React,{useCallback,useState,useMemo} from "react";
import Button from "./Component/Button/Button";
import Title from "./Component/UI/Title";
import DemoApp from "./Component/UI/DemoApp";
function App(props) {
 const [listname,setlistname]=useState('Old Name')
 const onClickHandler=useCallback(()=>{
  //props.stateHandler() 
  setlistname('New Title')
 },[])

    const arr=useMemo(()=>{
      return [4,3,10,2,7,1,8]
    },[])
    // const onchangerOrder=()=>{
    // //   sortList=[1,2,3,4,5,6]
    // // setoraderState(true)
    //   console.log('change order')
    //  }
  return (
    <div>
      <Title title={listname}></Title>
      <DemoApp  items={arr} ></DemoApp>
      <Button Name='Change Title' onClick={onClickHandler}   ></Button>
      {/* <Button Name='decending order' onClick={onchangerOrder}></Button> */}
    </div>
  );
}

export default App;
