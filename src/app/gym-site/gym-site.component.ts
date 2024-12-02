import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-site',
  standalone: true,
  templateUrl: './gym-site.component.html',
  styleUrls: ['./gym-site.component.scss'],
  imports: [CommonModule]
})
export class GymSiteComponent implements OnInit {
  ngOnInit(): void {
    this.activeNavStyle()
  }

activeNavStyle(){
  const navItems = document.querySelectorAll('.nav-link');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    Array.from(navItems, navItem => navItem.classList.remove('current'));
    navItems[i].classList.add('current');
  });
}
}

}
