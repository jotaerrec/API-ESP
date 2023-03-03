import { ModbusTCPRequest, ModbusTCPServer, server } from "jsmodbus";
import { WriteSingleRegisterRequestBody } from "jsmodbus/dist/request";
import { Server } from "net";

class ModbusServer {
  private netServer: Server;
  private serverM: ModbusTCPServer;

  constructor(port: number = 502) {
    this.netServer = new Server();
    this.serverM = new server.TCP(this.netServer);

    this.serverM.on("connection", (client) => {
      console.log("New Connection");
    });

    this.serverM.on("preWriteSingleRegister", (value: any) => {
      console.log("Write Single Register");
      console.log(
        "Original {register, value}: {",
        value.protocol,
        this.serverM.holding.readUint16BE(value.protocol),
        "}"
      );
    });

    this.serverM.on("writeMultipleCoils", function (value) {
      console.log("Write multiple coils - Existing: ", value);
    });

    this.serverM.on("postWriteMultipleCoils", function (value) {
      console.log("Write multiple coils - Complete: ", value);
    });

    this.serverM.on("postWriteMultipleRegisters", (value: any) => {
      console.log(
        "Write multiple registers - Complete: ",
        this.serverM.holding.readUInt16BE(0)
      );
    });

    console.log(`Modbus serverM listening on port ${port}`);
    this.netServer.listen(port);
  }

  public stop(): void {
    this.netServer.close();
    console.log("Modbus serverM stopped");
  }
}

export default ModbusServer;
