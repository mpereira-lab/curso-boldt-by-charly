import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriverv2Component } from './template-driverv2.component';

describe('TemplateDriverv2Component', () => {
  let component: TemplateDriverv2Component;
  let fixture: ComponentFixture<TemplateDriverv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDriverv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriverv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
