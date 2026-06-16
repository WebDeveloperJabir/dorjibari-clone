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
  let randInd = 0;
  let homeCard = ``;
  let randLen = 0;
  let randDOM = "";
  let showMore = document.getElementById("show-more");
  let showMoreLoader = document.getElementById("show-more-loader");

  function loadMore() {
    if (randInd >= randLen) {
      showMore.textContent = "VIEW ALL COLLECTION";
      return false;
    }
    showMore.style.display = "none";
    showMoreLoader.style.display = "block";
    randDOM = ``;
    for (let i = 0; i < 8; i++) {
      if (randInd >= randLen) {
        showMore.textContent = "VIEW ALL COLLECTION";
        break;
      }
      homeCard = `<div class="product-card">
            <div>
                <img src=${randomData[randInd]?.img} alt="Cloth">
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
                <svg aria-hidden="true" viewBox="0 0 512 512">
                    <path
                        d="M474.644 74.27C449.391 45.616 414.358 29.836 376 29.836c-53.948 0-88.103 32.22-107.255 59.25-4.969 7.014-9.196 14.047-12.745 20.665-3.549-6.618-7.775-13.651-12.745-20.665-19.152-27.03-53.307-59.25-107.255-59.25-38.358 0-73.391 15.781-98.645 44.435C13.267 101.605 0 138.213 0 177.351c0 42.603 16.633 82.228 52.345 124.7 31.917 37.96 77.834 77.088 131.005 122.397 19.813 16.884 40.302 34.344 62.115 53.429l.655.574c2.828 2.476 6.354 3.713 9.88 3.713s7.052-1.238 9.88-3.713l.655-.574c21.813-19.085 42.302-36.544 62.118-53.431 53.168-45.306 99.085-84.434 131.002-122.395C495.367 259.578 512 219.954 512 177.351c0-39.138-13.267-75.746-37.356-103.081M309.193 401.614c-17.08 14.554-34.658 29.533-53.193 45.646-18.534-16.111-36.113-31.091-53.196-45.648C98.745 312.939 30 254.358 30 177.351c0-31.83 10.605-61.394 29.862-83.245C79.34 72.007 106.379 59.836 136 59.836c41.129 0 67.716 25.338 82.776 46.594 13.509 19.064 20.558 38.282 22.962 45.659a15 15 0 0 0 28.524 0c2.404-7.377 9.453-26.595 22.962-45.66 15.06-21.255 41.647-46.593 82.776-46.593 29.621 0 56.66 12.171 76.137 34.27C471.395 115.957 482 145.521 482 177.351c0 77.007-68.745 135.588-172.807 224.263" />
                </svg>
            </div>
            <div class="ab b2">
                <div style="margin-right: 8px;">Quick View</div>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-eyes" viewBox="0 0 511.999 511.999">
                    <path
                        d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.9 16.9 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922M255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395" />
                    <path
                        d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275m0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516" />
                </svg>
            </div>
            <a href="" class="sh">${randomData[randInd]?.title}</a>
            <p>Tk ${randomData[randInd]?.price}</p>
        </div>`;
      randInd++;
      randDOM += homeCard;
    }
    homeProd.innerHTML += randDOM;
    showMore.style.display = "block";
    showMoreLoader.style.display = "none";
    updateProdCount();
  }
  window.loadMore = loadMore;

  async function loadData() {
    try {
      const res = await fetch("data/random-data.json");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      randomData = await res.json();
      randLen = randomData.length;
      loadMore();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  loadData();

  let staticData = [
    {
      title: "Panjabi:Semi Fit_Print_361#3",
      price: "Tk 2,890.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/panjabi_semifit_dorjibari.jpg?v=1771154156",
    },
    {
      title: "Panjabi_Regular Fit_Solid_166#5",
      price: "Tk 2,090.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/1_25171f26-b258-4c7e-8ff2-a6edc57f3003.jpg?v=1770441509",
    },
    {
      title: "Shirt:Full Sleeve_Semi Fit_Stripe_342#1",
      price: "Tk 1,990.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/Executive_formal_shirt1_2d7b08d9-74dd-4075-b7a7-c345df1425b8.jpg?v=1771132735",
    },
    {
      title: "Panjabi:Semi Fit_Semi Fit_Solid-Slub_354#1",
      price: "Tk 2,890.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/Panjabi_SemiFit_01.jpg?v=1771736378",
    },
    {
      title: "Panjabi_Regular Fit_Stripe_160#2",
      price: "Tk 2,890.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/Panjbai-regular_fit_dorjibari1.jpg?v=1771136181",
    },
    {
      title: "Shirt:Full Sleeve Blue Door_Regular Fit_ Dobby_293#1",
      price: "Tk 2,290.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/1_f4981ab0-a0f3-4a33-ba97-f86641c9473c.jpg?v=1741584807",
    },
    {
      title: "Polo:Short Sleeve_Semi Fit_Mercerized_129#1",
      price: "Tk 2,390.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/ShortSleevePolo-Dorjibari-01_c351aa60-59df-4c38-afa5-bb397bae6219.jpg?v=1771232696",
    },
    {
      title: "Panjabi:Semi Fit_Solid_356#1",
      price: "Tk 2,790.00",
      link: "",
      img: "https://dorjibari.com.bd/cdn/shop/files/01_20f688f3-22fe-4642-a1e2-30b3c99f8b10.jpg?v=1770098785",
    },
  ];

  let statInd = 0;
  let statHomeCard = ``;

  let statLen = staticData.length;
  let statDOM = "";
  for (statInd; statInd < statLen; statInd++) {
    statHomeCard = `<div class="product-card">
            <div>
                <img src=${staticData[statInd].img} alt="Cloth">
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
                <svg aria-hidden="true" viewBox="0 0 512 512">
                    <path
                        d="M474.644 74.27C449.391 45.616 414.358 29.836 376 29.836c-53.948 0-88.103 32.22-107.255 59.25-4.969 7.014-9.196 14.047-12.745 20.665-3.549-6.618-7.775-13.651-12.745-20.665-19.152-27.03-53.307-59.25-107.255-59.25-38.358 0-73.391 15.781-98.645 44.435C13.267 101.605 0 138.213 0 177.351c0 42.603 16.633 82.228 52.345 124.7 31.917 37.96 77.834 77.088 131.005 122.397 19.813 16.884 40.302 34.344 62.115 53.429l.655.574c2.828 2.476 6.354 3.713 9.88 3.713s7.052-1.238 9.88-3.713l.655-.574c21.813-19.085 42.302-36.544 62.118-53.431 53.168-45.306 99.085-84.434 131.002-122.395C495.367 259.578 512 219.954 512 177.351c0-39.138-13.267-75.746-37.356-103.081M309.193 401.614c-17.08 14.554-34.658 29.533-53.193 45.646-18.534-16.111-36.113-31.091-53.196-45.648C98.745 312.939 30 254.358 30 177.351c0-31.83 10.605-61.394 29.862-83.245C79.34 72.007 106.379 59.836 136 59.836c41.129 0 67.716 25.338 82.776 46.594 13.509 19.064 20.558 38.282 22.962 45.659a15 15 0 0 0 28.524 0c2.404-7.377 9.453-26.595 22.962-45.66 15.06-21.255 41.647-46.593 82.776-46.593 29.621 0 56.66 12.171 76.137 34.27C471.395 115.957 482 145.521 482 177.351c0 77.007-68.745 135.588-172.807 224.263" />
                </svg>
            </div>
            <div class="ab b2">
                <div style="margin-right: 8px;">Quick View</div>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-eyes" viewBox="0 0 511.999 511.999">
                    <path
                        d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.9 16.9 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922M255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395" />
                    <path
                        d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275m0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516" />
                </svg>
            </div>
            <a href="" class="sh">${staticData[statInd].title}</a>
            <p>Tk ${staticData[statInd].price}</p>
        </div>`;
    statDOM += statHomeCard;
  }
  document.getElementById("static-prod").innerHTML += statDOM;

  let randProdScroll = 0;
  let productCount = document.getElementById("product-showing-number");
  let productLen = document.getElementById("product-showing-length");
  let minProd = 0;

  function updateProdCount() {
    homeProd.scrollLeft = 0;
    productLen.innerText = randInd;
    if (window.innerWidth <= 850) {
      randProdScroll = 2;
      minProd = 2;
      productCount.innerText = randProdScroll;
    } else if (window.innerWidth <= 1050) {
      randProdScroll = 3;
      minProd = 3;
      productCount.innerText = randProdScroll;
    }
  }
  updateProdCount();
  window.addEventListener("resize", updateProdCount);

  function scrollProdR() {
    const scrollAmount = homeProd.querySelector("div").clientWidth;
    homeProd.scrollLeft += scrollAmount + 20;
    if (randProdScroll < randInd) {
      randProdScroll++;
      productCount.innerText = randProdScroll;
    }
  }

  function scrollProdL() {
    const scrollAmount = homeProd.querySelector("div").clientWidth;
    homeProd.scrollLeft += -scrollAmount - 20;
    if (randProdScroll > minProd) {
      randProdScroll--;
      productCount.innerText = randProdScroll;
    }
  }

  let instaSlide = document.getElementById("insta-slider");
  function scrollR() {
    const scrollAmount = instaSlide.querySelector("img").clientWidth;
    instaSlide.scrollLeft += scrollAmount;
  }
  function scrollL() {
    const scrollAmount = instaSlide.querySelector("img").clientWidth;
    instaSlide.scrollLeft += -scrollAmount;
  }

  window.scrollL = scrollL;
  window.scrollR = scrollR;
  window.scrollProdR = scrollProdR;
  window.scrollProdL = scrollProdL;
});
