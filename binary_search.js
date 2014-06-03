//return the index of target in the sorted array
function binarSearch(array, target){
  var low = 0;
  var high = array.length-1;
  
  while(low<=high){
    var mid = Math.floor((high+low)/2);
    var value = array[mid];
    if(value > target){
      high = mid - 1;
    }else if(value < target){
      low = mid + 1;
    }else{
      return mid;
    }
    return null;
  }
}
