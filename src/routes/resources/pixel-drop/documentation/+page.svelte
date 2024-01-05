<script>
  import { base } from "$app/paths";
</script>

<div class="fixed w-full h-full -z-20 bg-[#231124] top-0 left-0"></div>
<div class="flex max-w-5xl gap-8 m-auto">
  <div
    class="font-mono [&>*]:block [&>*]:px-2 [&>*]:py-1 [&>*]:rounded-md hover:[&>*]:bg-white/10 sticky self-start h-auto top-24"
  >
    <a href="#overview">Overview</a>
    <a href="#design-and-mechanism">Design & Mechanism</a>
    <a href="#assembly">Assembly</a>
  </div>
  <div>
    <h1 class="mb-4 text-5xl font-bold">Pixel Drop Documentation</h1>

    <div class="prose prose-invert lg:prose-lg">
      <h2 id="overview">Overview</h2>
      <p>
        Our Pixel Drop is used in the autonomous period of this year’s game,
        Center Stage, where we deposit a purple pixel on the designated spike
        mark with our team prop. This simple and reliable mechanism allows us to
        accurately place our pixel on the spike mark every time, consistently
        earning us 20 points each game.
      </p>
      <p>
        As seen in Fig. 1, our design takes advantage of the pixel framework by
        gripping its inside, making it extremely compact and easy to mount
        anywhere on the robot. To release the pixel, our mechanism retracts a
        panel pushing against the inside of the pixel. This panel keeps the
        pixel in place, and without it, the pixel drops to the ground. The panel
        retracting can be seen in Fig. 2.
      </p>
      <h2 id="design-and-mechanism">Design and Mechanism</h2>
      <p>
        We use a cam and follower to move the panel in and out, with a rubber
        band to provide the elastic tension between the two. The follower is the
        “panel” in our pixel drop. When the cam rotates clockwise, it pushes the
        follower forwards, which holds the pixel in place. Then, when the cam
        rotates counterclockwise, the rubber band pulls the follower back along
        with the cam which releases its grip on the pixel, allowing it to drop.
        Fig. 3 and 4 show this mechanism below.
      </p>
      <h2 id="assembly">Assembly</h2>
      <p>
        Our Pixel Drop consists of four 3D printed parts (mount, cam, follower,
        cap) and a few COTS parts, making it an extremely simple design to
        assemble. Look here for <a
          href="{base}/resources/pixel-drop/assembly-instructions"
          >assembly instructions</a
        >. We hope this has helped your team and we wish you the best of luck
        this season!
      </p>
    </div>
  </div>
</div>
