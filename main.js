$(window).on('load',function(){
    if(screen.width<720){
        if (!checkCookie("form")) {
            setTimeout(()=>{$('#myModal').modal('show')},5000)
            
        }
    } else{
        if (!checkCookie("form")) {
            $('#myModal').modal('show');
        }
    }
});

const validateForm = () => {
    console.log("yes");
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var checked = document.getElementById("Check1").checked;
    if (checked == false || email == "") {
        alert("Please enter the mandatory fields");
    }
    else {
        setCookie();
    }
}

closeModal = () => {
    setCookie();
}
var delete_cookie = function (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
function setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    var x = "form=true";
    console.log("######", x);
    document.cookie = x;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(sampleName) {
    var user = getCookie(sampleName);
    console.log("####", sampleName);
    if (user === "") {
        console.log("nooooo");
        return false;

    }
    else {
        alert("Welcome again " + user);
        return true;
    }
}



