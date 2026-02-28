<script>
    let { title, author, children } = $props();
</script>

<section class="prose max-w-full m-8 text-lg font-[Libertinus_Sans]">
    <h1 class="text-center">{title}</h1>
    <div class="prose flex flex-col max-w-full lg:flex-row lg:items-start items-center justify-around text-xl">
        {@render children()}
    </div>
</section>