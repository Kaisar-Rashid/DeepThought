document.querySelector(".open-arrow").addEventListener("click", () => {
  let topBar = document.querySelector(".side-container-top");
  let bottomBar = document.querySelector(".side-container-bottom");
  let mainOne = document.querySelector(".main-one");
  let image = document.querySelector(".open-arrow");
  let info = document.querySelector(".info");

  if (topBar.classList.contains("collapsed")) {
    topBar.classList.remove("collapsed");
    topBar.classList.add("expanded");
    bottomBar.classList.remove("collapsed");
    bottomBar.classList.add("expanded");

    mainOne.innerHTML = `
      <div class="features">
        <ul>
          <li class="first-list">Explore the world of management</li>
          <div class="Remaining-list">
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
          </div>
        </ul>
      </div>
    `;
    document.querySelector(".main-one").style.border = "none";
    image.src = "./images/crossOut.png";
    info.innerHTML = "Journey Board";
  } else {
    topBar.classList.add("collapsed");
    topBar.classList.remove("expanded");
    bottomBar.classList.add("collapsed");
    bottomBar.classList.remove("expanded");
    mainOne.classList.remove("features");
    mainOne.innerHTML = `<span class="toggle-text">1<span>`;
    document.querySelector(".main-one").style.border = "1px solid #0029FF";

    image.src = "./images/crossin.png";
    info.innerHTML = "";
  }
});
