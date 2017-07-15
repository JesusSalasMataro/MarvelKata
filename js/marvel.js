class StuartComicsImportSystem {

	constructor(marvelImportService, comicsMapper) {
		this._marvelImportService = marvelImportService;
		this._comicsMapper = comicsMapper;
	}

	getComicsFromMarvel() {
		let marvelComics = this._marvelImportService.getComics();
		let stuartComics = this._comicsMapper.toStuartComics(marvelComics);

		return stuartComics;
	}
}






