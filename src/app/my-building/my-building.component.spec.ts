import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBuildingComponent } from './my-building.component';

describe('MyBuildingComponent', () => {
  let component: MyBuildingComponent;
  let fixture: ComponentFixture<MyBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
