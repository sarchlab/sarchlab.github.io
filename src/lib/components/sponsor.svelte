<script>
	export let name = ""
	export let img = ""
	// Set to true for monochrome dark logos that would be
	// invisible on a dark background.
	export let invertInDark = false
</script>

<div class="mt-4 flex flex-col gap-3 items-center justify-center">
	<img src="{img}" alt="{name} logo" class:dark-invert={invertInDark}/>
	<div class="text-lg font-medium">{name}</div>
</div>

<style lang="postcss">
	img {
		@apply h-24 w-32;
		@apply object-contain
	}

	:global(.dark) .dark-invert {
		filter: invert(1);
	}
</style>
