<script lang="ts">
  import { base } from "$app/paths";
  import HoverDecryptText from "$lib/components/HoverDecryptText.svelte";
  import { T, Canvas } from "@threlte/core";
  import { GLTF, OrbitControls } from "@threlte/extras";
  import pixelDrop from "./header.png";
  import dropWO from "./drop-wo.jpg";
  import dropW from "./drop-w.jpg";
</script>

<div class="fixed w-full h-full -z-50 bg-[#231124] top-0 left-0"></div>
<img
  src={pixelDrop}
  alt="Pixel Drop header"
  class="w-full m-auto rounded-md md:max-w-6xl"
/>

<!-- <h1 class="mt-4 font-black text-center text-8xl">Pixel Drop</h1> -->
<div class="w-full h-[75vh] flex flex-col md:flex-row items-center mt-8 md:-mt-16">
  <h2 class="text-4xl md:text-6xl h-fit md:basis-[150%]">
    An elegant purple pixel deposit system from Triple Fault.
  </h2>
  <div class="relative top-0 z-10 w-full h-full">
    <Canvas>
      <T.PerspectiveCamera makeDefault position={[10, 3, 10]} zoom={140}>
        <OrbitControls enableDamping={true} enableZoom={false} autoRotate={true}
        ></OrbitControls>
        <T.DirectionalLight intensity={0.5} />
      </T.PerspectiveCamera>

      <T.AmbientLight intensity={0.75} />
      <GLTF url="/PixelDrop.gltf" />
    </Canvas>
  </div>
</div>
<div class="grid grid-rows-2 gap-4 md:grid-cols-2 md:gap-0">
  <div class="flex flex-col items-center justify-center">
    <h2 class="mb-4 text-6xl">Get the Drop</h2>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfWn7aVr_EJpcMz1p4qDnJXL_deoVLnAwSO36TqAlHkvfb-ow/viewform?embedded=true"
      title="Request Form"
      height="800"
      class="w-full h-[60rem] md:h-[50rem] md:w-[40rem]"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </div>
  <div class="flex flex-col h-full md:justify-between">
    <div class="mb-16 text-3xl leading-normal md:text-5xl">
      <h2 class="mb-4 text-6xl text-center">Use the Drop</h2>
      <a
        href="{base}/resources/pixel-drop/documentation"
        class="text-[#F4E3FF] hover:bg-[#F4E3FF] hover:text-[#231124] font-mono block mb-3 md:mb-0"
      >
        <HoverDecryptText content="Documentation" />
      </a>
      <a
        href="{base}/resources/pixel-drop/assembly"
        class="text-[#F4E3FF] hover:bg-[#F4E3FF] hover:text-[#231124] block font-mono"
      >
        <HoverDecryptText content="Assembly Instructions" />
      </a>
    </div>
    <div>
      <h2 class="mb-4 text-6xl text-center">Gallery</h2>

      <div class="grid gap-4 md:grid-cols-2">
        <img src={dropWO} class="rounded-md" />
        <img src={dropW} class="rounded-md" />
      </div>
    </div>
  </div>
</div>
<div class="mt-16 text-4xl md:mx-32 md:text-6xl">
  <h3 class="mb-4 text-6xl text-center md:mb-0">Credits</h3>
  <div class="flex justify-between">
    <span>Ryan Yuan</span><span class="text-neutral-300">Design</span>
  </div>
  <div class="flex justify-between">
    <span>Aiden Shi</span><span class="text-neutral-300">Website</span>
  </div>
</div>

<style>
</style>
