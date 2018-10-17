"use strict";
var page = require('webpage').create(),
    system = require('system');

if (system.args.length < 3) {
    console.log(-1);
    phantom.exit(1);
} else {
    var address = system.args[2];
    var pageSize = system.args[1];
    var output = system.args[3];
   // page.viewportSize = { width: "297mm", height: "420mm" };
    page.zoomFactor = 1;



    page.paperSize = {
        format: pageSize,
        margin: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    };
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log(-2);
            phantom.exit();
        } else {
            window.setTimeout(function () {
                if (page.evaluate(function () {
                        if (document.getElementById("zhizhao")) {
                            if (document.getElementById("zhizhao").value == "1") {
                                return true;
                            }
                        }
                        return false;
                    })) {


                    var bb=page.evaluate(function() {
                        var data = [];

                        data[1] = document.documentElement.scrollWidth;
                        data[2] = document.documentElement.scrollHeidth;
                        return data;
                    });

                    page.clipRect = {
                        top: 0,
                        left: 0,
                        width: bb[1],
                        height: bb[2]

                    };
                        page.render(output);
                } else {
                    console.log(-3);
                }

                phantom.exit();
            }, 200);
        }
    });
}