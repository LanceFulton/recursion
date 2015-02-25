// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];

//	generate docNodeList
	var docNodeList = [];
	for (var i=0 ; i<document.body.childNodes.length ; i++){
		docNodeList.push(document.body.childNodes[i]);
	}
	alert(docNodeList);

	return result;
};
