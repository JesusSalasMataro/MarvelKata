describe("Return comics from Marvel api and convert them to Stuart comics", function() {
 
    let _sut;

    beforeEach(function() {
        _sut = new StuartComicsImportSystem();        
    });

    it("receive Stuart comics from Stuart comics import system", function() {
        // ARRANGE

        // ACT
        let stuartComics = _sut.getComicsFromMarvel();

        // ASSERT
        expect(stuartComics).toBeGreaterThan(0);
        expect(stuartComics[0].title).toBeDefined();
        expect(stuartComics[0].thumbnailUrl).toBeDefined();
        expect(stuartComics[0].price).toBeDefined();
    });                                   
 
});