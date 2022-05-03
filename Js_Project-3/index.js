//show password
showpass = () =>{
    let passkey = document.getElementById('passw');
    if(passkey.type === 'password'){
        passkey.type = 'text'
    } 
    else{
        passkey.type = 'password'
    }
}

 
//form submit

function submit() {
    $(document).ready(function () {


        var Email = document.getElementById('email').value;
        var Name  = document.getElementById('name').value;
        var Uname = document.getElementById('uname').value;
        var Password = document.getElementById('passw').value;
         
         
        // alert(Name);
        // $('#details tbody').empty();

        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:3000/userdata",
            dataType: 'json',
            async: false,
            data: { 'data1':Email, 'fullname':Name, 'username': Uname, 'passkey': Password  },
            success: function (data) {

                alert('You Have Successfully Created An Account');
                window.location.href="index.html";//to refresh the input tags in html page


            },

            error: function () {

            }

        });

    });

}