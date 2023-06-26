// Main variable declared
var nameArr_oninput=[]
var card_div_arr=[]
var id_Arr=[]
var pagi_index=1
var pagi_page_move_start=1;
var pagi_page_move_end=50
const colours = {
	normal: 'rgb(220,220,220)',
	fire: 'rgb(255,185,113)',
	water: 'rgb(140,196,226)',
	electric: 'rgb(255,230,98)',
	grass: 'rgb(168,255,152)',
	ice: 'rgb(140,245,228)',
	fighting: 'rgb(218,117,137)',
	poison: 'rgb(214,162,228)',
	ground: 'rgb(230,154,116)',
	flying: 'rgb(187,201,228)',
	psychic: 'rgb(255,165,218)',
	bug: 'rgb(186,224,95)',
	rock: 'rgb(230,154,116)',
	ghost: 'rgb(130,145,224)',
	dragon: 'rgb(130,145,224)',
	dark: 'rgb(130,145,224)',
	steel: 'rgb(230,154,116)',
	fairy: 'rgb(253,185,255)',
};
// END


addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})

//*********** Narbar *****************
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "white";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

//*********** End Narbar *****************


//************** FETCH POKEMON *************
const regions = {
    all: { name: "all", startId: 1, endId: 898 },
    kanto: { name: "kanto", startId: 1, endId: 151 },
    johto: { name: "johto", startId: 152, endId: 251 },
    hoenn: { name: "hoenn", startId: 252, endId: 386 },
    sinnoh: { name: "sinnoh", startId: 387, endId: 493 },
    unova: { name: "unova", startId: 494, endId: 649 },
    kalos: { name: "kalos", startId: 650, endId: 721 },
    alola: { name: "alola", startId: 722, endId: 809 },
    galar: { name: "galar", startId: 810, endId: 898 }
};
const pokeFun=async(pokeregion_start,pokeregion_end)=>{
	try{
		console.log(pokeregion_start,pokeregion_end)
		var pagi_page_move_start=1;
		var pagi_page_move_end=20
		nameArr_oninput=[]
		id_Arr=[]
		card_div_arr=[]
		let pokeregions=151;
		let pokepage=0;
		let i=1;
		let xyz=0
		let xyz2=0;
		let typeindex=0;
		let abilityindex_2=0;
		let abilityindex_3=0;
		let abilityindex_4=0;
		let abilityindex_5=0;
		let abilityindex_6=0;
		let pokeevolutionindex_2=0
		let pokeevolutionindex_3=0
		
		if(pokeregion_start<=0 || pokeregion_end<=1){
			pokeregion_start=1;
			pokeregion_end=20;
		}
		
		if(pokeregion_start>=1000 || pokeregion_end>=1000){
			pokeregion_start=1;
			pokeregion_end=20;
		}
		
		if(pokeregion_start==null && pokeregion_end==null){
			pokeregion_start=1
			pokeregion_end=20
		}
		
		try{
			remove_div_id=document.getElementById('cards_div')
			remove_div_id.remove()		
			console.log('remove')
			var remove_div_parrent=document.getElementById('cards_div_parent')
			var remove_div=document.createElement('div')
			remove_div.id="cards_div"	
			remove_div.classList.add('container-fluid')		
					
			remove_div_parrent.appendChild(remove_div)
		}catch(error){
			console.log('append')
			var remove_div_parrent=document.getElementById('cards_div_parent')
			var remove_div=document.createElement('div')
			remove_div.id="cards_div"
			remove_div.classList.add('container-fluid')	
			remove_div_parrent.appendChild(remove_div)
		}
		


		
		
		//const pokecall=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeregions}&offset=${pokepage}`)
		//const pokecallbody=await pokecall.json()
		//console.log(pokecallbody)
		//console.log(pokecallbody.results)
		//console.log(pokecallbody.results.length)
		//pokecallbody.results.forEach((pokemon)=>{
			//console.log(pokemon.name)
			//console.log(pokemon.url)
		//})
		
		//********pokemon features*************
		console.time();
		for(let j=pokeregion_start;j<pokeregion_start+20;j++){
		//678 700	
			spishow()
			let fetch1=fetch('https://pokeapi.co/api/v2/pokemon/'+j+'/')
			let fetch2=fetch('https://pokeapi.co/api/v2/pokemon-species/'+j+'/')	
			
			let fetch_all= await Promise.all([fetch1,fetch2])
			
			
/*			const pokefea=await fetch('https://pokeapi.co/api/v2/pokemon/'+j+'/')*/
			const pokefea=fetch_all[0]
/*			const pokeinfo= await fetch('https://pokeapi.co/api/v2/pokemon-species/'+j+'/')			*/
			const pokeinfo=fetch_all[1]
			
			
			const pokefeabody=await pokefea.json()
			const pokeinfobody=await pokeinfo.json()
			
			let evolution_url=pokeinfobody.evolution_chain.url
			const pokeevolution=await fetch(evolution_url)
			const pokeevolutionbody=await pokeevolution.json()
			
			
			
			//console.log(pokefeabody)
			//console.log(pokeinfobody)
			//console.log(pokeevolutionbody)
			

			//Pokemon info
			var pokeid=pokefeabody.id
			var pokename=pokefeabody.name
			
			// push element into nameArr_oninput
				nameArr_oninput.push(pokename)
				id_Arr.push(pokeid)
			// END
			
			
			try{
				var pokegenus=pokeinfobody.genera[7].genus
			}catch(error){
				try{
					var pokegenus=pokeinfobody.genera[4].genus
				}catch(error){
					var pokegenus="genus not found"
				}
			}
	
			if(pokefeabody.sprites.other.dream_world.front_default!=null){
				var Pokeimg=pokefeabody.sprites.other.dream_world.front_default
				//console.log(Pokeimg)
			}else if(pokefeabody.sprites.other.dream_world.front_default==null){
				var Pokeimg=pokefeabody.sprites.other["official-artwork"].front_default
				//console.log(Pokeimg)
			}


			
			//Pokemon type
			let poketypearr=[]
			for(let i=0; i<pokefeabody.types.length;i++){
				poketypearr.push(pokefeabody.types[i].type.name)
			}


			//Pokemon height and weight
			let pokeheight=pokefeabody.height
			let pokeweight=pokefeabody.weight

			
			//Pokemon about
	/*		console.log("length: "+pokeinfobody.flavor_text_entries.length)*/
			for(let x=0;x<pokeinfobody.flavor_text_entries.length;x++){
				if(pokeinfobody.flavor_text_entries[x].language.name=="en"){
					var pokeflavortext=pokeinfobody.flavor_text_entries[x].flavor_text
					break;
				}			
			}
			
			

			
			//Pokemon ability
			//console.log(pokefeabody.abilities)
			let pokeability=[]
			for(let k=0;k<pokefeabody.abilities.length; k++){
				pokeability.push(pokefeabody.abilities[k].ability.name)
			}
			

			
			//Pokemon stats
			let pokemonstats_name_arr=[]
			let pokemonstats_value_arr=[]
			for(let m=0; m<pokefeabody.stats.length; m++){
				pokemonstats_name_arr.push(pokefeabody.stats[m].stat.name)
				pokemonstats_value_arr.push(pokefeabody.stats[m].base_stat)
			}
			

			
			//Pokemon. Evaluation
			//second evaluation 
			
			var pokefirst_name=pokeevolutionbody.chain.species.name
			try{
				let pokefirstevolution_url=pokeevolutionbody.chain.species.name
				const pokefirstevolution=await fetch('https://pokeapi.co/api/v2/pokemon/'+pokefirstevolution_url+'/')
				const pokefirstevolution_body=await pokefirstevolution.json()
			//	console.log(pokefirstevolution_body)
			//	console.log(pokefirstevolution_body.sprites.other.dream_world.front_default)
				if(pokefirstevolution_body.sprites.other.dream_world.front_default!=null){
					var pokefirst_img=pokefirstevolution_body.sprites.other.dream_world.front_default
				}else if(pokefirstevolution_body.sprites.other.dream_world.front_default==null){
					var pokefirst_img=pokefirstevolution_body.sprites.other["official-artwork"].front_default
				}
			}catch(error){
				if(pokefeabody.sprites.other.dream_world.front_default!=null){
					var pokefirst_img=pokefeabody.sprites.other.dream_world.front_default
				}else if(pokefeabody.sprites.other.dream_world.front_default==null){
					var pokefirst_img=pokefeabody.sprites.other["official-artwork"].front_default
				}
			}
			
			
			let pokesecondarr_name=[]
			if(pokeevolutionbody.chain.evolves_to.length==1){
				pokesecondarr_name.push(pokeevolutionbody.chain.evolves_to[0].species.name)
				try{
					let pokesecondevolution_url=pokeevolutionbody.chain.evolves_to[0].species.name
					const pokesecondevolution=await fetch('https://pokeapi.co/api/v2/pokemon/'+pokesecondevolution_url+'/')
					const pokesecondevolution_body=await pokesecondevolution.json()
					//console.log(pokesecondevolution_body)
					//console.log(pokesecondevolution_body.sprites.other.dream_world.front_default)
					if(pokesecondevolution_body.sprites.other.dream_world.front_default!=null){
						var pokesecond_img=pokesecondevolution_body.sprites.other.dream_world.front_default
					}else if(pokesecondevolution_body.sprites.other.dream_world.front_default==null){
						var pokesecond_img=pokesecondevolution_body.sprites.other["official-artwork"].front_default
					}
				}catch(error){
					console.log("Image Not Found")
				}
	
			}
			
			let pokethirdarr_name=[]
			if(pokeevolutionbody.chain.evolves_to.length==1){
				if(pokeevolutionbody.chain.evolves_to[0].evolves_to.length==1){
					pokethirdarr_name.push(pokeevolutionbody.chain.evolves_to[0].evolves_to[0].species.name)
					try{
						let pokethirdevolution_url=pokeevolutionbody.chain.evolves_to[0].evolves_to[0].species.name
						const pokethirdevolution=await fetch('https://pokeapi.co/api/v2/pokemon/'+pokethirdevolution_url+'/')
						const pokethirdevolution_body=await pokethirdevolution.json()
						//console.log(pokethirdevolution_body)
						//console.log(pokethirdevolution_body.sprites.other.dream_world.front_default)
						if(pokethirdevolution_body.sprites.other.dream_world.front_default!=null){
							var pokethird_img=pokethirdevolution_body.sprites.other.dream_world.front_default
						}else if(pokethirdevolution_body.sprites.other.dream_world.front_default==null){
							var pokethird_img=pokethirdevolution_body.sprites.other["official-artwork"].front_default
						}
					}catch(error){
						console.log("IMAGE NOT FOUND")
					}

				}
			}

	
			
			


			//display content
			
			let card_divs=document.getElementById('cards_div')
			remove_div.innerHTML+=`
				<div class="card" style="width:10rem;height:16rem" >
				  <img src="${Pokeimg}" class="card-img-top" alt="...">
				  <div class="card-body">
					<!-- Button trigger modal -->
					<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop${j}">
						DETAILS
					</button>
					
					<!-- Modal -->
					<div class="modal fade " id="staticBackdrop${j}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					   <div class="modal-dialog modal-dialog-scrollable">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h5 class="modal-title" id="staticBackdropLabel">${pokename.toUpperCase()}</h5>
					        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body">
					        <div class="container" >
					        	<div id="pokemon_info" class="container-fluid"  >
					        		<h2>#${pokeid}</h2>
					        		<h3 class="pokename" >${pokename}</h3>
					        		<h4>${pokegenus}</h4>
									<img style="height:140px;width:140px;"  src="${Pokeimg}" class="card-img-top" alt="...">
					        		<div id="pokemon_type" >
					        			<h3 class="" >Type</h3>
					        			
					        			<p  style="color:black;font-weight:bolder;"  class="btn  type_1"  id="fetch_type" >${poketypearr[0]}</p>
					        			<p  style="color:black;font-weight:bolder;"  class="btn  type_2"  id="fetch_type" >${poketypearr[1]}</p>
					        			<p >HEIGHT: <span>${(pokeheight/10).toFixed(1)}m</span></p>
					        			<p >WEIGHT: <span>${(pokeweight/10).toFixed(1)}kg</span></p>
					        		</div>
					        	</div>
					        	
					        	<div id="pokemon_about" class="container-fluid flex"  >
					        		<h2>About</h2>
					        		<div id="main_about" class="flex" >
					        			<p style="color:black;"  >${pokeflavortext}</p>
					        		</div>
					        	</div>
					        	
					        	<div id="pokemon_abilities" class="container-fluid flex"  >
					        		<h2>Abilities</h2>
					        		<div id="main_ability" class="flex" >
					        			<li class="ability_items">${pokeability[0]}</li>
					 	      			<li class="ability_items_2">${pokeability[1]}</li>
					 	      			<li class="ability_items_3">${pokeability[2]}</li>
					 	      			<li class="ability_items_4">${pokeability[3]}</li>
					 	 		 	   	<li class="ability_items_5">${pokeability[4]}</li>
					 	 	 	 	  	<li class="ability_items_6">${pokeability[5]}</li>
					        		</div>
					        	</div>
					        	
					        	<div id="pokemon_stats" class="container-fluid flex"  >
				        			<h2>Base Stats</h2>
				        			<div id="main_stats" class="flex"  >
				        				<p style="color:red;" >${pokemonstats_name_arr[0].toUpperCase()}</p>
				        				<p>${pokemonstats_value_arr[0]}</p>
				        				
				        				<p style="color:red;">${pokemonstats_name_arr[1].toUpperCase()}</p>
				        				<p>${pokemonstats_value_arr[1]}</p>
				        				
				        				<p style="color:red;">${pokemonstats_name_arr[2].toUpperCase()}</p>
				        				<p>${pokemonstats_value_arr[2]}</p>
				        				
				        				<p style="color:red;">${pokemonstats_name_arr[3].toUpperCase()}</p>
				        				<p>${pokemonstats_value_arr[3]}</p>
				        				
				        				<p style="color:red;">${pokemonstats_name_arr[4].toUpperCase()}</p>
				        				<p>${pokemonstats_value_arr[4]}</p>
				        				
				        				<p style="color:red;">${pokemonstats_name_arr[5].toUpperCase()}</p>
				        				<p>${pokemonstats_value_arr[5]}</p>
				        			</div>
					        	</div>
					        	
					        	<div id="pokemon_evolution" class="container-fluid flex" >
					        		<h2>Evolution</h2>
					        		<div id="main_evolution" class="flex"  >
					        			<div class="evolution_div flex" >
											<img style="height:120px;width:120px;"  src="${pokefirst_img}" class="card-img-top" alt="...">
					        				<p>${pokefirst_name}</p>
					        			</div>
					        			<div class="evolution_div eve_2 flex" >
					        				<p><i id="down_arrow"  class="fa fa-arrow-down fa-2x" aria-hidden="true"></i></p>
					        				<img style="height:120px;width:120px;"  src="${pokesecond_img}" class="card-img-top" alt="...">
					        				<p class="pokeevolution_2" >${pokesecondarr_name[0]}</p>
					        			</div>
					        			<div class="evolution_div flex eve_3" >
					        				<p><i id="down_arrow" class="fa fa-arrow-down fa-2x" aria-hidden="true"></i></p>
					        				<img style="height:120px;width:120px;"  src="${pokethird_img}" class="card-img-top" alt="...">
					        				<p class="pokeevolution_3" >${pokethirdarr_name[0]}</p>
					        			</div>
					        		</div>
					        	</div>
					        </div>
					      </div>
					      <div class="modal-footer">
					      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					      </div>
					    </div>
					  </div>
					</div><!--end-->
				  </div>
				</div>
			` //End	
			

			
			if(document.getElementsByClassName('type_2')[typeindex].innerHTML=="undefined"){
				let type_2=document.getElementsByClassName('type_2')[typeindex]
				type_2.remove()
				typeindex--
			}
			typeindex++
			
			
			if(document.getElementsByClassName('ability_items_2')[abilityindex_2].innerHTML=="undefined"){
				let ability_2=document.getElementsByClassName('ability_items_2')[abilityindex_2]
				ability_2.remove()
				abilityindex_2--
			}
			abilityindex_2++
			
			
			if(document.getElementsByClassName('ability_items_3')[abilityindex_3].innerHTML=="undefined"){
				let ability_3=document.getElementsByClassName('ability_items_3')[abilityindex_3]
				ability_3.remove()
				abilityindex_3--
			}
			abilityindex_3++
			
			if(document.getElementsByClassName('ability_items_4')[abilityindex_4].innerHTML=="undefined"){
				let ability_4=document.getElementsByClassName('ability_items_4')[abilityindex_4]
				ability_4.remove()
				abilityindex_4--
			}
			abilityindex_4++
			
			if(document.getElementsByClassName('ability_items_5')[abilityindex_5].innerHTML=="undefined"){
				let ability_5=document.getElementsByClassName('ability_items_5')[abilityindex_5]
				ability_5.remove()
				abilityindex_5--
			}
			abilityindex_5++
			
			if(document.getElementsByClassName('ability_items_6')[abilityindex_6].innerHTML=="undefined"){
				let ability_6=document.getElementsByClassName('ability_items_6')[abilityindex_6]
				ability_6.remove()
				abilityindex_6--
			}
			abilityindex_6++
			
//			console.log(document.getElementsByClassName('pokeevolution_2')[pokeevolutionindex_2])
			if(document.getElementsByClassName('pokeevolution_2')[pokeevolutionindex_2].innerHTML=="undefined"){
				let evesecond=document.getElementsByClassName('eve_2')[pokeevolutionindex_2]
				evesecond.remove()
				pokeevolutionindex_2--
			}
			pokeevolutionindex_2++
			
			
//			console.log(document.getElementsByClassName('pokeevolution_3')[pokeevolutionindex_3])
			if(document.getElementsByClassName('pokeevolution_3')[pokeevolutionindex_3].innerHTML=="undefined"){
				let evethird=document.getElementsByClassName('eve_3')[pokeevolutionindex_3]
				evethird.remove()
				pokeevolutionindex_3--
			}
			pokeevolutionindex_3++
			
			for(var colordex in colours){
				if(poketypearr[0]==colordex && poketypearr[1]==undefined){
					var cards=document.getElementsByClassName('card')[xyz]
					var model_content=document.getElementsByClassName('modal-content')[xyz]
					var type_1_color=document.getElementsByClassName('type_1')[xyz]
					cards.style.background=colours[colordex];
					model_content.style.background=colours[colordex]
					type_1_color.style.background=colours[colordex]
					xyz++	
				}
				
				if(poketypearr[0]==colordex && colours.hasOwnProperty(poketypearr[1])){
					var cards=document.getElementsByClassName('card')[xyz]
					var model_content=document.getElementsByClassName('modal-content')[xyz]
					var type_1_color=document.getElementsByClassName('type_1')[xyz]
					var type_2_color=document.getElementsByClassName('type_2')[xyz2]
					
					cards.style.background=`linear-gradient(${colours[colordex]}, ${colours[poketypearr[1]]})`;
					type_1_color.style.background=colours[colordex]

					type_2_color.style.background=colours[poketypearr[1]]
					model_content.style.background=`linear-gradient(${colours[colordex]}, ${colours[poketypearr[1]]})`
					xyz++
					xyz2++
				}

				
			}
		// End								
										
										
		}
		
		console.timeEnd();
		spihide()
/*		console.log(nameArr_oninput)*/
/*		console.log(id_Arr)	*/

					
					
		// card_div_arr element push
		var cards=document.getElementsByClassName('card')
		card_div_arr.push(cards)		
		// END
		
		//*******×*×××××********************
		//pagination tab..........
		//**********************************
		const pagipromise=new Promise((resolve,reject)=>{
			resolve([pokeregion_start,pokeregion_end,id_Arr])
		})
		
				
		const pagifun=async()=>{
			try{
				let poke_end=pokeregion_end
				let pagi_pokeregion_start=pokeregion_start
				let pagi_pokeregion_end=pokeregion_end
				
				
				try{
					pagidiv_remove=document.getElementById('pagidiv')
					pagidiv_remove.remove()
				}catch(error){
					console.log("not removed")
				}
				

				let pagination_parent=document.getElementById('pagination_parent')
				let pagidiv=document.createElement('div')
				pagidiv.classList.add("flex")
				pagidiv.classList.add("container-fluid")
				pagidiv.id="pagidiv"
				pagidiv.innerHTML=`<nav class="pageinav" style="background:#F2ECFF;" aria-label="Page navigation example">
				  <ul class="pagination" id="pagi_ul">
					<li onclick="pokeFun(${pagi_pokeregion_start-50},${pagi_pokeregion_end-50})" class="page-item">
				      <a class="page-link texts-white" href="#" aria-label="Previous">
				        <span aria-hidden="true">&laquo;</span>
				      </a>
				    </li>
				  </ul>
				</nav>`	
				pagination_parent.appendChild(pagidiv);
				
				let pagi_totalpage_no=(poke_end/10)+1
				/*	console.log("page no",pagi_totalpage_no)*/
				
				for(let pagi_no=1;pagi_no<pagi_totalpage_no;pagi_no++){
					let pagi_ul=document.getElementById('pagi_ul')
					
					if(pagi_no>25 || pagi_no==25){
						break;
					}
					
					if(pagi_no==1){
						pagi_ul.innerHTML+=`
						<li onclick="pokeFun(${pagi_page_move_start},${pagi_page_move_end})" class="page-item"><a class="page-link texts-white" href="#">${pagi_no}</a></li>
						`			
					}else if(pagi_no>1){
						pagi_ul.innerHTML+=`
						<li onclick="pokeFun(${pagi_page_move_start+=20},${pagi_page_move_end+=20})" class="page-item"><a class="page-link texts-white" href="#">${pagi_no}</a></li>
						`						
					}
							

					
				}
				
				
				
				pagi_ul.innerHTML+=`
					<li onclick="pokeFun(${pagi_pokeregion_start+50},${pagi_pokeregion_end+50})" class="page-item">
						<a class="page-link texts-white" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				`
				
			}catch(error){
				console.log(error)
				confirm("ERORR OCUURED: "+error)
	
			}
		}
		
		
		pagifun()
		
		return [pokeregion_start,pokeregion_end,id_Arr]
		
	}catch(error){
		spihide()
		console.log(error)
		confirm("ERORR OCUURED: "+error)
	}
} 

pokeFun(null,null)

//*******×*×××××********************
//pagination tab..........
//**********************************




/*pagireturn_value()*/


// page scroll up is
let heading_element=document.getElementById('carouselExampleDark')
let scroll_up_element=document.getElementById('srcollup')
const scrollUp=()=>{
	heading_element.scrollIntoView({behavior:"smooth"});
}

scroll_up_element.addEventListener('click', scrollUp)

// cookie 
document.cookie="favorite_anime=pokemon;max-age="+60*60*24*10;
