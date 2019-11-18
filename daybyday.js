function createTable()
{
	/* converting the user input string to integer */
	
    var salary = document.getElementById('ms').value;
    var car = document.getElementById('cp').value;
	var rent = document.getElementById('rp').value;
    var util = document.getElementById('ut').value;
	var a = parseInt(salary);
	var b = parseInt(car);
	var c = parseInt(rent);
	var d = parseInt(util);
	var exp = b + c + d;
	var leftover = a - exp;

	/*calculating how much is left over daily*/
	
	var day = leftover/30.4 ;

	if( a > 0){
	 document.getElementById('wrapper').innerHTML = "$ " + leftover;
    document.getElementById('wrapper2').innerHTML = "$ " + day;
	} else{ document.getElementById('wrapper').innerHTML = "$ " + 0;
    document.getElementById('wrapper2').innerHTML = "$ " + 0;}
}
