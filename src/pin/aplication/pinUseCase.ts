import { PinRepository } from "../domain/pin.repository";
import { PinValue } from "../domain/pin.value";

export class PinUseCase {
  constructor(private readonly pinRepository: PinRepository) {
    this.createPin = this.createPin.bind(this);
    this.getDetailPin = this.getDetailPin.bind(this);
  }

  public async createPin({
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
    const pinValue = new PinValue({ name, pinNumber, type, mode, value });
    const pinCreated = await this.pinRepository.createPin(pinValue);
    return pinCreated;
  }

  public async getDetailPin(uuid: string) {
    const pin = await this.pinRepository.findPinById(uuid);
    return pin;
  }

  public async getAllPin(){
    const pinAll = await this.pinRepository.findPinAlll();
  }
}
