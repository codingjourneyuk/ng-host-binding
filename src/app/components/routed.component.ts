import { Component } from '@angular/core';

@Component({
    selector: 'hb-routed',
    template: `
      <div class="content">
        <h1>This is the routed component</h1>
      </div>

      <footer>
        <a href="http://codingjourney.co.uk" rel="noopener" target="_blank">&copy;{{ date }} CodingJourney</a>
      </footer>
    `,
    styles: [
      'h1 { margin: 0; }', 
      'footer { height: 50px; background: #333; color: #fff; display: flex; flex-flow: row-reverse nowrap; align-items: center; padding: 0 20px; }',
      'footer a { color: #fff; text-decoration: none; font-size: 0.9rem; }',
      'footer a:hover { text-decoration: underline; }'
    ]
})
export class RoutedComponent {

    date: number = new Date().getFullYear();

    constructor() {}

}
