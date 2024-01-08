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
  class="max-w-6xl m-auto rounded-md"
/>

<!-- <h1 class="mt-4 font-black text-center text-8xl">Pixel Drop</h1> -->
<div class="w-full text-6xl h-[75vh] flex items-center">
  <h2 class="h-fit basis-[150%]">
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
<div class="grid grid-cols-2">
  <div class="flex flex-col items-center justify-center">
    <h2 class="mb-4 text-6xl">Get the Drop</h2>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfWn7aVr_EJpcMz1p4qDnJXL_deoVLnAwSO36TqAlHkvfb-ow/viewform?embedded=true"
      title="Request Form"
      width="640"
      height="800"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </div>
  <div class="flex flex-col justify-between h-full">
    <div class="mb-16 text-5xl leading-normal">
      <h2 class="mb-4 text-6xl text-center">Use the Drop</h2>
      <a
        href="{base}/resources/pixel-drop/documentation"
        class="text-[#F4E3FF] hover:bg-[#F4E3FF] hover:text-[#231124] font-mono"
      >
        <HoverDecryptText content="Documentation" />
      </a><br />
      <a
        href="{base}/resources/pixel-drop/assembly"
        class="text-[#F4E3FF] hover:bg-[#F4E3FF] hover:text-[#231124] font-mono"
      >
        <HoverDecryptText content="Assembly Instructions" />
      </a>
    </div>
    <div>
      <h2 class="mb-4 text-6xl text-center">Gallery</h2>

      <div class="grid grid-cols-2 gap-4">
        <img src={dropWO} class="rounded-md" />
        <img src={dropW} class="rounded-md" />
      </div>
    </div>
  </div>
</div>

<style>
</style>
