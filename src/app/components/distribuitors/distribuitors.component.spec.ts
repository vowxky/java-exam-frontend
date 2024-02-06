import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuitorsComponent } from './distribuitors.component';

describe('DistribuitorsComponent', () => {
  let component: DistribuitorsComponent;
  let fixture: ComponentFixture<DistribuitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribuitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
