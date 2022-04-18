import React, {useState, useEffect} from 'react'

// ReactStrap Components
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

// Custom Components
import ScheduleBlock from '../Components/ScheduleBlock'


const ScheduleChart =() =>{
	const [prodData, setProdData] = useState([])
	let data  = "jona"
	useEffect(()=>{

    fetch(`http://localhost:5000/api/production/productions/${data}`,
    	{
    		method:'GET'
    	})
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setProdData(data)

	    })
	},[])
  const gridStyle = {
    display:"inline-grid",
    gridTemplateColumns:"auto auto auto ",
    gridRowGap:"5px",
    gridColumnGap:"5px"
  }
	console.log("added")
	// console.log("menu")
	return(
		<>
			<h1>Schedule Page</h1>
      <div style = {gridStyle}>
        
			{prodData.map(item =>{
				return <>
          <ScheduleBlock props={item}/>   
        </>
			})}
      </div>
		</>
		)



}

export default ScheduleChart;





//         <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>{item.userId}</Card.Title>
//     <Card.Text>
//       Lorem ipsum
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Tray: {item.tray}</ListGroupItem>
//     <ListGroupItem>Pieces: {item.pieces}</ListGroupItem>
//     <ListGroupItem>Yeast:{item.yeast}</ListGroupItem>
//   </ListGroup>
// </Card>
