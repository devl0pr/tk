<script>
    export let image = "";
    export let title = "Card Title";
    export let description = "This is a sample description.";
</script>

<div class="card">
    <img src={image} alt={title} class="card-image" />
    <div class="card-content">
        <h2>{title}</h2>
    </div>
</div>

<style>
    .card {
        border-radius: 8px;
        overflow: hidden;
        background: #389252;
        cursor: pointer;
        -webkit-box-shadow: 3px 6px 13px 0 rgb(0 0 0 / 39%);
        -moz-box-shadow: 3px 6px 13px 0 rgb(0 0 0 / 39%);
        box-shadow: 3px 6px 13px 0 rgb(0 0 0 / 39%);
    }

    .card:hover {
        background: #216c3a;
    }

    .card-image {
        width: 100%;
        object-fit: cover;
    }
    .card-content {
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(158deg, #166f7c 0%, #388e92 50%, #19a78a 100%);
    }
    .card-content h2 {
        font-size: 1.2em;
        text-transform: uppercase;
        font-weight: 500;
    }
    .card-content p {
        margin: 0;
        color: #555;
    }
</style>