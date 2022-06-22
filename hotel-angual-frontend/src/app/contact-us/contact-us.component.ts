import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactUsService } from './services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    creditor: new FormControl(''),
    note: new FormControl(''),
  });

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
  }

  submitRoom() {
    this.contactUsService.sending(this.contactUsForm.value).subscribe(data => {
      if (data[0].status == 'ok') {
        alert(data[1].msg);
      } else {
        alert(data[1].msg);
      }
    }, error => alert('לא הצליחה לשלוח הודעה!!'));
  }

}
