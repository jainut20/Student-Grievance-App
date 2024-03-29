import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor( private router:Router) { 
    this.router.events.subscribe((event:RouterEvent)=>{
     
      this.SelectedPath=event.url
    })
  }
  SelectedPath=''
  pages=[
    {
      title:'Profile',
      url:'/menu/profile'
    },
   
    {
      title:'Lodge Complaint',
      url:'/menu/lodge-complaint'
    },
    {
      title:'Complaint Status',
      url:'/menu/complaint-status'
    }, 
    {
      title:'Notifications',
      url:'/menu/notifications'
    },{
      title:'Notices',
      url:'/menu/notices'
    },
    {
      title:'FAQs',
      url:'/menu/faqs'
    }
  ]

  ngOnInit() {
    this.router.navigate(['/menu/profile'])
   
  }

  onToggleTheme(event) {
    console.log(event.detail.checked)
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark')
    }
    else {
      document.body.setAttribute('color-theme', 'light')

    }
  }

}
