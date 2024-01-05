<script>
  import Card from "$lib/components/Card.svelte";
  import pixelDrop from "./images/pixeldrop.png";
  import { base } from "$app/paths";
</script>

<h1 class="mb-2 text-6xl font-extrabold text-center">Resources</h1>
<h2 class="mb-8 text-center md:text-lg">
  Open source components and guides for you to use.<br /> All work is licenced under
  CC BY-SA 4.0.
</h2>
<div
  class="grid grid-cols-1 grid-rows-1 gap-4 m-auto md:grid-cols-2 xl:grid-cols-3"
>
  <a href="{base}/resources/pixel-drop">
    <Card class="w-full">
      <img
        src={pixelDrop}
        class="h-32 w-full object-contain bg-[#231124] rounded-md"
        slot="banner"
        alt="triple fault pixel drop banner"
      />
      <h3 class="text-2xl font-bold">Pixel Drop</h3>
      <h4 class="mb-2 font-medium text-stone-400">By: Ryan Yuan</h4>
      <p>A simple and elegant purple pixel drop design. Coming Soon...</p>
    </Card>
  </a>
</div>
