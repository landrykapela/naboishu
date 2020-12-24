//dismiss cookie notification
const dismissCookie = document.getElementById("dismiss-cookie-notification");
if (dismissCookie) {
  dismissCookie.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    parent.style.display = "none";
  });
}
