const form =
  document.getElementById("checker");

const phoneInput =
  document.getElementById("phone");

const message =
  document.getElementById("message");

const result =
  document.getElementById("result");

const numberElement =
  document.getElementById("number");

const countryElement =
  document.getElementById("country");

const codeElement =
  document.getElementById("code");

const statusElement =
  document.getElementById("status");


form.addEventListener("submit", function(event) {

  event.preventDefault();

  const phone =
    phoneInput.value.trim();

  message.textContent = "";

  result.classList.add("hidden");


  if (!phone) {

    message.textContent =
      "Entre un numéro de téléphone.";

    return;
  }


  const cleaned =
    phone.replace(/[^\d+]/g, "");


  if (
    cleaned.length < 8 ||
    cleaned.length > 16
  ) {

    message.textContent =
      "Le numéro semble invalide.";

    return;
  }


  numberElement.textContent =
    phone;


  codeElement.textContent =
    detectCountryCode(cleaned);


  countryElement.textContent =
    detectCountry(cleaned);


  statusElement.textContent =
    "Le bannissement ne peut pas être confirmé publiquement avec seulement ce numéro.";


  result.classList.remove("hidden");

});


function detectCountryCode(phone) {

  if (phone.startsWith("+225"))
    return "+225";

  if (phone.startsWith("+33"))
    return "+33";

  if (phone.startsWith("+1"))
    return "+1";

  if (phone.startsWith("+44"))
    return "+44";

  if (phone.startsWith("+509"))
    return "+509";

  return "Inconnu";
}


function detectCountry(phone) {

  if (phone.startsWith("+225"))
    return "Côte d’Ivoire";

  if (phone.startsWith("+33"))
    return "France";

  if (phone.startsWith("+1"))
    return "États-Unis / Canada";

  if (phone.startsWith("+44"))
    return "Royaume-Uni";

  if (phone.startsWith("+509"))
    return "Haïti";

  return "Inconnu";
}
