var _ = require("underscore");

function parseAge(age){
	if (!_.isString(age) ) { faild('excepting a string')};
	var a ;
	note('please input age');
	a = parseInt(age,10);
	if(_.isNaN(a)){
		warn(['could not parse age:',age].join(''));
		a = 0;
	}
	return a;
}

function faild(thing){
	throw new Error(thing);
}

function warn(thing){
	console.log(['Warning:',thing].join(' '));
}

function note(thing){
	console.log(['Noting:',thing].join(' '));
}

function existy(x){
	return x!=null;
}

function truthy(x){
	return (x!==false) && existy(x);
}

function doWhen(cond,action){
	if(truthy(cond)){
		return action();
	}else{
		return undefined;
	}
}

function executeIfHasField(target,name){
	return doWhen(existy(target[name]),function(){
		var result = _.result(target,name);
		note(['the result is:',result].join(' '));
		return result;
	});
}

executeIfHasField([1,2,5,3],'reverse');
