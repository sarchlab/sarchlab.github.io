<script lang="ts">
    export let icon = ''
    export let link = ''
    export let text = ''
</script>

<a href={link} target="_blank" rel="noopener noreferrer">
    <div class="flex items-center">
        <img src={icon} alt="icon" class="w-4 h-3" />
        <div class="ml-1">{text}</div>
    </div>
</a>
