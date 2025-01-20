import { ItemInputQuery } from "./Query";

export default interface ItemInputValue {
  labelName: string;
  type: string;
  id: string;
  name: ItemInputQuery;
  className: string;
  //value: string | File;
  value: any;
  //onChange: () => void;
  onChange: any;
  placeholder?: string;
}
