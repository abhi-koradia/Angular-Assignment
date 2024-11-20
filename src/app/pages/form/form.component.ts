import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormComponent {
  form: FormGroup;
  isSubmitted: boolean = false; // Track submission status
  feedbackMessage: string | null = null; // Store feedback message

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      this.feedbackMessage = 'Thank you! Your feedback has been submitted.';
      console.log('Form Submitted', this.form.value);

      // Reset form and maintain feedback message for 3 seconds
      this.form.reset();
      setTimeout(() => {
        this.feedbackMessage = null; // Hide the feedback message
        this.isSubmitted = false;
      }, 3000); // Display the message for 3 seconds
    } else {
      this.feedbackMessage = 'Please fill out all required fields correctly.';
    }
  }
}
