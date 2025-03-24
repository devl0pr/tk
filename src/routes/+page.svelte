<script>
    import Card from "$lib/components/Card.svelte";
    import { base } from '$app/paths';

    const cards = [
        { slug: "feign", imageSrc: base + "/img/feign_header.jpeg", title: "Feign", description: "Beautiful nature view" },
        { slug: "feather-party", imageSrc: base + "/img/feather_header.jpeg", title: "Feather Party", description: "Urban cityscape" },
        { slug: "throwia", imageSrc: base + "/img/throwia_header.jpeg", title: "Throwia", description: "Majestic mountains" },
        { slug: "trakonius", imageSrc: base + "/img/tra_header.jpeg", title: "Trakonius", description: "Deep blue ocean" },
        { slug: "hoop-fighters", imageSrc: base + "/img/hoop_header.jpeg", title: "Hoop Fighters", description: "Deep blue ocean" },
        { slug: "ocean-gap", imageSrc: base + "/img/ocean_header.jpeg", title: "Ocean Gap", description: "Deep blue ocean" },
        { slug: "surviwall", imageSrc: base + "/img/surviwall_header.jpeg", title: "Surviwall", description: "Deep blue ocean" },
    ];
</script>


<div class="container">
    <div class="container-title">
        <h2>Our Games</h2>
    </div>
    <div class="grid">
        {#each cards as card}
            <a href={`${base}/games/${card.slug}`} class="card-link">
                <Card imageSrc={card.imageSrc} title={card.title} description={card.description} />
            </a>
        {/each}
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-auto-flow: row;
        width: min(100%, 75rem);
        gap: 1em;
    }

    .container {
        max-width: 1200px;
        margin: 50px auto;
    }

    .container-title {
        font-size: 1.56rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    @media (min-width: 600px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1200px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>