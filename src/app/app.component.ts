import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  NativeDateAdapter
} from '@angular/material/core';
import { DatePipe, formatDate } from '@angular/common';

const STATUS = [
  'OPEN',
  'ACCEPTED',
  'REJECTED'
]

const USER_DATA = [
  {
    id: 1,
    product: 'Toyota',
    website: 'https://www.toyota.com',
    price: '10,000,00',
    endDate: '2022-10-19',
    status: 'OPEN'
  },
  {
    id: 2,
    product: 'Honda',
    website: 'https://www.honda.com',
    price: '20,000,00',
    endDate: '2023-12-30',
    status: 'ACCEPTED'
  },
  {
    id: 3,
    product: 'BWM',
    website: 'https://www.BWM.com',
    price: '40,000,00',
    endDate: '2025-11-23',
    status: 'REJECTED'
  },
];

const COLUMNS_SCHEMA = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
    id: 'id'
  },
  {
    key: 'product',
    type: 'text',
    label: 'Product',
    id: 'id'
  },
  {
    key: 'website',
    type: 'text',
    label: 'Website',
    id: 'id'
  },
  {
    key: 'price',
    type: 'number',
    label: 'Price',
    id: 'id'
  },
  {
    key: 'endDate',
    type: 'date',
    label: 'Ending At',
    id: 'id'
  },
  {
    key: 'status',
    type: 'select',
    label: 'Status',
    id: 'id'
  },
];

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    return formatDate(date,'dd/MM/yyyy', this.locale);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  statusData = STATUS;
  myForm: any;

  constructor(private fb: FormBuilder, private el: ElementRef) {}
  
  ngOnInit() {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      product_1: [
        '', 
        [
          Validators.required,
          Validators.maxLength(20),
        ]
      ],
      product_2: [
        '', 
        [
          Validators.required,
          Validators.maxLength(20),
        ]
      ],
      product_3: [
        '', 
        [
          Validators.required,
          Validators.maxLength(20),
        ]
      ],
      website_1: [
        '',
        [
          Validators.required,
          Validators.pattern(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/)
        ]
      ],
      website_2: [
        '',
        [
          Validators.required,
          Validators.pattern(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/)
        ]
      ],
      website_3: [
        '',
        [
          Validators.required,
          Validators.pattern(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/)
        ]
      ],
      price_1: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^0]{1})([0-9])*|(0{1}))(\,\d{2}){0,1}€?$/)
        ]
      ],
      price_2: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^0]{1})([0-9])*|(0{1}))(\,\d{2}){0,1}€?$/)
        ]
      ],
      price_3: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^0]{1})([0-9])*|(0{1}))(\,\d{2}){0,1}€?$/)
        ]
      ],
      endDate_1: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
          // Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
        ]
      ],
      endDate_2: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
          // Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
        ]
      ],
      endDate_3: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
          // Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
        ]
      ],
      status_1: ['', [Validators.required]],
      status_2: ['', [Validators.required]],
      status_3: ['', [Validators.required]]
    });
  }

  save(id: any=1, isEdit=false, element: any = {}) {
    if(isEdit) {
      const newDate = new Date(element.endDate);
      const mnthVal = ("0" + (newDate.getMonth() + 1)).slice(-2);
      const dayVal = ("0" + newDate.getDate()).slice(-2);

      const formattedDate = [newDate.getFullYear(), mnthVal, dayVal].join("-");
      this.myForm.get('endDate_'+id).patchValue(formattedDate);

      const errorChk = this.validationCheck(id);
      if(!errorChk) {
        element.isEdit = !element.isEdit;
        /******** here need to call api to save the record with below payload ********/
        /* const payload = {
          product: this.myForm.get('product_'+id).value,
          website: this.myForm.get('website_'+id).value,
          price: this.myForm.get('price_'+id).value,
          endDate: this.myForm.get('endDate_'+id).value,
          status: this.myForm.get('status_'+id).value,
        } */
      }
    }
  }
  validationCheck(id: any) {
    let changedField;

    const product = this.myForm.get('product_'+id).errors;
    const website = this.myForm.get('website_'+id).errors;
    const price = this.myForm.get('price_'+id).errors;
    const endDate = this.myForm.get('endDate_'+id).errors;
    const status = this.myForm.get('status_'+id).errors;
    let errorPd = false;
    let errorWs = false;
    let errorPr = false;
    let errorEd = false;
    let errorSt = false;
    
    // For product name
    if(product && product.required) {
      errorPd = true;
      const elemExist = this.el.nativeElement.querySelector('.product_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#product_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="product_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 22px; float: left; text-align: center;">'+
        'Field is required</span>',
      );
    } else if(product && product.maxlength) {
      errorPd = true;
      const elemExist = this.el.nativeElement.querySelector('.product_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#product_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="product_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 22px; float: left; text-align: center;">'+
        'Max length 20 character</span>',
      );
    } else {
      errorPd = false;
      const elemExist = this.el.nativeElement.querySelector('.product_' + id);
      if(elemExist) {
        elemExist.remove();
      }
    }
    
    // For website
    if(website && website.required) {
      errorWs = true;
      const elemExist = this.el.nativeElement.querySelector('.website_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#website_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="website_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 22px; float: left; text-align: center;">'+
        'Required</span>',
      );
    } else if(website && website.pattern) {
      errorWs = true;
      const elemExist = this.el.nativeElement.querySelector('.website_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#website_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="website_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 22px; float: left; text-align: center;">'+
        'Invalid URL format</span>',
      );
    } else {
      errorWs = false;
      const elemExist = this.el.nativeElement.querySelector('.website_' + id);
      if(elemExist) {
        elemExist.remove();
      }
    }

    // For Price
    if(price && price.required) {
      errorPr = true;
      const elemExist = this.el.nativeElement.querySelector('.price_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#price_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="price_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 25px; float: left; text-align: center;">'+
        'Required</span>',
      );
    } else if(price && price.pattern) {
      errorPr = true;
      const elemExist = this.el.nativeElement.querySelector('.price_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#price_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="price_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 25px; float: left; text-align: center;">'+
        'Invalid Price</span>',
      );
    } else {
      errorPr = false;
      const elemExist = this.el.nativeElement.querySelector('.price_' + id);
      if(elemExist) {
        elemExist.remove();
      }
    }

    // For End Date
    if(endDate && endDate.required) {
      errorEd = true;
      const elemExist = this.el.nativeElement.querySelector('.endDate_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#endDate_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="endDate_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 25px; float: left; text-align: center;">'+
        'Required</span>',
      );
    } else if(endDate && endDate.pattern) {
      errorEd = true;
      const elemExist = this.el.nativeElement.querySelector('.endDate_' + id);
      if(elemExist) {
        elemExist.remove();
      }
      changedField = this.el.nativeElement.querySelector('#endDate_' + id);
      changedField.insertAdjacentHTML(
        'afterend',
        '<span class="endDate_' + id+'"'+
        'style="color: #e70022; position: relative; width: 100%; top: 25px; float: left; text-align: center;">'+
        'Invalid Date Format</span>',
      );
    } else {
      errorEd = false;
      const elemExist = this.el.nativeElement.querySelector('.endDate_' + id);
      if(elemExist) {
        elemExist.remove();
      }
    }

    return errorPd || errorWs || errorPr || errorEd || errorSt;
  }
}
