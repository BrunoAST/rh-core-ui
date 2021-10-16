import faker from "faker";
import { MenuItems } from "../../../types/menu-items";

export const menuItems: MenuItems[] = [
  { name: faker.random.word(), url: faker.internet.url(), isActive: false },
  { name: faker.random.word(), url: faker.internet.url(), isActive: false }
];
