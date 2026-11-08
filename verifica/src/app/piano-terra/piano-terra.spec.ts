import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PianoTerra } from './piano-terra';

describe('PianoTerra', () => {
  let component: PianoTerra;
  let fixture: ComponentFixture<PianoTerra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianoTerra],
    }).compileComponents();

    fixture = TestBed.createComponent(PianoTerra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
