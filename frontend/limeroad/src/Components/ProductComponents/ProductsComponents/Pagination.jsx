import { Button } from '@chakra-ui/react';
import React from 'react'

export const Pagination = ({tp,page}) => {
  const [ar,setar]=React.useState([]);
  const decidepage=(t,c)=>{
    let tp=t;
let cp=c;
let arr=[];
let count=0;
if(tp<=10){
  // arr.push("Previous")
  for(let i=1;i<=10;i++){
    arr.push(i);
  }
  // arr.push("Next")
}
else{
  // arr.push("Previous")
for(let i=1;i<=tp;i++){
  count++;

  if(i===1||i===tp){
    arr.push(i)
  }
  else if(i===2||i===tp-1){
      if(cp>5){
    arr.push("...");  
    }
    else{
      if(i===tp-1){arr.push("...");}
      if(i===2){arr.push(i)}
    }
  }
  else{
if(cp>5){
    if(i===cp-3||i===cp-2||i===cp-1||i===cp+1||i===cp+2||i===cp)
    arr.push(i)
  }
     else{
    if(count<=8){arr.push(i)}
  }
}
 
};
// arr.push("Next")
}
//console.log(arr);
setar(arr);
  }
//console.log(ar,"ar")
  React.useEffect(()=>{
    decidepage(tp,page)
  },[tp,page])
  return (
    <div>
      <Button isDisabled={page===1}>Previous</Button>
      {ar.length>0?(
        ar.map((el,i)=>(
          <Button key={i} backgroundColor={el===page?"rgb(153,204,51)":"white"}>{el}</Button>
        ))
      )
      :null}
      <Button isDisabled={page===tp}>Next</Button>
    </div>
  )
}

