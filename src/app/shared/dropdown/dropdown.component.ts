import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from '../../core/models/common.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() label: string;
  @Input() options: Option<any>[] = [];
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this.fb.group({
    option: null,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.get('option')?.valueChanges.subscribe({
      next: (value) => {
        const selected = this.options.find((x) => x.value === value);
        if (selected) {
          this.selected.emit(selected.data);
        }
      },
    });
  }
}
