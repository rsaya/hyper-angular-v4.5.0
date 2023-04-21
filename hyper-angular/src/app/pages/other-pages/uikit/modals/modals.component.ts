import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// type
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';

@Component({
  selector: 'app-ui-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  modalHeaderColor: string = '';
  signupForm!: FormGroup;
  loginForm!: FormGroup;

  constructor (private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Base UI', path: '/' }, { label: 'Modals', path: '/', active: true }];

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  /**
   * opens modal
   * @param content modal content
   */
  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  /**
   * opens different size modals
   * @param content modal content
   * @param size size of modal
   */
  openModalWithSize(content: any, size: string): void {
    this.modalService.open(content, { size: size });
  }

  /**
   * opens scrollable modal for long content
   * @param content modal content
   */
  openScrollableModal(content: any): void {
    this.modalService.open(content, { scrollable: true });
  }

  /**
   * opens static backdrop modal
   * @param content modal content
   */
  openBackdropModal(content: any): void {
    this.modalService.open(content, { backdrop: 'static', keyboard: false });
  }

  /**
   * opens modal based Alerts
   * @param content modal content
   * @param variant color variant
   */
  openAlertModal(content: any, variant: string): void {
    this.modalService.open(content, { size: 'sm', modalDialogClass: 'modal-filled bg-' + variant });
  }

  /**
 * Opens the modal vertically centered
 * @param content modal content
 */
  openVerticallyCentered(content: any): void {
    this.modalService.open(content, { centered: true });
  }

  /**
 * Opens the modal with custom class
 * @param content modal content
 * @param position position of modal
 */
  openCustomPositionedModal(content: any, position: string): void {
    this.modalService.open(content, { modalDialogClass: 'modal-' + position });
  }

  /**
   * Opens the modal with colored header
   */
  openColoredHeaderModal(content: any, color: string): void {
    this.modalHeaderColor = color;
    this.modalService.open(content);
  }

  /**
  * Opens filled color modal 
  */
  openColoredModal(content: any, variant: string): void {
    this.modalService.open(content, { modalDialogClass: 'modal-filled bg-' + variant });
  }

  /**
   * opens stacked modal
   * @param model1 modal to be opened
   * @param model2 modal to be closed
   */
  openStackedModal(model1: any, model2?: any): void {
    this.modalService.open(model1);
    if (model2) { model2.close(); }
  }


}
