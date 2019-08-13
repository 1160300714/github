window.onload=function (argument) {
	var div =document.getElementsByTagName('div')[0];
	var p = document.getElementsByTagName('p')[0];


	var a = p.createAttribute('class');
	p.appendChild(a);

	document.write(p.attribute.length);

	// body...
}
