//dismiss cookie notification
const dismissCookie = document.getElementById("dismiss-cookie-notification");
if (dismissCookie) {
  dismissCookie.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    parent.style.display = "none";
  });
}

//navigation menus
const nav = document.getElementsByTagName("nav")[0];
const nav_items = nav.children;
// console.log("nav: ", nav_items);
// var activeChild = "home";
Array.from(nav_items).forEach((child) => {
  if (child) {
    // if (child.classList.contains("active")) activeChild = child.id;
    // console.log("child: ", child);
    child.addEventListener("click", (e) => {
      let id = e.target.id;
      let destination = "s-" + id;
      Array.from(nav_items).forEach((c) => {
        c.classList.remove("active");
      });
      child.classList.add("active");
      navigateTo(destination);
    });
  }
});

const navigateTo = (destination) => {
  let destinationView = document.getElementById(destination);
  destinationView.scrollIntoView();
  // document.getElementById(activeChild).classList.remove("active");
};
