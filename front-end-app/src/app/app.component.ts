import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showLayout = true;
  constructor(private router: Router, private titleService: Title) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        this.titleService.setTitle(data['title'] || 'Default Title');
      });

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const isNotFound = this.router.config.some(route =>
    //       route.path === '**' && event.url !== '/'
    //     );
    //
    //     this.showLayout = !isNotFound;
    //   }
    // });
  }
}
