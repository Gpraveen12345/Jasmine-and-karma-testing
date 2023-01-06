import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should increase the count by one',()=>{
    let component=new AppComponent();
    let oldCount=component.count;
    component.addCount();
    expect(component.count).toBe(oldCount+1);
  })

  it('should decrease the count by one',()=>{
    let component=new AppComponent();
    let oldCount=component.count;
    component.reduceCount();
    expect(component.count).toBe(oldCount-1);
  })

});
