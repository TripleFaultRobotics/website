<script>
  import Card from "$lib/components/Card.svelte";
  import pixelDrop from "./images/pixeldrop.png";
  import { base } from "$app/paths";
</script>

<h1 class="mb-2 text-6xl font-extrabold text-center">Resources</h1>
<h2 class="text-center mb-8 md:text-lg">Open source components and guides for you to use.<br/> All work is licenced under CC BY-SA 4.0.</h2>
<div class="m-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 grid gap-4">
  <Card class="w-full cursor-not-allowed">
    <img src={pixelDrop} class="h-32 w-full object-contain bg-[#231124] rounded-md" slot="banner" />
    <h3 class="font-bold text-2xl">Pixel Drop</h3>
    <h4 class="mb-2 font-medium text-stone-400">By: Ryan Yuan</h4>
    <p>A simple and elegant purple pixel drop design. Coming Soon...</p>
  </Card>

</div>
