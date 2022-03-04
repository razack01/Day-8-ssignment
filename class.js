class Movie{
	constructor(title,studio,rating){
	this.title=title
	this.studio=studio
	this.rating=rating
}
	
	gettitle(){
	return this.title

}
	getstudio(){
  	return this.studio

}

	getPG(){
  	return this.rating

}

}


var a= new Movie("CasinoRoyale","EON productions","PG13")
 console.log(a)
 console.log(a.getPG())