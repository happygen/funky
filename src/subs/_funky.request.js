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