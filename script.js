document.addEventListener("DOMContentLoaded", () => {
  const images = document.getElementById("cover-image-slide").children;
  const imageButtons = document.getElementById("cover-buttons").children;
  let index = 0;
  let intervalID;
  images[0].classList.add("active");

  function moveCover() {
    images[index].classList.remove("active");
    imageButtons[index].style.backgroundColor = "transparent";
    index++;
    if (index > 7) {
      index = 0;
    }
    images[index].classList.add("active");
    imageButtons[index].style.backgroundColor = "rgb(71, 71, 71)";
  }

  function backCover() {
    images[index].classList.remove("active");
    imageButtons[index].style.backgroundColor = "transparent";
    index--;
    if (index < 0) {
      index = 7;
    }
    images[index].classList.add("active");
    imageButtons[index].style.backgroundColor = "rgb(71, 71, 71)";
  }

  function moveCoverTo(ind) {
    images[index].classList.remove("active");
    imageButtons[index].style.backgroundColor = "transparent";
    index = ind;
    images[index].classList.add("active");
    imageButtons[index].style.backgroundColor = "rgb(71, 71, 71)";
  }

  intervalID = setInterval(moveCover, 5000);

  window.nextCover = () => {
    clearInterval(intervalID);
    moveCover();
    intervalID = setInterval(moveCover, 5000);
  };

  window.prevCover = () => {
    clearInterval(intervalID);
    backCover();
    intervalID = setInterval(moveCover, 5000);
  };

  window.moveCoverTo = (ind) => {
    clearInterval(intervalID);
    moveCoverTo(ind);
    intervalID = setInterval(moveCover, 5000);
  };

  let randomData;
  let homeProd = document.getElementById("home-prod");

  async function loadData() {
    try {
      const res = await fetch("random-data.json");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      randomData = await res.json();
      let randInd = 0;
      let homeCard = ``;

      let randLen = randomData?.length;
      let randDOM = "";
      for (randInd; randInd < randLen; randInd++) {
        homeCard = `<div>
            <div>
                <img src=${randomData[randInd]?.img1} alt="Cloth">
                <div class="home-size">
                    <a href="">M</a>
                    <a href="">L</a>
                    <a href="">XL</a>
                    <a href="">XXL</a>
                </div>
                <button class="home-add-btn">QUICK ADD</button>
            </div>
            <div class="ab b1">
                <div style="margin-right: 8px;"><span style="margin-right: 3px;">Add</span>To Wishlist</div>
                <svg role="img" aria-hidden="true" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path
                                d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25 c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25 c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7 c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574 c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431 c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351 C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646 c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245 C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659 c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66 c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351 C482,254.358,413.255,312.939,309.193,401.614z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="ab b2">
                <div style="margin-right: 8px;">Quick View</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" aria-hidden="true"
                    focusable="false" role="presentation" class="icon icon-eyes">
                    <path
                        d=" M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035 c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201 C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418 c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418 C447.361,287.923,358.746,385.406,255.997,385.406z">
                    </path>
                    <path
                        d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275  s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516 s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z">
                    </path>
                </svg>
            </div>
            <a href="" class="sh">${randomData[randInd]?.title}</a>
            <p>Tk ${randomData[randInd]?.price}</p>
        </div>`;
        randDOM += homeCard;
      }
      homeProd.innerHTML += randDOM;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  loadData();

  let instaSlide = document.getElementById("insta-slider");
  function scrollRight() {
    const scrollAmount = instaSlide.querySelector("img").clientWidth;
    instaSlide.scrollLeft += scrollAmount;
  }
  function scrollLeft() {
    const scrollAmount = instaSlide.querySelector("img").clientWidth;
    instaSlide.scrollLeft += -scrollAmount;
  }

  window.scrollLeft = scrollLeft;
  window.scrollRight = scrollRight;
});
