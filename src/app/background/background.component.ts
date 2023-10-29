import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  ngOnInit(): void {
      particlesJS.load('particles-js', './assets/particles.json', null);
  }
}
