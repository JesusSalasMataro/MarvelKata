class StuartComicsImportSystem {

	getComicsFromMarvel() {
		let marvelComics = _marvelImportSystem.getComics();
		let stuartComics = _comicsMapper.toStuartComics(marvelComics);

		return stuartComics;
	}
}






