import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  public data: any;

  setData(data: any) {
    this.data = data;
  }
}
