import { PinEntity } from "../../pin/domain/pin.entity";
import { PinRepository } from "../../pin/domain/pin.repository";
import PinModel from "../model/pin.schema";

export class MongoRepository implements PinRepository {
  async findPinById(uuid: string): Promise<PinEntity | null> {
    const pin = await PinModel.findOne({ uuid });
    return pin;
  }
  async createPin(PinIn: PinEntity): Promise<PinEntity | null> {
    const pin = await PinModel.create(PinIn);
    return pin;
  }
  async listPin(): Promise<PinEntity[] | null> {
    const pin = await PinModel.find();
    return pin;
  }
}
