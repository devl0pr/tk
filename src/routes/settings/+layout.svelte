<script>
    /** @type {import('./$types').LayoutProps} */
    let { data, children } = $props();
</script>

<h1>Settings</h1>

<div class="submenu">
    {#each data.sections as section}
        <a href="/settings/{section.slug}">{section.title}</a>
    {/each}
</div>

{@render children()}