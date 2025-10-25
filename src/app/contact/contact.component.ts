import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  onSubmit(event: Event): void {
    event.preventDefault();
    
    // Get form data
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Create mailto link
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    const mailtoLink = `mailto:poojaarunbhai39853@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message (you could add a toast notification here)
    alert('Thank you for your message! Your email client should open now.');
  }
}
