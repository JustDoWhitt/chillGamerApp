// app/shared/services/content.service.ts



import { Injectable } from '@angular/core';



@Injectable()
export class ContentService {

  pages: Object = {

    'home': {title: 'Home', subtitle: 'Welcome!', content: "You've arrived to my website. TheChillGamers is a work in progress that currently serves as an about me. I will continue to add further functionality and content regarding other projects that I work on.", image: 'assets/background.png'},

    'about': {title: 'About', subtitle: 'About Me', content: "I'm just a guy with a passion for technology and programming. I love to learn new programming languages which is why I started this website as a way to become familiar with the Angular framework. I'm eager and determined to learn and grow as a developer.", image: 'assets/background.png'},

    'contact': {title: 'Contact', subtitle: 'Contact Me', content: 'justdoinwhitt@gmail.com', content2: 'Phone number is available upon request.', content3: 'LinkedIn', content4: 'Github', image: 'assets/background.png'}

  };

}
