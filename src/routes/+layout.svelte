<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { NavigationMenu } from "bits-ui";
	import { Accordion } from "bits-ui";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<NavigationMenu.Root>
  <NavigationMenu.List class="max-w-full flex flex-col sm:flex-row gap-2 sm:gap-20 text-lg items-center sm:justify-between p-8 mx-20">

	<div>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/">Paloma Cutlery</NavigationMenu.Link>
    </NavigationMenu.Item>
	</div>
	<div class="flex flex-col sm:flex-row gap-2 sm:gap-20">
    <NavigationMenu.Item openOnHover={false}>
		<NavigationMenu.Link href="/pricing">Services</NavigationMenu.Link>
    </NavigationMenu.Item>

    <NavigationMenu.Item openOnHover={false}>
		<NavigationMenu.Link href="/contact">Contact</NavigationMenu.Link>
    </NavigationMenu.Item>

    <NavigationMenu.Indicator />
	</div>
  </NavigationMenu.List>

  <NavigationMenu.Viewport />
</NavigationMenu.Root>

{@render children()}

<section class="max-w-full flex flex-col sm:flex-row justify-around items-center border-t p-10">
	<div>
		<img src="https://images.squarespace-cdn.com/content/v1/56ce8bf3e32140ddf5468041/dc16a14b-0dab-4470-97bc-f840b2f44d63/Retail+Logo.jpg?format=1500w"
		alt="Paloma Cutlery Logo" 
		class="size-16" 
		/>
	</div>
	<div>
		<p class="text-sm">&copy; 2024 Paloma Cutlery. All rights reserved.</p>
		<p class="text-sm">123 Main Street, Los Angeles, CA 90012</p>
		<p class="text-sm">Phone: (555) 123-4567 | Email: info@palomacutlery.com</p>
	</div>
</section>