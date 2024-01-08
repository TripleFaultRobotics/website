import type Lenis from "@studio-freight/lenis";

export let lenis : Lenis | null = null;
export const setLenis = (lns: Lenis) => lenis = lns;