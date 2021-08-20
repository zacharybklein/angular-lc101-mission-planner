import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   inList: boolean = false;
   tasks: object[] = [];


   constructor() { }

   ngOnInit() { }

   addTasks(experiment: object){
    if (this.tasks.includes(experiment)) {
      this.inList = true;
    } else {
      this.inList = false;
    }

    if (this.inList) {
      let index = this.tasks.indexOf(experiment);
      this.tasks.splice(index, 1);
  } else if (!this.inList && this.tasks.length < 3) {
      this.tasks.push(experiment);
  }
}

}
