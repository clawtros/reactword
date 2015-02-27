(function(React, module, undefined) {

  var Cell = require('./Cell.jsx'),
      cw = require('../models/Crossword.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = require('../models/Directions.js');

  module.exports = React.createClass({
    getInitialState: function() {
      return {
        direction: DIRECTIONS.ACROSS,
        keyIsDown: false,
        cellValues: []
      }
    },
    
    makeActive: function(id) {
      if (this.props.values[id] !== UNPLAYABLE) {
        this.props.makeActive(id);
      }
    },
    
    handleKeyDown: function(e) {

      if (this.props.activeCell !== undefined) {
        
        var values = this.state.cellValues,
            direction = this.props.direction;
            
        if (this.keysDown > 1) {
          this.go(1);
        }

        if (e.which == 8) {
          e.preventDefault();
          e.stopPropagation();
          
          if (values[this.props.activeCell] == undefined) {
            this.go(-1);
            values[this.props.activeCell] = undefined;
          } else {
            values[this.props.activeCell] = undefined;
            this.go(-1);
          }

        }

        
        if (e.which >= 65 && e.which <= 90 && !e.metaKey && !e.ctrlKey) {
          values[this.props.activeCell] = String.fromCharCode(e.which);
          this.go(1);
        }

        if (e.which >= 37 && e.which <= 40) {
          if (e.shiftKey) {
            switch (e.which) {
              case 37:
                this.go(-1, DIRECTIONS.ACROSS);
                break;
              case 39:
                this.go(1, DIRECTIONS.ACROSS);
                break;              
              case 38:
                this.go(-1, DIRECTIONS.DOWN);
                break;
              case 40:
                this.go(1, DIRECTIONS.DOWN);
                break;
            }            
          } else {
            switch (e.which) {
              case 37:
                if (direction == DIRECTIONS.ACROSS) {
                  this.go(-1);
                } else {
                  this.props.toggleDirection();
                }
                break;
              case 39:
                if (direction == DIRECTIONS.ACROSS) {
                  this.go(1);
                } else {
                  this.props.toggleDirection();
                }
                break;              
              case 38:
                if (direction == DIRECTIONS.DOWN) {
                  this.go(-1);
                } else {
                  this.props.toggleDirection();
                }
                break;
              case 40:
                if (direction == DIRECTIONS.DOWN) {
                  this.go(1);
                } else {
                  this.props.toggleDirection();
                }
                break;
            }
          }
        }

        this.setState({
          direction: direction,
          cellValues: values
        });
        
      }
    },
                                     
    goOne: function(nextCell, delta, direction) {
      
      nextCell += (direction == DIRECTIONS.ACROSS ? 1 : this.props.size) * delta;

      if (nextCell >= this.props.values.length) {
        nextCell -= this.props.values.length;
      }
      
      if (nextCell < 0) {
        nextCell = this.props.values.length + nextCell;
      }
      
      return nextCell;
    },

    go: function(delta, direction) {
      var direction = direction || this.props.direction,
          initial = this.goOne(this.props.activeCell, delta, direction),
          next = initial;
      
      while (this.props.values[next] === UNPLAYABLE) {        
        next = this.goOne(next, delta, direction);
      }
      
      this.props.makeActive(next);
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
      this.props.toggleDirection();
    },
    
    render: function() {
      var size = this.props.size,
          numbers = this.props.numbered,
          count = 1,
          highlightedCells = this.props.highlightedCells;
      
      for (var k in numbers) {
        numbers[k] = count++;
      }
      return (
        <div className="cell-list">
        {this.props.values.split("").map(function(cell, id) {
            return (
              <Cell onClick={this.makeActive.bind(this, id)}
                    number={numbers[id + 1]}
                    focused={highlightedCells.indexOf(id) > -1}
              selected={id == this.props.activeCell}
              highlightErrors={this.props.highlightErrors}
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
