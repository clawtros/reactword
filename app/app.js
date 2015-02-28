/*global React, _, require, clearInterval, setInterval, $ */

(function(React, _) {
  var Crossword = require('./components/Crossword.jsx'),
      CrosswordModel = require('./models/CrosswordModel.js'),
      data = require('./data.js'),
      getRemotely = true,
      testLoading = true,
      makeLoader = function() {
          var container = $('#loading_container'),
              interval;
          for (var i = 0; i < 100; i++) {
              container.append('<div class="foo"></div>');
          }
          
          function randomlyFlip() {
              var target = $($('.foo')[parseInt(Math.random() * 100)]);
              target.toggleClass('highlighted');
          }
          
          return setInterval(randomlyFlip, 100);
      };


    

  if (!getRemotely) {
      document.onready = function() {
          var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
          React.render(<Crossword model={model} rawData={data} title={data.gridinfo.name} clues={data.clues} numbered={data.numbered} cells={data.cells} size={data.gridinfo.size}/>, document.getElementById('app'));
          $('.loading').addClass('out');
          $('#app').removeClass('out');
      };
  } else {
      document.onready = function() {
          var interval = makeLoader();
          $.ajax({
              url: "http://cruciverbalizer.com/jsonrand/99",
              datatype: "json",
              success: function(result) {
                  var data = JSON.parse(result);
                  var model = new CrosswordModel(data.cells, data.gridinfo.size, data);
                  React.render(<Crossword model={model} rawData={data} title={data.gridinfo.name} clues={data.clues} numbered={data.numbered} cells={data.cells} size={data.gridinfo.size}/>, document.getElementById('app'));
                  $('.loading').addClass('out');
                  $('#app').removeClass('out');
                  clearInterval(interval);
              }
          });
      };
  }

}(React, _));
