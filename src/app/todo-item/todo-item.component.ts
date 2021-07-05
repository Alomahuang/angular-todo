import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() name: string;
  @Input() index: number;
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();

  checked: boolean=false;
  constructor() { }

  deleteElement(element) {
    this.elementDeleted.emit(element);
  }

  selectItem(){
    this.checked=!this.checked
  }

  ngOnInit() {
    
  }

}
