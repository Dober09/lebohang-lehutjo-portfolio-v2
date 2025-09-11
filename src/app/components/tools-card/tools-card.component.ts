import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-card',
  imports: [],
  templateUrl: './tools-card.component.html',
  styleUrl: './tools-card.component.css'
})
export class ToolsCardComponent {
  tools = [
    {
      name:"Angular",
      image:"assets/angularjs.png",
      description:"For building dynamic and scalable single-page web applications."
    },
     {
      name:"C# ASP.NET Core",
      image:"assets/hashtag.png",
      description:"For building secure, high-performance RESTful APIs and web services"
    },
    {
      name:"Python",
      image:"assets/python.png",
      description:"For building lightweight web backends and prototyping"
    },
     {
      name:"C# .NET MAUI",
      image:"assets/hashtag.png",
      description:"For creating native cross-platform mobile apps for iOS and Android from a single codebase."
    },
  ]

}
