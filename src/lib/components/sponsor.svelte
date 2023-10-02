<script>
	export let name = ""
	export let img = ""
</script>

<div class="mt-4 flex flex-col gap-3 items-center justify-center">
	<img src="{img}" alt="{name} logo"/>
	<div class="text-lg font-medium">{name}</div>
</div>

<style lang="postcss">
	img {
		@apply h-24 w-32;
		@apply object-contain
	}
</style>
