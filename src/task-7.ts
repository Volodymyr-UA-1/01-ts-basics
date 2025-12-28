type T = string;

function getMessage(): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));
