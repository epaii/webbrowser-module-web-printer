"use strict";
var page = require('webpage').create(),
    system = require('system');

if (system.args.length < 2) {
    console.log(-1);
    phantom.exit(1);
} else {
    var address = system.args[1];
   
    var output = system.args[2];
    //page.viewportSize = { width: "297mm", height: "420mm" };
    page.zoomFactor = 1;

    page.open(address, function (status) {
		 console.log(address);
        if (status !== 'success') {
            console.log(-2);
            phantom.exit();
        } else {
            window.setTimeout(function () {
/*                 if (page.evaluate(function () {
                        if (document.getElementById("zhizhao")) {
                            if (document.getElementById("zhizhao").value == "1") {
                                return true;
                            }
                        }
                        return false;
                    })) {
                        page.render(output);
                } else {
                     console.log(-3);
					
                } */
				 console.log(0);
				 page.render(output);

                phantom.exit();
            }, 200);
        }
    });
}