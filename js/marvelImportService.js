class MarvelImportService {
	
	constructor(configuration) {
		this.apiPublicKey = configuration.apiPublicKey;
		this.apiPrivateKey = configuration.apiPrivateKey;
		this.urlComics = configuration.urlComics;
		this.timeStamp = this._createTimeStamp();
		this.hash = this._createHash(this.apiPublicKey, this.apiPrivateKey, this.timeStamp);
	}

	getComics() {
		let urlComics = this._createUrlComics();

		return fetch(urlComics)
			.then(function(response) {
				return response.json()
			});
	}

	_createTimeStamp() {
		// TODO: implement timeStamp, temporary hardcode timeStamp

		// let now = new Date();
		// return now.format("ddMMyyyyhhmmss");

		return 987;
	}

	_createUrlComics() {
		return this.urlComics 
			+ '?ts=' + this.timeStamp 
			+ '&apikey=' + this.apiPublicKey
			+ '&hash=' + this.hash;
	}

	_createHash(apiPublicKey, apiPrivateKey, timeStamp) {
		// TODO: implement hash, temporary hardcode hash

		const hash = 'abfa1c1d42a73a5eab042242335d805d';
		return hash;
	}
}