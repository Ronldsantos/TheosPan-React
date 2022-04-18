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
	       <h4>{item.userId}:</h4>
	       <h5>{item.tray}/{item.pieces}</h5>
	       <h5>yeast:{item.yeast}</h5>
       </div>
		)
}

export default ScheduleBlock;


