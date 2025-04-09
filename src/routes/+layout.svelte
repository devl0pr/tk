<script>
    import '$lib/styles/preflight.css';
    import {base} from '$app/paths';

    let {children} = $props();
</script>

<svelte:head>
    <title>Teneke Kafalar Studios</title>
</svelte:head>

<header id="main-header" class="color-animation">
    <div class="header">
        <img src='{base}/img/tk_logo.png' class="tk-logo" alt="TK logo"/>
        <h1 class="title">Teneke Kafalar Studios</h1>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</header>

<style>

    .title
    {
        color: #ffffff;
    }

    #main-header {
        width: 100%;
        background: #263953 url(/img/clouds.svg) repeat-x bottom center;
        height: 440px;
        background-size: contain;
    }

    .star-container {
        position: relative;
        width: 300px; /* Adjust size as needed */
        height: 300px;
        background-color: black; /* Optional: for better visibility */
        overflow: hidden;
    }

    .dot {
        position: absolute;
        width: 6px; /* Adjust dot size */
        height: 6px;
        background-color: white; /* Dot color */
        border-radius: 50%;
    }

    /* Randomly place dots */
    .dot:nth-child(1) {
        top: 5%;
        left: 10%;
    }

    .dot:nth-child(2) {
        top: 15%;
        left: 60%;
    }

    .dot:nth-child(3) {
        top: 25%;
        left: 30%;
    }

    .dot:nth-child(4) {
        top: 35%;
        left: 80%;
    }

    .dot:nth-child(5) {
        top: 50%;
        left: 20%;
    }

    .dot:nth-child(6) {
        top: 60%;
        left: 70%;
    }

    .dot:nth-child(7) {
        top: 70%;
        left: 40%;
    }

    .dot:nth-child(8) {
        top: 80%;
        left: 90%;
    }

    .dot:nth-child(9) {
        top: 90%;
        left: 50%;
    }

    .dot:nth-child(10) {
        top: 10%;
        left: 90%;
    }

    .dot:nth-child(11) {
        top: 20%;
        left: 15%;
    }

    .dot:nth-child(12) {
        top: 30%;
        left: 75%;
    }

    .dot:nth-child(13) {
        top: 40%;
        left: 55%;
    }

    .dot:nth-child(14) {
        top: 50%;
        left: 85%;
    }

    .dot:nth-child(15) {
        top: 65%;
        left: 10%;
    }

    .dot:nth-child(16) {
        top: 75%;
        left: 60%;
    }

    .dot:nth-child(17) {
        top: 85%;
        left: 30%;
    }

    .dot:nth-child(18) {
        top: 95%;
        left: 80%;
    }

    .dot:nth-child(19) {
        top: 45%;
        left: 45%;
    }

    .dot:nth-child(20) {
        top: 55%;
        left: 35%;
    }

    .header {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 0 30px 0;
        justify-content: center;
        gap: 2rem;
        text-align: center;
        position: relative;
        top: 50px;
    }

    .tk-logo {
        width: 130px;
        display: block;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        animation: flipLogo 5s ease-in-out infinite;
        -webkit-box-shadow: 0 0 32px 2px #a8ae00;
        -moz-box-shadow: 0 0 32px 2px #a8ae00;
        box-shadow: 0 0 32px 2px #6e6161;
        border-radius: 50%;
    }

    .title {
        font-size: 3rem;
        font-weight: 400;
    }

    @keyframes rotateLogo {
        0%, 90% {
            transform: rotate(0deg);
        }
        /* No movement for most of the time */
        95% {
            transform: rotate(10deg);
        }
        /* Small rotation */
        100% {
            transform: rotate(0deg);
        }
        /* Return to normal */
    }

    @keyframes flipLogo {
        0%, 80% {
            transform: rotateY(0deg);
        }
        /* Stay still for most of the time */
        85% {
            transform: rotateY(720deg);
        }
        /* Fast multiple spins */
        90% {
            transform: rotateY(1080deg);
        }
        /* Slow down */
        100% {
            transform: rotateY(1440deg);
        }
        /* Final slow spin */
    }

    @media (min-width: 750px) {
        .header {
            align-items: center;
            flex-direction: row;
            gap: 2rem;
        }
    }

    .container {
        max-width: 1170px;
        margin: auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
    }

    ul {
        list-style: none;
    }

    .footer {
        background-color: #1d180d;
        padding: 70px 0;
        margin-top: 60px;
    }

    .footer-col {
        width: 25%;
        padding: 0 15px;
    }

    .footer-col h4 {
        font-size: 18px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }

    .footer-col h4::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #e91e63;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
    }

    .footer-col ul li a {
        font-size: 16px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        display: block;
        transition: all 0.3s ease;
    }

    .footer-col ul li a:hover {
        color: #ffffff;
        padding-left: 8px;
    }

    .footer-col .social-links a {
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }

    .footer-col .social-links a:hover {
        color: #24262b;
        background-color: #ffffff;
    }

    /*responsive*/
    @media (max-width: 767px) {
        .footer-col {
            width: 50%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 574px) {
        .footer-col {
            width: 100%;
        }
    }


</style>

{@render children()}


<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Youtube</h4>
                <ul>
                    <li><a target="_blank" href="http://youtube.com/tenekekafalar">Teneke Kafalar</a></li>
                    <li><a target="_blank" href="https://www.youtube.com/@TenekeKafalarStudios">Teneke Kafalar
                        Studios</a></li>
                    <li><a target="_blank" href="https://www.youtube.com/@tenekekafalartwitch">Teneke Kafalar Twitch</a>
                    </li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://store.steampowered.com/publisher/tenekekafalar" target="_blank">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="36">
                            <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"
                                  fill="#cfdde4"></path>
                        </svg>
                    </a>

                    <a href="http://twitch.com/tenekekafalar_tk" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 512 512">
                            <path d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"
                                  fill="#cfdde4" fill-rule="nonzero"></path>
                        </svg>
                    </a>
                    <a href="http://instagram.com/tenekekafalar" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                  fill="#cfdde4" fill-rule="nonzero"></path>
                        </svg>
                    </a>
                    <a href="http://discord.gg/tenekekafalar" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 640 512">
                            <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                                  fill="#cfdde4" fill-rule="nonzero"></path>
                        </svg>
                    </a>


                    <a href="https://linktr.ee/tenekekafalar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 640 512">
                            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                                  fill="#cfdde4" fill-rule="nonzero"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>