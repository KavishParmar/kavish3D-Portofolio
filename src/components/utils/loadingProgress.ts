export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  const interval = window.setInterval(() => {
    if (percent < 96) {
      percent += Math.max(1, Math.round(Math.random() * 8));
      setLoading(percent);
    } else {
      window.clearInterval(interval);
      const finish = window.setInterval(() => {
        percent += 1;
        setLoading(percent);
        if (percent >= 100) {
          window.clearInterval(finish);
        }
      }, 24);
    }
  }, 90);

  function clear() {
    window.clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      window.clearInterval(interval);
      const finish = window.setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
        } else {
          window.clearInterval(finish);
          resolve(percent);
        }
      }, 12);
    });
  }

  return { loaded, percent, clear };
};

