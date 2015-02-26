/*global React, _, require */

(function(React, _) {
    var Crossword = require('./components/Crossword.jsx'),
        CrosswordModel = require('./models/CrosswordModel.js'),
        data = require('./data.js');

    document.onready = function() {
        var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
        React.render(<Crossword model={model} rawData={data} title={data.gridinfo.name} clues={data.clues} numbered={data.numbered} cells={data.cells} size={data.gridinfo.size}/>, document.getElementById('app'));
    };
}(React, _));
