<script lang="ts">
  export let code: string = "";
  export let theme: string = "gruvbox";
  import { getHighlighter } from "shiki";
  import { onMount } from "svelte";

  let wrapper: HTMLDivElement | null;
  onMount(async () => {
    const highlighter = await getHighlighter({
      theme,
      langs: ["java"],
      paths: {
        themes: '/shiki',
        languages: '/shiki',
        wasm: '/shiki'
      }
    });

    wrapper!!.innerHTML = highlighter.codeToHtml(code, { lang: "java" });
  });
</script>

<div bind:this={wrapper}></div>
