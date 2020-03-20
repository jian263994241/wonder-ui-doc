import React from 'react';
import * as docgen from 'react-docgen';
import TableRenderer from './TableRenderer';
// import code from 'raw-loader!../../src/Button';

// export default function Docgen() {

//   return null;
// }


export default ({ code }) => {

  console.log(
    docgen.parse(code)
  );
  
  return <div>123</div>
}