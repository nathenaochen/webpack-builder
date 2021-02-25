
import {version} from '../package.json'
console.log(version);

/**
 * @param money  金额.
 */
export function formatmoney(money: string | number):string{
  let a = [1,2,3]
  let obj = {a:1}

  console.log('formatmoney',[...a],a.includes(3),new Set(a),obj?.a, Array.from({length:3}));
  for(let v of a){
    console.log(v,'of');
  }
  return 'money'
}

export function formatmoney1(money: string | number):string{
  console.log('formatmoney1');
  return 'money1'
}

export function aa(money: string | number):string{
  console.log('aa');
  return 'aa';
}

function bb(){}