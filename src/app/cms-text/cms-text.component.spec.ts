import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsTextComponent } from './cms-text.component';

describe('CmsTextComponent', () => {
  let component: CmsTextComponent;
  let fixture: ComponentFixture<CmsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
