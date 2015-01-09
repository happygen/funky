function Generator(){

}

Generator.prototype.div = function(options){
	return this._generateItem('div', options);
};

Generator.prototype.link = function(options){
	return this._generateItem('a', options);
};

Generator.prototype._generateItem = function(tagname, tagoptions){
	var returnVal = '<'+tagname;
	for (var key in tagoptions) {
		var attrName = key;
		if (tagoptions.hasOwnProperty(key) && key !== 'content') {
      		var attrVal = tagoptions[key];
      		returnVal += ' ' + attrName + '="' + attrVal + '"';
   		}
	}
	returnVal += '>';
	if(tagoptions.hasOwnProperty('content')){
		returnVal += tagoptions.content;
	}
	returnVal += '</'+tagname+'>';
	return returnVal;
};