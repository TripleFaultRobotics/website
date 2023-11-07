<script>
  import Card from "$lib/components/Card.svelte"
  const titleClasses = "before:w-4 before:h-4 before:bg-stone-800 before:border-2 before:rounded-full before:border-orange-300 before:absolute before:-left-[2.61rem] before:top-[6px] relative text-xl font-semibold"
  const dateClasses = "font-medium text-stone-400"
</script>
<h1 class="text-6xl font-extrabold mb-8 text-center">Timeline</h1>

<div class="max-w-[50rem] m-auto">
  <div class="border-l-2 border-dashed border-white flex gap-8 flex-col">
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Welcome One Inc!</h2>
      <h3 class={dateClasses}>November 4, 2023</h3>
      <p class="mt-2">We welcome our first corporate sponsor, One Inc - The Leading Digital Payments Network
for the Insurance Industry!</p>
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
    </Card>
  </div>
</div>

<div class="h-16" />
