<script>
  import { base } from "$app/paths"
  import Card from "$lib/components/Card.svelte"
  const titleClasses = "before:w-4 before:h-4 before:bg-stone-800 before:border-2 before:rounded-full before:border-orange-300 before:absolute before:-left-[2.61rem] before:top-[6px] relative text-xl font-semibold"
  const dateClasses = "font-medium text-stone-400"
</script>
<h1 class="mb-8 text-6xl font-extrabold text-center">Timeline</h1>

<div class="max-w-[50rem] m-auto">
  <div class="flex flex-col gap-8 border-l-2 border-white border-dashed">
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>1st Place: Lovelace League Meet 2</h2>
      <h3 class={dateClasses}>December 17, 2023</h3>
      <p class="mt-2">Our team won all 6 games we played, ending up first in our league.</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>2nd Place: Lovelace League Meet 1</h2>
      <h3 class={dateClasses}>November 19, 2023</h3>
      <img src="{base}/lovelace2023_1-recap.png" class="mt-2 border rounded-md w-96 border-stone-600" alt="Recap"/>
      <p class="mt-2">Check out the match recaps <a class="underline" href="{base}/matches">here.</a></p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Robot Sneak Peek</h2>
      <h3 class={dateClasses}>November 16, 2023</h3>
      <p class="mt-2"><a class="underline" target="_blank" href="https://www.youtube.com/watch?v=qbQz5shmp4c">It's here.</a></p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Welcome One Inc!</h2>
      <h3 class={dateClasses}>November 4, 2023</h3>
      <p class="mt-2">We welcome our first corporate sponsor, <a href="https://www.oneinc.com/" class="underline" target="_blank">One Inc</a> - The Leading Digital Payments Network for the Insurance Industry!</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>First Pixel Scored</h2>
      <h3 class={dateClasses}>October 15, 2023</h3>
      <p class="mt-2">Our robot scored its first pixel :)</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>A New Website</h2>
      <h3 class={dateClasses}>Aug 26, 2023</h3>
      <p class="mt-2">During our weekly meeting, Aiden started work on this website. Over the course of the meeting the front page, team page, and timeline page were finished.</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Registered!</h2>
      <h3 class={dateClasses}>May 22, 2023</h3>
      <p class="mt-2">We offically registered under the team number <strong>23251</strong> and will be playing in the 2023-2024 season!</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>First Drivetrain</h2>
      <h3 class={dateClasses}>Jan 21, 2023</h3>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>First Meeting</h2>
      <h3 class={dateClasses}>Jan 8, 2023</h3>
      <p class="mt-2">Kirill, Owen, Aiden, Sang, and Litong met up for the very first meeting</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Triple Fault was Founded</h2>
      <h3 class={dateClasses}>Dec 2, 2022</h3>
      <p class="pl-2 mt-3 text-lg leading-none border-l-2 border-stone-100/50">
        <span class="font-bold">triple fault</span><br  class="mb-1"/>
        <span class="text-sm text-stone-300">&sol;ˈtrip(ə)l • fôlt&sol;</span><br class="mb-3"/>
        <span class="text-base leading-snug">A triple fault is usually a sign that the exception handler called is faulty, or worse, that the whole exception handling in your system is screwed up.</span>
      </p>
    </Card>
  </div>
</div>

<div class="h-16" />
