import React from 'react'

const page = ({params}: {params: {id: string}}) => {
    const {id} = params;
  return (
    <div>USER DETAILS: {id}</div>
  )
}

export default page