let search_oninput=document.getElementById('search_poke')

const search_pokemon=()=>{
	let poke_search=document.getElementById('search_poke').value;
	console.log(poke_search)	
}


// e sa event target kar sakhta hai
search_oninput.addEventListener('input',(e)=>{
	try{
		const val =e.target.value;
		console.log(val)		
/*		console.log(card_div_arr)*/

		card_div_arr.filter((curElem)=>{
			for(let x=0;x<curElem.length;x++){
/*				console.log(curElem[x])*/
				let element_name=document.getElementsByClassName('pokename')[x]
				let element_name_value=element_name.innerText
/*				console.log(element_name_value)*/
				element_name_value.toLowerCase().includes(val.toLowerCase()) ? curElem[x].classList.remove(`hide`):curElem[x].classList.add('hide')				
			}			
		})
				
/*		console.log(nameArr_oninput)	*/
	}catch(error){

		console.log(error)
		confirm("ERORR OCUURED: "+error)
	
	}
	
})