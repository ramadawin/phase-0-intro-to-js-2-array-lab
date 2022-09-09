const cats = ["Milo", "Otis", "Garfield"]  
function destructivelyAppendCat (cat){
    cats.push (cat) 
}
function destructivelyPrependCat (cat){
    cats.unshift (cat)
}
function destructivelyRemoveLastCat (Garfield){
    cats.pop (); 
}
function  destructivelyRemoveFirstCat (Milo){
    cats.shift ();
}
function appendCat (cat){
  const copyOfCats = cats.slice() 
  copyOfCats.push (cat)
  return copyOfCats
}
function prependCat (cat){
    const copyOfCats = cats.slice()
    copyOfCats.unshift (cat)
    return copyOfCats
}
function removeLastCat (Garfield){
    const copyOfCats =  cats.slice()
    copyOfCats.pop (Garfield)
    return copyOfCats
}
function removeFirstCat (Milo){
    const copyOfCats = cats.slice()
    copyOfCats.shift (Milo)
    return copyOfCats
}