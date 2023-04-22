import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <kendo-stepper
            [steps]="steps"
            stepType="full"
            [(currentStep)]="current"
            [linear]="false"
            [style.width.px]="570">
        </kendo-stepper>
    `,
})
export class AppComponent {
  public current = 1;

  public steps = [
    { label: 'Personal Info', icon: 'user' },
    { label: 'Education', icon: 'book' },
    { label: 'Attachments', icon: 'paperclip', optional: true },
    { label: 'Preview', icon: 'eye' },
    { label: 'Submit', icon: 'file-add' },
  ];

  constructor() {
    setInterval(() => this.steps.push({ label: 'test', icon: 'book' }), 5000);
  }
}
