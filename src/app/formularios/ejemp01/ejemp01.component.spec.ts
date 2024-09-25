import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemp01Component } from './ejemp01.component';

describe('Ejemp01Component', () => {
  let component: Ejemp01Component;
  let fixture: ComponentFixture<Ejemp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ejemp01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
