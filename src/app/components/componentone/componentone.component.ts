import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.css']
})
export class ComponentoneComponent implements OnInit {
  componentArray : Array<string> = [];
  constructor(private activatedRoute : ActivatedRoute,private route : Router) { }

  ngOnInit() {
    this.componentArray = ['two','three','four','five']
  }


  onItemDrop(c){
    console.log(c)
    this.route.navigateByUrl(`${c.dragData}`)
  }

}
