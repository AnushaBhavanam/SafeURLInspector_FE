import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputParameter: string = '';
  output: string = '';
  isParameterPassed: boolean = false;
  otherParameters: string = '';

  submitForm() {
    this.isParameterPassed = this.inputParameter.trim() !== '';
    this.otherParameters = this.inputParameter;

    // Generate the report summary in table format.
    this.generateReportSummary();
  }

  generateReportSummary() {
    // Example report generation logic in table format (customize as needed).
    this.output = `
      <table class="table">
      <tbody>
        <tr>
          <td width="260">
          <span class="font-bold"> Parameter </span>
          </td>
          <td width="260">
          <span class="font-bold">${this.inputParameter}</span>
          </td>
        </tr>
        <tr>
          <td width="260">
          <span class="font-bold"> Parameter </span>
          </td>
          <td width="260">
          <span class="font-bold">${this.isParameterPassed ? 'Yes' : 'No'}</span>
          </td>
        </tr>
        <tr>
          <td width="260">
          <span class="font-bold"> Parameter </span>
          </td>
          <td width="260">
          <span class="font-bold">${this.otherParameters}</span>
          </td>
        </tr>
        </tbody>
      </table>
    `;
  }
}
