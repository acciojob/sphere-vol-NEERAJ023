function volume_sphere() {
    //Write your code here
  let r=document.getElementById('MyForm').radius.value;
	
	document.getElementById('MyForm').volume.value=(4/3)*3.14*r*r*r;
	 event.preventDefault();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
