// ASSIM SERIA SE FOSSE PASSADO POR PROPS
// import React, {useState} from 'react';
// import Counter from './components/Counter';
// import Mirror from './components/Mirror';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//   <div>
//     <Counter count={count} setCount={setCount}/>
//     <hr/>
//     <Mirror count={count}/>
//   </div>
//     );
// }
// export default App;

import React from 'react';
import Counter from './components/Counter';
import Mirror from './components/Mirror';
import CountProvider from './context/Count';

function App() {

  return (
  <div>
    <CountProvider>
      <Counter/>
      <hr/>
      <Mirror/>
    </CountProvider>
  </div>
    );
}

export default App;
