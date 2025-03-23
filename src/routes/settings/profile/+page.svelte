<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>