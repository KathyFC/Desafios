function test(){
	do{
		do{
			/*User Input*/
			var user = prompt("Choose : rock, paper o scissors");
			user = user.toUpperCase();
			if(user!="rock" && user!="paper" && user!="scissors"){
				alert("Insert a valid value");
			}
		}
		while(user!="rock" && user!="paper" && user!="scissors");

		/*Random PC value*/
		var randVal = Math.floor(Math.random()*3)+1;
		var selComp="";
		if(randVal==1){
			selComp="rock";
		}else if(randVal==2){
			selComp="paper";
		}else if(randVal==3){
			selComp="scissors";
		}

		/*Result*/
		var res="";
		if(user==selComp)
		{
			res="Tied";
		}
		else{
			if((user=="rock" && selComp=="scissors") || (user=="paper" && selComp=="rock") || (user=="scissors" && selComp=="paper"))
			{
				res="User wins";
			}
			else
			{
				res="PC wins";
			}
		}

		alert(user+" vs. "+selComp+"\n"+"Result: "+res);

	}
	while(confirm("Keep playing?")==true);
}
