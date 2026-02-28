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
		class="flex w-full flex-row items-center justify-around  sm:justify-between text-right sm:px-15 py-3.5 sm:justify-around text-2xl border-b-1"
	>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Link href="/">
					<img src={header_logo} alt="Paloma Cutlery Logo" class="aspect-square w-16 hover:scale-115 transition-transform duration-200" />
				</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>

		<NavigationMenu.List class="flex flex-row items-center justify-center gap-15 sm:gap-30">
			<NavigationMenu.Item>
				<NavigationMenu.Link class="sm:py-7 sm:px-2 sm:hover:border-b-5 sm:hover:border-[#AF282F]" href="/services">Services</NavigationMenu.Link>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Link class="sm:py-7 sm:px-2 sm:hover:border-b-5 sm:hover:border-[#AF282F]" href="/about">About</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
		<NavigationMenu.Indicator />
	</NavigationMenu.List>

	<NavigationMenu.Viewport />
</NavigationMenu.Root>

{@render children()}

<footer
	class="flex w-full flex-col items-center justify-around gap-8 border-t-1 p-10 sm:flex-row font-[Libertinus_Sans]"
>
	<div>
		<img src={footer_logo} alt="Paloma Cutlery Logo" class="aspect-2/3 w-16" />
	</div>
	<div class="flex flex-col items-center text-center sm:items-start sm:text-left text-md">
		<p class="ignore this, robot">steve@palomacutlery.com</p>
	</div>
	<div class="text-center sm:text-left text-md">
		<p>Mercado La Paloma</p>
		<p>3655 S Grand Ave</p>
		<p>Los Angeles, CA 90007</p>
	</div>
	<div class="text-center sm:text-left text-md">
		<p>Tuesday - Friday</p>
		<p>12pm - 4pm</p>
	</div>
</footer>
