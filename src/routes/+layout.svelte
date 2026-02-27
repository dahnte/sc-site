<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import header_logo from '$lib/assets/color_logo.svg';
	import footer_logo from '$lib/assets/color.svg';
	import { NavigationMenu } from 'bits-ui';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon}/></svelte:head>

<NavigationMenu.Root class="font-[Ubuntu]">
	<NavigationMenu.List
		class="flex w-full flex-row items-center justify-between text-right px-5 py-3.5 gap-2 sm:justify-around sm:gap-20 text-xl border-b-1"
	>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Link href="/">
					<img src={header_logo} alt="Paloma Cutlery Logo" class="aspect-square w-16 sm:hover:fill-white" />
				</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>

		<NavigationMenu.List class="flex flex-col gap-2 sm:flex-row sm:gap-20">
			<NavigationMenu.Item>
				<NavigationMenu.Link class="sm:py-8 sm:px-2 sm:hover:border-b-3 sm:hover:border-black" href="/services">Services</NavigationMenu.Link>
			</NavigationMenu.Item>
			<!-- <NavigationMenu.Item>
				<NavigationMenu.Link class="sm:py-8 sm:px-2 sm:hover:border-b-3 sm:hover:border-black" href="/contact">Contact</NavigationMenu.Link>
			</NavigationMenu.Item> -->
			<NavigationMenu.Item>
				<NavigationMenu.Link class="sm:py-8 sm:px-2 sm:hover:border-b-3 sm:hover:border-black" href="/about">About</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
		<NavigationMenu.Indicator />
	</NavigationMenu.List>

	<NavigationMenu.Viewport />
</NavigationMenu.Root>

{@render children()}

<footer
	class="flex w-full flex-col items-center justify-around gap-8 border-t-1 p-10 sm:flex-row"
>
	<div>
		<img src={footer_logo} alt="Paloma Cutlery Logo" class="aspect-2/3 w-16" />
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
