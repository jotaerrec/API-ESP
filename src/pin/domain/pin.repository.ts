import { PinEntity } from "./pin.entity";

export interface PinRepository {
  findPinById(uuid: string): Promise<PinEntity | null>;
  createPin( name:string, pinNumber:string, type:string, mode:string, value:string ): Promise<PinEntity | null>;
  findPinAll(): Promise<PinEntity[] || null>;
  listPin(): Promise<PinEntity[] | null>;
}
