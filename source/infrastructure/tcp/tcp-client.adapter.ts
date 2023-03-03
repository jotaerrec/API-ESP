import net from "net";

export class TcpClientAdapter {
  private client: net.Socket;

  constructor() {
    this.client = new net.Socket();
  }

  connect(host: string, port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.connect(port, host, () => {
        console.log("Conectado al servidor TCP");
        resolve();
      });

      this.client.on("error", (error) => {
        console.error(`Error de conexión: ${error}`);
        reject(error);
      });
    });
  }

  send(message: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.write(message);

      this.client.on("data", (data) => {
        console.log(`Recibido del servidor: ${data.toString()}`);
        resolve(data.toString());
        this.client.destroy(); // Termina la conexión después de recibir datos del servidor
      });

      this.client.on("error", (error) => {
        console.error(`Error al enviar mensaje: ${error}`);
        reject(error);
        this.client.destroy();
      });
    });
  }
}
