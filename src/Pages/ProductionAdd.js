import React,{useState, useReducer,useEffect} from 'react';
import axios from 'axios';
import AddProdEntry from '../Components/AddProdEntry';
import FinalProdEntry from '../Components/FinalProdEntry';
import Button from 'react-bootstrap/Button'


const ProductionAdd =() =>{

function reducer(state, action){
	return

}

const [state, dispatch] =useReducer(reducer,{count:0})

const prodMain = {
	display:"flex",
	flexDirection:"column",
	width: "40vw",
	height:"90vh",
	backgroundColor:"lightgray",
	padding:"20px",
	margin:"auto"
}
useEffect(()=>{
	axios.get('http://localhost:5000/api/production')
	.then((res)=>{
		setTest(res.data.message)
		console.log(res.data.message)
	})
},[])

const [test, setTest] = useState("empty")
const [data, setData] = useState([true])
// const [dataB, setDataB] = useState([true])





function addMenu(){
	setData(data =>{
		let array = data;
		array.push(true)
		return array
	})
}
console.log(data)

	return(
		<>
			<div style = {prodMain}>
				{data.map( item =>{
					return ( item ? <AddProdEntry/> : <FinalProdEntry />)
				})}			

				<div style ={{width:"10vw", margin:"0 auto"}}>
					<Button onClick ={addMenu} variant="primary">+</Button>{' '}
					<Button variant="primary">Submit</Button>{' '}
					{/*{dataB}*/}
				</div>
			</div>


		</>
		)
}
export default ProductionAdd;



// useEffect(()=>{
// 	let data = "";
// 	fetch("http://localhost:5000/api/production")
// 	.then(data => data.json())
// 	.then(result => {data = result.message;
// 		console.log(data);

// 		})
// 	// useTest(data)
//},[])