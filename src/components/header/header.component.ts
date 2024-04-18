import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  formData = new FormGroup({
    searchItem: new FormControl("")
  })

  handleSubmit() {
    alert(this.formData.value.searchItem)
  }
}
