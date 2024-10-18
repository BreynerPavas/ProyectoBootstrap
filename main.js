window.onload = () => {
    let users  = JSON.parse(localStorage.getItem("users"))
    document.getElementById("actualUser").innerText = users.name[users.name.length-1]
    let body = document.getElementById("cartas");
    for(var i = 0; i<users.name.length;i++){
        var aux = `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${users.name[i]}</h5><h6 class="card-subtitle mb-2 text-body-secondary">${users.email[0]}</h6><p class="card-text">    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ratione, dolore animi ea atque, illum aperiam adipisci doloremque</p></div></div>`;
        body.innerHTML += aux;
    }
}