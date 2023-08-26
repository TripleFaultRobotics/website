<script>
  import "../app.css";
  import HoverDecryptText from "$lib/components/HoverDecryptText.svelte"
</script>


<header>
  <nav class="box-border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 bg-stone-800/75 backdrop-blur-md fixed h-16 w-[calc(100%-2rem)] items-center">
    <a href="/"><img src="/logo.svg" class="w-12 h-12"/></a>
    <ul class="font-mono">
      <li><a href="/team" class="hover:underline"><HoverDecryptText content="TEAM" duration={500}/></a></li>
      <li><a href="/contact" class="hover:underline"><HoverDecryptText content="CONTACT"/></a></li>
    </ul>
    <p class="ml-auto text-orange-500 font-mono"><span class="font-bold">NEWS:</span> Hey look a sick website!</p>
  </nav>
</header>

<main class="pt-24 mx-4">
  <slot />
</main>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.neutral.950);
    color: theme(colors.neutral.50)
  }
</style>
