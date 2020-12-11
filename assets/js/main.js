function makeQrCode() {
	var value = document.querySelector('#input').value;
	var valueSelected = document.querySelector('#qr-size').value;
	var size = '400x400';
	if (valueSelected == '1') {
		size = '50x50'
	}
	
	if (valueSelected == '2') {
		size = '150x150'
	}
	
	if (valueSelected == '3') {
		size = '200x200'
	}
	
	if (valueSelected == '4') {
		size = '300x300'
	}
	
	if (valueSelected == '5') {
		size = '400x400'
	}
	
	var qrCode = 'https://chart.apis.google.com/chart?cht=qr&chs=' + size +'&chld=H|1&choe=UTF-8&chl=' + encodeURIComponent(value);
	
	console.log(qrCode);
	document.querySelector('#qr-code-gen').src = qrCode;
}

function clearInput() {
	document.querySelector('#input').value = '';
	document.querySelector('#qr-code-gen').src = 'assets/img/chart.png'
}