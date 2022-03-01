  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['']
    });
	
    const repeadPasswordValidate = repeadPasswordValidateFactory('repeatPassword', this.form.get('password')!, 'password');

    this.subscription = this.form.get('password')!.valueChanges!.subscribe(() => {
      this.form.controls.repeatPassword.updateValueAndValidity({ onlySelf: true });
    });

    this.form.controls.repeatPassword.setValidators([Validators.required, Validators.minLength(6), repeadPasswordValidate])
  }
  
  
  
  export function repeadPasswordValidateFactory(
  controlName: string,
  otherControl: AbstractControl,
  otherControlName: string
) {
  
  return function sameValueValidate(
    control: AbstractControl,
  ) {
    return control.value !== otherControl!.value ? {
      sameValue: {
        [otherControlName]: otherControl!.value,
        [controlName]: control.value
      }
    } : null;


  };
}