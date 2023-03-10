import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLogged = false;

    constructor(private router: Router, private tokenService: TokenService) { }

    ngOnInit(): void {

        if(this.tokenService.getToken()){
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    login() {
        this.router.navigate(['/login']);
    }

    onLogOut():void {
        this.tokenService.logOut();
        window.location.reload();
    }

}
