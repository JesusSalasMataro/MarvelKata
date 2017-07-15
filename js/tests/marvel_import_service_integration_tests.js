describe("Return comics from Marvel api, test connection", function() {
 
    let _sut;

    beforeEach(function() {
        const configuration = 
            {
                apiPublicKey: '97f295907072a970c5df30d73d1f3816',
                apiPrivateKey: 'ed54a875c0dffad1fa6af84e66ff104434a1c6cc',
                urlComics: 'http://gateway.marvel.com:80/v1/public/comics'
            };

        _sut = new MarvelImportService(configuration);            
    });

    it("Marvel api call returns comics", function() {
        // ARRANGE

        // ACT        
        _sut.getComics()

        // ASSERT
        .then((marvelComics) => {
            expect(marvelComics.data.results.length).toBeGreaterThan(0);
            expect(marvelComics.data.results[0].id).toBeDefined();
            expect(marvelComics.data.results[0].title).toBeDefined();
            expect(marvelComics.data.results[0].thumbnail).toBeDefined();
            expect(marvelComics.data.results[0].prices).toBeDefined();            
        });

    });                                   
 
});