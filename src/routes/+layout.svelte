<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import paloma from '$lib/assets/palomacut.jpg';
	import { NavigationMenu } from 'bits-ui';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<NavigationMenu.Root class="border-b">
	<NavigationMenu.List
		class="mx-20 flex max-w-full flex-col items-center gap-2 p-8 text-lg sm:flex-row sm:justify-between sm:gap-20"
	>
		<NavigationMenu.List>
			<NavigationMenu.Item class="hover:underline">
				<NavigationMenu.Link href="/">Paloma Cutlery</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>

		<NavigationMenu.List class="flex flex-col gap-2 sm:flex-row sm:gap-20">
			<NavigationMenu.Item class="hover:underline">
				<NavigationMenu.Link href="/services">Services</NavigationMenu.Link>
			</NavigationMenu.Item>
			<NavigationMenu.Item class="hover:underline">
				<NavigationMenu.Link href="/contact">Contact</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
		<NavigationMenu.Indicator />
	</NavigationMenu.List>

	<NavigationMenu.Viewport />
</NavigationMenu.Root>

{@render children()}

<footer
	class="flex max-w-full flex-col items-center justify-around gap-8 border-t p-10 sm:flex-row"
>
	<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
		<img src={paloma} alt="Paloma Cutlery Logo" class="size-16" />
		<p class="text-sm">(213) 748-1061</p>
		<p class="text-sm">contact@palomacutlery.com</p>
	</div>
	<div class="text-center sm:text-left">
		<p class="text-sm">Mercado La Paloma</p>
		<p class="text-sm">3655 S Grand Ave</p>
		<p class="text-sm">Los Angeles, CA 90007</p>
	</div>
	<div class="text-center sm:text-left">
		<p class="text-sm">Hours</p>
		<p class="text-sm">Mon-Fri: 9am - 6pm</p>
		<p class="text-sm">Sat: 10am - 4pm</p>
		<p class="text-sm">Sun: Closed</p>
	</div>
</footer>
