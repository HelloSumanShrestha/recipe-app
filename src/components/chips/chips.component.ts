import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})

export class ChipsComponent {
  @Input() addActiveState: boolean = false
  @Output() updateState = new EventEmitter<boolean>

  constructor() { }

  onAdd() {
    this.addActiveState = true
    this.updateState.emit(true)
  }

  onCancel() {
    this.addActiveState = false
    this.updateState.emit(false)
  }
}
