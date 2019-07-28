export class Movie {
	id;
	name;
	release_date;
	running_time;
	actors;
	genre;
	plot;
	poster;
	action;
	
	constructor(action1){
		this.action = action1;
	}
	
	reset(){
		this.name = "";
		this.release_date = "";
		this.running_time = "";
		this.actors = "";
		this.genre = "";
		this.plot = "";
		this.poster = "";
		this.action = "";
	}
}
