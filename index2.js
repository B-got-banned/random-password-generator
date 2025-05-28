const passButton = document.getElementById("passButton");
passButton.onclick = function(){
  function generatePassword(length, UpperC, LowerC, NumberC, SpecialC){
    let upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerC = "abcdefghijklmnopqrstuvwxyz";
    let numberC = "0123456789";
    let specialC =`~!@#$%^&*()-_=+[]{}|;:'",<.>/?`;

    let includeUpperC = UpperC.checked;
    let includeLowerC = LowerC.checked;
    let includeNumberC = NumberC.checked;
    let includeSpecialC = SpecialC.checked;
    let allowedChars = "";
    let password = "";
    allowedChars += includeUpperC ? upperC : "";
    allowedChars += includeLowerC ? lowerC : "";
    allowedChars += includeNumberC ? numberC : "";
    allowedChars += includeSpecialC ? specialC : "";
    
    if(length <= 0){
      return `Password must be at least 1 character long.`;
    }
    if(allowedChars === ""){
      return `At least 1 of the categories must be selected.`;
    }
    for(let i = 0; i < length; i++){
      let randomChar = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomChar];
    }

    return password;
  }

  const passLength = document.getElementById("passLength").value;
  const upperCaseChars = document.getElementById("upperCaseChars");
  const lowerCaseChars = document.getElementById("lowerCaseChars");
  const numberChars = document.getElementById("numberChars");
  const specialChars = document.getElementById("specialChars");

  let password = generatePassword(passLength, upperCaseChars, lowerCaseChars, numberChars, specialChars);
  const generatedPassword = document.getElementById("generatedPassword");

  generatedPassword.textContent = password;

  
}