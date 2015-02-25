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
	  		if (Array.isArray(array[i])){
	  			arrayResult += ifArray(array[i]);
	  		}
	  		else if (typeof array[i] === "object"){
	  			arrayResult += ifObject(array[i]);
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
			} 
			if (object[key] === null){
				objectResult += '"' + key.toString() + '":' + "null";
			}
			if (typeof object[key] === "boolean"){
				objectResult += '"' + key.toString() +  '":' + object[key].toString();
			}
			if (typeof object[key] === "object" && object[key] !== null && object[key].constructor !== Array){
				objectResult += '"' + key.toString() + '":';
				objectResult += ifObject(object[key]);
			}
			if (Array.isArray(object[key])){
				objectResult += '"' + key.toString() + '":';
				objectResult += ifArray(object[key]);
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

