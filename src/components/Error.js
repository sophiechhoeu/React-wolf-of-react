import React from 'react';

const Error = ({error}) => {
  // console.log("component Error",error);
  if (error === true) {
    return (
    <div>
      That symbol unknown, please try another.
    </div>
    )
  } else {
    return (
    <div>
    </div>
  )
  }
}


export default Error;
