import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // userdefined event creation
  // @output() -- t share data from child to parent
@Output() onmenubtnClicked = new EventEmitter()
  
  menubtnClicked(){
    this.onmenubtnClicked.emit()

    // to resize screen
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 100);
  }
}
