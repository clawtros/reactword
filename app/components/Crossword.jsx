(function(React, module, undefined) {
  var Cells = require('./Cells.jsx'),
      ClueList = require('./ClueList.jsx'),
      CrosswordModel = require('../models/CrosswordModel.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = require('../models/Directions.js');
  
  module.exports = React.createClass({
    
    getInitialState: function() {
      return {
        highlightErrors: false,
        activeCell: undefined,
        direction: DIRECTIONS.ACROSS,
        
      };
    },

    handleSkipWord: function(delta) {
      var currentWordNumber = this.props.rawData.numbered[Math.min.apply(this, this.props.model.wordAt(this.state.activeCell, this.state.direction)) + 1],
          l = Object.keys(this.state.direction === DIRECTIONS.ACROSS ? this.props.rawData.clues.Across : this.props.rawData.clues.Down)
                    .map(function(e) { return parseInt(e, 10) }),
          d = delta || 1,
          target = l[l.indexOf(currentWordNumber) + d];
      this.handleClueClick(target, this.state.direction);
    },

    toggleDirection: function() {
      this.state.direction = this.state.direction == DIRECTIONS.ACROSS ? DIRECTIONS.DOWN : DIRECTIONS.ACROSS;
      // FIXME
      this.handleMakeActive(this.state.activeCell);
    },

    handleMakeActive: function(cellId) {
      this.setState({
        activeCell: cellId,
        activeDownClue: this.props.rawData.numbered[
          Math.min.apply(this, this.props.model.wordAt(cellId, DIRECTIONS.DOWN)) + 1
        ],
        activeAcrossClue: this.props.rawData.numbered[
          Math.min.apply(this, this.props.model.wordAt(cellId, DIRECTIONS.ACROSS)) + 1
        ]
      });
    },

    handleClueClick: function(clueId, direction) {
      this.state.direction = direction;
      // FIXME
      this.handleMakeActive(this.props.model.lookupTable.numberToCell[clueId] - 1);
      
    },

    toggleHighlightErrors: function() {
      this.setState({
        highlightErrors: !this.state.highlightErrors
      });
    },
    
    render: function() {
      return (
        <div className="row">
          <div className="col-xs-8">
            <Cells numbered={this.props.numbered}
                   highlightedCells={this.props.model.wordAt(this.state.activeCell, this.state.direction)}
                   highlightErrors={this.state.highlightErrors}
                   makeActive={this.handleMakeActive}
                   activeCell={this.state.activeCell}
                   direction={this.state.direction}
                   skipWord={this.handleSkipWord}
                   toggleDirection={this.toggleDirection}
                   values={this.props.cells}
                   size={this.props.size}/>
            <label>
              <input type="checkbox" onChange={this.toggleHighlightErrors} checked={this.state.highlightErrors}/> Highlight Errors
            </label>

          </div>
          <div className="col-xs-4">
            <ClueList direction="Across"
                      directionEnum={DIRECTIONS.ACROSS}
                      activeClue={this.state.activeAcrossClue}
                      clues={this.props.clues.Across}
                      handleClueClick={this.handleClueClick}/>
            <div className="small-vertical-space"></div>
            <ClueList direction="Down"
                      directionEnum={DIRECTIONS.DOWN}
                      activeClue={this.state.activeDownClue}
                      clues={this.props.clues.Down}
                      handleClueClick={this.handleClueClick}/>
          </div>
        </div>
      );
    }
  });
}(React, module));
