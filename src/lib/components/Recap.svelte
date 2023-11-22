<script lang="ts">
  import Backdrop from "./Backdrop.svelte"
  import { base } from "$app/paths";

  const bonuses = {
    "auto-purple-red": "Purpled pixel placed down on team prop"
  }

  export let match;
  let className;
  export { className as class }
</script>

<div class="grid gap-4 lg:grid-cols-2 {className}">
  <div class="flex flex-col">
    <div class="bg-red-500/50 p-4 rounded-md grow h-fit">
      <div class="flex gap-4 text-center {match.red.score > match.blue.score ? "font-bold" : ""}">
        <div class="basis-1/2 bg-neutral-100/5 p-2 rounded-md">
          <h2 class="text-2xl">{match.red.teams[0].name}</h2>
          <h3 class="text-lg">{match.red.teams[0].tn}</h3>
        </div>
        <div class="basis-1/2 bg-neutral-100/5 p-2 rounded-md">
          <h2 class="text-2xl">{match.red.teams[1].name}</h2>
          <h3 class="text-lg">{match.red.teams[1].tn}</h3>
        </div>
      </div>
      <div class="bg-stone-700/50 rounded p-4 mt-4 [&>*]:w-8 [&>*]:inline-block [&>*]:mr-2">
        <!-- whitespace is messing something up... -->
        {#each match.red.bonuses.auto ?? [] as bonus}
          {#if bonus === "purple"}
            <img src="{base}/csicons/auto-purple-red.svg" />
          {:else}
            <img src="{base}/csicons/auto-{bonus}.svg" />
          {/if}
        {/each}
        {#each match.red.bonuses.teleop ?? [] as bonus}
          <img src="{base}/csicons/teleop-{bonus}.svg" />
        {/each}
        {#each match.red.bonuses.endgame ?? [] as bonus}
          <img src="{base}/csicons/endgame-{bonus}.svg" />
        {/each}
        {#if match.red.backstage > 0}
          <div class="text-xl [width:fit-content!important]"><img src="{base}/csicons/pixel-white.svg" class="w-8 inline"/> x {match.red.backstage}</div>
        {/if}
      </div>
      <h1 class="text-6xl font-extrabold text-center mt-4 bg-red-900/50 rounded-md py-2">{match.red.score}</h1>
    </div>
    <Backdrop
        class="self-center mt-4"
        boardState={match.red.backdrop}
    />
  </div>
  <div class="flex flex-col">
    <div class="bg-blue-500/50 p-4 rounded-md grow h-fit">
      <div class="flex gap-4 text-center {match.blue.score > match.red.score ? "font-bold" : ""}">
        <div class="basis-1/2 bg-neutral-100/5 p-2 rounded-md">
          <h2 class="text-2xl">{match.blue.teams[0].name}</h2>
          <h3 class="text-lg">{match.blue.teams[0].tn}</h3>
        </div>
        <div class="basis-1/2 bg-neutral-100/5 p-2 rounded-md">
          <h2 class="text-2xl">{match.blue.teams[1].name}</h2>
          <h3 class="text-lg">{match.blue.teams[1].tn}</h3>
        </div>
      </div>
      <div class="bg-slate-700/50 rounded p-4 mt-4 [&>*]:w-8 [&>*]:inline-block [&>*]:mr-2">
        {#each match.blue.bonuses.auto ?? [] as bonus}
          {#if bonus === "purple"}
            <img src="{base}/csicons/auto-purple-blue.svg" />
          {:else}
            <img src="{base}/csicons/auto-{bonus}.svg" />
          {/if}
        {/each}
        {#each match.blue.bonuses.teleop ?? [] as bonus}
          <img src="{base}/csicons/teleop-{bonus}.svg" />
        {/each}
        {#each match.blue.bonuses.endgame ?? [] as bonus}
          <img src="{base}/csicons/endgame-{bonus}.svg" />
        {/each}
        {#if match.blue.backstage > 0}
          <div class="text-xl [width:fit-content!important]"><img src="{base}/csicons/pixel-white.svg" class="w-8 inline"/> x {match.blue.backstage}</div>
        {/if}
      </div>
      <h1 class="text-6xl font-extrabold text-center mt-4 bg-blue-900/50 rounded-md py-2">{match.blue.score}</h1>
    </div>
    <Backdrop
        class="self-center mt-4"
        boardState={match.blue.backdrop}
    />
  </div>
</div>

