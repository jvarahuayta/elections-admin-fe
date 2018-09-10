import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedContentComponent } from './role-based-content.component';

describe('RoleBasedContentComponent', () => {
  let component: RoleBasedContentComponent;
  let fixture: ComponentFixture<RoleBasedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBasedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBasedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
