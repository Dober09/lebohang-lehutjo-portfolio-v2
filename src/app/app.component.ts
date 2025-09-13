import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";
import { SkillCardComponent } from "./components/skill-card/skill-card.component";
import { ToolsCardComponent } from "./components/tools-card/tools-card.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ProjectComponent } from "./components/project/project.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProfileCardComponent, SkillCardComponent, ToolsCardComponent, ContactFormComponent, ProjectComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lebohang-lehutjo-portfolio';
  isBtnClicked = false
  isLoading = false

  btnClicked(value:boolean){
    this.isBtnClicked =value
       setTimeout(() => {
    const targetId = this.isBtnClicked ? 'projects' : 'skills';
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
  }

 
}
