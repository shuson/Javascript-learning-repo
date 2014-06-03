function quickSort(array){
  if(array.length <= 1){
    return array;
  }
  
  var basisIndex = Math.floor(array.length/2);
  var basis = array.splice(basisIndex,1)[0]; //cut the basis from the array
  var subSetLeft = [];
  var subSetRight = [];
  
  for(var i = 0; i < array.length; i++){
    if(array[i]<basis){
      subSetLeft.push(array[i]);
    }else{
      subSetRight.push(array[i]);
    }
  }
  
  return quickSort(subSetLeft).concat([basis],quickSort(subSetRight)); //concat the cut basis with left and right subset
}
