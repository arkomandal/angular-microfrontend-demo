export { App };
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->
    <!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
    <!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * -->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <!-- * * * * * * * * * Delete the template below * * * * * * * * * -->
    <!-- * * * * * * * to get started with your project! * * * * * * * -->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
    <h2>Child 1 App Loaded Remotely!</h2>
  `,
  styles: [``]
})
export class App {
  protected readonly title = signal('child1');
}
