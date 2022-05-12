import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-img',
  templateUrl: './add-img.component.html',
  styleUrls: ['./add-img.component.scss']
})
export class AddImgComponent implements OnInit {

  constructor() { }
  
  @Input() srcFromParent: string | undefined ;
  @Output() deleteEvent = new EventEmitter () ;

  ngOnInit(): void {
  }
  callParetdelete(){
    this.deleteEvent.emit(this.srcFromParent);
  }

}
