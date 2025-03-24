<script>
    import { base } from '$app/paths';

    import { onMount } from 'svelte';
    import { marked } from 'marked'; // Install with `npm install marked`
    let { data } = $props();

    // onMount(async () => {
    //     try {
    //         const res = await fetch(`${base}/games/${data.game.slug}.md`);
    //         if (res.ok) {
    //             const text = await res.text();
    //             description = marked(text); // Convert Markdown to HTML
    //         } else {
    //             description = 'Description not available.';
    //         }
    //     } catch (error) {
    //         console.error('Failed to load markdown file', error);
    //         description = 'Error loading description.';
    //     }
    // });
</script>

{#if data.game}
<!--    <div class="game-details">-->
<!--        <h1>{data.game.title}</h1>-->
<!--        <p>{data.game.description}</p>-->
<!--        <img src={base + '/img/' + data.game.image} alt={data.game.title} />-->
<!--        <video controls>-->
<!--&lt;!&ndash;            <source src={data.game.video} type="video/mp4">&ndash;&gt;-->
<!--            Your browser does not support the video tag.-->
<!--        </video>-->
<!--    </div>-->
    <p>{@html marked(data.game)}</p> <!-- Render HTML safely -->
{:else}
    <p>Game not found.</p>
{/if}

<button onclick={() => history.back()}>
    ⬅️ Back to Games
</button>
