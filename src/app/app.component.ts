import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, LoadingIndicatorComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio Website';

  loading = true;
  progress = 0;
  showBackToTop = false;
  mobileMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.progress += 1;

      if (this.progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.loading = false;
        }, 300);
      }
    }, 30);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Show/hide back to top button
    this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
