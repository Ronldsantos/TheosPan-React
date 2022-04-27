import React, {useReducer, useState} from 'react'

const ACTION = {
	ADD: "Add",
	TOGGLE: "Toggle",
	DELETE:"Delete",

}
function reducer (state, action) {
	switch(action.action) {
		case ACTION.ADD:
		 	return { }
		case ACTION.TOGGLE:
		 	return { }
		case ACTION.DELETE:
		 	return { }
		default
			return state
	}
}



const Playground =() =>{

	const [state, dispatch] = useReducer(reducer , [])
	const [name, setName] = useState('')

	function handleSubmit (){
		dispatch({type:ACTIONS.ADD, payload:})
		setName('')

	}
	
	return (
		<div>
			<form onSubmit = {handleSubmit}>
			<h2>Bread Count</h2>
				<input type="text" value ="name" onChange ={e=>setName(e.target.value)	} />



			</form>
		</div>
		)

}

export default Playground