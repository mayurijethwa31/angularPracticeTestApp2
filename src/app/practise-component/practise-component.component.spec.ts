import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseComponentComponent } from './practise-component.component';

describe('PractiseComponentComponent', () => {
  let component: PractiseComponentComponent;
  let fixture: ComponentFixture<PractiseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
