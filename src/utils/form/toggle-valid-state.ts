export const toggleValidState = (isInvalid: boolean, invalidClass: string): string => {
  return isInvalid ? invalidClass : "";
}
