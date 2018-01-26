it("should include test.js in SourceMap", function() {
	var fs = require("fs");
	var source = fs.readFileSync(__filename + ".map", "utf-8");
	var map = JSON.parse(source);
	expect(map.sources).toMatch("dummy:///./test.js");
});

require.include("./test.js");

