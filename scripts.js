var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
animal = animal.toUpperCase();
parrots = text.replace('Papugi', animal);

halfSentence = parrots.slice(0, 45);
console.log(halfSentence);

halfSentence2 = parrots.substr(0, parrots.length/2);
console.log(halfSentence2);