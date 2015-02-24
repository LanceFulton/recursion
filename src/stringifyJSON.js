// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  var result = "";
  if (typeof obj === "number"){
  	result += obj.toString();
  	return result;
  }
  if (obj === null){
  	result += "null";
  	return result;
  }
  if (obj === true){
  	result += "true";
  	return result;
  } 
  if (obj === false){
  	result += "false";
  	return result;
  }
  if (typeof obj === "string"){
  	result += '"' + obj + '"';
  	return result;
  }
  function ifArray(array, i){
    if (array.length === 0){
      return '[]';
	}
    if (i === array.length){
      return result;
    }
    if (typeof array[i] === "string"){
    	result += '["' + array[i] + '"]';
    }
    if (typeof array[i] === "number"){
    	result += "[" + array[i] + "]";
    }
    return ifArray(array, i+1);
  };
  if (obj.constructor === Array){
  	return ifArray(obj, 0);
  }
};

