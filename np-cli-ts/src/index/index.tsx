import React from 'react';
import ReactDom from 'react-dom';
import Hello from 'components/Hello/index';

function Index(){

  return (
    <div>
      <Hello />
      
    </div>
  )
}

ReactDom.render(
  <Index />,
  document.getElementById('root')
);
