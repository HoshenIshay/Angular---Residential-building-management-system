import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMessagesComponent } from './public-messages.component';

describe('PublicMessagesComponent', () => {
  let component: PublicMessagesComponent;
  let fixture: ComponentFixture<PublicMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
