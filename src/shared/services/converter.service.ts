import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IExchangeRatesQuery} from "../interfaces/interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  public apiUrl = 'https://free.currconv.com/api/v7/convert'
  public apiKey = '628ae22e24e06ca0cd00';
 // '54c2be3df7694299d28a'
  constructor(private httpClient: HttpClient) { }

  public getCurrentRate(data: IExchangeRatesQuery): Observable<any>
  {
    return this.httpClient.get<any>(`${this.apiUrl}?q=${data.to}_${data.from}&compact=ultra&apiKey=${this.apiKey}`);
  }

}
