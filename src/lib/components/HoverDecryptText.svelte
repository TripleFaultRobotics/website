<script>
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}|\\;:'\",.<>?/`~".split('')
  export let content = "";
  export let duration = 2000; // time until guarenteed complete (ms)
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
    text = content.split('').map((c, i) => {
      if (Math.random() < animProgress/duration || text[i] === c) {
        return c
      } else if (Math.random() < 0.10) {
        return randomChar();
      } else {
        return text[i]
      }
    }).join("");
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
