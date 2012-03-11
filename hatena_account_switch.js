javascript:
(
function(){

	var logout = document.createElement('form');
	document.body.appendChild(logout);
	logout.setAttribute('action', 'https://www.hatena.ne.jp/logout');
	logout.setAttribute('method', 'post');

	var id = prompt('ID?', 'your id');
	var pass = prompt('PASS?', '');

	var form = document.createElement('form');
	document.body.appendChild(form);

	var hatena_id = document.createElement('input');
	hatena_id.setAttribute('type','text');
	hatena_id.setAttribute('name', 'name');
	hatena_id.setAttribute('id', 'login-name');
	hatena_id.setAttribute('value', id );
	form.appendChild(hatena_id);

	var hatena_pass = document.createElement('input');
	hatena_pass.setAttribute('type', 'password');
	hatena_pass.setAttribute('name', 'password');
	hatena_pass.setAttribute('class', 'password');
	hatena_pass.setAttribute('value', pass);
	form.appendChild(hatena_pass);
	
	form.setAttribute('action', 'https://www.hatena.ne.jp/login?location=http%3A%2F%2Fb.hatena.ne.jp%2F' + id + '%2F');
	form.setAttribute('method', 'post');

	logout.submit();
	form.submit();
}
)();
