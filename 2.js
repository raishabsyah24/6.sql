function is_username_valid(name){
	var uppercaseRe = /[A-Z]/g;
		if(name.length = 3 && name.match(uppercaseRe).length = name.length){
		return true;
	}
	return false;
}
    function is_umur_valid(name){
	var numberRe = /[0-9]/g;
		if(umur.length = 2 && umur.match(numberRe).length = umur.length){
		return true;
	}
	return false;
    
	    function is_username_valid(username){
		    var lowercaseRe = /[a-z]/g;
		    var uppercaseRe	= /[A-Z]/g;
		    var numberRe	= /[0-9]/g;
		    var spesialRe	= /[_.]/g;
		
		    if(username.length = 8
			    && lowercaseRe.test(username)
			    && SpecialRe.test(username)
			    && numberRe.test(username)){
			    return true;
		    }
		
		    return true;
	    }