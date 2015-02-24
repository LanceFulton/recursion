// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  var result = [];
  if (typeof obj === "number"){
  	return obj.toString();
  }
  if (obj === null){
  	return "null";
  }
  if (obj === true){
  	return "true";
  } 
  if (obj === false){
  	return "false";
  }
  if (typeof obj === "string"){
  	return '"' + obj + '"';
  }
  function ifArray(array, i){
    if (array.length === 0){
      return '[]';
    }
    while (result[i] === obj[i]){
      i++;
	}
    if (i === array.length){
      return result;
    }
    result[i] = array[i];
    return ifArray(array, i+1);
  };
  if (obj.constructor === Array){
  	return ifArray(obj, 0);
  }
};

