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
        border: 1px solid #2a4d74;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        background: #2c5c8e;
        cursor: pointer;
    }

    .card:hover {
        background: #2a4d74;
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