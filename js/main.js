		
var users=[];
axios.get("https://jsonplaceholder.typicode.com/users")
.then(function(response){
users = response.data;
let showData="";
for(var i=0 ; i < users.length ; i++) {
showData = showData + `<div class="col-md-3">

			<img class="wow hinge" src="assets/imgs/girl.png" alt="girl"> 
						<div class="card">
  					<div class="card-body">
  					${users[i].name} 
  					${users[i].username}
  					${users[i].email}
  				
    			</div>
    		</div>`
}
document.getElementById("parent").innerHTML = showData;
});

console.log(parent);
	
	