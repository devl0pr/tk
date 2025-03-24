<script>
    let { data } = $props();
</script>

{#if data.game}
    <div class="game-details">
        <h1>{data.game.title}</h1>
        <p>{data.game.description}</p>
        <img src={data.game.image} alt={data.game.title} />
        <video controls>
            <source src={data.game.video} type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
{:else}
    <p>Game not found.</p>
{/if}

<button on:click={() => history.back()}>
    ⬅️ Back to Games
</button>
