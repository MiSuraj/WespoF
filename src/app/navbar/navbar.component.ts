import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  a:String="Signin/SignUp";
  index=0;
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
 

  ngOnInit(): void {
  }
  public  login(){
    alert ("Login clicked")
   this.a="Suraj"
    return null
  }

}
