import { Injectable } from '@angular/core';
import { SelectItem } from '../models/models';
import { BehaviorSubject } from 'rxjs';
import { MQTTService } from './mqtt.service';


@Injectable({
  providedIn: 'root'
})
export class ModelService {
  subjectLoaded = new BehaviorSubject(false);

  subDirectories : Array<SelectItem> = [{value : "", viewValue : "All"},{value : "Family", viewValue : "Family"}, {value : "Fantasy", viewValue : "Fantasy"},{value : "Abstract", viewValue : "Abstract"}];
  selectedSubDirectories = 0;

  constructor( private mqtt : MQTTService ) {
    console.log("ModelService::constructor");

    // when MQTT is connected subscribe to topics
    mqtt.subjectConnected.subscribe({
      next: (v) => {
        if( v == true)
        {
          console.log("ModelService MQTTService connected");
          // mqtt.client().on("message", (topic, message) => {
          //   console.log(`Received MQTT message`);
          //   console.log(` Topic   ${topic}`);
          //   console.log(` Message ${message}`);
          // })
          // mqtt.client().subscribe("frame/states");
        }
      }
    });
   
  }


  ngOnDestroy(): void {
    console.log("ModelService::ngOnDestroy");

  }
}
