<script>
  import { base } from "$app/paths";
      import pixelDrop from "./header.png";
</script>

<div class="fixed w-full h-full -z-20 bg-[#231124] top-0 left-0 fade-in"></div>
<img src={pixelDrop} alt="Pixel Drop header" class="w-full rounded-md"/>
<!-- <h1 class="mt-4 font-black text-center text-8xl">Pixel Drop</h1> -->
<h2 class="max-w-2xl mt-16 text-6xl">An elegant purple pixel deposit system from Triple Fault</h2>
<h2 class="float-right max-w-2xl mt-16 text-6xl text-right"><a href="{base}/resources/pixel-drop/documentation" class="text-[#F4E3FF] border-b-2 border-[#F4E3FF]">Documentation</a><br/>Assembly Instructions</h2>


<style>
    .fade-in {
        animation: fade-in 150ms ease-out;
    }
    @keyframes fade-in {
        from { opacity: 0 }
        to { opacity: 1 }
    }
</style>