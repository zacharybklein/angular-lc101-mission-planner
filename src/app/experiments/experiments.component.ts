import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {task: "Mars soil sample"},
    {task: "Plant growth in habitat"},
    {task: "Human bone density"}
  ];
  taskBeingEdited: object = null;


  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    this.experiments.push({task: experimentName});
  }

  remove(type: object) {
    let index = this.experiments.indexOf(type);
    this.experiments.splice(index, 1);
  }  

  edit(task: object) {
    this.taskBeingEdited = task;
  }

  save(task: string, type: object) {
    type['task'] = task;
    this.taskBeingEdited = null;
  }

}
