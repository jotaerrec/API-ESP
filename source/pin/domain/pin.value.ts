import { v4 as uuid } from "uuid";
import { PinEntity } from "./pin.entity";

export class PinValue implements PinEntity {
  uuid: string;
  name: string;
  pinNumber: string;
  type: string;
  mode: string;
  value: string;
  constructor({
    name,
    pinNumber,
    type,
    mode,
    value,
  }: {
    name: string;
    pinNumber: string;
    type: string;
    mode: string;
    value?: string;
  }) {
    this.uuid = uuid();
    this.name = name;
    this.pinNumber = pinNumber;
    this.mode = mode;
    this.type = type;
    this.value = value || "";
  }
}
