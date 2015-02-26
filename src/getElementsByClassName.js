// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
	var result = [];

	function findElements(collection, term){
		if (collection.classList !== undefined){	//check if collection has classList
			if (collection.classList.contains(term)){
				result.push(collection);
			}
			if (collection.firstChild){		//check if collection has children
				for (var i=0 ; i<collection.childNodes.length ; i++){
					findElements(collection.childNodes[i], term)		//run function on children
				}
			}
		}
	};

	findElements(document.body, className);

	return result;
};
