import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(public fbobj:FormBuilder)
  {

  }

  Assignment_15 = this.fbobj.group(
    {
      firstname:['',[Validators.required,Validators.pattern(/^[A-Za-z]*$/)]],
      lastname:[
        '',[Validators.required,Validators.pattern(/^[A-Za-z]*$/)]],
      mail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@([a-z0-9.-]{1,})+\\.[a-z]{2,}$")]],
      mob:['', [Validators.required,Validators.maxLength(10),Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
      city: ['', [Validators.required,Validators.minLength(4),Validators.pattern(/^[A-Za-z]*$/)]],
      zip:['', [Validators.required,Validators.maxLength(5),Validators.pattern(/^[1-9]{1}[0-9]{4}|[1-9]{1}[0-9]{3}\\s[0-9]{2}$/)]],
      comments:['',[Validators.required,Validators.minLength(30)]]
    }
  );

  onSubmit(){
    console.log(this.Assignment_15.value);
  }
  
  get m(){
    return this.Assignment_15.controls;
  } 

  get city() {
    return this.Assignment_15.get('city');
} 
  
}
