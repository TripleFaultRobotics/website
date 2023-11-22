<script lang="ts">
	import { fly } from 'svelte/transition';
  import PixelSlot from "$lib/components/PixelSlot.svelte"
  import { onMount } from 'svelte';
  let className;
  export let boardState;
  export { className as class }
  /*
    For the sake of simplicity, animation has been removed.
            transition:fly={{ y: -100 - i * 10, duration: 1000, delay: 1200 - i * 100  }}
  */
</script>

<div class="grid {className}">
  {#each boardState as row, i}
    <div 
      class="grid {row.length === 6 ? "grid-cols-6 ml-[28.5px]" : "grid-cols-7"} {i > 0 ? "-mt-[16.5px]" : ""} w-fit"
    >
      {#each row as slot}
        <PixelSlot type={slot} />
      {/each}
    </div>
  {/each}
</div>
