import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
    httpClient: any;

  constructor(private http:HttpClient) { }


upload(obj : any){
//   this.http.post('http://localhost:3000/images' , obj ).subscribe()
}


deleteFunc (file : any){
}

}
