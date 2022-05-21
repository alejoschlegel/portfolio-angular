import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: any = [
    {
      src: 'https://www.youtube.com/alejoschlegel',
      name: 'Youtube'
    },
    {
      src: 'https://github.com/alejoschlegel',
      name: 'Github'
    },
    {
      src: 'mailto:alejofschlegel@gmail.com',
      name: 'Contacto'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleMenu() {
    let rightbar = document.querySelector('.rightbar');
    if(rightbar?.classList.toggle("active")) {
      rightbar.classList.add("active");
    }else {
      rightbar?.classList.remove('active');
    }
  }

}
