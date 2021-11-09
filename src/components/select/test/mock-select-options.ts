import { SelectOptions } from "../types/select-options";
import faker from "faker";

export const selectOptions: SelectOptions[] = Array.from({ length: 10 }).map(() => {
  return {
    title: faker.random.word(),
    value: faker.random.word()
  };
});
