const password_el = document.querySelector("#password");
const length_el = document.querySelector("#length");
const upperCase_el = document.querySelector("#uppercase");
const lowerCase_el = document.querySelector("#lowercase");
const number_el = document.querySelector("#numbers");
const symbol_el = document.querySelector("#symbols");
//////////////////////////////////////
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
/////////////////////////////////////
const upperCase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

const generatePassword = function () {
  let password = "";
  let length = length_el.value;
  let chars = "";

  chars += upperCase_el.checked ? upperCase_chars : "";
  chars += lowerCase_el.checked ? lowerCase_chars : "";
  chars += number_el.checked ? numbers_chars : "";
  chars += symbol_el.checked ? symbols_chars : "";

  for (let i = 0; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }
  password_el.value = password;
};

const copyPassword = async function () {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(password_el.value);

    alert("Password copied to clipboard");
  }
};

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
