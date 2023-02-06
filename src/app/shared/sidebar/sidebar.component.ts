import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private authService: AuthService,
              private router: Router){}

  logout(){
    Swal.fire({
      title: 'Cerrando Sesion',
      didOpen: () => {
        Swal.showLoading()
      }
    });
    this.authService.logout().then( () => {
      Swal.close();
      this.router.navigate(['/login']);
    });
  }
}
