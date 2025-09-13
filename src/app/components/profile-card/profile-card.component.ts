import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Output() btnClick = new EventEmitter<boolean>()
  isClicked = false
  aboutActive =false


  onClicked(){
    this.isClicked = !this.isClicked
    this.btnClick.emit(this.isClicked)

  }

  onAbout(){
    this.aboutActive = !this.aboutActive
   // slight delay to allow DOM update
  }







}
