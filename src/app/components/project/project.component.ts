import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

   projects=[
    {
      name:"Morabaraba Game",
      video:"assets/video/morabaraba.webm",
      description:`A faithful digital implementation of the traditional African two-player strategy board game.
                 This project served as a challenge to explore game development fundamentals
                 , including turn-based logic, win-state validation.`,
      icon:"assets/angularjs.png",
      languages:[
        "HTML",
        "Typescript"
      ],
      demo:'https://morabaraba-game.vercel.app/',
      gitlink:'https://github.com/Dober09/morabaraba-game'
    },
    
    {
      name:"MobileKiosk",
      video:"https://streamable.com/e/9ifmgt?autoplay=1",
      description:`A retail solution built with .NET MAUI that streamlines the checkout process.
               The app uses device camera APIs for product scanning and connects to inventory
               systems through RESTful APIs built with ASP.NET Core.`,
      icon:"assets/hashtag.png",
      languages:[
        ".NET MAUI",
        "ASP.NET Core"
      ],
      demo:'',
      gitlink:'https://github.com/Dober09/MobileKoisk'
    },

     {
      name:"SunnySide",
      video:"https://streamable.com/e/5g6t5v?autoplay=1",
      description:`The primary objective of this project was to demonstrate
                 my proficiency in developing a responsive landing page`,
      icon:"assets/angularjs.png",
      languages:[
        "Angular"
      ],
      demo:'https://sunnyside-iota-one.vercel.app/',
      gitlink:'https://github.com/Dober09/sunnyside'
    },
  ]

  isLoading = false

   constructor(){
    setTimeout(()=>{
      this.isLoading = true
    },4000)
  }

}
