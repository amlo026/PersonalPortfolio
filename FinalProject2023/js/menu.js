let flag=getCookie('flag');
let link, linkdisplay;
if (flag=="1") 
{
	link="logout.html";
	linkdisplay="Logout";
}
else
{
  link="login.html";
  linkdisplay="Login";
}
// Create the login/logout button
let loginLogout = document.createElement("a");
loginLogout.href = link;
loginLogout.className = "loginlogout";
loginLogout.innerText = linkdisplay;

loginLogout.style.backgroundColor = "tomato";
loginLogout.style.border = "3px solid black";
loginLogout.style.color = "black";
loginLogout.style.borderRadius = "25px";
loginLogout.style.fontSize = "20px";
loginLogout.style.width = "100px";
loginLogout.style.height = "50px";
loginLogout.style.float = "left";
loginLogout.style.marginTop = "-68px";
loginLogout.style.marginLeft = "40px";
loginLogout.style.paddingTop = "11px";


// Find the existing placeholder span
document.addEventListener("DOMContentLoaded", function() {
  // Find the existing placeholder span
  let placebutton = document.getElementById('logoutbutton');

  // Replace the placeholder with the login/logout button
  if (placebutton) {
    placebutton.parentNode.replaceChild(loginLogout, placebutton);
  } else {
    // If the placeholder span is not found, append the login/logout button to the navigation bar
    document.querySelector(".nav ul").appendChild(loginLogout);
  }
});