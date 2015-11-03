/*global React, _, require, clearInterval, setInterval, $ */

(function(React, _) {
    var Crossword = require('./components/Crossword.jsx'),
        CrosswordModel = require('./models/CrosswordModel.js'),
        numloadingcells = 100,
        data = require('./data.js'),
        testLoading = true,
        makeLoader = function() {
            var container = $('#loading_container');
            for (var i = 0; i < numloadingcells; i++) {
                container.append('<div class="foo"></div>');
            }
            
            function randomlyFlip() {
                var targetIndex = parseInt(Math.random() * numloadingcells / 2),
                    target = $($('.foo')[targetIndex]),
                    oppositeTarget = $($('.foo')[numloadingcells - targetIndex]);
                target.toggleClass('highlighted');
                oppositeTarget.toggleClass('highlighted');
            }
            return setInterval(randomlyFlip, 100);
        };
    window.addEventListener('load', function() {
        // TODO: HANDLE ERRORS, HAHAHA
        var interval = makeLoader();
        
        function generate() {
            console.log('generating');
            $.ajax({
                url: "/api/random/",
                datatype: "json",
                success: function(result) {
                    console.log('done');
                    var data = JSON.parse(result);
                    var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
                    React.render(<Crossword model={model} rawData={data} title={data.gridinfo.name} clues={data.clues} numbered={data.numbered} cells={data.cells} size={data.gridinfo.size}/>, document.getElementById('app'));
                    $('.loading').addClass('out');
                    $('#app').removeClass('out');
                    clearInterval(interval);
                },
                error: function() {
                    console.log("RETRYING OH GOD");
                    generate();
                }
            });
        }
        generate();
    });

}(React, _));
