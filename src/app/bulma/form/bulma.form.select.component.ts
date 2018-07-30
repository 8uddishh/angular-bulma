import {
  ElementRef,
  Renderer2,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator,
  Validators,
  ControlValueAccessor
} from '@angular/forms';
@Component({
  selector: 'bulma-select',
  templateUrl: './bulma.form.select.component.html',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: BulmaFormSelectComponent
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BulmaFormSelectComponent
    }
  ]
})
export class BulmaFormSelectComponent
  implements OnInit, Validator, ControlValueAccessor {
  constructor(protected render: Renderer2, protected el: ElementRef) {
      this.selectionChange = new EventEmitter<any>();
  }
  private onChange: (value: any) => void;

  isvalid: boolean = true;
  @Input() placeholder: string = 'Select';
  @Input() required: boolean = false;
  @Input() valueField: string = '';
  @Input() textField: string = '';
  @Input() options: any[] = [];
  @Output() selectionChange: EventEmitter<any>;

  registerOnValidatorChange?(_: () => void): void {}
  selectedValue: any;
  onSelect() {
    if(this.onChange) {
        this.onChange(this.selectedValue);
        this.selectionChange.emit(this.selectedValue);
    }
  }

  ngOnInit(): void {}

  validate(control: FormControl) {
    if (this.required) {
      if (!control.value) {
        this.isvalid = false;
        return Validators.required(control);
      }
    }
    this.isvalid = true;
    return null;
  }

  writeValue(selected: any): void {
    this.selectedValue = selected;
  }

  registerOnChange(onchange: (value: string) => void): void {
    this.onChange = onchange;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
