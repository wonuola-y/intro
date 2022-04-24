const button = document.getElementById("btn");

button.addEventListener("click", mainFunction);

function mainFunction() {
  const firstName = document.getElementById("firstName").value;
  const firstNameIcon = document.getElementById("firstName");
  const lastName = document.getElementById("lastName").value;
  const lastNameIcon = document.getElementById("lastName");
  const email = document.getElementById("email").value;
  const emailIcon = document.getElementById("email");
  const pass = document.getElementById("pass").value;
  const passwordIcon = document.getElementById("pass");

  const firstNameText = document.getElementById("firstNameText");
  const lastNameText = document.getElementById("lastNameText");
  const emailText = document.getElementById("emailText");
  const passwordText = document.getElementById("passwordText");

  let theStory = true;

  if (firstName == "") {
   theStory = false;
    firstNameText.style.visibility = "visible";
    firstNameIcon.classList.add("err-icon");
    firstNameIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    firstNameIcon.placeholder = "";
    firstNameText.style.color = "hsl(0, 100%, 74%) "

  } else {
    firstNameText.style.visibility = "hidden";
    firstNameIcon.classList.remove("err-icon");
    firstNameIcon.style.border = "";
  }

  if (lastName == "") {
    theStory = false;
    lastNameText.style.visibility = "visible";
    lastNameIcon.classList.add("err-icon");
    lastNameIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    lastNameIcon.placeholder = "";
    lastNameText.style.color = "hsl(0, 100%, 74%) ";
  } else {
    lastNameText.style.visibility = "hidden";
    lastNameText.style.visibility = "hidden";
    lastNameIcon.classList.remove("err-icon");
    lNameIcon.style.border = "";
  }

  //   Regular expression for email

  const regEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email == "") {
    theStory = false;
    emailText.style.visibility = "visible";
    emailIcon.classList.add("err-icon");
    emailIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    emailIcon.placeholder = "email@example.com";
    emailText.style.color = "hsl(0, 100%, 74%) ";
   
  } else if (!regEmail.test(email)) {
    theStory = false;
    emailText.innerHTML = "This is not an email!";
    emailText.style.visibility = "visible";
  }
  else {
    emailText.style.visibility = "hidden";
    emailIcon.classList.remove("err-icon");
    emailIcon.style.border = "";
  }

  if (pass == "") {
    theStory = false;
   passwordText.style.visibility = "visible";
   passwordText.style.color = "hsl(0, 100%, 74%) ";
    passwordIcon.classList.add("err-icon");
    passwordIcon.style.border = "solid hsl(0, 100%, 74%) 2px";

    passwordIcon.placeholder = "";
  } else {
    passwordText.style.visibility = "hidden";
    passwordText.style.visibility = "hidden";
    passwordIcon.classList.remove("err-icon");
    passwordIcon.style.border = "";
  }
}
