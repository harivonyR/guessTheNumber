var True = "*"; True = True.fontcolor ("#3df544"); //green
var halfTrue = "*"; halfTrue = halfTrue.fontcolor("#ffff00"); //orange
var False = "*"; False = False.fontcolor ("#ff3333");//red


var	target = (Math.round(Math.random()*10000)).toString();
var lengthInputMax = target.length;
var attempt = 15;
var enteredWord;
var result = [0,0,0];
var k = attempt;

document.getElementById("btnValidate").innerHTML = k.toString();

function reload (statute){
	if (statute=="win") alert("Well played, the number is: "+target);
	else alert("No luck, the number was "+target);
	document.getElementById("demo").innerHTML = "";
	target = (Math.floor(Math.random()*10000)).toString();
	lengthInputMax = target.length;
	k=attempt;
	document.getElementById("btnValidate").innerHTML = "Submit (15)";
}


function mainScript()
{

	k-=1;   	
	document.getElementById("btnValidate").innerHTML = "Submit ("+k+")";
//ocument.getElementById("fBox").innerHTML = 15;
	tmp = document.getElementById("enteredWord").value;
	tmp = tmp.toString();
	

   	var spacingTmp = "_";
	var spacingSize = 25 - tmp.length;
	var i = 0;
	while (i<spacingSize){
		spacingTmp += "_";
		i++;
	}

	spacingTmp = spacingTmp.fontcolor ("grey");
	size = target.length;
	var i=0
	
	if (tmp.length>lengthInputMax) document.getElementById("demo").innerHTML += tmp+spacingTmp+"Too long<br>";
	else 
	{
			while (i<size)
		{
			if (tmp[i]==target[i])result[0] += 1;
			else if (target.indexOf(tmp[i])>0) result[1] +=1;
			else result[2] +=1;
			i++;
		}

	var resultMoji=new Array;
	var i=0;  

	while (i<3)
	{
		if (result [i]>0)
		{	
			if (i==0)
			{
				resultMoji.push("<bold>"+True+"</bold>");
				i--;
				result[0]-=1;
			}
			else if  (i==1)
			{
				resultMoji.push("<bold>"+halfTrue+"</bold>");
				i--;
				result[1]-=1;
			}
			else if (i==2)
			{
				resultMoji.push("<bold>"+False+"</bold>");
				i--;
				result[2]-=1;
			}
		}
		i++;
	}

	
 	
	wordEntered = document.getElementById("enteredWord").value+spacingTmp+" "+resultMoji.join(" ")+"<br>";
	document.getElementById("demo").innerHTML += wordEntered;
	
  	if (tmp==target){
  		document.getElementById("demo").innerHTML += "Congratulation<br>";
  		reload("win");
  	}

  	else if (k<=0){
  		reload("loose");
  	} 
	result = [0,0,0];
	}
	document.getElementById("enteredWord").value="";
}
