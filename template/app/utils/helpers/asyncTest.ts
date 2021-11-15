export const asyncTest = async (): Promise<string> => {
  return new Promise((resolve, rejected) => {
    const delaySecond = 2;
    const delayMs = Math.round(Math.random() * delaySecond * 1000);
    setTimeout(() => {
      if (delayMs < delaySecond * 800) {
        resolve('fulfilled');
      } else {
        rejected('rejected');
      }
    }, delayMs);
  });
};
