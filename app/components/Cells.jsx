(function(React, module, undefined) {


  var Cell = require('./Cell.jsx'),
      cw = require('../models/Crossword.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = {
        ACROSS: [1, 0],
        DOWN: [0, 1]
      };

  var Model = {
    size: 0,
    values: [],
    
    currentWord: function(position, direction) {
      var cells = [], result = [];
      if (direction == DIRECTIONS.ACROSS) {
        var start = Math.floor(position / this.size) * this.size,
            end = start + this.size;
        cells = range(start, end);
      } else {
        var start = position % this.size,
            end = this.values.length;
        cells = range(start, end, this.size);
      }
      var cellIndex = cells.indexOf(position),
          left = [],
          right = [],
          i;
      for (i = cellIndex; i < cells.length; i++) {
        if (this.values[cells[i]] !== UNPLAYABLE) {
          right.push(cells[i]);
        } else {
          break;
        }
      }
      for (i = cellIndex; i >= 0; i--) {
        if (this.props.values[cells[i]] !== UNPLAYABLE) {
          left.push(cells[i]);
        } else {
          break;
        }
      }

      return left.concat(right);
    },

    inWord: function(cell, cells) {
      return cells.indexOf(cell) > -1;
    }
  };
  
  function range(start, stop, step){
    if (typeof stop=='undefined'){
      // one param defined
      stop = start;
      start = 0;
    };
    if (typeof step=='undefined'){
      step = 1;
    };
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
      return [];
    };
    var result = [];
    for (var i=start; step>0 ? i < stop : i > stop; i+=step){
      result.push(i);
    };
    return result;
  };

  module.exports = React.createClass({
    keysDown: 0,
    
    getInitialState: function() {
      console.log("AAAH");
      return {
        activeCell: undefined,
        direction: DIRECTIONS.ACROSS,
        keyIsDown: false,
        cellValues: []
      }
    },
    
    makeActive: function(id) {
      if (this.props.values[id] !== UNPLAYABLE) {
        this.setState({ activeCell: id });
      }
    },
    
    currentWord: function() {
      var position = this.state.activeCell,
          direction = this.state.direction,
          cells = [], result = [];
      if (direction == DIRECTIONS.ACROSS) {
        var start = Math.floor(position / this.props.size) * this.props.size,
            end = start + this.props.size;
        cells = range(start, end);
      } else {
        var start = position % this.props.size,
            end = this.props.values.length;
        cells = range(start, end, this.props.size);
      }
      var cellIndex = cells.indexOf(position),
          left = [],
          right = [],
          i;
      for (i = cellIndex; i < cells.length; i++) {
        if (this.props.values[cells[i]] !== '#') {
          right.push(cells[i]);
        } else {
          break;
        }
      }
      for (i = cellIndex; i >= 0; i--) {
        if (this.props.values[cells[i]] !== '#') {
          left.push(cells[i]);
        } else {
          break;
        }
      }

      return left.concat(right);
    },

    inWord: function(cell, cells) {
      return cells.indexOf(cell) > -1;
    },
    
    handleKeyDown: function(e) {
      console.log(e.which);
      if (this.state.activeCell) {
          
        var values = this.state.cellValues,
            direction = this.state.direction;
            
        if (this.keysDown > 1) {
          this.go(1);
        }

        if (e.which == 8) {
          e.preventDefault();
          e.stopPropagation();
          this.currentWord();
          if (values[this.state.activeCell] == undefined) {
            this.go(-1);
            values[this.state.activeCell] = undefined;
          } else {
            values[this.state.activeCell] = undefined;
            this.go(-1);
          }

        }
        
        if (e.which >= 65 && e.which <= 90 && !e.metaKey && !e.ctrlKey) {
          values[this.state.activeCell] = String.fromCharCode(e.which);
          this.go(1);
        }

        if (e.which >= 37 && e.which <= 40) {
          switch (e.which) {
            case 37:
              if (direction == DIRECTIONS.ACROSS) {
                this.go(-1);
              }
              direction = DIRECTIONS.ACROSS;
              break;
            case 39:
              if (direction == DIRECTIONS.ACROSS) {
                this.go(1);
              }
              direction = DIRECTIONS.ACROSS;
              break;              
            case 38:
              if (direction == DIRECTIONS.DOWN) {
                this.go(-1);
              }
              direction = DIRECTIONS.DOWN;
              break;
            case 40:
              if (direction == DIRECTIONS.DOWN) {
                this.go(1);
              }
              direction = DIRECTIONS.DOWN;
              break;
          }
        }

        this.setState({
          direction: direction,
          cellValues: values
        });
        
      }
    },

    goOne: function(nextCell, delta) {
      var direction = this.state.direction;
      
      nextCell += (this.state.direction == DIRECTIONS.ACROSS ? 1 : this.props.size) * delta;

      if (nextCell > this.props.values.length) {
        nextCell -= this.props.values.length;
      }
      
      if (nextCell < 0) {
        nextCell = this.props.values.length + nextCell;
      }
      
      return nextCell;
    },

    go: function(delta) {
      var initial = this.goOne(this.state.activeCell, delta),
          next = initial;
      
      while (this.props.values[next] === UNPLAYABLE) {        
        next = this.goOne(next, delta);
      }
      
      this.setState({
        activeCell: next
      });

    },
    
    componentDidMount: function() {
      window.addEventListener('dblclick', this.toggleDirection);
      window.addEventListener('keydown', this.handleKeyDown);
    },

    componentWillUnmount: function() {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('dblclick', this.handleDoubleClick);
    },

    handleDoubleClick: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggleDirection();
    },

    toggleDirection: function() {
      this.setState({direction: this.state.direction == DIRECTIONS.ACROSS ? DIRECTIONS.DOWN : DIRECTIONS.ACROSS});
    },
    
    render: function() {
      var size = this.props.size,
          numbers = this.props.numbered,
          count = 1,
          currentWord = this.currentWord();
      
      for (var k in numbers) {
        numbers[k] = count++;
      }
      return (
        <div onKeyUp={this.handleKeyUp} className="cell-list">
          {this.props.values.split("").map(function(cell, id) {    

            return (
              <Cell onClick={this.makeActive.bind(this, id)}
                    number={numbers[id + 1]}
                    focused={currentWord.indexOf(id) > -1}
                    selected={id == this.state.activeCell}
                    key={id}
                    value={this.state.cellValues[id]}
                    playable={cell !== UNPLAYABLE}
                    correctValue={cell}
                    size={100 / size} />);
           }, this)}

          <div className="clearfix"></div>
        </div>
      );
    }
  });
}(React, module));
