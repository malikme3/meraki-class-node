import { TeamsService } from './service/teams-service';

export class TeamsController {
  ser = new TeamsService();
  name = this.ser.teams;
  score = this.ser.scores;

  // private teams =

  // scores  = ;
}
