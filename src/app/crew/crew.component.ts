import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', firstMission: "STS-7"},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', firstMission: "STS-47"},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', firstMission: "STS-56"},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', firstMission: "Challenger"},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', firstMission: "STS-8"},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', firstMission: "Expedition 44"},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', firstMission: "Boeing Starliner-1"}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object[]){
    if (this.crew.includes(candidate)) {
      this.inCrew = true;
    } else {
      this.inCrew = false;
    }

    if (this.inCrew) {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index, 1);
  } else if (!this.inCrew && this.crew.length < 3) {
      this.crew.push(candidate);
  }
}

}
