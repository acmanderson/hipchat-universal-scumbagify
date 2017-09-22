javascript:void(function(){
	var emoticon = prompt("Which emoticon would you like to scumbagify?");
	var hc_emoticons = window.HC.Emoticons.specials;
	hc_emoticons[emoticon] = hc_emoticons["1/" + emoticon] = "_scumbagify";
}())