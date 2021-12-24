import { Injectable } from '@angular/core';
import { SelectItem } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  subDirectories : Array<SelectItem> = [{value : "", viewValue : "All"},{value : "Family", viewValue : "Family"}, {value : "Fantasy", viewValue : "Fantasy"},{value : "Abstract", viewValue : "Abstract"}];
  selectedSubDirectories = 0;

  constructor() { }
}
