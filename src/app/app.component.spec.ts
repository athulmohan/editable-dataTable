import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    let compElement: HTMLElement;
    compElement = fixture.debugElement.nativeElement;
    compElement.innerHTML = '<input type="text" id="product_1"><input type="text" id="website_1">';
    compElement.innerHTML += '<input type="text" id="price_1"><input type="=date" id="endDate_1">';
    compElement.innerHTML += '<input type="text" id="status_1">';

    component.myForm = new FormGroup({
      product_1: new FormControl('Test Product'),
      website_1: new FormControl('www.google.com'),
      price_1: new FormControl('10'),
      endDate_1: new FormControl('10/10/2000'),
      status_1: new FormControl('OPEN'),

      product_2: new FormControl('Test Product'),
      website_2: new FormControl('www.google.com'),
      price_2: new FormControl('10'),
      endDate_2: new FormControl('10/10/2000'),
      status_2: new FormControl('OPEN'),

      product_3: new FormControl('Test Product'),
      website_3: new FormControl('www.google.com'),
      price_3: new FormControl('10'),
      endDate_3: new FormControl('10/10/2000'),
      status_3: new FormControl('OPEN'),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call save with isEdit true', () => {
    spyOn(component, 'validationCheck').and.callThrough();
    const param = { isEdit: true };
    const id = 1;
    component.save(id, true, param);
    expect(component.validationCheck).toHaveBeenCalled();
  });

  it('should call save with isEdit false', () => {
    const param = { isEdit: false };
    component.save(1, false, param);
  });

  it('should call validationCheck', () => {
    spyOn(component, 'validationCheck').and.callThrough();
    component.myForm.setValue({
      product_1: '',
      website_1: '',
      price_1: '',
      endDate_1: '',
      status_1: 'OPEN',
      product_2: '',
      website_2: '',
      price_2: '',
      endDate_2: '',
      status_2: 'OPEN',
      product_3: '',
      website_3: '',
      price_3: '',
      endDate_3: '',
      status_3: 'OPEN',
    });
    const id = 1;
    component.validationCheck(id);
    expect(component.validationCheck).toHaveBeenCalled();
  });

  it('should call validationCheck', () => {
    spyOn(component, 'validationCheck').and.callThrough();
    component.myForm.setValue({
      product_1: 'abcdefghijklmnopqrstuvwxyz',
      website_1: 'www.',
      price_1: '10,000.',
      endDate_1: '12/13/92',
      status_1: 'OPEN',
      product_2: 'abcdefghijklmnopqrstuvwxyz',
      website_2: 'www.',
      price_2: '10,000.',
      endDate_2: '12/13/92',
      status_2: 'OPEN',
      product_3: 'abcdefghijklmnopqrstuvwxyz',
      website_3: 'www.',
      price_3: '10,000.',
      endDate_3: '12/13/92',
      status_3: 'OPEN',
    });
    const id = 1;
    component.validationCheck(id);
    expect(component.validationCheck).toHaveBeenCalled();
  });

  it('should call validationCheck', () => {
    spyOn(component, 'validationCheck').and.callThrough();
    component.myForm.setValue({
      product_1: 'test value',
      website_1: 'https://www.google.com',
      price_1: '10',
      endDate_1: '2000-12-12',
      status_1: 'OPEN',
      product_2: 'test value',
      website_2: 'https://www.google.com',
      price_2: '10',
      endDate_2: '2000-12-12',
      status_2: 'OPEN',
      product_3: 'test value',
      website_3: 'https://www.google.com',
      price_3: '10',
      endDate_3: '2000-12-12',
      status_3: 'OPEN',
    });
    const id = 1;
    component.validationCheck(id);
    expect(component.validationCheck).toHaveBeenCalled();
  });
});
