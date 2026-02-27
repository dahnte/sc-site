<script>
    let { title, author, children } = $props();
</script>

<section class="font-[Jost] prose text-2xl m-4 sm:m-20 max-w-full items-center gap-10 object-contain">
    <h1 class="text-5xl text-center">{title}</h1>
    {@render children()}
</section>