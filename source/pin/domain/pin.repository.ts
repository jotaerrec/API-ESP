import { PinEntity } from "./pin.entity";

export interface PinRepository {
  findPinById(uuid: string): Promise<PinEntity | null>;
  createPin({ name, pinNumber, type, mode, value }): Promise<PinEntity | null>;
  listPin(): Promise<PinEntity[] | null>;
}
