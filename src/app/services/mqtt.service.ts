import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import * as mqtt from "mqtt"

@Injectable({
    providedIn: 'root'
  })

export class MQTTService {
    host = "photoframe.cod.lan";
    
    subjectConnected = new BehaviorSubject(false);
    //private mqttCli : mqtt.MqttClient;

    constructor()
    {
        //this.mqttCli = mqtt.connect("mqtt://"+this.host);
        // this.mqttCli.on("connect", (connak) => {
        //     console.log(`MQTT client connected to ${this.host}`);
        //     this.subjectConnected.next(true);
        // })

        // this.mqttCli.on("error", (erro) =>{
        //     console.log(`MQTT client UNABLE to connected to ${this.host}`);
        // })
    }

    // client() : mqtt.MqttClient
    // {
    //     return this.mqttCli;
    // }
}