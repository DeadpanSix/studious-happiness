import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Login, Register],
  template:  `
    <main>
      <header class="brand-name">
        <!-- <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" /> -->
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
      <section>
        <app-login></app-login>
      </section>
      <section>
        <app-register></app-register>
      </section>
    </main>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'studious-happiness';
}
