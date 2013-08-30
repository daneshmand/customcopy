var src = "Please set source path:";
var des = "Please set Destenation path:";

function myFunction(src,trg)
{
alert("src: " + src + " | des: " + trg);
}

function getSource(src)
{
	if (src == "")
	{
		return "surce://this/is/a/source/Path";
	}
	else
	{
		return src;
	};
}

function getDestination(des)
{
	if (des == "")
	{
		return "destination://this/is/a/target/Path";
	}
	else
	{
		return des;
	};
}