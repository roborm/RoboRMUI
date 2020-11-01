import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css'] 
})
export class InvestmentComponent implements OnInit {

  investment: any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    let response= this.http.get("http://localhost:8080/api/investment/investment");
    response.subscribe((data)=>this.investment=data);

  }

}
