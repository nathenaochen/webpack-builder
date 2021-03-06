import React from 'react';
import ReactDom from 'react-dom';
import Hoc from 'components/Hoc';
import {getUser,register,getToken,validatetoken} from 'apiService/service';
import Hello from 'components/Hello/index';

function Index(){

  async function testGet(e:React.MouseEvent){
    e.stopPropagation();
    const res = await getUser({username:'yt'});
    console.log(res.result)
  }

  async function testPost(e:React.MouseEvent){
    e.stopPropagation();
    const res = await register({username:'lilei',password:'111111',passwordSure:'111111'});
    console.log(res.result)
  }

  async function testGetToken(e:React.MouseEvent){
    e.stopPropagation();
    const res = await getToken({username:'lilei',password:'111111'});
    console.log(res.result)
    const resv = await testValidateToken(res.result);
    console.log(resv);
  }

  async function testValidateToken(token:any){
    const res = await validatetoken({withtoken:token.token});
    console.log(res.result)
  }

  return (
    <div onClick={()=>{console.log(1)}}>
      <Hello />
      <div onClick={(e:React.MouseEvent)=>{testGet(e);}}>get Test</div>
      <div onClick={(e:React.MouseEvent)=>{testPost(e);}}>post Test</div>
      <div onClick={(e:React.MouseEvent)=>{testGetToken(e);}}>get token</div>
      {/* <div onClick={(e:React.MouseEvent)=>{testValidateToken(e);}}>validate token</div> */}
    </div>
  )
}
const HocIndex = Hoc(Index);

ReactDom.render(
  <HocIndex />,
  document.getElementById('root')
);
