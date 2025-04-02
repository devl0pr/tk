<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';

    let {data} = $props();

    let currentSlide = 0;
    let slides;

    const changeSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        activeDot(index);
    };

    const activeDot = (index) => {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${index}"]`).classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        changeSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        changeSlide(currentSlide);
    };

    const Carousel = (() => {
        const getActiveSlide = () =>
            document.querySelector(".carousel__slide.active");
        const getFirstSlide = () =>
            document.querySelector(".carousel__slider").firstElementChild;
        const getLastSlide = () =>
            document.querySelector(".carousel__slider").lastElementChild;

        const getSiblingSlide = (slide, direction) =>
            direction === "prev"
                ? slide.previousElementSibling
                : slide.nextElementSibling;

        const getNewActiveSlide = (key, activeSlide) => {
            const actions = {
                Home: getFirstSlide,
                End: getLastSlide,
                ArrowLeft: () => getSiblingSlide(activeSlide, "prev"),
                ArrowRight: () => getSiblingSlide(activeSlide, "next")
            };
            return actions[key]?.() || null;
        };

        const updateScreen = (activeSlide) => {
            const carouselScreen = document.querySelector(".image-display .screen");
            const img = activeSlide.querySelector("img").cloneNode(true);
            carouselScreen.innerHTML = "";
            carouselScreen.appendChild(img);
        };

        const scrollToActiveSlide = (activeSlide) => {
            const carouselSlider = document.querySelector(".carousel__slider");
            const {offsetLeft, offsetWidth} = activeSlide;
            const {clientWidth} = carouselSlider;

            carouselSlider.scrollTo({
                left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
                behavior: "smooth"
            });
        };

        const updateActiveSlideClass = (activeSlide) => {
            document
                .querySelectorAll(".carousel__slide.active")
                .forEach((slide) => slide.classList.remove("active"));
            activeSlide.classList.add("active");
        };

        const updateCarousel = (activeSlide) => {
            updateActiveSlideClass(activeSlide);
            updateScreen(activeSlide);
            scrollToActiveSlide(activeSlide);
            updateButtonStates(activeSlide);
        };

        const updateButtonStates = (activeSlide) => {
            const prevButton = document.querySelector(".carousel__btn.prev");
            const nextButton = document.querySelector(".carousel__btn.next");

            prevButton.disabled = !getSiblingSlide(activeSlide, "prev");
            nextButton.disabled = !getSiblingSlide(activeSlide, "next");
        };

        const handleKeydown = (e) => {
            if (!e.target.closest(".carousel__slider")) return;
            const activeSlide = getActiveSlide();
            const newActiveSlide = getNewActiveSlide(e.key, activeSlide);

            if (newActiveSlide) {
                e.preventDefault();
                updateCarousel(newActiveSlide);
            }
        };

        const handleButtonClick = (e) => {
            const activeSlide = getActiveSlide();
            const newActiveSlide = getSiblingSlide(
                activeSlide,
                e.currentTarget.classList.contains("prev") ? "prev" : "next"
            );

            if (newActiveSlide) {
                updateCarousel(newActiveSlide);
            }
        };

        const handleCarouselClick = (e) => {
            const clickedSlide = e.target.closest(".carousel__slide");
            if (clickedSlide) {
                updateCarousel(clickedSlide);
            }
        };

        const initCarousel = () => {
            const carouselSlider = document.querySelector(".carousel__slider");
            const prevButton = document.querySelector(".carousel__btn.prev");
            const nextButton = document.querySelector(".carousel__btn.next");

            updateCarousel(getFirstSlide());

            document.addEventListener("keydown", handleKeydown);
            prevButton.addEventListener("click", handleButtonClick);
            nextButton.addEventListener("click", handleButtonClick);
            carouselSlider.addEventListener("click", handleCarouselClick);
        };

        initCarousel();
    });


    onMount(() => {
        Carousel();
    });

</script>

