<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/black_logo.png';
	import { NavigationMenu } from 'bits-ui';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<NavigationMenu.Root class="border-b">
	<NavigationMenu.List
		class="mx-20 flex max-w-full flex-col items-center gap-2 p-8 sm:flex-row sm:justify-between sm:gap-20 text-xl"
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
	<div>
		<img src={logo} alt="Paloma Cutlery Logo" class="aspect-2/3 w-16" />
	</div>
	<div class="flex flex-col items-center text-center sm:items-start sm:text-left text-md">
		<p>(213) 748-1061</p>
		<p>steve@palomacutlery.com</p>
	</div>
	<div class="text-center sm:text-left text-md">
		<p>Mercado La Paloma</p>
		<p>3655 S Grand Ave</p>
		<p>Los Angeles, CA 90007</p>
	</div>
	<div class="text-center sm:text-left text-md">
		<p>Mon-Fri: 9am - 6pm</p>
		<p>Sat: 10am - 4pm</p>
		<p>Sun: Closed</p>
	</div>
</footer>
