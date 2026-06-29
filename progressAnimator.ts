interface ProgressAnimatorOptions {
  onProgress: (pct: number) => void;
  tickMs?: number;      // how fast display chases real progress (default: 30ms)
  creepMs?: number;     // how slow to inch 90→99 while server processes (default: 600ms)
  creepStart?: number;  // when creep kicks in (default: 90)
}

interface ProgressAnimator {
  setTarget: (pct: number) => void; // called with real upload %
  complete: () => void;             // call on success → snaps to 100
  destroy: () => void;              // call on error → cleans up
}

export function createProgressAnimator({
  onProgress,
  tickMs = 30,
  creepMs = 600,
  creepStart = 90,
}: ProgressAnimatorOptions): ProgressAnimator {
  let display = 0;
  let target = 0;
  let creepStarted = false;
  let creepInterval: ReturnType<typeof setInterval> | null = null;

  // Tick display toward target 1% at a time
  const animInterval = setInterval(() => {
    if (display < target) {
      display += 1;
      onProgress(display);
    }
  }, tickMs);

  const startCreep = () => {
    if (creepStarted) return;
    creepStarted = true;
    creepInterval = setInterval(() => {
      if (target < 99) target += 1;
    }, creepMs);
  };

  const destroy = () => {
    clearInterval(animInterval);
    if (creepInterval) clearInterval(creepInterval);
  };

  return {
    setTarget: (pct: number) => {
      target = pct;
      if (pct >= creepStart) startCreep(); // start creeping once transfer done
    },
    complete: () => {
      destroy();
      onProgress(100);
    },
    destroy,
  };
}
