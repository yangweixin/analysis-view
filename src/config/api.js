var root = "https://cnodejs.org/api/v1"
var request = require('superagent')

function toType(obj) {
	return object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function filter_null(o) {
	for (var key in o){
		if(o[key] == null){
			delete o[key]
		}

		if(toType(o[key]) == 'string'){
			o[key] = o[key].trim()
			if(o[key].length == 0){
				delete o[key]
			}
		}
	}

	return o
}

function _api_base(method, url, params, success, failure) {
	var r = request(method, url).type('text/plain')

	if(params){
		params = filter_null(params)
		if(method == 'POST' || method == 'PUT'){
			params = JSON.stringify(params)
			r = r.send(params)
		}else if(method == 'GET' || method == 'DELETE'){
			r = r.query(params)
		}
	}

	r.end(function(err, res){
		if(err){
			alert('api error, HTTP CODE: '+ res.status)
			return
		}

		if(res.body.success == true){
			if(success){
				success(res.body)
			}
		} else {
			if (failure){
				failure(res.body)
			}else{
				alert('error: '+ JSON.stringify(res.body))
			}
		}
	})
}

//开放的接口
export default {
	get: function(url, params, success, failure) {
		return _api_base('GET', root + '/' + url, params, success, failure)
	},
	post: function(url, params, success, failure) {
		return _api_base('POST', root + '/' + url, params, success, failure)
	},
	put: function(url, params, success, failure) {
		return _api_base('PUT', root + '/' + url, params, success, failure)
	},
	delete: function(url, params, success, failure) {
		return _api_base('DELETE', root + '/' + url, params, success, failure)
	}

}
