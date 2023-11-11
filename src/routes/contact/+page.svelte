<script>
  import Card from "$lib/components/Card.svelte";
  import { Mail, Globe2 } from "lucide-svelte"
</script>
<h1 class="mb-8 text-6xl font-extrabold text-center">Contact</h1>
<div class="max-w-[85ch] m-auto">
  <h3 class="text-xl font-bold"><Mail class="inline mr-1" size={20} strokeWidth={2.5} />Email: 
    <a href="mailto:team@3fault.com" class="font-normal hover:-translate-y-0.5 active:translate-y-1 transition-transform inline-block"><Card innerClass="py-1 px-3">team@3fault.com</Card></a>
  </h3>

  <h3 class="text-xl font-bold"><Globe2 class="inline mr-1" size={20} strokeWidth={2.5} />Region: <span class="font-normal">San Diego</span></h3> 
</div>
