<script>
    import '$lib/styles/preflight.css';

    let { children } = $props();
</script>

<header id="main-header">
    <div class="header">
        <img src='/img/tk_logo.png' class="tk-logo" alt="TK logo"/>
        <h1 class="title">Teneke Kafalar Studios</h1>
    </div>
</header>

<style>
    #main-header {
        width: 100%;
        background: #263953 url(/img/clouds.svg) repeat-x bottom center;
        height: 440px;
        background-size: contain;
    }

    .header {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px 0 30px 0;
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
        0%, 90% { transform: rotate(0deg); } /* No movement for most of the time */
        95% { transform: rotate(10deg); }  /* Small rotation */
        100% { transform: rotate(0deg); }  /* Return to normal */
    }

    @keyframes flipLogo {
        0%, 80% { transform: rotateY(0deg); } /* Stay still for most of the time */
        85% { transform: rotateY(720deg); } /* Fast multiple spins */
        90% { transform: rotateY(1080deg); } /* Slow down */
        100% { transform: rotateY(1440deg); } /* Final slow spin */
    }

    @media (min-width: 750px) {
        .header {
            align-items: center;
            flex-direction: row;
            gap: 2rem;
        }
    }

</style>

{@render children()}