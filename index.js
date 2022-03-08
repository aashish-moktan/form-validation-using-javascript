function validateFullname(){
    const fullname = document.getElementById('fullname');
    if(fullname.value.length == 0) {
        display_msg('fullname_msg','This field is required !', 'red');
        return false;
    }
    else if(fullname.value.match(/[^a-zA-Z\s]+/g)){
        display_msg('fullname_msg','Fullname must contain alphabets only !!!','red');
        return false;
    }
    else if(fullname.value.length < 3){
        display_msg('fullname_msg','Fullname must contain atleast 3 characters!!!', 'red');
        return false;
    }
    else if(fullname.value.length > 30){
        display_msg('fullname_msg','Maximum length is 30 !!!', 'red');
        return false;
    }
    else{
        display_msg('fullname_msg','', 'green');
        return true;
    }
}

function validateMobileNumber(){
    const mobile = document.getElementById('mobile');
    if(mobile.value.length  == 0){
        display_msg('mobile_msg','This field is required !!!','red');
        return false;
    }
    else if(mobile.value.match(/[\D]+/g)){
        display_msg('mobile_msg','Mobile number must contain digit only !!!','red');
        return false;
    }
    else if(!mobile.value.match(/^[9](8|7)/)){
        display_msg('mobile_msg','Mobile number must starts with 98 or 97 !!!','red');
        return false;
    }
    else if(mobile.value.length != 10){
        display_msg('mobile_msg','Mobile number must be of length 10 !!!','red');
        return false;
    }
    else {
        display_msg('mobile_msg','','');
        return true;
    }
}


function display_msg(element, msg, color){
    const msgBox = document.getElementById(element);
    msgBox.style.color = color;
    msgBox.innerHTML = msg;
}