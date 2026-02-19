<script>
    let { title, author, children } = $props();
</script>

<section class="prose m-10 max-w-full">
    <header class="flex flex-col items-center justify-center">
        <h1>{title}</h1>
        <p class="text-sm">By {author}</p>
    </header>

    {@render children()}
</section>