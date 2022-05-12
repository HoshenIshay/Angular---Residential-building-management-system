import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTenantsComponent } from './edit-tenants.component';

describe('EditTenantsComponent', () => {
  let component: EditTenantsComponent;
  let fixture: ComponentFixture<EditTenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
