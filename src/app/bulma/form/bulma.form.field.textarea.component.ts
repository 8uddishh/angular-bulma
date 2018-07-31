import {
    ElementRef,
    Renderer2,
    Component,
    OnInit,
    Input
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
    selector: 'bulma-field-textarea',
    templateUrl: './bulma.form.field.textarea.component.html',
    providers: [
      {
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: BulmaFormFieldTextareaComponent
      },
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: BulmaFormFieldTextareaComponent
      }
    ]
  })
  export class BulmaFormFieldTextareaComponent
    implements OnInit, Validator, ControlValueAccessor {
    constructor(protected render: Renderer2, protected el: ElementRef) {}
    private onChange: (value: string) => void;
  
    isvalid: boolean = true;
    errorMessage: string;
  
    @Input() placeholder: string;
    textValue: string;
    @Input() label: string;
    @Input() showValidMessage: boolean = false;
    @Input() required: boolean = false;
    @Input() validMessage: string = '';
    @Input() requiredMessage: string = '';
    @Input() hasIconLeft: boolean = false;
    @Input() hasIconRight: boolean = false;
    @Input() iconLeft: string = '';
    @Input() iconRight: string = '';
  
    ngOnInit(): void {}
  
    onKey (evt) {
      this.onChange(this.textValue);
    }
  
    registerOnValidatorChange?(_: () => void): void {}
    validate(control: FormControl) {
      if (this.required) {
        if (!control.value) {
          this.isvalid = false;
          this.errorMessage = `${this.requiredMessage}`;
          return Validators.required(control);
        }
      }
      this.isvalid = true;
      return null;
    }
  
    writeValue(text: string): void {
      this.textValue = text;
    }
    registerOnChange(onchange: (value: string) => void): void {
      this.onChange = onchange;
    }
    registerOnTouched(fn: any): void {}
  
    setDisabledState?(isDisabled: boolean): void {}
  }
  