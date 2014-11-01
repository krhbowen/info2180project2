var div;
var bl;
var emptyY;
var emptyX;

window.onload = function ()
{
	var puzzlearea = document.getElementById('puzzlearea');
	
	div = puzzlearea.getElementsByTagName('div');

	for (var i = 0;  i < div.length;  i++)
	{
		div[i].className = 'puzzlepiece';
		div[i].style.top = (parseInt(i/4)*100) + 'px';
        div[i].style.left = (i%4*100)+'px';
		div[i].style.backgroundPosition= '-' + div[i].style.left + ' ' + '-' + div[i].style.top;
		div[i].onmouseover = function()
		{
			if (moveable(parseInt(this.innerHTML)))
			{
				this.style.border = "2px solid red";
				this.style.color = "#006600";
			}
		};
		div[i].onmouseout = function()
		{
			this.style.border = "2px solid black";
			this.style.color = "#000000";
		};

		div[i].onclick = function()
		{
			if (moveable(parseInt(this.innerHTML)))
			{
				swap(this.innerHTML-1);
				if (checkFinish())
			
	{
					winner();
				}
				return;
			}
		};
	}

	emptyX = '300px';
	emptyY = '300px';
	var shufflebutton = document.getElementById('shufflebutton');
	shufflebutton.onclick = function()
	{   
	    var bod = document.getElementsByTagName('body');
	        bod[0].style.backgroundColor = "#FFFFFF";
		for (var i=0; i<250; i++)
		{   
			var rand = parseInt(Math.random()* 100) %4;
			if (rand == 0)
			{
				var tmp = checkUp(emptyX, emptyY);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}
			if (rand == 1)
			{
				var tmp = checkDown(emptyX, emptyY);
				if ( tmp != -1) 
				{
					swap(tmp);
				}
			}

			if (rand == 2)
			{
				var tmp = checkLeft(emptyX, emptyY);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}

			if (rand == 3)
			{
				var tmp = checkRight(emptyX, emptyY);
				if (tmp != -1)
				{
					swap(tmp);
				}
			}
		}
	};
};

function moveable(smt)
{
	if (checkLeft(emptyX, emptyY) == (smt-1))
	{
		return true;
	}

	if (checkDown(emptyX, emptyY) == (smt-1))
	{
		return true;
	}

	if (checkUp(emptyX, emptyY) == (smt-1))
	{
		return true;
	}

	if (checkRight(emptyX, emptyY) == (smt-1))
	{
		return true;
	}
}
function lightUp()
{
	bl --;
	if (bl == 0)
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#FFFFFF";
		alert('you win');
		return;
	}
	if (bl % 2)
	{
		var body = document.getElementsByTagName('body');
	
	body[0].style.backgroundColor = "#00FF00";	
	}
	else
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#FF0000";
	}
}

function winner()
{
	var body = document.getElementsByTagName('body');
	body[0].style.backgroundColor = "purple";
	bl = 10;

}

function checkFinish()
{
	var t = true;
	for (var i = 0; i < div.length; i++) {
		var y = parseInt(div[i].style.top);
		var x = parseInt(div[i].style.left);

		if (x != (i%4*100) || y != parseInt(i/4)*100)
		{
			t = false;
			break;
		}
	}
	return t;
}

function checkLeft(x, y)
{
	var x = parseInt(x);
	var y = parseInt(y);

	if (x > 0)
	{
		for (var i = 0; i < div.length; i++) 
		{
			if (parseInt(div[i].style.left) + 100 == x && parseInt(div[i].style.top) == y)
			{
				return i;
			} 
		}
	}
	else 
	{
		return -1;
	}
}

function checkRight (x, y) {
	var x = parseInt(x);
	var y = parseInt(y);
	if (x < 300)
	{
		for (var i =0; i<div.length; i++){
		
	if (parseInt(div[i].style.left) - 100 == x && parseInt(div[i].style.top) == y) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}

function checkUp (x, y) {
	var x = parseInt(x);
	var y = parseInt(y);
	if (y > 0)
	{
		for (var i=0; i<div.length; i++)
		{
			if (parseInt(div[i].style.top) + 100 == y && parseInt(div[i].style.left) == x) 
			{
				return i;
		
	}
		} 
	}
	else 
	{
		return -1;
	}
}

function checkDown (x, y)
{
	var x = parseInt(x);
	var y = parseInt(y);
	if (y < 300)
	{
		for (var i=0; i<div.length; i++)
		{
			if (parseInt(div[i].style.top) - 100 == y && parseInt(div[i].style.left) == x) 
			{
				return i;
			}
		}
	}
	else

	{
		return -1;
	} 
}

function swap (smt) {
	var temp = div[smt].style.top;
	div[smt].style.top = emptyY;
	emptyY = temp;

	temp = div[smt].style.left;
	div[smt].style.left = emptyX;
	emptyX = temp;
}
