import React from 'react'
import Collectioncard from './Collectioncard'
import "./Punklist.css"
const Punklist = ({punkListData} ) => {
  return (
    <div className= "punkList">
   {punkListData.map(punk => (
<div>
<Collectioncard 
key = {punk.token_id} 
id= {punk.token_id}
name= {punk.name}
traits= {punk.traits}
image= {punk.image_original_url}

/>

</div>

   ))}
    </div>
  )
}

export default Punklist