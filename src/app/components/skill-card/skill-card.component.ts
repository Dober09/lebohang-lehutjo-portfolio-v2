import { Component } from "@angular/core";

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})

export class SkillCardComponent {
  

  skills =[
  {
    image:"assets/web-programming.png",
    title:"Web Development",
    description:`I build responsive and dynamic web applications using Angular and JavaScript.
     `
  },
    {
    image:"assets/mobile-development.png",
    title:"Mobile Development",
    description:`I develop cross-platform mobile applications with .NET MAUI, utilizing the MVVM pattern for clean architecture.
    `
  }
  ,
    {
    image:"assets/testing.png",
    title:"Software Testing",
    description:`I employ Test-Driven Development (TDD) to ensure high-quality, reliable code.
     `
  }
]

}
