import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      const navigation = this.router.getCurrentNavigation();
      // tracingService.trace({id: navigation.extras.state.tracingId});
      console.log(navigation.extras);
    });
  }

}
