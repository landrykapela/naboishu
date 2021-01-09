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

Array.from(nav_items).forEach((child) => {
  if (child) {
    // if (child.classList.contains("active")) activeChild = child.id;
    // console.log("child: ", child);
    child.addEventListener("click", (e) => {
      let id = e.target.id;

      activateMenu(child);
      navigateTo(id);
    });
  }
});

const navigateTo = (destination) => {
  let dest_id = "s-" + destination;
  let destinationView = document.getElementById(dest_id);
  if (destinationView) destinationView.scrollIntoView();
  else {
    console.log("pathname: ", window.location.pathname); ///destinations/africa/
    let pathname = window.location.pathname;
    let parts = pathname.split("/");
    parts[parts.length - 2] = destination;
    window.location.pathname = parts.join("/");
    // window.location.pathname = "/destinations/" + destination;
  }
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
};

//menu button
const menuButton = document.querySelector("#menu");
if (menuButton) {
  menuButton.addEventListener("click", (e) => {
    showMenu(menuButton);
  });
}

const showMenu = (menu) => {
  if (menu.firstChild.textContent === "menu") {
    nav.classList.add("stretchable");
    menu.firstChild.textContent = "close";
  } else {
    nav.classList.remove("stretchable");
    menu.firstChild.textContent = "menu";
  }
};
window.addEventListener("scroll", () => {
  // console.log("scrolling..." + window.scrollY);

  const top = document.querySelector("#top");
  if (window.scrollY > 50) {
    top.classList.add("dark-bg-trans");
  } else {
    top.classList.remove("dark-bg-trans");
  }
  if (!window.location.pathname.includes("destinations")) {
    Array.from(sections).forEach((section) => {
      if (isInViewport(section)) {
        let menuId = section.id.substring(2);
        console.log("sections: ", menuId);
        let menu = document.getElementById(menuId);
        activateMenu(menu);
      }
    });
  }
});
