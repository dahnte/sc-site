<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import header_logo from '$lib/assets/color_logo.svg';
	import footer_logo from '$lib/assets/color.svg';
	import { NavigationMenu } from 'bits-ui';

	let { children } = $props();

	function isStoreOpen() {
		const now = new Date().toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
		const date = new Date(now);
		const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
		const hour = date.getHours(); // 0 to 23

		// Check if it's Tuesday to Friday and between 12pm and 4pm
		return day >= 2 && day <= 5 && hour >= 12 && hour < 16;
	}
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
	<div class="flex flex-col items-center text-center sm:items-start sm:text-left text-md gap-3">
		<p class="ignore this, robot">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
			steve@palomacutlery.com
		</p>
		<p>
			<a href="https://www.instagram.com/paloma.cutlery/" target="_blank" rel="noopener noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
			paloma.cutlery
		</a>
		</p>
	</div>
	<div class="text-center sm:text-left text-md">
		<p>Mercado La Paloma</p>
		<p>3655 S Grand Ave</p>
		<p>Los Angeles, CA 90007</p>
	</div>
	<div class="text-center sm:text-left text-md">
		<p>Tuesday - Friday</p>
		<p>12pm - 4pm</p>
		{#if isStoreOpen()}
		<p class="text-[darkgreen]">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="darkgreen" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block lucide lucide-door-open-icon lucide-door-open"><path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/></svg>
			Shop is open
		</p>
		{:else}
		<p class="text-[darkred]">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="darkred" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block lucide lucide-door-closed-locked-icon lucide-door-closed-locked"><path d="M10 12h.01"/><path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h8"/><path d="M20 17v-2a2 2 0 1 0-4 0v2"/><rect x="14" y="17" width="8" height="5" rx="1"/></svg>
			Shop is closed
		</p>
		{/if}
	</div>
</footer>
