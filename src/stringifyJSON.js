// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// var stringifyJSON = function(obj) {
//   if (obj===true){
//   	return 'true';
//   } else if (obj.length===undefined){
//   	return '{}';
//   } else if (typeof obj === "string"){
//   	return '"' + obj + '"';
//   } else if (Array.isArray(t4)){

//   }
// };


var stringifyJSON = function(obj) {
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
};
