var _ = require("underscore");
var base = require("./base");

function lyricSegment(n){
	return _.chain([])
		.push(n + " bottles of beer on the wall")
		.push(n + " bottles of bear")
		.push(" take one down , pass it around")
		.tap(function(lyrics){
			if (n > 1) {
				lyrics.push((n - 1) + "bottles of beer on the wall.");
			}else{
				lyrics.push("no more bottles of beer on the wall!");
			}
		})
		.value();
}

function song(start,end,lyricGen){
	return _.reduce(_.range(start,end,-1),
		function(acc,n){
			base.note('aaa');
			return acc.concat(lyricGen(n));
		},[]);
}

console.log(song(9,0,lyricSegment));
