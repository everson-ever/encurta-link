import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLinksComponent } from './table-links.component';

describe('TableLinksComponent', () => {
  let component: TableLinksComponent;
  let fixture: ComponentFixture<TableLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
