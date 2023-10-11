import React from 'react';
import './index.css'
import Heading from './Heading';
import {Multiply, Add, Substract, Divide} from './Operations';

const x = 30;
const y = 3;
 

function App (){
    return <>
        
        <Heading/>
        <p>The no. are{x} and {y}</p>
        <p>sum of two no is {Add(30,3)}</p>
        <p>multiplication of two no is {Multiply(30,3)}</p>
        <p>Substraction of two no is {Substract(30,3)}</p>
        <p>Division of two no is {Divide(30,3)}</p>
    </>
}

export default App;

