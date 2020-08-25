import React,{useState, useEffect} from 'react';

interface globalData {
  a:number,
  b:string
}

function Hoc(WrapComponent: React.ComponentType<globalData>){
  return () => {

    return (
      <WrapComponent a={1} b={'23'}/>
    )
  }
}

export default Hoc;