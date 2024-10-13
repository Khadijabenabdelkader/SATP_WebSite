import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmeubleAmenComponent } from './immeuble-amen.component';

describe('ImmeubleAmenComponent', () => {
  let component: ImmeubleAmenComponent;
  let fixture: ComponentFixture<ImmeubleAmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmeubleAmenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmeubleAmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
