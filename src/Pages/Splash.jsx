import React, {useState} from 'react'

const Splash = ()=>{

	const variable = {



	}

	const blockStyle={
		margin:"2px",
		height:"auto", 
		width:"40rem", 
		backgroundColor:"white", 
		border:"1px solid gray", 
		borderRadius:"20px", 
		fontSize:"1.5em"
	}
	const containerStyle ={
		display:"grid"
	}



	return (
	<>
		<div style={{height:"20vh"}} />
		<h2>Balance: + - ___</h2>
		<div style={{height:"5vh"}} />
		<div style ={{margin:"auto",borderRadius:"20px",border:"1px solid black", padding:"20px", width:"42em", backgroundColor:"#cccccc"}}>
			
			<h3>Today:</h3>
			<div style ={{display:"flex", flexDirection:"column",	justifyContent: "center", alignItems:"center"}}>
				<div style ={blockStyle}>UBE 01/20 Yeast: 20 grams <br />worth: 240</div>
				<div style ={blockStyle}>CHZ 01/20 Yeast: 20 grams <br />worth: 333</div>
				<div style ={blockStyle}>PDG 01/20 Yeast: 20 grams <br />worth: 444</div>
				<div style ={blockStyle}>Total 1244</div>
			</div>
		</div>
		<div style={{height:"5vh"}} />
		<div>
			<h3>Expenses:</h3>
			<p>1 something something</p>
			<p>1 something something</p>
			<p>1 something something</p>
			<p>1 something something</p>
			
		</div>
	</>
		)
}

export default Splash