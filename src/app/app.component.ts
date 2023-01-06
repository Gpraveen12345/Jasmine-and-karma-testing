import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jasminkarma';
  public count:number=0;

  public addCount(){
    this.count++;
  }
  public reduceCount(){
    this.count--;
  }
}
