import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  categeories =
    [{
      "Category": "Category 1",
      "Title": "Title example",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 1",
      "Title": "My cat is named George",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 1",
      "Title": "Hocus pokus",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },
    {
      "Category": "Category 2",
      "Title": "7 projects going LIVE now",
      "Comments": "Example comments"
    },


  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
