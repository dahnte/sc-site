<script>
    let { title, author, children } = $props();
</script>

<section class="prose font-[Libertinus_Sans] text-lg m-8 max-w-full flex flex-col md:flex-row justify-center gap-20">
    {@render children()}
</section>