import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.scss']
})
export class SocialMediaButtonComponent implements OnInit {

  @Input() link: string = '';
  @Input() icon: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
