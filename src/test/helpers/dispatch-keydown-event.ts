export const dispatchKeydownEvent = (key: string) => {
  document.body.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key }));
}
