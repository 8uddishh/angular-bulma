import { ElementRef, Renderer2, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator,
  Validators,
  ControlValueAccessor
} from '@angular/forms';

@Component({
  selector: 'bulma-field-select',
  templateUrl: './bulma.form.field.select.component.html',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: BulmaFormFieldSelectComponent
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BulmaFormFieldSelectComponent
    }
  ]
})
export class BulmaFormFieldSelectComponent
  implements OnInit, Validator, ControlValueAccessor {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    this.selectionChange = new EventEmitter<any>();
  }
  private onChange: (value: string) => void;

  isvalid: boolean = true;
  errorMessage: string;

  selectedValue: any;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() showValidMessage: boolean = false;
  @Input() required: boolean = false;
  @Input() validMessage: string = '';
  @Input() requiredMessage: string = '';
  @Input() hasIconLeft: boolean = false;
  @Input() iconLeft: string = '';
  @Input() valueField: string = '';
  @Input() textField: string = '';
  @Input() options: any[] = [];
  @Output() selectionChange: EventEmitter<any>;

  ngOnInit(): void {}

  onSelect(selected) {
    if(this.onChange) {
        this.onChange(this.selectedValue);
    }
    this.selectionChange.emit(this.selectedValue);
  }

  registerOnValidatorChange?(_: () => void): void {}
  validate(control: FormControl) {
    if (this.required) {
      console.log(control.value);
      if (!control.value) {
        this.isvalid = false;
        this.errorMessage = `${this.requiredMessage}`;
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
