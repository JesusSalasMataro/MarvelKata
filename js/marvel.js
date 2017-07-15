class StuartComicsImportSystem {

	constructor(marvelImportSystem, comicsMapper) {
		this._marvelImportSystem = marvelImportSystem;
		this._comicsMapper = comicsMapper;
	}

	getComicsFromMarvel() {
		let marvelComics = this._marvelImportSystem.getComics();
		let stuartComics = this._comicsMapper.toStuartComics(marvelComics);

		return stuartComics;
	}
}






