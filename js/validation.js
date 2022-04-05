function validation(){
    var a=0
       
    var fullName = $("#validate-name").val().trim()
    var email = $("#validate-Email").val().trim()
    var number = $("#validate-number").val().trim()
    var regexName=/^[a-zA-Z ]+$/
    var regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var regexNumber=/^\d{10}$/;
    
    nameValidate()
    emailValidate()
    numberValidate()
    
    

function nameValidate(){
    if(fullName == ""){
        
        $("#ok-1").show()
        $("#ok-1").text("This Field is requierd")
       
        
    }else if(!regexName.test(fullName)){
        $("#ok-1").text("Only alphabets Are allowed")
        $("#ok-1").show()
    }
        
    else{
        $("#ok-1").hide()
     a=1
        
    }
}
function emailValidate(){
    
    if(email == ""){
        
        $("#ok-2").show()
        $("#ok-2").text("This Field is requierd")
        
        
    }else if(!regexEmail.test(email)){
        $("#ok-2").show()
        $("#ok-2").text("Enter a Valid email")
       
        
    }else{
        $("#ok-2").hide()
        a+=1
    }
}

function numberValidate(){ 
    if(number == ""){
        $("#ok-3").show()
        $("#ok-3").text("This Field is requierd")
       
        
    }else if(!regexNumber.test(number)){
        $("#ok-3").show()
        $("#ok-3").text("Only Number Are allowed")
        
       
    }else{
        $("#ok-3").hide()
        a+=1
    }
}
if(a==3){
    return true
}else{
    return false
}
   



}

//submittion
$("#validate").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyLTTAevQo8WLI22XBmkuXt_NHc3yEXVfuqFd9zd2dj_fyrG_Jj5l2de7UwYaWIWacDbA/exec",
        data:$("#validate").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

