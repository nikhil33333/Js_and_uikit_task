function validateFname(event){
    var fname = event.target.value;
    var warningtext = document.getElementById("fname-validation");
    var fnameInput=document.getElementById("fname");
    var validRegex = /^[a-zA-Z() ]+$/;
    if(fname==""){
        warningtext.innerHTML="Required field";
        fnameInput.classList.add("uk-form-danger");
    }
    else if(!fname.match(validRegex)){
        warningtext.innerHTML="First Name should contain only alphabets";
        fnameInput.classList.add("uk-form-danger");
    }
    else{
        warningtext.innerHTML="";
        fnameInput.classList.remove("uk-form-danger");
    }
}

function validateLname(event){
    var lname = event.target.value;
    var warningtext = document.getElementById("lname-validation");
    var lnameInput=document.getElementById("lname");
    var validRegex = /^[a-zA-Z() ]+$/;
    if(lname == ""){
        warningtext.innerHTML="Required field";
        lnameInput.classList.add("uk-form-danger");
    }
    else if(!lname.match(validRegex)){
        warningtext.innerHTML="Last Name should contain only alphabets";
        lnameInput.classList.add("uk-form-danger");
    }
    else{
        warningtext.innerHTML="";
        lnameInput.classList.remove("uk-form-danger");
    }
}

function validateEmail(event){
    var email = event.target.value;
    var warningtext = document.getElementById("email-validation");
    var emailInput=document.getElementById("email");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        warningtext.innerHTML="Required field";
        emailInput.classList.add("uk-form-danger");
    }
    else if(!email.match(validRegex)){
        warningtext.innerHTML="Enter a valid email";
        emailInput.classList.add("uk-form-danger");
    }
    else if(email.includes("@gmail.com")){
        warningtext.innerHTML="@gmail.com is forbidden";
        emailInput.classList.add("uk-form-danger");
    }
    else{
        warningtext.innerHTML="";
        emailInput.classList.remove("uk-form-danger");
    }
}

function validatePhoneNum(event){
    var phonenum = event.target.value;
    var warningtext = document.getElementById("phonenum-validation");
    var phonenumInput=document.getElementById("number");
    var validRegex = /^[0-9]+$/;
    if(phonenum == ""){
        warningtext.innerHTML="Required field";
        phonenumInput.classList.add("uk-form-danger");
    }
    else if(!phonenum.match(validRegex)){
        warningtext.innerHTML="Phone number should contain only digits";
        phonenumInput.classList.add("uk-form-danger");
    }
    else if(phonenum.length < 10){
        warningtext.innerHTML="Phone number should contain atleast 10 digits";
        phonenumInput.classList.add("uk-form-danger");
    } 
    else if(phonenum.length > 10){
        warningtext.innerHTML="Phone number should contain only 10 digits";
        phonenumInput.classList.add("uk-form-danger");
    }    
    else{
        warningtext.innerHTML="";
        phonenumInput.classList.remove("uk-form-danger");
    }
}

function validatePincode(event){
    var pincodeArr=["110001","110002","110003","110004","110005","110006","110007","110008","110009","110010","110011","110012","110013","110014","110015"];
    var warningtext = document.getElementById("pincode-validation");
    var pincodeInput=document.getElementById("pincode");
    console.log(event.target.value)
    if(!pincodeArr.includes(event.target.value)){
        warningtext.innerHTML="Pincode is not matched";
        pincodeInput.classList.add("uk-form-danger");
    }
    else{
        warningtext.innerHTML="";
        pincodeInput.classList.remove("uk-form-danger");
    }
}
