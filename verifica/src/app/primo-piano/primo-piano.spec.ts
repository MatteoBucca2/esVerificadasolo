import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimoPiano } from './primo-piano';

describe('PrimoPiano', () => {
  let component: PrimoPiano;
  let fixture: ComponentFixture<PrimoPiano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimoPiano],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimoPiano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
