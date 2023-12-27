import React from "react";

type Props = {
  params : {  
    slug : string[]
  }
};

const User = ({ params : { slug } }: Props) => {
  return (
    <div>{JSON.stringify(slug)}</div>
  )
}

export default User;