<script>
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}|\\;:'\",.<>?/`~".split('')
  export let content = "";
  export let duration = 1000; // ms
  let text = content;
  let animProgress = 0;
  let stop = false;
  let lastTime = null;
  
  const randomChar = () => {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  const startAnim = () => {
    stop = false;
    lastTime = null;
    animProgress = 0;
    text = content.split('').map(c => randomChar()).join("")
    requestAnimationFrame(anim)
  }

  const anim = (time) => {
    if (lastTime === null) lastTime = time;
    let dt = time - lastTime;
    if (animProgress/duration >= 1) cancelAnim();
    if (stop) return;
    animProgress += dt;
    text = content.split('').map(c => Math.random() < animProgress/duration ? c : randomChar()).join("");
    lastTime = time;
    requestAnimationFrame(anim)
  }

  const cancelAnim = () => {
    stop = true;
    lastTime = null;
    animProgress = 0;
    text = content;
  }
</script>

<span on:mouseover={startAnim} on:mouseout={cancelAnim}>{text}</span>
