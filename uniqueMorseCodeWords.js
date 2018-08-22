function uniqueMorseRepresentations(words) { 
  const morseAlpha = { 
    'a': ".-",
    'b': "-...",
    'c': "-.-.",
    'd': "-..",
    'e': ".",
    'f': "..-.",
    'g': "--.",
    'h': "....",
    'i': "..",
    'j': ".---",
    'k': "-.-",
    'l': ".-..",
    'm': "--",
    'n': "-.",
    'o': "---",
    'p': ".--.",
    'q': "--.-",
    'r': ".-.",
    's': "...",
    't': "-",
    'u': "..-",
    'v': "...-",
    'w': ".--",
    'x': "-..-",
    'y': "-.--",
    'z': "--.."
  }; 

  const cache = {}; 
  var morseStr = ''; 

  for (let i = 0; i < words.length; i++) { 
    words[i].split('').forEach((letter) => { 
      if (morseAlpha[letter]) morseStr += morseAlpha[letter]; 
    });

    if (cache[morseStr]) { 
      cache[morseStr]++;  
    } else { 
      cache[morseStr] = 1; 
    }
    morseStr = ''; 
  }

  return Object.keys(cache).length; 
}

const words = ["rwjje","aittjje","auyyn","lqtktn","lmjwn"]; 
uniqueMorseRepresentations(words); 