// !Preloader
window.onload = function () {
  const preloaderArea = document.getElementById("preloader-area");
  preloaderArea.className = "page-loaded";
  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 500);
};
// !!!
// !Email Js
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const fullNameValue = document.getElementById("contactName");
  const emailValue = document.getElementById("contactEmail");
  const messageValue = document.getElementById("contactMessage");

  const valueFullName = fullNameValue.value;
  const valueEmail = emailValue.value;
  const valueMessage = messageValue.value;

  fullNameValue.value = "";
  emailValue.value = "";
  messageValue.value = "";
  const templateParams = {
    valueFullName: valueFullName,
    valueEmail: valueEmail,
    valueMessage: valueMessage,
  };

  if ((valueFullName, valueEmail, valueMessage)) {
    console.log(valueFullName, valueEmail, valueMessage);
    emailjs.send(
      "service_xtwjvlb",
      "template_yokdx9g",
      templateParams,
      "rA0oDCbC4JLEc_9IQ"
    );
  }
});
// !!!
