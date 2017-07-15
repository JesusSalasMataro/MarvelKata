describe("Return comics from Marvel api, test connection", function() {
 
    let _sut;

    beforeEach(function() {
        marvelImportService = new MarvelImportService();            
    });

    it("Marvel api call returns comics", function() {
        // ARRANGE

        // ACT        
        let marvelComics = _sut.getComics();

        // ASSERT
        expect(marvelComics.comics.length).toBeGreaterThan(0);
    });                                   
 
});