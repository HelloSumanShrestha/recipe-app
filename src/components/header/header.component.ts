import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoryServiceService } from '../../services/category-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  formData = new FormGroup({
    searchItem: new FormControl("")
  })

  constructor(private service: CategoryServiceService, private router: Router) { }

  handleSubmit() {

    const searchdata = this.formData.get("searchItem")!.value

    if (searchdata) {
      this.service.onCategorySelection(searchdata)
      this.router.navigate(["/explore"])

    }

  }
}
