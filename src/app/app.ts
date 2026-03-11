import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-microfrontend-demo');

  // holds the sanitized URL for the iframe container
  iframeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  openChild(url: string) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.iframeUrl = null;
  }
}
