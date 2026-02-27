<script>
    let { title, author, children } = $props();
</script>

<section class="prose m-20 max-w-full flex flex-col md:flex-row justify-center gap-20">
    {@render children()}
</section>