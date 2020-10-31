import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
