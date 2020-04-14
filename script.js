
        function clearErrors(){
            errors = document.getElementsByClassName('formerror');
            for (let item of errors)
            {
                item.innerHTML = "";
            }
        }
        function seterror(id,error){
            //sets error inside tag of an id
            element = document.getElementById(id);
            element.getElementsByClassName('formerror')[0].innerHTML=error;

        }
        function validateForm(){
            var returnval = true;

            clearErrors();
            var name = document.forms['myForm']["fname"].value;
            if(name.length <5){
                seterror("name","*Length of name is too short");
                returnval = false;
            }

            var email = document.forms['myForm']["femail"].value;
            if(email.length>15){
                seterror("email","*Email can not be so Long");
                returnval = false;
            }
            var phone = document.forms['myForm']["fphone"].value;
            if(phone.length !=10){
                seterror("phone","*Phone should must be of 10 digit");
                returnval = false;
            }
            var password = document.forms['myForm']["fpass"].value;
            if(password.length < 3){
                seterror("pass","*Password should must be of longer than 3 digits");
                returnval = false;
            }
            var cpassword = document.forms['myForm']["fcpass"].value;
            if(cpassword.length != password){
                seterror("cpass","*Password should must match with confirm password");
                returnval = false;
            }

          




            return returnval;
            
        }
