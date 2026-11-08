import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Intestazione } from './intestazione';

describe('Intestazione', () => {
  let component: Intestazione;
  let fixture: ComponentFixture<Intestazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intestazione],
    }).compileComponents();

    fixture = TestBed.createComponent(Intestazione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
