document.addEventListener("DOMContentLoaded", () => {
    const dynamicTags = `
    <div class="small-sort-place" id="small-sort-place">
            <div class="small-sort-header">
                <p>SORT BY:</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="sort-cross" onclick="togglePanelProd(2)">
                    <path
                        d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"
                    ></path>
                </svg>
            </div>
            <div class="small-sort-list">
                <p class="active">Featured</p>
                <p>Most relevant</p>
                <p>Best selling</p>
                <p>Alpahbetically, A-Z</p>
                <p>Alpahbetically, Z-A</p>
                <p>Price, low to high</p>
                <p>Price, high to low</p>
                <p>Date, old to new</p>
                <p>Date, new to old</p>
            </div>
        </div>`;
    let quickView = `<div class="quick-view-place">
            <div class="quick-cross black-cross">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                        d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"
                    ></path>
                </svg>
            </div>
            <div class="quick-view">
                <div class="quick-left-side">
                    <img
                        src="https://dorjibari.com.bd/cdn/shop/files/01_340f2cb4-71f6-4f85-81a5-aea3dd382113.jpg?v=1777363021"
                        alt=""
                    />
                    <br />
                    <div>
                        <img
                            src="https://dorjibari.com.bd/cdn/shop/files/01_340f2cb4-71f6-4f85-81a5-aea3dd382113.jpg?v=1777363021"
                            alt=""
                        />
                        <img
                            src="https://dorjibari.com.bd/cdn/shop/files/02_d75714e3-90c6-41da-bc5f-5a70cd90a5a2_compact.jpg?v=1777363021"
                            alt=""
                        />
                        <img
                            src="https://dorjibari.com.bd/cdn/shop/files/03_35e38bde-cc5e-40cc-b7aa-466a9baed1f3_compact.jpg?v=1777363021"
                            alt=""
                        />
                    </div>
                </div>
                <div class="quick-right-side">
                    <h3 id="quick-prod-name">Trouser</h3>
                    <div class="quick-sold-inform">
                        <svg class="icon icon-fire-2" viewBox="0 0 384 512" fill="rgb(233, 81, 68)">
                            <path
                                d="M216 23.858c0-23.802-30.653-32.765-44.149-13.038C48 191.851 224 200 224 288c0 35.629-29.114 64.458-64.85 63.994C123.98 351.538 96 322.22 96 287.046v-85.51c0-21.703-26.471-32.225-41.432-16.504C27.801 213.158 0 261.332 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-193.003-168-296.142"
                            />
                        </svg>
                        <p style="color: rgb(233, 81, 68)">
                            <span id="quick-sold-many">6</span> sold in last
                            <span id="quick-sold-time">20</span> hours
                        </p>
                    </div>
                    <a href="category.html" class="dorjibari-stock-link"
                        >Dorjibari <br />
                        In stock</a
                    >
                    <br />
                    <h4 id="quick-price">Tk 1,590.00</h4>
                    <br />
                    <p style="font-size: 13px"><b>Size:</b> <span id="quick-size">30</span></p>
                    <div id="quick-size-list">
                        <p class="quick-size-active">30</p>
                        <p>32</p>
                        <p>34</p>
                        <p>36</p>
                    </div>
                    <p style="color: red; font-size: 13px">Hurry up! only 7 left</p>
                    <br />
                    <p style="font-size: 13px"><b>Quantity:</b></p>
                    <div class="product-counter">
                        <p class="counter-sign">-</p>
                        <p id="quick-count">1</p>
                        <p class="counter-sign">+</p>
                    </div>
                    <p style="font-size: 13px">
                        Subtotal: <b>Tk <span id="quick-subtotal">1590.00</span></b>
                    </p>
                    <div class="addtocart-heart">
                        <button class="add-to-cart">ADD TO CART</button>
                        <div onclick="this.classList.toggle('quick-liked-prod')">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="M9.5 5C5.363 5 2 8.402 2 12.5c0 1.43.648 2.668 1.25 3.563a9.3 9.3 0 0 0 1.219 1.468L15.28 28.375l.719.719.719-.719L27.53 17.531S30 15.355 30 12.5C30 8.402 26.637 5 22.5 5c-3.434 0-5.645 2.066-6.5 2.938C15.145 7.066 12.934 5 9.5 5m0 2c2.988 0 5.75 2.906 5.75 2.906l.75.844.75-.844S19.512 7 22.5 7c3.043 0 5.5 2.496 5.5 5.5 0 1.543-1.875 3.625-1.875 3.625L16 26.25 5.875 16.125s-.484-.465-.969-1.187C4.422 14.215 4 13.273 4 12.5 4 9.496 6.457 7 9.5 7"
                                />
                            </svg>
                        </div>
                    </div>
                    <button class="buy-it-now">BUY IT NOW</button>
                    <div class="viewers-div">
                        <svg class="icon" viewBox="0 0 511.626 511.626">
                            <path
                                d="M505.918 236.117q-39.978-65.38-107.497-105.065Q330.9 91.366 255.813 91.365c-50.059 0-97.595 13.225-142.61 39.687Q45.679 170.736 5.708 236.117 0 246.109 0 255.818q0 9.71 5.708 19.699c26.647 43.589 62.479 78.614 107.495 105.064 45.015 26.46 92.551 39.68 142.61 39.68q75.089.002 142.608-39.536c45.012-26.361 80.852-61.432 107.497-105.208q5.708-9.987 5.708-19.699 0-9.71-5.708-19.701m-311.35-78.087q25.55-25.552 61.242-25.554c3.805 0 7.043 1.336 9.709 3.999 2.662 2.664 4 5.901 4 9.707 0 3.809-1.338 7.044-3.994 9.704-2.662 2.667-5.902 3.999-9.708 3.999-16.368 0-30.362 5.808-41.971 17.416q-17.418 17.42-17.416 41.971c0 3.811-1.336 7.044-3.999 9.71q-4 4-9.707 3.999-5.712 0-9.71-3.999-4-4-3.999-9.71c0-23.79 8.52-44.207 25.553-61.242m185.299 191.01c-38.164 23.12-79.514 34.687-124.054 34.687q-66.808.002-124.051-34.687c-57.243-34.689-69.901-54.2-95.215-93.222 28.931-44.921 65.19-78.518 108.777-100.783-11.61 19.792-17.417 41.207-17.417 64.236 0 35.216 12.517 65.329 37.544 90.362s55.151 37.544 90.362 37.544c35.214 0 65.329-12.518 90.362-37.544s37.545-55.146 37.545-90.362c0-23.029-5.808-44.447-17.419-64.236 43.585 22.265 79.846 55.865 108.776 100.783q-37.964 58.532-95.21 93.222"
                            />
                        </svg>
                        <p><span id="quick-viewers">10</span> customers are viewing this product</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>`;

    document.getElementById("dynamic-component").insertAdjacentHTML("afterbegin", dynamicTags);

    const minSlider = document.getElementById("min-slider");
    const maxSlider = document.getElementById("max-slider");

    let minValue = document.getElementById("min-value");
    let maxValue = document.getElementById("max-value");

    const sliderRange = document.getElementById("slider-range");

    function updateSlider(e) {
        let min = parseInt(minSlider.value);
        let max = parseInt(maxSlider.value);

        minValue.value = min;
        maxValue.value = max;

        const gap = 1;
        if (min >= max - gap) {
            if (e.target === minSlider) {
                min = max - gap;
                minSlider.value = min;
            } else {
                max = min + gap;
                maxSlider.value = max;
            }
        }
        minValue.value = min;
        maxValue.value = max;
        sliderRange.style.left = (min / 1000) * 100 + "%";
        sliderRange.style.width = ((max - min) / 1000) * 100 + "%";
    }

    minSlider.addEventListener("input", updateSlider);
    maxSlider.addEventListener("input", updateSlider);

    updateSlider({ target: minSlider });

    const sortElement = document.getElementById("small-sort-place");
    const pTags = Array.from(sortElement.querySelectorAll("p"));
    let prevSelectedSort = pTags.findIndex((p) => p.classList.contains("active"));
    if (prevSelectedSort === -1) prevSelectedSort = 0;

    sortElement.addEventListener("click", function (event) {
        const clickedParagraph = event.target.closest("p");
        if (!clickedParagraph || !pTags.includes(clickedParagraph)) return;
        const clickedIndex = pTags.indexOf(clickedParagraph);

        if (clickedIndex === prevSelectedSort) return;
        if (prevSelectedSort !== null && pTags[prevSelectedSort])
            pTags[prevSelectedSort].classList.remove("active");

        clickedParagraph.classList.add("active");
        prevSelectedSort = clickedIndex;
    });

    const categoryProd = document.getElementById("category-products");
    const resizerButtons = document.getElementById("view-as-filter");
    const productDetails = document.getElementById("product-details");
    const productMoreDetails = document.getElementById("product-more-details");
    const resizers = Array.from(
        resizerButtons.querySelectorAll(".three-image-sign, .two-image-sign")
    );
    let prevSelectedResize = resizers.find((r) => r.classList.contains("active")) || null;

    function resizeProdSection(size, e) {
        if (size >= 1 && size <= 4) {
            productDetails.style.display = "block";
            productMoreDetails.style.display = "none";
            const columns = "1fr ".repeat(size).trim();
            categoryProd.style.setProperty("--category-grid", columns);
        } else {
            productDetails.style.display = "none";
            productMoreDetails.style.display = "block";
            categoryProd.style.setProperty("--category-grid", "1fr");
        }
        const rawTarget = e instanceof Node ? e : e?.target;
        const current =
            rawTarget && typeof rawTarget.closest === "function"
                ? rawTarget.closest(".three-image-sign, .two-image-sign")
                : null;
        if (!current || current === prevSelectedResize) return;
        if (prevSelectedResize) {
            prevSelectedResize.classList.remove("active");
        }
        current.classList.add("active");
        prevSelectedResize = current;
    }
    window.resizeProdSection = resizeProdSection;

    function handleResizeProd(e) {
        if (window.matchMedia("(max-width: 350px)").matches) {
            resizeProdSection(1, e);
        } else if (window.matchMedia("(max-width: 1050px)").matches) {
            resizeProdSection(2, e);
        } else if (window.matchMedia("(max-width: 1200px)").matches) {
            resizeProdSection(3, e);
        }
    }

    handleResizeProd();

    window.addEventListener("resize", handleResizeProd);

    function showDropDown(button, dropdown) {
        let dropdownEl = document.getElementById(dropdown);
        let buttonEl = document.getElementById(button);
        let currentOpacity = window.getComputedStyle(dropdownEl).opacity;
        if (currentOpacity <= 0 || isNaN(currentOpacity)) {
            dropdownEl.style.opacity = "1";
            dropdownEl.style.top = "52px";
            buttonEl.style.transform = "rotate(180deg)";
        } else {
            dropdownEl.style.opacity = "0";
            dropdownEl.style.top = "22px";
            buttonEl.style.transform = "rotate(0deg)";
        }
    }

    window.showDropDown = showDropDown;

    let sidebarOverlay = document.getElementById("sidebar-overlay");

    function togglePanelProd(id) {
        if (id == 1) {
            const filterElement = document.getElementById("filter");
            const currentTransform = window.getComputedStyle(filterElement).transform;
            if (currentTransform === "none" || currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
                filterElement.style.transform = "translateX(-120%)";
            } else filterElement.style.transform = "translateX(0)";
            sidebarOverlay.style.display =
                sidebarOverlay.style.display === "block" ? "none" : "block";
        }
        if (id == 2) {
            sortElement.style.transform =
                sortElement.style.transform === "translateY(0px)"
                    ? "translateY(100%)"
                    : "translateY(0px)";
            sidebarOverlay.style.display =
                sidebarOverlay.style.display === "block" ? "none" : "block";
        }
    }
    window.togglePanelProd = togglePanelProd;
});
