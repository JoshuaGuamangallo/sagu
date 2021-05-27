import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVetComponent } from './service-vet.component';

describe('ServiceVetComponent', () => {
  let component: ServiceVetComponent;
  let fixture: ComponentFixture<ServiceVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
