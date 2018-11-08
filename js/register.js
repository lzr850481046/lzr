var checkedbox=document.querySelector("#register_child>form>input.isread");
checkedbox.onclick=function(){
  var register_btn=document.querySelector("#register_btn");
  if(checkedbox.checked){
    register_btn.style.background="rgb(184, 27, 34)";
    register_btn.disabled="";
  }else{
    register_btn.style.background="#9A9A9A";
    register_btn.disabled=true;
  }
}