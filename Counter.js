add=document.getElementById("btnAdd");
add.addEventListener('click',addFun);
sub=document.getElementById("btnSub");
sub.addEventListener('click',subFun);
textC1=document.getElementById("c1");

function addFun()
{
  textC1.value++; 
}

function subFun()
{
  textC1.value--; 
}