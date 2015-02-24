// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  var result = "";
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
    if (i === array.length){
      return arrayResult;
    }
    arrayResult[i] = array[i];
    return ifArray(array, i+1);
  };
  if (obj.constructor === Array){
  	var arrayResult = [];
  	return ifArray(obj, 0);
  }
};

