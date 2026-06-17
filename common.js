document.addEventListener("DOMContentLoaded", () => {
  let header = `<a href="index.html">
            <img src="/images/logo.avif" alt="">
        </a>
        <div class="left-side">
            <div class="left-side-one">
                <a href="#" class="home-links">Outlets</a>
                <div style="position: relative;">
                    <input type="text" name="" class="home-inp" placeholder="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 27.5 27.5"
                        class="search-icon">
                        <path
                            d="M0 10.7c0 5.9 4.8 10.7 10.7 10.7 2.6 0 4.9-.9 6.8-2.4l8.5 8.5 1.5-1.5-8.5-8.5c1.5-1.8 2.4-4.2 2.4-6.8C21.4 4.8 16.6 0 10.7 0S0 4.8 0 10.7m3 0C3 6.4 6.4 3 10.7 3s7.7 3.4 7.7 7.7-3.4 7.7-7.7 7.7S3 15 3 10.7"
                            style="fill:#353535" />
                    </svg>
                </div>
            </div>
            <div class="left-side-two">
                <div>
                    <svg class="small-svg" style="margin-bottom:2px" viewBox="0 0 30 30">
                        <path
                            d="M20 6V5a5 5 0 0 0-10 0v1H4v24h22V6zm-8-1a3 3 0 1 1 6 0v1h-6zm12 23H6V8h4v3h2V8h6v3h2V8h4z" />
                    </svg>
                    <button class="home-links" style="padding: 0; border: none; background-color: white;" onclick="showShoppingCart()">Shopping
                        Cart</button> <span id="shopping-cart-count">0</span>
                </div>
                <div>
                    <svg aria-hidden="true" class="small-svg" viewBox="0 0 512 512">
                        <path
                            d="M474.644 74.27C449.391 45.616 414.358 29.836 376 29.836c-53.948 0-88.103 32.22-107.255 59.25-4.969 7.014-9.196 14.047-12.745 20.665-3.549-6.618-7.775-13.651-12.745-20.665-19.152-27.03-53.307-59.25-107.255-59.25-38.358 0-73.391 15.781-98.645 44.435C13.267 101.605 0 138.213 0 177.351c0 42.603 16.633 82.228 52.345 124.7 31.917 37.96 77.834 77.088 131.005 122.397 19.813 16.884 40.302 34.344 62.115 53.429l.655.574c2.828 2.476 6.354 3.713 9.88 3.713s7.052-1.238 9.88-3.713l.655-.574c21.813-19.085 42.302-36.544 62.118-53.431 53.168-45.306 99.085-84.434 131.002-122.395C495.367 259.578 512 219.954 512 177.351c0-39.138-13.267-75.746-37.356-103.081M309.193 401.614c-17.08 14.554-34.658 29.533-53.193 45.646-18.534-16.111-36.113-31.091-53.196-45.648C98.745 312.939 30 254.358 30 177.351c0-31.83 10.605-61.394 29.862-83.245C79.34 72.007 106.379 59.836 136 59.836c41.129 0 67.716 25.338 82.776 46.594 13.509 19.064 20.558 38.282 22.962 45.659a15 15 0 0 0 28.524 0c2.404-7.377 9.453-26.595 22.962-45.66 15.06-21.255 41.647-46.593 82.776-46.593 29.621 0 56.66 12.171 76.137 34.27C471.395 115.957 482 145.521 482 177.351c0 77.007-68.745 135.588-172.807 224.263" />
                    </svg>
                    <a href="#" class="home-links">My Wish List</a>
                </div>
                <button class="home-links" style="margin-bottom: 2px; padding: 0; border: none; background-color: white;" onclick="showLogin()">Sign in or Create an Account</button>
            </div>
        </div>`;
  let navbar = `<li><a href="">HOME</a></li>
        <li>
            <a href="">EID-UL-ADHA 2026</a>
            <ul class="embed-link">
                <li><a href="">PANJABI</a></li>
                <div class="hr"></div>
                <li><a href="">SHIRT</a></li>
                <div class="hr"></div>
                <li><a href="">POLO</a></li>
                <div class="hr"></div>
                <li><a href="">T-SHIRT</a></li>
                <div class="hr"></div>
                <li><a href="">FATUA</a></li>
                <div class="hr"></div>
                <li><a href="">JEANS PANT</a></li>
                <div class="hr"></div>
                <li><a href="">GABARDINE PANT</a></li>
            </ul>
        </li>
        <li>
            <a href="">MEN TOP</a>
            <ul class="embed-link">
                <li class="embed-link-li">
                    <a href="">Panjabi</a>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                        viewBox="0 0 24 24">
                        <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                    </svg>
                    <ul class="embed-link2">
                        <li><a href="">Semi Fit</a></li>
                        <div class="hr"></div>
                        <li><a href="">Regular Fit</a></li>
                        <div class="hr"></div>
                        <li><a href="">Trendy Fit</a></li>
                    </ul>
                </li>
                <div class="hr"></div>
                <li class="embed-link-li">
                    <a href="">Shirt</a>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                        viewBox="0 0 24 24">
                        <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                    </svg>
                    <ul class="embed-link2">
                        <li><a href="">Formal Shirt</a></li>
                        <div class="hr"></div>
                        <li><a href="">Casual Full Sleeve</a></li>
                        <div class="hr"></div>
                        <li><a href="">Casual SHort Sleeve</a></li>
                        <div class="hr"></div>
                        <li><a href="">Cuban Collar</a></li>
                    </ul>
                </li>
                <div class="hr"></div>
                <li class="embed-link-li">
                    <a href="">Polo</a>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                        viewBox="0 0 24 24">
                        <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                    </svg>
                    <ul class="embed-link2">
                        <li><a href="">Full Sleeve</a></li>
                        <div class="hr"></div>
                        <li><a href="">Short Sleeve</a></li>
                    </ul>
                </li>
                <div class="hr"></div>
                <li class="embed-link-li">
                    <a href="">T-Shirt</a>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                        viewBox="0 0 24 24">
                        <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                    </svg>
                    <ul class="embed-link2">
                        <li><a href="">Full Sleeve</a></li>
                        <div class="hr"></div>
                        <li><a href="">Short Sleeve</a></li>
                    </ul>
                </li>
                <div class="hr"></div>
                <li><a href="">Fatua</a></li>
                <div class="hr"></div>
                <li><a href="">Bapari Shirt</a></li>
            </ul>
        </li>
        <li>
            <a href="">MEN BOTTOM</a>
            <ul class="embed-link">
                <li class="embed-link-li">
                    <a href="">Pant</a>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                        viewBox="0 0 24 24">
                        <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                    </svg>
                    <ul class="embed-link2">
                        <li><a href="">Jeans</a></li>
                        <div class="hr"></div>
                        <li><a href="">Gabardine</a></li>
                        <div class="hr"></div>
                        <li><a href="">Formal</a></li>
                    </ul>
                </li>
                <div class="hr"></div>
                <li class="embed-link-li">
                    <a href="">Trousers</a>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                        viewBox="0 0 24 24">
                        <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                    </svg>
                    <ul class="embed-link2">
                        <li><a href="">Long Trousers</a></li>
                        <div class="hr"></div>
                        <li><a href="">Short Trousers</a></li>
                    </ul>
                </li>
                <div class="hr"></div>
                <li><a href="">Pajama</a></li>
                <div class="hr"></div>
                <li><a href="">Joggers</a></li>
            </ul>
        <li>
            <a href="">OUTERWARE</a>
            <ul class="embed-link">
                <li><a href="">Blazer</a></li>
                <div class="hr"></div>
                <li><a href="">Suit</a></li>
                <div class="hr"></div>
                <li><a href="">Coat</a></li>
            </ul>
        </li>
        <li><a href="">FRAGRANCE 50% OFF🎉</a></li>
        <li>
            <a href="">ACCESSORIES</a>
            <ul class="embed-link">
                <li><a href="">Belt</a></li>
                <div class="hr"></div>
                <li><a href="">Tie</a></li>
                <div class="hr"></div>
                <li><a href="">Frangrance</a></li>
            </ul>
        </li>
        <li><a href="">GIFT CARD</a></li>`;
  let secondNav = `<a href="index.html">
            <img src="/images/second-logo.webp" alt="">
        </a>
        <ul>
            <li><a href="">HOME</a></li>
            <li>
                <a href="">EID-UL-ADHA 2026</a>
                <ul class="embed-link">
                    <li><a href="">PANJABI</a></li>
                    <div class="hr"></div>
                    <li><a href="">SHIRT</a></li>
                    <div class="hr"></div>
                    <li><a href="">POLO</a></li>
                    <div class="hr"></div>
                    <li><a href="">T-SHIRT</a></li>
                    <div class="hr"></div>
                    <li><a href="">FATUA</a></li>
                    <div class="hr"></div>
                    <li><a href="">JEANS PANT</a></li>
                    <div class="hr"></div>
                    <li><a href="">GABARDINE PANT</a></li>
                </ul>
            </li>
            <li>
                <a href="">MEN TOP</a>
                <ul class="embed-link">
                    <li class="embed-link-li">
                        <a href="">Panjabi</a>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                            viewBox="0 0 24 24">
                            <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                        </svg>
                        <ul class="embed-link2">
                            <li><a href="">Semi Fit</a></li>
                            <div class="hr"></div>
                            <li><a href="">Regular Fit</a></li>
                            <div class="hr"></div>
                            <li><a href="">Trendy Fit</a></li>
                        </ul>
                    </li>
                    <div class="hr"></div>
                    <li class="embed-link-li">
                        <a href="">Shirt</a>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                            viewBox="0 0 24 24">
                            <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                        </svg>
                        <ul class="embed-link2">
                            <li><a href="">Formal Shirt</a></li>
                            <div class="hr"></div>
                            <li><a href="">Casual Full Sleeve</a></li>
                            <div class="hr"></div>
                            <li><a href="">Casual SHort Sleeve</a></li>
                            <div class="hr"></div>
                            <li><a href="">Cuban Collar</a></li>
                        </ul>
                    </li>
                    <div class="hr"></div>
                    <li class="embed-link-li">
                        <a href="">Polo</a>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                            viewBox="0 0 24 24">
                            <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                        </svg>
                        <ul class="embed-link2">
                            <li><a href="">Full Sleeve</a></li>
                            <div class="hr"></div>
                            <li><a href="">Short Sleeve</a></li>
                        </ul>
                    </li>
                    <div class="hr"></div>
                    <li class="embed-link-li">
                        <a href="">T-Shirt</a>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                            viewBox="0 0 24 24">
                            <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                        </svg>
                        <ul class="embed-link2">
                            <li><a href="">Full Sleeve</a></li>
                            <div class="hr"></div>
                            <li><a href="">Short Sleeve</a></li>
                        </ul>
                    </li>
                    <div class="hr"></div>
                    <li><a href="">Fatua</a></li>
                    <div class="hr"></div>
                    <li><a href="">Bapari Shirt</a></li>
                </ul>
            </li>
            <li>
                <a href="">MEN BOTTOM</a>
                <ul class="embed-link">
                    <li class="embed-link-li">
                        <a href="">Pant</a>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                            viewBox="0 0 24 24">
                            <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                        </svg>
                        <ul class="embed-link2">
                            <li><a href="">Jeans</a></li>
                            <div class="hr"></div>
                            <li><a href="">Gabardine</a></li>
                            <div class="hr"></div>
                            <li><a href="">Formal</a></li>
                        </ul>
                    </li>
                    <div class="hr"></div>
                    <li class="embed-link-li">
                        <a href="">Trousers</a>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-caret"
                            viewBox="0 0 24 24">
                            <path d="m7.75 1.344-1.5 1.312L14.656 12 6.25 21.344l1.5 1.312 9-10 .594-.656-.594-.656Z" />
                        </svg>
                        <ul class="embed-link2">
                            <li><a href="">Long Trousers</a></li>
                            <div class="hr"></div>
                            <li><a href="">Short Trousers</a></li>
                        </ul>
                    </li>
                    <div class="hr"></div>
                    <li><a href="">Pajama</a></li>
                    <div class="hr"></div>
                    <li><a href="">Joggers</a></li>
                </ul>
            <li>
                <a href="">OUTERWARE</a>
                <ul class="embed-link">
                    <li><a href="">Blazer</a></li>
                    <div class="hr"></div>
                    <li><a href="">Suit</a></li>
                    <div class="hr"></div>
                    <li><a href="">Coat</a></li>
                </ul>
            </li>
            <li><a href="">FRAGRANCE 50% OFF🎉</a></li>
            <li>
                <a href="">ACCESSORIES</a>
                <ul class="embed-link">
                    <li><a href="">Belt</a></li>
                    <div class="hr"></div>
                    <li><a href="">Tie</a></li>
                    <div class="hr"></div>
                    <li><a href="">Frangrance</a></li>
                </ul>
            </li>
            <li><a href="">GIFT CARD</a></li>
        </ul>
        <div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 494.7 494.7">
                    <path
                        d="M485.3 471.1 338.7 324.5c30.4-33.8 49.2-78.4 49.2-127.3C387.9 92 302.3 6.5 197.2 6.5S6.5 92 6.5 197.2 92 387.9 197.2 387.9c49 0 93.5-18.7 127.3-49.2l146.6 146.6a10 10 0 0 0 7.1 2.9c2.6 0 5.1-1 7.1-2.9 3.9-3.9 3.9-10.3 0-14.2M197.2 367.8c-94.1 0-170.6-76.5-170.6-170.6S103.1 26.6 197.2 26.6s170.6 76.5 170.6 170.6-76.5 170.6-170.6 170.6"
                        style="stroke:#ffffff;stroke-width:13;stroke-miterlimit:10" />
                </svg>
            </button>
            <button style="position: relative;">
                <svg class="icon icon-cart w-h-24" viewBox="0 0 30 30">
                    <path
                        d="M20 6V5a5 5 0 0 0-10 0v1H4v24h22V6zm-8-1a3 3 0 1 1 6 0v1h-6zm12 23H6V8h4v3h2V8h6v3h2V8h4z" />
                </svg>
                <span id="shopping-cart-count2">0</span>
            </button>
        </div>`;

  let footer = `<div class="footer-first">
            <div>
                <h4>CONTACT US</h4>
                <h6 style="margin-bottom: 5px;">HEAD OFFICE</h6>
                <p>Ambia Tower (7th Floor), 4/1 Simson Road, Kotwali , Dhaka, Bangladesh, 1100.<br>
                    Hotline: <a href="tel:02-57390880">+8802-57390880</a> <br>
                    Email: <a href="mailto:info@dorjibari.com.bd">info@dorjibari.com.bd</a> <br><br>
                    To know the all stores location <br> <a href="https://dorjibari.com.bd/pages/outlets">Click here</a>
                </p>
            </div>
            <div>
                <h4>ABOUT US</h4>
                <p>Dorjibari – Redefining Men’s Fashion in Bangladesh.<br><br>
                    Established in 2006 by <b>Md. Fazlur Rahman</b>, Dorjibari has been a pioneering force in the
                    Bangladeshi
                    men's fashion
                    industry. With a commitment to quality, style, and innovation, we have grown to become a beloved
                    brand with 47 outlets
                    across the country, offering a wide range of meticulously crafted clothing and accessories for
                    men. <br>
                    <a href="https://dorjibari.com.bd/pages/about-us"
                        style="display: inline-block; margin-top: 10px;">See more</a>
                </p>
            </div>
            <div class="footer-links" id="footer-links">
                <div class="ab">
                    <h4>QUICK LINKS</h4>
                    <div class="bc" onclick="expandFooterLink()">
                        <div class="one" id="plus-one"></div>
                        <div class="two" id="plus-two"></div>
                    </div>
                </div>
                <div class="hr"></div>
                <div class="footer-links-place-primary">
                    <a href="https://dorjibari.com.bd/pages/about-us">About Us</a><br>
                    <a href="https://dorjibari.com.bd/pages/contact">Contact Us by Email</a><br>
                    <a href="https://dorjibari.com.bd/blogs/news">Blog</a><br>
                    <a href="https://dorjibari.com.bd/pages/privacy-policy">Privacy Policy</a><br>
                    <a href="https://dorjibari.com.bd/pages/shipping-policy">Shipping Policy</a><br>
                    <a href="https://dorjibari.com.bd/pages/terms-conditions">Terms & Conditions</a>
                </div>
                <div class="footer-links-place" id="footer-links-place">
                    <a href="https://dorjibari.com.bd/pages/about-us">About Us</a><br>
                    <a href="https://dorjibari.com.bd/pages/contact">Contact Us by Email</a><br>
                    <a href="https://dorjibari.com.bd/blogs/news">Blog</a><br>
                    <a href="https://dorjibari.com.bd/pages/privacy-policy">Privacy Policy</a><br>
                    <a href="https://dorjibari.com.bd/pages/shipping-policy">Shipping Policy</a><br>
                    <a href="https://dorjibari.com.bd/pages/terms-conditions">Terms & Conditions</a>
                </div>
            </div>
            <div>
                <h4>SOCIAL</h4>
                <a href="https://www.facebook.com/dorjibaribd" class="social-links" style="margin-right: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-facebook"
                        viewBox="0 0 320 512">
                        <path
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/dorjibari_bd/" class="social-links" style="margin-right: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" aria-hidden="true"
                        class="icon icon-instagram" viewBox="0 0 512 512">
                        <path
                            d="M256 152c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105m0 0c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105M437 0H75C33.6 0 0 33.6 0 75v362c0 41.4 33.6 75 75 75h362c41.4 0 75-33.6 75-75V75c0-41.4-33.6-75-75-75M256 392c-74.399 0-135-60.601-135-135 0-74.401 60.601-135 135-135s135 60.599 135 135c0 74.399-60.601 135-135 135m165-270c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30m-165 30c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105m0 0c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105m0 0c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105" />
                    </svg>
                </a>
                <a href="https://dorjibari.com.bd/#" class="social-links">
                    <svg aria-hidden="true" class="icon icon-youtube" viewBox="0 0 100 70">
                        <path
                            d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 0 1-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 0 1-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9M40 50l26-15-26-15z" />
                    </svg>
                </a>
            </div>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0690/2923/2929/files/SSLCOMMERZ-Payment-img.png" alt="Footer Image"
            class="footer-image">
        <h5 class="footer-copyright">© 2006-2026, Dorjibari. All rights reserved. Developed by <a
                href="https://arhostbd.com/">ARHOST</a></h5>`;
  let shoppingCart = `<div class="top-content">
            <div>
                <p class="title">Shopping Cart</p>
                <p class="items"><span id="shopping-cart-count-sidebar">0</span> items</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-cross" onclick="isShoppingCartOpen = false; showShoppingCart()" viewBox="0 0 48 48">
                <path d="M38.98 6.97a2 2 0 0 0-1.4.62L24 21.17 10.41 7.6a2 2 0 0 0-1.43-.61 2 2 0 0 0-1.4 3.43L21.19 24 7.57 37.59a2 2 0 1 0 2.83 2.82L24 26.83 37.59 40.4a2 2 0 1 0 2.82-2.82L26.83 24 40.4 10.41a2 2 0 0 0-1.43-3.44"/>
            </svg>
        </div>
        <p class="cart-empty">Your cart is empty</p>
        <a href="index.html" class="continue-shopping">CONTINUE SHOPPING</a>`;
  let loginSidebar = `<div class="top-content">
            <p class="title">Login</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="sidebar-cross" onclick="isLoginOpen = false; showLogin();">
                <path
                    d="M38.98 6.97a2 2 0 0 0-1.4.62L24 21.17 10.41 7.6a2 2 0 0 0-1.43-.61 2 2 0 0 0-1.4 3.43L21.19 24 7.57 37.59a2 2 0 1 0 2.83 2.82L24 26.83 37.59 40.4a2 2 0 1 0 2.82-2.82L26.83 24 40.4 10.41a2 2 0 0 0-1.43-3.44" />
            </svg>
        </div>
        <br>
        <label for="" class="input-label">Email Address <span style="color: #E96A86;">*</span></label><br>
        <input type="email" name="" id="" required class="input" placeholder="Email Address"><br><br>
        <label for="" class="input-label">Password <span style="color: #E96A86;">*</span></label><br>
        <input type="password" name="" id="" required class="input" placeholder="Password"><br>
        <input type="submit" value="LOG IN" class="login-button">
        <a href="" class="forgot-password">Forgot your password</a>
        <a href="" class="continue-shopping">CREATE ACCOUNT</a>`;
  let secondHeader = `<div class="top-content">
            <div class="hamburger-sign">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 25.7 25.7">
                <path
                    d="M0 10a10.03 10.03 0 0 0 16.3 7.8l8 8 1.4-1.4-8-8c3.5-4.3 2.8-10.6-1.5-14.1A9.3 9.3 0 0 0 10 0C4.5 0 0 4.5 0 10m2 0c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8" />
            </svg>
        </div>
        <a href="index.html">
            <img src="images/logo.avif" alt="">
        </a>
        <div class="top-content">
            <button onclick="showLogin()">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-account" viewBox="0 0 1024 1024">
                    <path
                        d="M486.4 563.2c-155.27 0-281.6-126.32-281.6-281.6S331.12 0 486.4 0 768 126.33 768 281.6 641.68 563.2 486.4 563.2m0-512C359.36 51.2 256 154.56 256 281.6S359.36 512 486.4 512s230.4-103.36 230.4-230.4S613.44 51.2 486.4 51.2"
                        class="path1" />
                    <path
                        d="M896 1024H76.8C34.45 1024 0 989.55 0 947.2c0-3.48.71-86.28 62.72-168.96 36.1-48.13 85.51-86.36 146.88-113.63 74.96-33.32 168.09-50.21 276.8-50.21s201.84 16.9 276.8 50.2c61.37 27.28 110.79 65.51 146.88 113.64 62 82.68 62.72 165.48 62.72 168.96 0 42.35-34.45 76.8-76.8 76.8M486.4 665.6c-178.52 0-310.27 48.79-381 141.1-53.01 69.17-54.2 139.9-54.2 140.6a25.6 25.6 0 0 0 25.6 25.5H896a25.63 25.63 0 0 0 25.6-25.6c0-.6-1.19-71.33-54.2-140.5-70.73-92.31-202.48-141.1-381-141.1"
                        class="path2" />
                </svg>
            </button>
            <button style="position: relative; margin-right: 12px;" onclick="showShoppingCart()">
                <svg class="icon icon-cart w-h-24" viewBox="0 0 30 30">
                    <path
                        d="M20 6V5a5 5 0 0 0-10 0v1H4v24h22V6zm-8-1a3 3 0 1 1 6 0v1h-6zm12 23H6V8h4v3h2V8h6v3h2V8h4z" />
                </svg>
                <span id="shopping-cart-count2" style="background-color: #232323; color: white;">0</span>
            </button>
        </div>`;

  document.getElementById("header").innerHTML = header;
  document.getElementById("nav").innerHTML = navbar;
  document.getElementById("footer").innerHTML = footer;
  document.getElementById("shopping-cart-sidebar").innerHTML = shoppingCart;
  document.getElementById("login-sidebar").innerHTML = loginSidebar;
  document.getElementById("second-header").innerHTML = secondHeader;

  let secondHeaderPlace = document.getElementById("second-header");
  secondHeaderPlace.innerHTML = secondHeader;

  let secondNavPlace = document.getElementById("second-nav");
  secondNavPlace.innerHTML = secondNav;

  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY;
    // Second nav
    if (currentScrollY >= 122.5 && isScrollingUp) {
      secondNavPlace.style.opacity = 1;
      secondNavPlace.style.pointerEvents = "auto";
    } else {
      secondNavPlace.style.opacity = 0;
      secondNavPlace.style.pointerEvents = "none";
    }
    if (window.innerWidth <= 1050) {
      if (currentScrollY < 51 || isScrollingUp) secondHeaderPlace.style.transform = "translateY(0)";
      else secondHeaderPlace.style.transform = "translateY(-100%)";
    }

    lastScrollY = currentScrollY;
  });

  let isFooterLinkOpen = false;

  function expandFooterLink() {
    let plusOneFooter = document.getElementById("plus-one");
    let plusTwoFooter = document.getElementById("plus-two");
    let footerLinksPlace = document.getElementById("footer-links-place");
    if (!footerLinksPlace) {
      console.error("One or more footer elements could not be found in the DOM.");
      return;
    }
    if (!isFooterLinkOpen) {
      plusOneFooter.style.transform = "translateX(-50%) rotate(90deg)";
      plusTwoFooter.style.opacity = 0;
      footerLinksPlace.style.transform = "translateY(0px)";
      footerLinksPlace.style.opacity = 1;
      isFooterLinkOpen = true;
    } else {
      plusOneFooter.style.transform = "translateX(-50%) rotate(0deg)";
      plusTwoFooter.style.opacity = 1;
      footerLinksPlace.style.transform = "translateY(-20px)";
      footerLinksPlace.style.opacity = 0;
      isFooterLinkOpen = false;
    }
  }
  window.expandFooterLink = expandFooterLink;

  let isShoppingCartOpen = false;
  function showShoppingCart() {
    let shoppingCartSidebar = document.getElementById("shopping-cart-sidebar");
    let sidebarOverlay = document.getElementById("sidebar-overlay");
    if (!isShoppingCartOpen) {
      shoppingCartSidebar.style.transform = "translateX(-0px)";
      sidebarOverlay.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      secondHeaderPlace.style.transform = "translateY(-100%)";
      isShoppingCartOpen = true;
    } else {
      shoppingCartSidebar.style.transform = "translateX(440px)";
      sidebarOverlay.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.height = "";
      secondHeaderPlace.style.transform = "translateY(0)";
      isShoppingCartOpen = false;
    }
  }
  window.showShoppingCart = showShoppingCart;

  let isLoginOpen = false;
  function showLogin() {
    let loginSidebarForm = document.getElementById("login-sidebar");
    let sidebarOverlay = document.getElementById("sidebar-overlay");
    if (!isLoginOpen) {
      loginSidebarForm.style.transform = "translateX(-0px)";
      sidebarOverlay.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      secondHeaderPlace.style.transform = "translateY(-100%)";
      isLoginOpen = true;
    } else {
      loginSidebarForm.style.transform = "translateX(440px)";
      sidebarOverlay.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.height = "";
      secondHeaderPlace.style.transform = "translateY(0)";
      isLoginOpen = false;
    }
  }
  window.showLogin = showLogin;
});
