import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// type
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';

@Component({
  selector: 'app-forms-form-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  activeWizard1: number = 1;
  activeWizard2: number = 1;
  activeWizard3: number = 1;
  activeWizard4: number = 1;

  basicWizardForm!: FormGroup;

  btnWizardForm !: FormGroup;

  progressWizardForm !: FormGroup;

  accountForm!: FormGroup;

  profileForm!: FormGroup;

  validationWizardForm!: FormGroup;


  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Forms', path: '/' }, { label: 'Forms Wizard', path: '/', active: true }];

    // initialize forms
    this.basicWizardForm = this.fb.group({
      account: this.fb.group({
        userName: ['hyper'],
        password: ['123456'],
        rePassword: ['123456']
      }),
      profile: this.fb.group({
        firstName: ['Francis'],
        lastName: ['Brinkman'],
        email: ['cory1979@hotmail.com', Validators.email]
      }),
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.btnWizardForm = this.fb.group({
      account: this.fb.group({
        userName: ['hyper'],
        password: ['123456'],
        rePassword: ['123456']
      }),
      profile: this.fb.group({
        firstName: ['Francis'],
        lastName: ['Brinkman'],
        email: ['cory1979@hotmail.com', Validators.email]
      }),
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.progressWizardForm = this.fb.group({
      account: this.fb.group({
        userName: ['hyper'],
        password: ['123456'],
        rePassword: ['123456']
      }),
      profile: this.fb.group({
        firstName: ['Francis'],
        lastName: ['Brinkman'],
        email: ['cory1979@hotmail.com', Validators.email]
      }),
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.accountForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    })

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

    this.validationWizardForm = this.fb.group({
      acceptTerms: [false, Validators.requiredTrue]
    })

  }

  // convenience getter for easy access to form fields
  get form1() { return this.accountForm.controls; }
  get form2() { return this.profileForm.controls; }
  get form3() { return this.validationWizardForm.controls; }

  // goes to next wizard
  gotoNext(): void {
    if (this.accountForm.valid) {
      if (this.profileForm.valid) {
        this.activeWizard4 = 3;
      }
      else {
        this.activeWizard4 = 2;
      }
    }

  }

}
