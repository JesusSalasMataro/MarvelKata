class StuartComicsImportSystem {

	constructor(marvelImportService, comicsMapper) {
		this._marvelImportService = marvelImportService;
		this._comicsMapper = comicsMapper;
	}

	getComicsFromMarvel() {
		const marvelComics = this._marvelImportService.getComics();
		const stuartComics = this._comicsMapper.toStuartComics(marvelComics);

		return stuartComics;
	}
}

export { StuartComicsImportSystem as default };






