import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-component',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
    @Input() link: string;
    @Input() icon: string;
}
