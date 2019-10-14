$(window).on('load', function () {
    $('#myModal').modal('show');
    // checkCookie();
    });


const validateForm = () => {
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var checked = document.getElementById("Check1").checked;
    if (checked == false || email == ""){
        alert("Please enter the mandatory fields");
    }
    else{
        checkCookie(name);
        $('#myModal').modal('hide');
    }
}

closeModal = () =>{
    setCookie("username", name);
}

function setCookie(cname,cvalue,expires) {
    var d = new Date();
    d.setTime(d.getTime() + (expires*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    var x = cname + "=" + cvalue + "," + expires + ",path=/";
    console.log("######",x);
    document.cookie = x;
    console.log("@@@@",document.cookie)
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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
    var user=getCookie("username");
    console.log("####",sampleName);
    if (user != "") {
      alert("Welcome again " + user);
    } else {
        user = sampleName;
        console.log(user);
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }


