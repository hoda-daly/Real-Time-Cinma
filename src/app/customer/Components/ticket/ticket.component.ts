import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit
{

  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute) { }

  name?:string
  state:boolean=true;
  seat:string[]=this.service.selectedseats;
  time:string="";
  tPerTicket=this.service.seatPrice+this.service.Tax;
  ngOnInit(): void
  {
    this.name=this.route.snapshot.params['id'];
    this.time=this.route.snapshot.params['time'];
  }

  cState()
  {
    this.state=!this.state;
  }

  goHome()
  {
    this.service.clearSelected();
    this.router.navigate(['/']);
  }
  getInfo()
  {
  }

}
