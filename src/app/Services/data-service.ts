import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private HttpsClient:HttpClient){}

  GetStudentsData():Observable<any>{
    return this.HttpsClient.get('https://api.jsonblob.com/019caf20-fdcf-7aec-b3ec-92e5804bed2c')
  }
  
GetWeatherData():Observable<any>{
  return this.HttpsClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')

}
}
