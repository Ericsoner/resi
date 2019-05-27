import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistasPage } from './revistas.page';

describe('RevistasPage', () => {
  let component: RevistasPage;
  let fixture: ComponentFixture<RevistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
