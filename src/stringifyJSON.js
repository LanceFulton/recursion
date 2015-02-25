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

	function ifArray(array){
		var arrayResult = "[";
		for (var i=0 ; i<array.length ; i++){
		  	if (i === 0){
		  		if (typeof array[i] === "string"){
		  			arrayResult += '"' + array[i] + '"';
		  		}
		  		if (typeof array[i] === "number"){
		  			arrayResult += array[i];
		  		}
		  		if (typeof array[i] === "object"){
		  			arrayResult += ifArray(array[i], i);
		  		}
		  	}
		  	if (i !== 0){
		  		if (typeof array[i] === "string"){
		  			arrayResult += ',"' + array[i] + '"';
		  		}
		  		if (typeof array[i] === "number"){
		  			arrayResult += "," + array[i];
		  		}
		  		if (typeof array[i] === "object"){
		  			arrayResult += ",";
		  			arrayResult += ifArray(array[i], i);
		  		}
		  	}
		}
		arrayResult += "]";
		return arrayResult;
	};

	if (obj.constructor === Array){
		result += ifArray(obj);
		return result;
	}
};

