//your JS code here. If required.

let btn = document.querySelector("#btn");
let output = document.querySelector("#output");


function display(text,delay){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			output.innerText = text;
			resolve();
		},delay)
	})
}

btn.addEventListener("click",async()=>{

    let text = document.querySelector("#text").value;
    let delay = document.querySelector("#delay").value;	

	await(display(text,delay));
})

