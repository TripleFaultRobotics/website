<script>
  import { base } from "$app/paths";
  import Card from "$lib/components/Card.svelte";
  const titleClasses =
    "before:w-4 before:h-4 before:bg-stone-800 before:border-2 before:rounded-full before:border-orange-300 before:absolute before:-left-[2.61rem] before:top-[6px] relative text-xl font-semibold";
  const dateClasses = "font-medium text-stone-400";
</script>

<svelte:head><title>Triple Fault | Timeline</title></svelte:head>

<h1 class="mb-8 text-6xl font-extrabold text-center">Timeline</h1>

<div class="max-w-[50rem] m-auto">
  <div class="flex flex-col gap-8 border-l-2 border-white border-dashed">
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>That's all folks!</h2>
      <h3 class={dateClasses}>April 19, 2025</h3>
      <p class="mt-2">
        Our season ended at worlds with 17th highest OPR overall, 10th highest
        OPR at worlds, and 2nd highest in our division. We also made it to the
        playoffs with our alliance partners 3747 The Hive & 16413 Lo-Ellen
        Robotics.
      </p>
      <p class="mt-2">
        Triple Fault is now disbanded.
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Off to Worlds!</h2>
      <h3 class={dateClasses}>March 16, 2025</h3>
      <p class="mt-2">
        Our team qualified for worlds in Houston. See you all there!
      </p>
      <img
        src="{base}/to_worlds_2025.jpg"
        class="object-cover mt-2 border rounded-md border-stone-600"
        alt="1"
      />
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Regionals Winning Alliance!</h2>
      <h3 class={dateClasses}>March 16, 2025</h3>
      <p class="mt-2">
        Our team won the Innovate 2nd place award along with the regionals
        playoffs with our teammate Definitely Human. Thank you Definitely Human
        for being an incredible alliance partner and we look forward to seeing
        you at worlds.
      </p>
      <img
        src="{base}/regionals_2025.jpg"
        class="object-cover mt-2 border rounded-md border-stone-600"
        alt="1"
      />
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>2nd place at Interleagues</h2>
      <h3 class={dateClasses}>Febuary 16, 2025</h3>
      <p class="mt-2">
        We got 2nd place at the Euclid Interleagues winning the Connect Award,
        advancing to regionals. We also won the playoffs with Definitely Human!
      </p>
      <img
        src="{base}/euclid_2025.jpg"
        class="object-cover mt-2 border rounded-md border-stone-600"
        alt="1"
      />
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Hello, INTO THE DEEP!</h2>
      <h3 class={dateClasses}>September 7, 2024</h3>
      <p class="mt-2">We welcome the new season, INTO THE DEEP!</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Goodbye, CENTERSTAGE!</h2>
      <h3 class={dateClasses}>April 15, 2024</h3>
      <p class="mt-2">
        Finishing 103rd worldwide by OPR, in the top 1.4%, we are happy and
        excited for the next season!
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Interleague Alliance Captain</h2>
      <h3 class={dateClasses}>March 3, 2024</h3>
      <p class="mt-2">
        Finishing 4th in qualifications, we became 3rd alliance captain at
        interleagues, and won the design award for our climber!
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>2 + 4</h2>
      <h3 class={dateClasses}>January 14, 2024</h3>
      <p class="my-2">We unveiled our 2 + 4 for League Meet 3.</p>
      <iframe
        class="hidden border rounded-md border-stone-600 lg:block"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Jqu6HLafB4k?si=HYtvrbE3kkaONmze"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <a
        href="https://www.youtube.com/watch?v=Jqu6HLafB4k"
        class="mt-2 underline lg:hidden">Watch here.</a
      >
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Pacific Sky Presentation!</h2>
      <h3 class={dateClasses}>January 9, 2024</h3>
      <p class="mt-2">
        Our team gave a presentation to the 6th grade classes of Pacific Sky
        Elementary in an effort to raise awareness about robotics and FIRST.
      </p>
      <div class="grid grid-cols-2 gap-2">
        <img
          src="{base}/pacific_sky_1.jpg"
          class="object-cover mt-2 border rounded-md rounded-r-none w-96 border-stone-600"
          alt="1"
        />
        <img
          src="{base}/pacific_sky_2.jpg"
          class="object-cover mt-2 border rounded-md rounded-l-none w-96 border-stone-600"
          alt="2"
        />
      </div>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Purple Pixel Drop design released</h2>
      <h3 class={dateClasses}>January 9, 2024</h3>
      <p class="mt-2">
        Our team's purple pixel drop design has been released! <a
          class="underline"
          href="{base}/resources/pixel-drop">Check it out!</a
        >
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>One year anniversary of Triple Fault!</h2>
      <h3 class={dateClasses}>January 8, 2024</h3>
      <p class="mt-2">
        It's our one year anniversary! We've achieved so much as a team over the
        course of the last year and we are so proud of what we have
        accomplished.
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>1st Place: Lovelace League Meet 2</h2>
      <h3 class={dateClasses}>December 17, 2023</h3>
      <p class="mt-2">
        Our team won all 6 games we played, ending up first in our league.
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>2nd Place: Lovelace League Meet 1</h2>
      <h3 class={dateClasses}>November 19, 2023</h3>
      <img
        src="{base}/lovelace2023_1-recap.png"
        class="mt-2 border rounded-md w-96 border-stone-600"
        alt="Recap"
      />
      <p class="mt-2">
        Check out the match recaps <a class="underline" href="{base}/matches"
          >here.</a
        >
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Robot Sneak Peek</h2>
      <h3 class={dateClasses}>November 16, 2023</h3>
      <p class="mt-2">
        <a
          class="underline"
          target="_blank"
          href="https://www.youtube.com/watch?v=qbQz5shmp4c">It's here.</a
        >
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Welcome One Inc!</h2>
      <h3 class={dateClasses}>November 4, 2023</h3>
      <p class="mt-2">
        We welcome our first corporate sponsor, <a
          href="https://www.oneinc.com/"
          class="underline"
          target="_blank">One Inc</a
        > - The Leading Digital Payments Network for the Insurance Industry!
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>First Pixel Scored</h2>
      <h3 class={dateClasses}>October 15, 2023</h3>
      <p class="mt-2">Our robot scored its first pixel :)</p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>A New Website</h2>
      <h3 class={dateClasses}>Aug 26, 2023</h3>
      <p class="mt-2">
        During our weekly meeting, Aiden started work on this website. Over the
        course of the meeting the front page, team page, and timeline page were
        finished.
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Registered!</h2>
      <h3 class={dateClasses}>May 22, 2023</h3>
      <p class="mt-2">
        We offically registered under the team number <strong>23251</strong> and
        will be playing in the 2023-2024 season!
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>First Drivetrain</h2>
      <h3 class={dateClasses}>Jan 21, 2023</h3>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>First Meeting</h2>
      <h3 class={dateClasses}>Jan 8, 2023</h3>
      <p class="mt-2">
        Kirill, Owen, Aiden, Sang, and Litong met up for the very first meeting
      </p>
    </Card>
    <Card class="ml-4 grow">
      <h2 class={titleClasses}>Triple Fault was Founded</h2>
      <h3 class={dateClasses}>Dec 2, 2022</h3>
      <p class="pl-2 mt-3 text-lg leading-none border-l-2 border-stone-100/50">
        <span class="font-bold">triple fault</span><br class="mb-1" />
        <span class="text-sm text-stone-300">&sol;ˈtrip(ə)l • fôlt&sol;</span
        ><br class="mb-3" />
        <span class="text-base leading-snug"
          >A triple fault is usually a sign that the exception handler called is
          faulty, or worse, that the whole exception handling in your system is
          screwed up.</span
        >
      </p>
    </Card>
  </div>
</div>

<div class="h-16" />
