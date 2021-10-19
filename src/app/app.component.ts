import { Component } from '@angular/core';
import {ConverterService} from "../shared/services/converter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyconverter';
  public value:any = 0;

  public from: any = 'UAH';
  public to: any = 'USD';

  public inputValue = 1;
  public result:number = 26.25;

  constructor(private converterService: ConverterService) { }

  public convert()
  {
    if(this.inputValue)
    {
      this.converterService.getCurrentRate({from: this.from, to: this.to}).subscribe((res: any) =>
      {
        // @ts-ignore
        let value:number = Object.values(res)[0] * this.inputValue;
        this.result = parseFloat(value.toFixed(4)); 
        console.log(this.result);
      });
    }


  }


  public getValue()
  {
    this.converterService.getCurrentRate({from: 'UAH', to: 'USD'}).subscribe((res: any) =>
    {
      // @ts-ignore
      let value = Object.values(res)[0] * this.inputValue;
      this.result = parseFloat(value.toFixed(4));

      console.log(this.result);
      // console.log(10 * this.value)
      // console.log(res.key + " " + res.value);
    });
  }


}
