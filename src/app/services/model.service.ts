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

  subDirectories: Array<SelectItem> = [{ value: "", viewValue: "All" }, { value: "Family", viewValue: "Family" }, { value: "Fantasy", viewValue: "Fantasy" }, { value: "Abstract", viewValue: "Abstract" }];
  selectedSubDirectories = 0;

  constructor(private mqtt: MqttService) {
    console.log("ModelService::constructor");

    this.mqtt.state.subscribe({
      next: (s) => {
        console.log(`mqtt state changed ${s}`);
        if( s == MqttConnectionState.CONNECTED)
        {}
      }
    });

    this.mqtt.observe("frame/states/#").subscribe((msg: IMqttMessage) => {
      console.log(`MQTT message received`);
      console.log(` Topic   ${msg.topic}`);
      console.log(` Payload ${msg.payload}`);
      
      if (msg.topic.endsWith("subdirectories")) {
        let subs = JSON.parse(msg.payload.toString());
        console.log(` subs ${subs[0]}`);
      }
    });
  }


  ngOnDestroy(): void {
    console.log("ModelService::ngOnDestroy");

  }
}
