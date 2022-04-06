import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const AddProdEntry =() =>{



const prodStyle = {
	display: "flex",
	flexDirection: "row"
}
const paragraph = {
	marginBottom:"10px"
}
	return(
		<>
		<div style = {paragraph}>
			
			<InputGroup className="mb-3">
			  <InputGroup.Text>+</InputGroup.Text>
			  <FormControl placeholder = "Trays" aria-label="First name" />
			  <FormControl placeholder = "Pieces" aria-label="Last name" />
			  <FormControl placeholder = "Yeast" aria-label="Last name" />
			  <FormControl placeholder = "Bread" aria-label="Last name" />
			   
			</InputGroup>
		</div>
		</>
		)
}




export default AddProdEntry