function theBeatlesPlay(musician, instrument) {
  var array = [];
  
  for (i = 0; i < 5; i++) {
      array.push(`${musician} plays ${instrument}`);
  }
  return array;
}