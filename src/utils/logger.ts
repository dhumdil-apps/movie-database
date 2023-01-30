export function logger(error: Error) {
  const message = error.message + error.stack;

  console.warn(message);
}
