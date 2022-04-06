import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
const FinalProdEntry =() =>{

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
			  <InputGroup.Text>Added:</InputGroup.Text>
			  <FormControl aria-label="First name" />
			  <FormControl aria-label="Last name" />
			  <FormControl aria-label="Last name" />
			  <FormControl aria-label="Last name" />
			</InputGroup>
		</div>
		</>
		)
}




export default FinalProdEntry