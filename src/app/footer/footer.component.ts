import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactLinks: any = [
    {
      title: 'MAIL',
      info: 'alejofschlegel@gmail.com',
      src: 'mailto:alejofschlegel@gmail.com'
    },
  ];

  socialLinks: any = [
    {
      title: 'GITHUB',
      info: '@alejoschlegel',
      src: 'https://github.com/alejoschlegel'
    },
    {
      title: 'LINKEDIN',
      info: '@alejoschlegel',
      src: 'https://www.linkedin.com/in/alejoschlegel/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
