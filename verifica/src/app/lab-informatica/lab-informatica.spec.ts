import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabInformatica } from './lab-informatica';

describe('LabInformatica', () => {
  let component: LabInformatica;
  let fixture: ComponentFixture<LabInformatica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabInformatica],
    }).compileComponents();

    fixture = TestBed.createComponent(LabInformatica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
