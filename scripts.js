var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie'.toUpperCase();
var parrots = text.replace('Papugi', animal);

halfSentence = parrots.substr(0, parrots.length /2);
console.log(halfSentence);