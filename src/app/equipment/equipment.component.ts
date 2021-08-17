import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {item: "Habitat dome"},
    {item: "Drones"},
    {item: "Food containers"},
    {item: "Oxygen tanks"}
  ];
  itemBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    this.equipment.push({item: equipmentName});
  }

  remove(type: object) {
    let index = this.equipment.indexOf(type);
    this.equipment.splice(index, 1);
  }  

  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(item: string, type: object) {
    type['item'] = item;
    this.itemBeingEdited = null;
  }

}
