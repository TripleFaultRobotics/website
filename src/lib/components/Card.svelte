<script>
  let className = "";
  export let innerClass = "";
  export { className as class }
</script>
<div class={"border rounded-md inline-block bg-gradient-to-t from-stone-950 to-stone-900 border-stone-700 " + className}>
  <slot name="banner" />
  <div class={"p-4 " + innerClass}>
    <slot />
  </div>
</div>
