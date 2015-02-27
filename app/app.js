/*global React, _, require */

(function(React, _) {
  var Crossword = require('./components/Crossword.jsx'),
      CrosswordModel = require('./models/CrosswordModel.js'),
      data = require('./data.js')
    getRemotely = true;
  

  if (!getRemotely) {
    document.onready = function() {
      var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
      React.render(<Crossword model={model} rawData={data} title={data.gridinfo.name} clues={data.clues} numbered={data.numbered} cells={data.cells} size={data.gridinfo.size}/>, document.getElementById('app'));
      $('.loading').css({ display: "none" });
    };
  } else {
   $.ajax({
     url: "http://cruciverbalizer.com/jsonrand/99",
     datatype: "json",
     success: function(result) {

       var data = JSON.parse(result);
       var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
       React.render(<Crossword model={model} rawData={data} title={data.gridinfo.name} clues={data.clues} numbered={data.numbered} cells={data.cells} size={data.gridinfo.size}/>, document.getElementById('app'));
       $('.loading').addClass('out');
       $('#app').removeClass('out');
     }
   });
  }

}(React, _));
