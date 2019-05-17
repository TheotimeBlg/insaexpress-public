import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterState} from '@angular/router';
import {Team, Achievement, TeamService} from '../team-service/team.service';
import {TEAMS} from '../ma_liste_de_teams'

@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.css', '../../assets/css/main.css']

})
export class DefisComponent implements OnInit {
  teams: Team[];
  achievements: Achievement[];
  selectedTeam : Team;

  constructor(private teamsService: TeamService,) { }

  ngOnInit() {
    this.getTeams();
    //this.getAchievements();
  }


  onSelect(team: Team): void{
    this.selectedTeam = team;
}

getTeams(): void {
    this.teamsService.getTeams().subscribe((teams) => {
      teams.sort((a, b) => b.score - a.score);
      this.teams = teams;
    });
}

/* getAchievements(): void {
  this.achievementsService.getAchievements().subscribe((achievements) => {
    this.achievements = achievements;
  });
} */

}
