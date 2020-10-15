// ASSIM SERIA SE FOSSE PASSADO POR PROPS
// import React, { useState } from 'react';

// function Counter({count, setCount}) {

//     return (
//         <div>
//             <span>
//                 <b>Count: </b>
//                 {count}
//             </span>

//             <br/>

//             <button onClick={()=> setCount(count+1)}>Increase</button>
//         </div>
//     );
// }

// export default Counter;

import React from 'react';
import { useCount } from '../../context/Count';



function Counter() {
    const { count , setCount } = useCount();
    return (
        <div>
            <span>
                <b>Count:  {count}</b>
            </span>

            <br/>

            <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    );
}

export default Counter;