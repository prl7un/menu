import React, { useEffect, useState} from 'react';


function App() {
  const [num, setNum] = useState(5);

  
  return (
    <div style={(num%2) ? {backgroundColor: 'green'} : {backgroundColor : 'red'}}>  
      <button onClick={() =>setNum(num+1)}>click</button>
      <h1>{(num+1)%6}{(num+2)%6}{(num+3)%6}</h1>
      <h1>{(num+2)%6}{(num+3)%6}{(num+4)%6}</h1>
      <h1>{(num+3)%6}{(num+4)%6}{(num+5)%6}</h1>
      <h1>{(num-1)%6}{(num)%6}{(num+1)%6}</h1>
      <h1>{(num-2)%6}{(num-1)%6}{(num)%6}</h1>
      <h1>{(num-3)%6}{(num-2)%6}{(num-1)%6}</h1>
      <h3></h3>
      <h3></h3>
    </div>
  );
}

export default App;
