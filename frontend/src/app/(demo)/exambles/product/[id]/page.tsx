import React from 'react'

type Props = {
    params : { id : string } ,
    searchParams : { type : string }
};

const page = ( { params : { id }, searchParams : { type } }: Props) => {
  return (
    <div>
        ProductId : {id}
        ProductType : {type}
    </div>
  )
};

export default page