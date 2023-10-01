<script>
	export let img = ""
	export let title = ""
	export let content = ""
</script>

<div class="research-topic">
	<img src="{img}" alt="{title}"/>
	<div>
		<div class="title">
			{title}
		</div>
		
		<div class="content">
			{content}
		</div>
	</div>
</div>

<style lang="postcss">
	.research-topic {
		@apply flex flex-row gap-6 justify-center items-center;
		@apply mt-8 ml-8;
	}

	 img{
		@apply rounded-full border;
		@apply w-24 h-24;
		@apply flex-shrink-0;
		@apply object-cover;
	}

	.title {
		@apply font-semibold;
	}

	.content {
		@apply text-sm;
	}


</style>