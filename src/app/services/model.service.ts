import { Injectable } from '@angular/core';
import { SelectItem } from '../models/models';
import { BehaviorSubject } from 'rxjs';
import { AnimationQueryMetadata } from '@angular/animations';
import { IMqttMessage, MqttService, MqttConnectionState } from 'ngx-mqtt';
import { JsonpClientBackend } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModelService {
  subjectLoaded = new BehaviorSubject(false);

  subDirectories: Array<SelectItem> = [{ value: "", viewValue: "All" }];
  selectedSubDirectory = "";
  paused = false;

  constructor(private mqtt: MqttService) {
    console.log("ModelService::constructor");

    // this.mqtt.state.subscribe({
    //   next: (s) => {
    //     console.log(`mqtt state changed ${s}`);
    //     if( s == MqttConnectionState.CONNECTED)
    //     {
    //       console.log(`mqtt state changed to CONNECTED`);
    //     }
    //     else if(s == MqttConnectionState.CONNECTING)
    //     {
    //       console.log(`mqtt state changed to CONNECTING`);
    //     }else{
    //       console.log(`mqtt state changed to CLOSED`);
    //     }
    //   }
    // });

    this.mqtt.observe("frame/states/#").subscribe((msg: IMqttMessage) => {
      // console.log(`MQTT message received`);
      // console.log(` Topic   ${msg.topic}`);
      // console.log(` Payload ${msg.payload}`);
      
      if (msg.topic.endsWith("subdirectories")) {
        let subs = JSON.parse(msg.payload.toString());
        subs.forEach( (el : string) => {
          this.subDirectories.push({value : el, viewValue : el})
        });
      }
      else if(msg.topic.endsWith("subdirectory"))
      {
        this.selectedSubDirectory = msg.payload.toString();
        console.log(` Subdirectory ${this.selectedSubDirectory}`);
      }
      else if(msg.topic.endsWith("paused"))
      { 
        if( msg.payload.toString() == "False")
        {
          this.paused = false;
        } else {
          this.paused = true;
        } 
        console.log(` Paused ${this.paused}`);
      }
    });
  }

  setSubDirectory( sub : string)
  {
    this.mqtt.unsafePublish("frame/subdirectory", sub);
  }

  ngOnDestroy(): void {
    console.log("ModelService::ngOnDestroy");

  }
}
