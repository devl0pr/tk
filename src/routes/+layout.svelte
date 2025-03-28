<script>
    import '$lib/styles/preflight.css';
    import {base} from '$app/paths';

    let {children} = $props();
</script>

<header id="main-header">
    <div class="header">
        <img src='{base}/img/tk_logo.png' class="tk-logo" alt="TK logo"/>
        <h1 class="title">Teneke Kafalar Studios</h1>
    </div>
</header>

<style>
    #main-header {
        width: 100%;
        background: #263953 url(/img/clouds.svg) repeat-x bottom center;
        height: 440px;
        background-size: contain;

        /* Chrome, Safari, Opera */
        -webkit-animation-name: colors;
        -webkit-animation-duration: 10s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-delay: 0s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        -webkit-animation-play-state: running;
        /* Standard syntax */
        animation-name: colors;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;
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

    /* Chrome, Safari, Opera */
    @-webkit-keyframes colors {
        0% {
            background-color: #000000;
            left: 0;
            top: 0;
        }
        25% {
            background-color: #00293d;
            left: 0;
            top: 0;
        }
        50% {
            background-color: #2e0b52;
            left: 0;
            top: 0;
        }
        75% {
            background-color: #8e44ad;
            left: 0;
            top: 0;
        }
        100% {
            background-color: #153753;
            left: 0;
            top: 0;
        }
    }

    /* Standard syntax */
    @keyframes colors {
        0% {
            background-color: #000000;
            left: 0;
            top: 0;
        }
        25% {
            background-color: #00293d;
            left: 0;
            top: 0;
        }
        50% {
            background-color: #2e0b52;
            left: 0;
            top: 0;
        }
        75% {
            background-color: #8e44ad;
            left: 0;
            top: 0;
        }
        100% {
            background-color: #153753;
            left: 0;
            top: 0;
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
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">bag</a></li>
                    <li><a href="#">shoes</a></li>
                    <li><a href="#">dress</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>