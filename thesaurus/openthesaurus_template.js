if (typeof thesaurus === "undefined") {
    var thesaurus = {};
}
thesaurus["de"] = new Object();

thesaurus["de"].license="http://http://www.openthesaurus.de/"
thesaurus["de"].url="GPL2"

thesaurus["de"].lookup = function(word) {
    var searchString = word.toUpperCase();
    var results = this.data.filter(function(synsets) {
        var synsetsUpcase = synsets.map(function(currentWord) { return currentWord.toUpperCase(); });
        return synsetsUpcase.indexOf(searchString) != -1;
    });
    if (results.length == 0) return []
    else return results.reduce(function(p, n) { return p.concat(n); });
}.bind(thesaurus["de"]);

thesaurus["de"].lookupTimed = function(word) {
    var start = new Date().getTime();
    result = this.lookup(word);
    console.log(new Date().getTime() - start);
    return result;
}.bind(thesaurus["de"]);

thesaurus["de"].data =