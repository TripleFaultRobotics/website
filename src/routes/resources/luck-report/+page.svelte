<script lang="ts">
  import { base } from "$app/paths";
  import HoverDecryptText from "$lib/components/HoverDecryptText.svelte";
  import { T, Canvas } from "@threlte/core";
  import { GLTF, OrbitControls } from "@threlte/extras";
  import banner from "./banner.png";
  import luckReport from "./San_Diego_Luck_Report.pdf";
</script>

<svelte:head><title>Triple Fault | Luck Report</title></svelte:head>

<div class="fixed w-full h-full -z-50 bg-[#165738] top-0 left-0"></div>
<img
  src={banner}
  alt="Pixel Drop header"
  class="w-full m-auto rounded-md md:max-w-6xl"
/>

<div class="grid m-auto">
  <h2 class="text-4xl md:text-6xl h-fit md:basis-[150%] text-center">
    A look into the statistics of matches and team luck.
  </h2>
  <a
    href={luckReport}
    class="text-[#e3ffee] font-mono block mb-3 md:mb-0 text-6xl hover:underline text-center"
  >
    <HoverDecryptText content="Download" />
  </a>
</div>

<style>
</style>
