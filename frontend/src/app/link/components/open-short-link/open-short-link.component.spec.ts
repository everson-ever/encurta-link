import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenShortLinkComponent } from './open-short-link.component';

describe('OpenShortLinkComponent', () => {
  let component: OpenShortLinkComponent;
  let fixture: ComponentFixture<OpenShortLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenShortLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenShortLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
