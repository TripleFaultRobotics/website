<script lang="ts">
  import { stagger, timeline } from "motion";
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
  });
</script>

<div
  class="grid grid-cols-1 grid-rows-1 min-h-[calc(100vh-6rem)] overflow-y-hidden"
>
  <div
    id="hero-robot"
    class="grayscale col-start-1 row-start-1 overflow-x-hidden justify-self-end [mask-image:url('/sillouhete.png')] [mask-size:cover] blob-1 w-full md:w-auto md:h-full aspect-[1000/741] -z-10 lg:z-10"
  />
  <h1
    class="text-8xl md:text-left md:text-[15vh] lg:text-[31vh] md:leading-[0.9] font-extrabold col-start-1 row-start-1 select-none"
  >
    <span class="inline-block opacity-0 hero-text">Triple</span><br />
    <span class="relative z-20 inline-block italic opacity-0 hero-text"
      >Fault</span
    ><br />
    <span class="inline-block opacity-0 hero-text">Robotics</span>
  </h1>
</div>

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