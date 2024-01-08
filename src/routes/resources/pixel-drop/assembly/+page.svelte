<script lang="ts">
  import { base } from "$app/paths";
  import { lenis } from "$lib";
  import { onMount } from "svelte";

  import bom from "./bom.png";
  import tools from "./tools.png";
  import one from "./one.png";
  import two from "./two.png";
  import three from "./three.png";
  import four from "./four.png";
  import fourTwo from "./four_two.png";
  import five from "./five.png";
  import six from "./six.png";

  onMount(() => {
    for (const linkUntyped of document.getElementsByTagName("a")) {
      const link = linkUntyped as HTMLAnchorElement;

      // bad check but whatever
      if (link.href.includes("#"))
        link.onclick = () => lenis?.scrollTo(`#${link.href.split("#")[1]}`);
    }
  });
</script>

<div class="fixed w-full h-full -z-20 bg-[#231124] top-0 left-0"></div>
<div class="flex max-w-5xl gap-8 m-auto">
  <div
    class="font-mono [&>*]:block [&>*]:px-2 [&>*]:py-1 [&>*]:rounded-md hover:[&>*]:bg-white/10 sticky self-start h-auto top-24 md:block hidden min-w-[12rem]"
  >
    <a href="{base}/resources/pixel-drop" class="mb-2">← Back</a>
    <a href="#bom">BoM</a>
    <a href="#tools">Tools</a>
    <a href="#assembly">Assembly</a>
  </div>
  <div>
    <h1 class="mb-4 text-5xl font-bold">Pixel Drop Assembly Instructions</h1>

    <div class="prose prose-invert lg:prose-lg">
      <h2 id="bom">Bill Of Materials</h2>
      <table class="m-0 table-auto">
        <thead>
          <tr>
            <!-- <th>No.</th> -->
            <th>Component</th>
            <th>Source</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody class="text-lg">
          <tr>
            <td>Triple Fault Custom Mount</td>
            <td>3D Printed</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Triple Fault Custom Cam</td>
            <td>3D Printed</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Triple Fault Custom Follower</td>
            <td>3D Printed</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Triple Fault Custom Cap</td>
            <td>3D Printed</td>
            <td>1</td>
          </tr>
          <tr>
            <td>GoBuilda Standard Size Servo</td>
            <td>COTS</td>
            <td>1</td>
          </tr>
          <tr>
            <td>M3 8mm Hex Socket Cap Head Screw</td>
            <td>COTS</td>
            <td>3</td>
          </tr>
          <tr>
            <td>M4 8mm Hex Socket Cap Head Screw</td>
            <td>COTS</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Size 10 Rubber Band</td>
            <td>COTS</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <img src={bom} />
      <h2 id="tools">Tools</h2>
      <img src={tools} />
      <ul>
        <li>M3 Allen Key</li>
        <li>M4 Allen Key</li>
        <li>X-Acto Knife</li>
      </ul>
      <h2 id="assembly">Assembly</h2>
      <ol>
        <li>
          Use an X-Acto knife or another sharp tool to remove the small support
          triangle on the side of the servo. The support gets in the way of the
          custom mount, so it’s best to remove it.
          <img src={one} />
        </li>
        <li>
          Attach the custom mount to the servo using two M4 screws and an M4
          Allen key.
          <img src={two} />
        </li>
        <li>
          Attach the custom cam to the servo spline using one M3 screw and an M3
          Allen key.
          <img src={three} />
        </li>
        <li>
          Fold the rubber band in half and slide it into the small groove of the
          custom follower.
          <div class="grid grid-cols-2 gap-2 [&>*]:object-cover [&>*]:h-full mb-4 not-prose">
            <img src={four} />
            <img src={fourTwo} />
          </div>
        </li>
        <li>
          Attach the follower to the custom mount by wrapping the rubber band
          around the cam and standoff.
          <img src={five} />
        </li>
        <li>
          Finally, attach the custom cap to the bottom of the mount using two M3
          screws and an M3 Allen key. Congratulations, you’ve successfully
          assembled the Triple Fault Pixel Drop Mechanism!
          <img src={six} />
        </li>
      </ol>
    </div>
  </div>
</div>

<style>
  img {
    @apply rounded-md;
  }
</style>