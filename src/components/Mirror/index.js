// ASSIM SERIA SE FOSSE PASSADO POR PROPS
// import React from 'react';

// function Mirror({count}) {
//     return (
//         <div>
//             <span>
//                 <b>Mirror: </b>
//                 {count}
//             </span>

//         </div>
//     );
// }
// export default Mirror;

import React from 'react';
import { useCount } from '../../context/Count';

function Mirror() {
    const { count } = useCount();

    return (
        <div>
            <span>
                <b>Mirror: {count}</b>
            </span>

        </div>
    );
}
export default Mirror;