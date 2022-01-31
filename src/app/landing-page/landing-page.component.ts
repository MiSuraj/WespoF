import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  images = [
    {path: 'https://rukminim1.flixcart.com/flap/844/140/image/c114e26bce72191d.jpg?q=50'},
    {path: 'https://rukminim1.flixcart.com/flap/844/140/image/c114e26bce72191d.jpg?q=50'},
    {path: 'https://rukminim1.flixcart.com/flap/844/140/image/c114e26bce72191d.jpg?q=50'},
    
]

DealOfWeek=[

  {path: 'https://m.media-amazon.com/images/I/51SgkKyg4SL._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/8103lZE+RCS._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/8103lZE+RCS._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/51SgkKyg4SL._AC_SY400_.jpg',title:"cricketBat"}, 
  {path: 'https://m.media-amazon.com/images/I/8103lZE+RCS._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/8103lZE+RCS._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/8103lZE+RCS._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/8103lZE+RCS._AC_SY400_.jpg',title:"cricketBat"},
  {path: 'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',title:"cricketBat"},
]
index=0;
trendingDeal=[
    {
      id:1,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },
     {
      id:2,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },
     {
      id:3,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },
     {
      id:4,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },
     {
      id:5,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },   
      {
      id:6,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },
     {
      id:7,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     },
     {
      id:8,
      imgUrl:'https://m.media-amazon.com/images/I/51+cGBIIMQL._AC_SY400_.jpg',
     title:"Xyz",
     Description:"abcdedhsdb"
     }


]

  constructor() { }

  ngOnInit(): void {
  }

  buy(id:any){
    alert(id)
  }

}
