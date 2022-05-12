import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    this.router.navigate([`/register`]);
  }

}