<svelte:head>
    {#if data.game}
        <title>{data.game.title} - Teneke Kafalar Studios  </title>
    {:else}
        <title>Not Found - Teneke Kafalar Studios  </title>
    {/if}
</svelte:head>

{#if data.game}
    <div class="container">
        <button onclick={() => history.back()}>
            ⬅️ Back to Games
        </button>

        <h1>{data.game.title}</h1>
        <div class="flex flex-justify-center">
            <div class="carousel">
                <div class="image-thumbnail-carousel">
                    <section class="image-display">
                        <div class="screen"></div>
                    </section>
                    <section class="thumbnail-carousel">
                        <button type="button" class="carousel__btn prev" aria-label="Previous slide">
                            <svg width="16" height="16" fill="currentColor" class="arrow-icon arrow-left-circle"
                                 viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                        </button>
                        <ul class="carousel__slider">
                            {#each data.game.images as name, i}
                                <li class="carousel__slide">
                                    <div class="thumbnail">
                                        <img loading="lazy" src={base + '/img/games/' + data.game.slug + '/' + name}
                                             alt="">
                                    </div>
                                </li>
                            {/each}
                        </ul>
                        <button type="button" class="carousel__btn next" aria-label="Next slide">
                            <svg width="16" height="16" fill="currentColor" class="arrow-icon arrow-right-circle"
                                 viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg>
                        </button>
                    </section>
                </div>
            </div>
            <div class="info">
                <div>
                    <img src={base + '/img/' + data.game.image} alt={data.game.title}/>
                    <p style="font-size: .9rem;padding: 10px 10px 0 0;">{data.game.description}</p>
                </div>
                <div class="links">
                    {#each data.game.links as link, i}
                        <a href="{link.url}" target="_blank" rel="noopener noreferrer" class="link-button">
                            <img class="links-img" loading="lazy" src={base + '/img/' + link.icon} alt="{link.name}">
                            <span style="font-size: .9rem;">{link.name}</span>
                        </a>
                    {/each}
                </div>
            </div>
        </div>


        <!--        <video controls>-->
        <!--&lt;!&ndash;            <source src={data.game.video} type="video/mp4">&ndash;&gt;-->
        <!--            Your browser does not support the video tag.-->
        <!--        </video>-->
    </div>
{:else}
    <section class="page_404">
        <div class="container">
            <div class="row" style="text-align: center;">
                <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>
                        </div>
                        <div class="contant_box_404">
                            <h3 class="h2">
                                Look like you're lost
                            </h3>
                            <p>the page you are looking for not avaible!</p>
                            <a style="cursor: pointer" onclick={() => history.back()} class="link_404">Go to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/if}


<style>
    :root {
        --items: 5;
        --gap: 0.75rem;

        --border-xl: 20px;
        --border-m: 8px;
        --border-s: 6px;

        --accent-color: hsl(198, 86%, 53%);
        --fill-primary: hsl(204, 3%, 47%);
        --fill-active: hsl(204, 23%, 20%);
        --fill-disabled: hsl(204, 9%, 85%);
    }

    .container {
        max-width: 1200px;
        margin: 50px auto;
    }

    h1 {
        font-size: 2.3rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    .info {
        padding: 0 0 1rem 1rem;
    }

    .image-thumbnail-carousel {
        padding: 0 1rem 1rem 0;
        width: clamp(360px, 90vw, 820px);
        display: flex;
        flex-flow: column;
        gap: 1rem;
        position: relative;
    }

    .image-display {
        border-radius: var(--border-xl);
        overflow: hidden;
        min-height: 30vmin;
        aspect-ratio: 16 / 9;
        box-shadow: 0 0.375em 0.67em #0003, 0 0.5em 1.3em #0002;
    }

    .screen {
        block-size: 100%;
        display: flex;
        background-image: linear-gradient(12deg, #aaa, #eee);
        position: relative;
        user-select: none;
    }

    .thumbnail-carousel {
        display: flex;
        gap: var(--gap);
        block-size: 100%;
    }

    .carousel__btn {
        flex: 1 0 max(2.75rem, 5.834%);
        background: #0000;
        border: 1px solid #0000;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .arrow-icon {
        margin-inline: auto;
        outline: none;
        border: 0;
        scale: 1;
        display: inline grid;
        width: max(80%, 1.5rem);
        height: max(80%, 1.5rem);
        fill: var(--fill-primary);
    }

    .carousel__btn:hover .arrow-icon {
        fill: var(--fill-active);
    }

    .carousel__btn:disabled {
        opacity: 0.1;
        pointer-events: none;
    }

    .carousel__slider {
        user-select: none;
        flex-grow: 999;
        list-style: none;
        display: flex;
        gap: var(--gap);
        padding: 0.5rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
    }

    .carousel__slider::-webkit-scrollbar {
        display: none;
    }

    .carousel__slide {
        cursor: pointer;
        border-radius: var(--border-m);
        overflow: hidden;
        scroll-snap-align: center;
        flex: 1 0 calc((100% / var(--items)) - 10px);
    }

    .active.carousel__slide {
        outline: 0.125em solid var(--accent-color);
        outline-offset: -0.37em;
    }

    .links {
        display: flex;
        gap: 20px;
        padding: 30px 0;
    }

    .links-img {
        width: 32px;
    }

    .link-button {
        width: fit-content;
        display: flex;
        align-items: center;
        height: fit-content;
        gap: 12px;
        background: #263953;
        padding: 10px;
        border: 1px solid #39495e;
        min-width: 150px;
    }

    @media (max-width: 680px) {
        .image-thumbnail-carousel {
            width: 90vw;
        }

        .active.carousel__slide {
            background-color: var(--fill-active);
            outline-offset: 3px;
        }

        .carousel__btn {
            flex-grow: 0;
        }

        .thumbnail-carousel {
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .carousel__slider {
            max-width: fit-content;
            align-items: center;
            gap: 1em;
        }

        .carousel__slide {
            flex: none;
            aspect-ratio: 1;
            block-size: 0.625rem;
            border-radius: 50%;
            background-color: var(--fill-primary);
        }

        .thumbnail {
            opacity: 0;
            display: none;
            aspect-ratio: 16 / 9;
            block-size: 8vw;
            position: absolute;
            border-radius: var(--border-s);
            overflow: hidden;
            z-index: 99;
            will-change: transform, opacity;
            transition: opacity 150ms ease-out;
            transform-origin: bottom;
            translate: -50%;
            bottom: 20%;
        }

        .carousel__slide:not(.active):hover .thumbnail {
            opacity: 1;
            display: block;
            animation: show 250ms ease-out forwards;
            box-shadow: 0 0.375em 0.67em #0003, 0 0.5em 1.3em #0002;
        }

        @keyframes show {
            from {
                opacity: 0;
                transform: scale(0);
            }
            to {
                display: block;
                transform: scale(1);
                opacity: 1;
            }
        }
    }


    .page_404 {
        background: #fff;

    }

    .four_zero_four_bg {
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 400px;
        background-position: center;
    }

    .four_zero_four_bg h1 {
        font-size: 80px;
        position: relative;
        top: -80px;
    }

    .four_zero_four_bg h3 {
        font-size: 80px;
    }

    .link_404 {
        color: #fff !important;
        padding: 10px 20px;
        background: #39ac31;
        margin: 20px 0;
        display: inline-block;
    }

    .contant_box_404 {
        margin-top: -50px;
    }

</style>