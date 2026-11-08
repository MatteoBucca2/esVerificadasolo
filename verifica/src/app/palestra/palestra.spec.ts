import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Palestra } from './palestra';

describe('Palestra', () => {
  let component: Palestra;
  let fixture: ComponentFixture<Palestra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Palestra],
    }).compileComponents();

    fixture = TestBed.createComponent(Palestra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
