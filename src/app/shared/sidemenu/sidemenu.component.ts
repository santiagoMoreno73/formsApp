import { Component } from '@angular/core';

interface menuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: menuItem[] = [
    {
      text: 'Basics',
      route: './template/basics',
    },
    {
      text: 'Dynamics',
      route: './template/dynamics',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];

  reactiveMenu: menuItem[] = [
    {
      text: 'Basics',
      route: './reactive/basics',
    },
    {
      text: 'Dynamics',
      route: './reactive/dynamics',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];
}
