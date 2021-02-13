import React from 'react';

const Display = (props) =>{
    return(
        <div>
            <h2> {props.firstName} </h2>
            <h2> {props.lastName} </h2>
            <h2> {props.phone} </h2>
            <h2> {props.email} </h2>
        </div>
    )
}

export default Display;
// import React from 'react';
// const ChildComponent = (props) => {
//     return(
//           <h2> {props.firstName} </h2>
//     );
// }
// export default ChildComponent;
