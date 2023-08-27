<script>
  import "../app.css";
  import HoverDecryptText from "$lib/components/HoverDecryptText.svelte"
  import Lenis from '@studio-freight/lenis'
  import { onMount } from 'svelte';
  let atTop = true;
  const doScroll = () => {
    console.log(atTop)
    atTop = document.body.scrollTop === 0;
  }
  onMount(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
</script>

<svelte:document on:scroll={() => atTop = document.documentElement.scrollTop === 0} />

<header>
  <nav class={`transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 backdrop-blur-md fixed h-16 w-[calc(100%-2rem)] items-center ${atTop ? "border-stone-800/0" : "border-stone-600/75 bg-stone-700/75"}`}>
    <a href="/"><img src="/logo.svg" class="w-12 h-12 hover:opacity-75"/></a>
    <ul class="font-mono">
      <li><a href="/team" class="hover:underline hover:opacity-75"><HoverDecryptText content="TEAM"/></a></li>
      <li><a href="/contact" class="hover:underline hover:opacity-75"><HoverDecryptText content="CONTACT"/></a></li>
    </ul>
    <a class="ml-auto text-orange-300 font-mono hover:underline hover:opacity-75" href="/timeline"><span class="font-bold">NEWS:</span> A new website.</a>
  </nav>
</header>

<main class="pt-24 mx-4">
  <slot />
</main>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.stone.800);
    color: theme(colors.stone.50)
  }
</style>
