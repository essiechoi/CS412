import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() submitData = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchTerm: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  onSubmit() {
    if (this.searchForm.valid) {
      this.submitData.emit(this.searchForm.value.searchTerm);
    }
  }
}
