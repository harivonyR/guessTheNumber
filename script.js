
const	target = (Math.floor(Math.random()*10000)).toString();
const   lengthInputMax = target.length;
var result = [0,0,0];
var k=15;

var True = "0"; True = True.fontcolor ("#3df544"); //green
var halfTrue = "0"; halfTrue = halfTrue.fontcolor("#ffff00"); //orange
var False = "0"; False = False.fontcolor ("#ff3333");//red



function monScript()
{

	k-=1;   	
	document.getElementById("btnValidate").innerHTML = "Validate ("+k+")";
//ocument.getElementById("fBox").innerHTML = 15;
	
	tmp = document.getElementById("enteredWord").value;
	tmp = tmp.toString();
	
   	var spacingTmp = "_";

	var spacingSize = 15 - tmp.length;
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

	
 	
	var wordEntered = document.getElementById("enteredWord").value+spacingTmp+" "+resultMoji.join(" ")+"<br>";
	document.getElementById("demo").innerHTML += wordEntered;
	
  	if (tmp==target) document.getElementById("demo").innerHTML += "Congratulation<br>";
  	else if (k<=0){
  		alert("The number was "+target);	
  	} 
	result = [0,0,0];
	}


}