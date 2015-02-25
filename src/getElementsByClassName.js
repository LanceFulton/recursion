// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
	var className = className;
	var nodeList = [];
	var result = [];

//	function to generate nodeList
	function genNodeList(collection){
		for (var i=0 ; i<collection.childNodes.length ; i++){
			var tempItem = collection.childNodes[i];
			if (tempItem.childNodes.length > 0){
				genNodeList(tempItem);
			} else {
				nodeList.push(tempItem);
			}
		}
	};

	genNodeList(document.body);

//	function to search nodeList and push hits to result
	function searchNodeList(term){
		for (var i=0 ; i<nodeList.length ; i++){
			var tempItem = nodeList[i];
			if (tempItem.classList.contains(term)){
				result.push(tempItem);
			}
		}
	};

	searchNodeList(className);

	return result;
};
