#include <ESP8266WiFi.h>
#include <ModbusIP_ESP8266.h>

IPAddress serverIP(192, 168, 0, 45); // Dirección IP del servidor Modbus
ModbusIP mb;

void setup() {
  Serial.begin(9600);

  // Conexión WiFi
  WiFi.begin("TeleCentro-9d10", "KZM4EWYJRTM5");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Inicia la conexión Modbus TCP
  mb.client(); // Configura el dispositivo como esclavo Modbus
  mb.addHreg(0); // Agrega un holding register con dirección 0
}

void loop() {
  if (mb.isConnected(serverIP)) {
    Serial.println("Conectado");
    uint16_t value = digitalRead(2);
    mb.writeHreg(serverIP,0, value); // Escribe el valor en el holding register 0
    mb.task(); // Envía los datos al servidor Modbus
  } else 
    mb.connect(serverIP); 
  
  delay(1000);
}
