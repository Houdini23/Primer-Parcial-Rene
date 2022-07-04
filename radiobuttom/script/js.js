
var bandera=0;
var form=document.getElementById("form");
form.addEventListener("submit", (e)=>{
    var nombre=document.getElementById("name").value;
    if (nombre==""){
        var errorName=document.getElementById("errorName");
        errorName.classList.remove("novisible");
        errorName.classList.add("sivisible");
        bandera=1;
    }

    var password=document.getElementById("password").value;
    if (password==""){
        var errorPass=document.getElementById("errorPass");
        errorPass.classList.remove("novisible");
        errorPass.classList.add("sivisible");
        bandera=1;
    }

  var grupo=document.getElementsByName("grupo");
if (!document.querySelector('input[name="grupo"]:checked')){

            var errorGrupo=document.getElementById("errorGrupo");
            errorGrupo.classList.remove("novisible");
            errorGrupo.classList.add("sivisible");
            bandera=1;
        
            } 
        
            e.preventDefault();

            if (bandera==0){
            form.submit();
            
            }})
            

var nombre=document.getElementById("name");
    nombre.addEventListener("click",()=>{
    var errorName=document.getElementById("errorName");
    errorName.classList.remove("sivisible");
    errorName.classList.add("novisible");


});

var password=document.getElementById("password");
    password.addEventListener("click",()=>{
    var errorPass=document.getElementById("errorPass");
    errorPass.classList.remove("sivisible");
    errorPass.classList.add("novisible");
 
});


        
var grupo=document.getElementsByName("grupo");
grupo.forEach(element=>{
    element.addEventListener("mousedown",()=>{
    var errorGrupo=document.getElementById("errorGrupo");
        errorGrupo.classList.remove("sivisible");
        errorGrupo.classList.add("novisible");
    })

})