
function fncValidate(){
    let fn = document.form1.fname.value;
    let pass1 = document.form1.Password.value;
    let pass2 = document.form1.ConPassword.value;
    let patt = /[^a-z, ]/i;
    let fname = patt.test(fn);

    if(fn == ""){
        alert('Please input Full name');
        return false;
    }
    if(fn == null || fname == true){
        alert('Enter Alphabet only');
        return false;
    }

    let m = document.getElementById("male");
    let f = document.getElementById("female");
    let o = document.getElementById("other");

    if(m.checked == false && f.checked == false && o.checked == false){
        alert('Please choose gender');
        document.getElementById("gen").style.border = "2px solid red";
        return false;
    }
    else if(m.checked == true){
        alert('Male candidates are not allowed');
        return false;
    }
    else{
        document.getElementById("gen").style.border = "";
    }

    let add = document.form1.address.value;
    let address = patt.test(add);
    if(add == ""){
        alert('Please enter your address');
        return false;
    }
    if(add == null || address == true){
        alert('Enter only alphabet for address with , ');
        return false;
    }

    let c = document.getElementById("country");
    if(c.value == null || c.value == ""){
        alert('Please select Country');
        return false;
    }

    let p = document.form1.phone.value;
    if(isNaN(p)){
        alert("Enter numbers only");
        return false;
    }
    if(p == ""){
        alert("Enter 10 digits");
        return false;
    }
    if(p.length > 10){
        alert("Enter 10 digits");
        return false;
    }
    if(p.length < 10){
        alert("Enter 10 digits");
        return false;
    }

    let em = document.form1.email.value;
    let atpos = em.indexOf("@");
    let dotpos = em.lastIndexOf(".");
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length){
        alert("Invalid email id");
        return false;
    }

    let strongPassword = CheckPassword(pass1);

    if(pass2 == ""){
        alert('please input confirm password');
        return false;
    }

    if(strongPassword != pass2){
        alert('Confirm password not match');
        return false;
    }

    alert("Successfully registered.");
    window.location.href="finalPage.html"
}

function CheckPassword(password){
    let strong = 0;
    if(password == ""){
        alert('Please input Password');
        return false;
    }
    if (password.match(/[a-z]+/)) {
        strong += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strong += 1;
    }
    if (password.match(/[0-9]+/)) {
        strong += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strong += 1;
    }
    if(password.length > 8){
        strong += 1;
    }
    if(password.length < 8){
        alert('Minimum 8 characters are required');
        return false;
    }

    if(strong != 5 || strong < 5){
        alert('Please provide strong password');
        return false;
    }

    if(strong == 5){
        alert('strong password created.')
        return password;
    }
}