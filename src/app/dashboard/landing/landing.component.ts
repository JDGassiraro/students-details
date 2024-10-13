import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'students-details-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  filter: FormControl;
  students: Array<any> =[
    {
        "name": "Marcus Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45,
    },
    {
        "name": "Teresa Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Clovis Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Juniper Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Maurice Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Peter Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Sammy Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Cynthia Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Dianna Squibbles",
        "studentImage": "assets/squirrel-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Marsha Squibbles",
        "studentImage": "assets/squirrel-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Matthew Squibbles",
        "studentImage": "assets/squirrel-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
      
     
  ];

  constructor(
    private fb: FormBuilder
  ){
    this.filter= this.fb.control ("",{nonNullable : true});
  }
}
