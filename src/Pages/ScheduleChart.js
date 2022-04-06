import React, {useEffect} from 'react'


const ScheduleChart =() =>{
	let data  = "jona"
	useEffect(()=>{

    fetch(`https://localhost:5000/api/production/productions/${data}`
        )



    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        
    })
})
	// console.log("menu")
	return(
		<>
			<h1>Schedule Page</h1>

		</>
		)



}

export default ScheduleChart;