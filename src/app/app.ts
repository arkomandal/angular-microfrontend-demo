import { Component, signal, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgComponentOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-microfrontend-demo');

  // holds a dynamically loaded component from a remote
  remoteComp: Type<any> | null = null;

  async openChild(name: 'child1' | 'child2') {
    try {
      // Vite can't statically analyze a template string import; ignore the warning
      // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars
      // The remote name is constrained to 'child1' or 'child2', so this is safe.
      const m = await import(/* @vite-ignore */ `${name}/Component`);
      this.remoteComp = m.App;
    } catch (e) {
      console.error('failed to load remote', e);
    }
  }

  close() {
    this.remoteComp = null;
  }
}
