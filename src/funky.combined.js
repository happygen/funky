

function Request(){
	this.type;
	this.url;
	this.params;
	this.callBack;
}

Request.prototype.make = function(){
	if(this.type === 'get'){
		this._post();
	}
	else if(this.type === 'get'){
		this._get();
	}
};

Request.prototype._post = function(){
	$.post(this.url, this.params).done(this.callBack);
};

Request.prototype._get = function(){
	$.post(this.url, this.params).done(this.callBack);
};

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

