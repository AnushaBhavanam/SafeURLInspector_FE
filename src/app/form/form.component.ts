import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputParameter: string = '';
  joutput: any = null
  ssl_pull_error: string = ""
  constructor(private apiService: ApiService) {}

  submitForm() {
    const requestData = {
      uuid: '65162fb6-21de-4c13-9858-4ba2509e4439',
      text: this.inputParameter,
    };

    this.apiService.postData(requestData).subscribe(
      (response) => {
        this.joutput = response;
        if(this.joutput.ssl_cert.SSLPullError){
          this.ssl_pull_error = this.joutput.ssl_cert.SSLPullError
        }
        else{
          this.ssl_pull_error = "No Error"
        }
        // You can now work with the response data here.
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }

}
