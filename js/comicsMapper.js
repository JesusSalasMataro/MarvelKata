class ComicsMapper {
	
	toStuartComics(marvelComics) {
		return marvelComics.map(this._convertToStuartComic);
	}

	_convertToStuartComic(marvelComic) {
		const stuartComic = 
	        {
	            title: marvelComic.title,
	            thumbnailUrl: marvelComic.thumbnail.path + marvelComic.thumbnail.extension,
	            price: marvelComic.prices[0].price
	        };

	    return stuartComic;
	}
}

export { ComicsMapper as default };