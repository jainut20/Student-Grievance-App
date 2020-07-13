import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Student } from 'src/app/Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private user:UserService,private router:Router) { }
  student:Student = {}
  ngOnInit() {
    this.user.getStudent().then(data=>{
      
      if(this.student ==  undefined){
        this.router.navigateByUrl('/')
      }
      else{
        this.student=data
      }
    })
  }

}
