import React from 'react';
import { TestCompletion } from './screens/TestCompletion/TestCompletion';
import {Corousel} from "./components/Corousel/index"
function App() {
  return <div style={{marginTop:"50px"}}>
    <Corousel onChange={()=>null}></Corousel>
  </div>
}

export default App;
