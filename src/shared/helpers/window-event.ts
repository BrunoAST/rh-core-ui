export const dispatchWindowEvent = (eventName: string) => {
  window.dispatchEvent(new Event(eventName));
}
