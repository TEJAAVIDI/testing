people=[]
let username=document.getElementById("username")
function save(){
	let username=document.getElementById("username")
	let form=document.getElementById("form")
    let LastName=document.getElementById("LastName")
	let Email=document.getElementById("Email")
	
	let person={
		username:username.value ,
		LastName:LastName.value,
		Email:Email.value
	}
	people.push(person)
	//console.warn("added",{people})
	document.forms[0].reset()
	let jsondata=JSON.stringify(people)
	fetch('https://reqres.in/api/users',{
		method:"post",
		headers:{
			'Content-type':'application/json'
		},
		body:jsondata
	}).then(res=>res.json())
	.then((data)=>{console.log(data);
		let ta=""
		data.map((values)=>{
			ta+=`<p>${values.Email}</p>`
		})
		document.getElementById("para").innerHTML=ta
	})
	//window.location.href = "save.html";
}
