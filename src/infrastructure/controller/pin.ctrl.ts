import { Request, Response } from "express";
import { PinUseCase } from "../../pin/aplication/pinUseCase";

export class PinController {
  constructor(private pinUseCase: PinUseCase) {}
  public async getCtrl({ params }: Request, res: Response) {
    const { uuid } = params;
    const pin = await this.pinUseCase.getDetailPin(uuid);
    res.send({ pin });
  }
  public async insertCtrl({ body }: Request, res: Response) {
    const pin = await this.pinUseCase.createPin(body);
    res.send({ pin });
  }
  public async getAllCtrl({ body }: Request, res: Response) {
    const pinAll = await this.pinUseCase.getAllPin();
  }
}
