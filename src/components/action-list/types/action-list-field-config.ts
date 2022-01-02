export type ActionListFieldConfig = {
  valueToBeShowed: (value: any) => any;
  style?: { [key: string]: string };
  itemClicked?: (value: any) => any;
};
