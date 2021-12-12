import faker from "faker";
import { MenuItems } from "../../../../../shared/types/menu-items";

export const menuItems: MenuItems[] = [
  { name: faker.random.word(), url: faker.internet.url() },
  { name: faker.random.word(), url: faker.internet.url() }
];
