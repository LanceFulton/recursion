// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
	var result = "";
	if (obj === null){
		result += "null";
		return result;
	}
	if (typeof obj === "boolean" || typeof obj === "number"){
		result += obj.toString();
		return result;
	} 
	if (typeof obj === "string"){
		result += '"' + obj + '"';
		return result;
	}

	function ifArray(array){
		var arrayResult = "[";
		for (var i=0 ; i<array.length ; i++){
			if (arrayResult !== "["){
				arrayResult += ",";
			}
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
		arrayResult += "]";
		return arrayResult;
	};

	function ifObject(object){
		var objectResult = "{";
		for (key in object){
			if (objectResult !== "{"){
				objectResult += ",";
			}
			if (typeof object[key] === "string"){
				objectResult += '"' + key.toString() + '":"' + object[key] + '"';
			} else {
			objectResult += '"' + key.toString() + '":' + object[key];
			}
		}
		objectResult += "}";
		return objectResult;
	};

	if (obj.constructor === Array){
		result += ifArray(obj);
		return result;
	}

	if (obj.constructor === Object){
		result += ifObject(obj);
		return result;
	}
};

