import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  imports: [CommonModule,  ReactiveFormsModule],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder,
    private apiService: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    this.submitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.apiService.postContact(this.contactForm.value).subscribe({
      next: (res: any) => {
        this.successMessage = res.message || 'Message sent successfully!';
        this.contactForm.reset();
        this.submitting = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Failed to send message. Please try again later.';
        this.submitting = false;
      }
    });
  }
}
