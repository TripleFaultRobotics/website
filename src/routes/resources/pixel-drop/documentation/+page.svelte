<script lang="ts">
  import { base } from "$app/paths";
  import { lenis } from "$lib";
  import Code from "$lib/components/Code.svelte";
  import { onMount } from "svelte";

  import fig1 from "./fig1.png";
  import fig2 from "./fig2.png";
  import fig3 from "./fig3.png";
  import fig4 from "./fig4.png";
  import fig5 from "./fig5.png";

  onMount(() => {
    for (const linkUntyped of document.getElementsByTagName("a")) {
      const link = linkUntyped as HTMLAnchorElement;

      // bad check but whatever
      if (link.href.includes("#"))
        link.onclick = () => lenis?.scrollTo(`#${link.href.split("#")[1]}`);
    }
  });
</script>

<svelte:head><title>Triple Fault | Pixel Drop | Documentation</title></svelte:head>

<div class="fixed w-full h-full -z-20 bg-[#231124] top-0 left-0"></div>
<div class="flex max-w-5xl gap-8 m-auto">
  <div
    class="font-mono [&>*]:block [&>*]:px-2 [&>*]:py-1 [&>*]:rounded-md hover:[&>*]:bg-white/10 sticky self-start h-auto top-24 md:block hidden min-w-[12rem]"
  >
    <a href="{base}/resources/pixel-drop" class="mb-4">← Back</a>
    <a href="#overview">Overview</a>
    <a href="#design-and-mechanism">Design & Mechanism</a>
    <a href="#assembly">Assembly</a>
    <a href="#usage">Usage</a>
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
      <img src={fig1} alt="figure 1" />
      <caption class="w-full -mt-6 font-mono text-sm">
        <b>Figure 1.</b> Pixel Drop with pixel attached
      </caption>
      <img src={fig2} alt="figure 2" />
      <caption class="w-full -mt-6 font-mono text-sm">
        <b>Figure 2.</b> Pixel Drop in hold state (panel out) and release state (panel
        in)
      </caption>

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
      <img src={fig3} alt="figure 3" />
      <caption class="w-full -mt-6 font-mono text-sm">
        <b>Figure 3.</b> Interior illustration of cam and follower mechanism
      </caption>
      <img src={fig4} alt="figure 4" />
      <caption class="w-full -mt-6 font-mono text-sm">
        <b>Figure 4.</b> Exterior illustration of cam and follower mechanism
      </caption>
      <h2 id="assembly">Assembly</h2>
      <p>
        Our Pixel Drop consists of four 3D printed parts (mount, cam, follower,
        cap) and a few COTS parts, making it an extremely simple design to
        assemble. Look here for
        <a href="{base}/resources/pixel-drop/assembly">
          assembly instructions
        </a>.
      </p>
      <img src={fig5} class="m-auto" alt="figure 5" />
      <caption class="w-full -mt-6 font-mono text-sm">
        <b>Figure 5.</b> Exploded view of assembly
      </caption>

      <h2 id="usage">Usage</h2>
      <Code
        theme="a-touch-of-lilac"
        code={`@TeleOp(name = "PixelDrop Sample")
public class PixelDropSample extends LinearOpMode {
  private final Servo dropServo = hardwareMap.servo.get("pixelDrop");
  @Override
  public void runOpMode() {
    // This OpMode is designed to setup the purple pixel

    // This will release any pixels in the drop
    dropServo.setPosition(0.2);
    
    waitForStart();
    while (opModeIsActive()) {
      // Place the pixel into the drop, press the play button
      // The pixel should securely be locked in the drop.
      dropServo.setPosition(0.45);
    }
    
    // Stop the OpMode. During autonomous,
    // dropServo.setPosition(0.2) will release the pixel.
  }
}
`}
      />
      <h2 id="troubleshooting">Troubleshooting</h2>
      <p>The rubber band inside will snap sometimes. If it fails to drop the pixel, make sure to check the rubber band inside.</p>
      <!-- We hope this has helped your team and we wish you the best of luck
        this season! -->
    </div>
  </div>
</div>

<style>
  img {
    @apply rounded-md;
  }

  caption {
    @apply block text-center;
  }
</style>
