import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateSessionDto } from 'src/app/modules/dto/create-session.dto';
import { DeleteSessionDto } from 'src/app/modules/dto/delete-session.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reqToken = '';
  approved = false;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams['approved'];
      const rToken = qParams['request_token'];
      this.approved = ap == 'true' ? true : false;

      if (this.approved) {
        let session = new CreateSessionDto();
        session.request_token = rToken;
        this.authService.createSession(session).subscribe((resp) => {
          localStorage.setItem('session_id', resp.session_id);
          console.log('Session id: ' + resp.session_id);
        });
      } else {
        if(localStorage.getItem('session_id')!=null){
          console.log('Session id: ' + localStorage.getItem('session_id'));
          this.approved=true;
        }
      }
    });
  }

  requestToken() {
    this.authService.createRequestToken().subscribe((resp) => {
      this.reqToken = resp.request_token;
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=http://localhost:4200/home`;
    
    });
  }
  
  logout() {
    let deleteSessionDto = new DeleteSessionDto();
    if (localStorage.getItem('session_id') != null) {
      deleteSessionDto.session_id = localStorage.getItem('session_id')!;
      this.authService.deleteSession(deleteSessionDto).subscribe((resp) => {
        if (resp.success) {
          localStorage.removeItem('session_id');
          this.approved = false;
        }
      });
    }
  }
  
}
