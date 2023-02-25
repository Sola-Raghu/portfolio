function calculate(){
    var p=document.getElementById("bottomdisplay").value;
    var q=eval(p);
    document.getElementById("topdisplay").value=q;
}
function backspace()
{
    var str=document.getElementById("bottomdisplay").value;
    document.getElementById("bottomdisplay").value=str.substring(0,str.length-1);
}
function display(value)
{
    document.getElementById("bottomdisplay").value+=value;
}
function clearScreen()
{
    document.getElementById("bottomdisplay").value="";
    document.getElementById("topdisplay").value="";
}