
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule, FormControl, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {NgbHighlight} from '@ng-bootstrap/ng-bootstrap'



@Component({
    selector: 'students-details-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, NgbHighlight],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'students-details';
    filter: FormControl;
    students: Array<any> =[
    {
        "name": "Marcus Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
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

    ) {
        this.filter= this.fb.control ("",{nonNullable : true});
    }
}

