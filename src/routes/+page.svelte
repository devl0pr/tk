<script>
    import Card from "$lib/components/Card.svelte";
    import { base } from '$app/paths';

    let { data } = $props();
</script>


<div class="container">
    <div class="container-title">
        <h2>Our Games</h2>
    </div>
    <div class="grid">
        {#each data.games as card}
            <a href={`${base}/games/${card.slug}`} class="card-link">
                <Card image={base + '/img/' + card.image} title={card.title} description={card.description} />
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
        margin: 0 20px;
    }

    .container-title h2 {
        font-size: 1.56rem;
        text-transform: uppercase;
        font-weight: 600;
        color: #636363;
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

    @media (min-width: 1240px) {
        .container {
            max-width: 1200px;
            margin: -80px auto 80px auto;
        }
    }
</style>