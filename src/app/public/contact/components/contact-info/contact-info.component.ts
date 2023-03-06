import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  @Input() icon: string = "";
  @Input() link: string = "";
  @Input() text: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
