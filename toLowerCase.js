function toLowerCase(str) {
  var result = '', charCode = ''; 

  for (let i = 0; i < str.length; i++) { 
    charCode = str.charCodeAt(i);
    //Already a lower case letter. 
    if (charCode < 65 || charCode > 90) { 
      result += str.substr(i, 1);
    } else { 
      result += String.fromCharCode(charCode + 32);
    }
  }

  return result; 
};