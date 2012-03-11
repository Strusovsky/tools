javascript:
(
function(){

	/*
	idとpasswordを入力させる
	your idの部分を変えれば、デフォルトで入力されているものを変更できる
	*/
	var id = prompt('ID?', 'your id');
	var pass = prompt('PASS?', '');

	var login = document.createElement('form');
	document.body.appendChild(login);

	// なんかこの辺長い
	var hatena_id = document.createElement('input');
	hatena_id.setAttribute('type','text');
	hatena_id.setAttribute('name', 'name');
	hatena_id.setAttribute('id', 'login-name');
	hatena_id.setAttribute('value', id );
	login.appendChild(hatena_id);

	var hatena_pass = document.createElement('input');
	hatena_pass.setAttribute('type', 'password');
	hatena_pass.setAttribute('name', 'password');
	hatena_pass.setAttribute('class', 'password');
	hatena_pass.setAttribute('value', pass);
	login.appendChild(hatena_pass);
	
	/*
	 "location="以降を変更すればリダイレクト先を変更できる
	今はとりあえず自分のブックマークページにしている
	*/
	login.setAttribute('action', 'https://www.hatena.ne.jp/login?location=http%3A%2F%2Fb.hatena.ne.jp%2F' + id + '%2F');
	login.setAttribute('method', 'post');

	// ログアウト処理
	var logout = document.createElement('form');
	document.body.appendChild(logout);
	logout.setAttribute('action', 'https://www.hatena.ne.jp/logout');
	logout.setAttribute('method', 'post');
	logout.submit();

	// ログイン処理	
	login.submit();
}
)();
