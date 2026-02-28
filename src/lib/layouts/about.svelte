<script>
    let { title, author, children } = $props();
</script>

<section class="font-[Libertinus_Sans] prose text-xl m-8 sm:m-18 max-w-full items-center gap-10 object-contain">
    {@render children()}
</section>