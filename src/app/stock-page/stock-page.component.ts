import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {
  spirit: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000')
    .subscribe(data => {
      console.log(data);
      this.spirit = data;
    });
  }

}
