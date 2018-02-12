function matcheslost()
{
 var x = getMatcheslost();
 window.alert("You have lost "+x+" matches");
}

function valid(givenMatches){
  const minMatches= 1;
  
  const maxMatches = 100;
  
  let matches;
  if (givenMatches < minMatches) {
    matches  = 0;
}
else if (givenMatches > maxMatches) {
    matches  = 0 ;
}
else if(givenMatches%1 !== 0){
  
  throw Error('The given argument is not a number');
}
else{
    matches  = givenMatches;
}
return matches;
}
function valid(givenWon){
  const minWon = 1;
  const maxWon = 100;
  let won;
  if (givenWon < minWon) {
    won  = 0;
}
else if (givenWon  > maxWon) {
  won  = 0 ;
}
else if(givenWon %1 !== 0){
  
  throw Error('The given argument is not a number');
}
else{
  won  = givenWon ;
}
return won;
}
function  getMatcheslost(){
    var givenMatches = document.getElementById("matches").value;
    var givenWon = document.getElementById("won").value;
      
    
   

    // check the first argument.................
    let matches  = valid(givenMatches);
    
    let won = valid(givenWon);
    //check the second argument ...................
    

  
    let lostMatches= matches-won;

    return lostMatches;
  };
  