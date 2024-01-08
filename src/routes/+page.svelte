<script lang="ts">
  import { base } from "$app/paths";
  import HoverDecryptText from "$lib/components/HoverDecryptText.svelte"
  import { animate, stagger, timeline, scroll } from "motion";
  import { MoveRight } from "lucide-svelte";
  import { onMount } from "svelte";

  onMount(() => {
    timeline([
      [
        ".hero-text",
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.4, delay: stagger(0.1), easing: [0.33, 1, 0.68, 1] },
      ],
      [
        "#hero-robot",
        { filter: ["grayscale(1)", "grayscale(0)"] },
        { duration: 4, at: "-0.4" },
      ],
    ]);
    scroll(animate("#team-num", { y: [0, 200] }, {
      target: "#team-num"
    }))
    scroll(animate("#hero-robot", { y: [0, 72] }, {
      target: "#team-num"
    }))
  });
</script>

<div
  class="grid grid-cols-1 grid-rows-1 min-h-[calc(100vh-6rem)] items-center"
>
  <div
    id="hero-robot"
    class="grayscale col-start-1 row-start-1 overflow-x-hidden justify-self-center md:translate-x-[10%] [mask-image:url('/sillouhete.png')] [mask-size:cover] blob-1 w-full md:w-auto md:h-full aspect-[1000/741] -z-10 lg:z-10"
  />
  <h1
    class="text-7xl text-center sm:text-[7rem] md:text-left md:text-[20vh] lg:text-[31vh] md:leading-[0.9] font-extrabold col-start-1 row-start-1 select-none"
  >
    <span class="inline-block w-full opacity-0 hero-text">Triple</span><br />
    <span class="relative z-20 inline-block w-full italic opacity-0 hero-text">Fault</span><br />
    <span class="inline-block w-full opacity-0 hero-text">Robotics</span>
  </h1>
  <img src="{base}/23251.svg" id="team-num" class="col-start-1 row-start-1 min-h-[calc(100vh-6rem)] opacity-10 self-end -z-20 justify-self-end" alt="Triple Fault Logo"/>
</div>
<section class="mt-16">
  <h2 class="text-5xl md:text-7xl lg:text-8xl [text-wrap:balance]">We're a 
    <span class="italic">passionate</span> 
    <a href="/team" class="text-orange-200 hover:underline">team of makers</a> from 
    <a class="text-orange-200 hover:underline" target="_blank" href="https://maps.app.goo.gl/wppixHc8DqTZcEc2A">San Diego</a>.
  </h2>
  <a class="block mt-4 text-xl transition lg:text-2xl hover:underline hover:translate-x-4 w-fit" href="/resources">
    <MoveRight class="inline mr-2" />Check out our free resources for FTC
  </a>
  <a class="block mt-2 text-xl transition lg:text-2xl hover:underline hover:translate-x-4 w-fit" href="mailto:team@3fault.com">
    <MoveRight class="inline mr-2" />Contact us at <span class="px-1 font-mono rounded bg-orange-200/20">team@3fault.com</span>
  </a>
</section>
<section class="mt-8">
  <h1 class="mb-8 text-6xl font-extrabold text-center">Sponsors</h1>
  <div class="grid grid-rows-2 mx-4 sm:grid-rows-1 sm:grid-cols-2 max-w-[65rem] sm:m-auto items-center">
    <a href="https://www.oneinc.com" target="_blank" class="grayscale hover:grayscale-0 transition brightness-[1000%] hover:brightness-200"><img src="{base}/sponsors/oneinc.svg" /></a>
    <img src="{base}/sponsors/hdn.svg" />
  </div>
</section>

<style>
  .blob-1 {
    background: radial-gradient(
        110.88% 79.69% at 47.77%,
        at 151.82%,
        #ffec45 0,
        rgba(255, 236, 69, 0.3) 54.92%,
        rgba(255, 236, 69, 0) 96.11%
      ),
      radial-gradient(
        50% 68.23% at 98.21%,
        at 96.61%,
        #41d1b7 0,
        rgba(65, 209, 183, 0.35) 49.27%,
        rgba(65, 209, 183, 0) 100%
      ),
      radial-gradient(
        83.71% 75.52% at -10.04%,
        at 2.86%,
        #8263db 0,
        rgba(129, 114, 218, 0.26) 56.87%,
        rgba(129, 114, 218, 0) 100%
      ),
      linear-gradient(180deg, #58ccdc, rgba(88, 204, 220, 0)),
      linear-gradient(81.23deg, #ff557e 21.4%, rgba(255, 85, 85, 0) 84.87%),
      #f2f5fa;
    background: radial-gradient(
        110.88% 79.69% at 47.77% 151.82%,
        #ffec45 0,
        rgba(255, 236, 69, 0.3) 54.92%,
        rgba(255, 236, 69, 0) 96.11%
      ),
      radial-gradient(
        50% 68.23% at 98.21% 96.61%,
        #41d1b7 0,
        rgba(65, 209, 183, 0.35) 49.27%,
        rgba(65, 209, 183, 0) 100%
      ),
      radial-gradient(
        83.71% 75.52% at -10.04% 2.86%,
        #8263db 0,
        rgba(129, 114, 218, 0.26) 56.87%,
        rgba(129, 114, 218, 0) 100%
      ),
      linear-gradient(180deg, #58ccdc, rgba(88, 204, 220, 0)),
      linear-gradient(81.23deg, #ff557e 21.4%, rgba(255, 85, 85, 0) 84.87%),
      #f2f5fa;
    background-blend-mode: normal, normal, darken, normal, normal, normal;
    animation: hue 30s 5s infinite linear;
  }

  @keyframes hue {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
</style>
