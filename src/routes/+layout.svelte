<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";
  import HoverDecryptText from "$lib/components/HoverDecryptText.svelte";
  import { onMount } from "svelte";
  import Lenis from "@studio-freight/lenis";
  import { setLenis } from "$lib";
  let atTop = true;

  onMount(() => {
    const lenis = new Lenis({ duration: 0.6 });
    setLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
</script>

<svelte:document
  on:scroll={() => (atTop = document.documentElement.scrollTop === 0)}
/>
<svelte:head>
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-KG2ETJKJEL"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-KG2ETJKJEL");
  </script>
</svelte:head>

<header>
  <nav
    id="navbar"
    class="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 fixed h-16 w-[calc(100%-2rem)] items-center z-50 {atTop
      ? 'border-stone-800/0'
      : 'border-stone-600/75 bg-stone-700/25 backdrop-blur-md'}"
  >
    <a href="{base}/"
      ><img
        src="{base}/logo.svg"
        class="w-12 h-12 hover:opacity-75"
        alt="Triple Fault Logo"
      /></a
    >
    <ul class="grid grid-cols-2 grid-rows-2 font-mono gap-x-4">
      <li>
        <a href="{base}/team" class="hover:underline hover:opacity-75"
          ><HoverDecryptText content="TEAM" /></a
        >
      </li>
      <li>
        <a href="{base}/matches" class="hover:underline hover:opacity-75"
          ><HoverDecryptText content="MATCHES" /></a
        >
      </li>
      <li>
        <a href="{base}/resources" class="hover:underline hover:opacity-75"
          ><HoverDecryptText content="RESOURCES" /></a
        >
      </li>
      <li>
        <a href="{base}/contact" class="hover:underline hover:opacity-75"
          ><HoverDecryptText content="CONTACT" /></a
        >
      </li>
    </ul>
    <a
      class="ml-auto font-mono text-orange-300 hover:underline hover:opacity-75"
      href="{base}/timeline"
      ><span class="font-bold">NEWS</span><span class="hidden md:inline"
        >: 1st Place Lovelace!</span
      ></a
    >
  </nav>
</header>

<main class="pt-24 pb-4 mx-4">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.stone.800);
    color: theme(colors.stone.50);
  }
  :global(::selection) {
    background-color: theme(colors.orange.100);
    color: theme(colors.stone.800);
  }
  :global(html).lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;
  }
</style>
