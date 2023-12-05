import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Add logic to handle form submission here
  }

  ngOnInit(): void {
  }

}
