import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppComponentComponent } from './main-app-component.component';

describe('MainAppComponentComponent', () => {
  let component: MainAppComponentComponent;
  let fixture: ComponentFixture<MainAppComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
