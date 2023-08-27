<script>
  let className = "";
  export { className as class }
</script>
<div class={"border rounded-md p-4 inline-block bg-gradient-to-t from-stone-950 to-stone-900 border-stone-700 " + className}>
  <slot />
</div>
