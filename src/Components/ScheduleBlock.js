import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
// import Card from 'react-bootstrap/Card'
const ScheduleBlock = ({props:item}) =>{
	console.log(item)

  const gridItem = {
    // backgroundColor:"#D7A86E",
    width:"24vw",
    height:"auto",
    border: "1px solid #D7A86E",
    borderRadius: "20px",
    padding:"1rem"
  }
	
	return (

		<div style={gridItem}>
	       <p>{item.userId}:</p>
	       <p>{item.tray}/{item.pieces}</p>
	       <p>yeast:{item.yeast}</p>
       </div>
		)
}

export default ScheduleBlock;


