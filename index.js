let inputs = document.getElementsByClassName("form-control");
window.onload = () => {
    //creamos objeto para localStorage
    
    
    const users  = {
        name : JSON.parse(localStorage.getItem("users"))?.name || [],
        email: JSON.parse(localStorage.getItem("users"))?.email ||[]
    }
    console.log(users);
    
    //
    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let pass1 = document.getElementById("pass");
    let pass2 = document.getElementById("pass2");
    
    document.getElementById("bEnviar").addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(inputName.value)
    // console.log(inputEmail.value)
    // console.log(pass1.value)
    // console.log(pass2.value)
    
    
    for(var i = 0;i<inputs.length;i++){
        if(inputs[i].value == ""){
            document.getElementById("verification").innerText = "Fill all the inputs";
            document.getElementById("verification").setAttribute("style","color:red;font-weight:bold")
            for(var j = 0; j<inputs.length;j++){
                inputs[j].setAttribute("style","border: 2px solid red");
            }
            break;
        }
    }
    let regexName = (/^[A-Za-z]{1,30}$/).test(inputName.value);
    let regexEmail = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(inputEmail.value)
    let regexPass = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/).test(pass1.value);
    let validationBothPass = pass1.value == pass2.value ? true : false;
    if(regexName && regexEmail && validationBothPass){

        users.name.push(inputName.value);
        users.email.push(inputEmail.value);
        localStorage.setItem("users",JSON.stringify(users))
        //cambiamos de pagina
        window.location.href = ("./main.html");
        //console.log("correcto")
    }else{
        let key = "";
        

        //condicion key
        if(!regexName){
            key = "name";
        }else if (!regexEmail){
            key = "email"
        }else if(!validationBothPass){
            key = "password"
        }
        //
        console.log("email"+regexEmail);
        console.log("nobre"+regexName);
        console.log("pass"+validationBothPass);
        
        for(var j = 0; j<inputs.length;j++){
            inputs[j].setAttribute("style","border: 2px solid red");
        }
        document.getElementById("verification").innerHTML = `<div class="alert alert-danger" role="alert">Use a correct format in ${key}</div>`//"Use a correct format in "+key;
        document.getElementById("verification").setAttribute("style","color:red;font-weight:bold")
        setTimeout(function (){
            for(var j = 0; j<inputs.length;j++){
                inputs[j].setAttribute("style","border: 1px solid gray");
            }
            document.getElementById("verification").innerText = "";
        
        },2500)
    }

    })
    
}

