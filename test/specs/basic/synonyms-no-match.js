/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
define(["basic/synonyms", "basic/no-match"], function () {
    describe("basic mark with synonyms and noMatch", function () {
        var $ctx, notFound;
        beforeEach(function (done) {
            loadFixtures("basic/synonyms-no-match.html");

            $ctx = $(".basic-synonyms-no-match > p");
            notFound = [];
            new Mark($ctx[0]).mark("test", {
                "synonyms": {
                    "test": "ipsum"
                },
                "separateWordSearch": false,
                "diacritics": false,
                "noMatch": function (term) {
                    notFound.push(term);
                },
                "done": done
            });
        });

        it("should not call noMatch if there are synonym matches", function () {
            expect(notFound).toEqual([]);
        });
    });
});
