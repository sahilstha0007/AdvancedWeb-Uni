import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavItems } from '../nav-items/nav-items';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, NavItems],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}
  onNavigate(page: string) {
    this.router.navigate([page === 'home' ? '/' : '/enquiry']);
  }
}
