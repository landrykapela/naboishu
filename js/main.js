//dismiss cookie notification
const dismissCookie = document.getElementById("dismiss-cookie-notification");
if (dismissCookie) {
  dismissCookie.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    parent.style.display = "none";
  });
}
//sections
const sections = document.getElementsByTagName("section");
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
      activateMenu(child);
      navigateTo(destination);
    });
  }
});

const navigateTo = (destination) => {
  let destinationView = document.getElementById(destination);
  destinationView.scrollIntoView();
  // document.getElementById(activeChild).classList.remove("active");
};
const activateMenu = (menu) => {
  Array.from(nav_items).forEach((item) => {
    item.classList.remove("active");
  });
  menu.classList.add("active");
};
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  let x = rect.left;
  let x2 = x + element.offsetWidth;
  let y = rect.top;
  let y2 = y + element.offsetHeight;
  return !(
    x >= window.innerWidth ||
    y >= window.innerHeight ||
    x2 < 0 ||
    y2 < 0
  );
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
};
window.addEventListener("scroll", () => {
  // console.log("scrolling..." + window.scrollY);

  const top = document.querySelector("#top");
  if (window.scrollY > 50) {
    top.classList.add("dark-bg-trans");
  } else {
    top.classList.remove("dark-bg-trans");
  }

  Array.from(sections).forEach((section) => {
    if (isInViewport(section)) {
      let menuId = section.id.substring(2);
      console.log("sections: ", menuId);
      let menu = document.getElementById(menuId);
      activateMenu(menu);
    }
  });
});
