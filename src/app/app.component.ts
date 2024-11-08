import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular-formly-signup'
  mybutton!: any;

  ngOnInit(): void {

  this.mybutton = document.getElementById('myBtn');
  }

  // When the user scrolls down 20px from the top of the document, show the button

  scrollFunction() {
    if (this.mybutton && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
      this.mybutton.style.display = 'block';
    } else {
      this.mybutton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    // document.body.scrollTop
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // document.documentElement.scrollTop = 0;
  }
}

