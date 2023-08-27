<script>
  let className = "";
  export { className as class }
</script>
<div class={"border rounded-md p-4 inline-block bg-gradient-to-b from-neutral-900 to-stone-800 border-stone-700 " + className}>
  <slot />
</div>
