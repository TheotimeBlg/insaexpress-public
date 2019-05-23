import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterState} from '@angular/router';
import {Team,Achievement, TeamAchievement, TeamService} from '../team-service/team.service';
import {latLng, latLngBounds, tileLayer} from 'leaflet';
import * as leaflet from 'leaflet';
import {TEAMS} from '../ma_liste_de_teams';
import { AchievementsService } from '../team-service/achievements.service';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css', '../../assets/css/main.css']
})
export class TeamDetailsComponent implements OnInit {
  team: Team;
  team_achievements: TeamAchievement[];
  achievements: Achievement[];
  marker: leaflet.Marker;
  private map: leaflet.Map;
  options = {
    zoom: 6,
    center: latLng(46.227638, 2.213749),
  };

  constructor(private routerParams: ActivatedRoute,
              private teamsService: TeamService,
              private achievementsService: AchievementsService,
              private http: HttpClient) {}

  ngOnInit() {
    //this.getTeam(id);
  //  this.getAchievements();
    this.routerParams.params.subscribe(
      (params) => {
        this.teamsService.getTeam(params['id']).subscribe(
          (team) => {
            this.team_achievements = team.team_achievements.reverse();
            this.team = team;
            
            }
          
        );
      }
    );
  }
}
