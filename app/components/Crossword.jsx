(function(React, module, undefined) {
  var Cells = require('./Cells.jsx'),
      ClueList = require('./ClueList.jsx'),
      CurrentClue = require('./CurrentClue.jsx'),
      CrosswordModel = require('../models/CrosswordModel.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = require('../models/Directions.js');

  module.exports = React.createClass({

    getInitialState: function() {
      return {
        showKeyboard: false,
        revealEverything: false,
        highlightErrors: false,
        activeCell: undefined,
        direction: DIRECTIONS.ACROSS,
      };
    },

    getWordNumber: function(cell, direction) {
      // get the minimum cell from the word
      return this.props.rawData.numbered[
        Math.min.apply(
          this,
          this.props.model.wordAt(cell, direction)
        ) + 1]
    },

    getClueNumbers: function(direction) {
      return Object.keys(direction === DIRECTIONS.ACROSS ? this.props.rawData.clues.Across : this.props.rawData.clues.Down)
                   .map(function(e) { return parseInt(e, 10) });
    },

    handleSkipWord: function(delta) {
      var currentWordNumber = this.getWordNumber(this.state.activeCell, this.state.direction),
          l = this.getClueNumbers(this.state.direction),
          d = delta || 1,
          index = l.indexOf(currentWordNumber) + d,
          // TODO: remove this monstrosity
          target = l[index < 0 ? l.length - 1 : (index >= l.length ? l.length - index : index)];
      console.log(index, target, this.state.activeCell, this.state.direction);
      this.handleClueClick(target, this.state.direction);
    },

    toggleDirection: function() {
      this.state.direction = this.state.direction == DIRECTIONS.ACROSS ? DIRECTIONS.DOWN : DIRECTIONS.ACROSS;
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
      this.handleMakeActive(this.props.model.lookupTable.numberToCell[clueId] - 1);
    },

    toggleHighlightErrors: function() {
      this.setState({
        highlightErrors: !this.state.highlightErrors
      });
    },

    toggleRevealEverything: function() {
      this.setState({
        revealEverything: !this.state.revealEverything
      });
    },

    toggleKeyboard: function() {
      if (this.state.activeCell === undefined) {
        this.handleSkipWord();
      }
      this.setState({
        showKeyboard: !this.state.showKeyboard
      });
    },

    getClue: function(number, direction) {
      var clues = direction == DIRECTIONS.ACROSS ?
                               this.props.rawData.clues.Across :
                               this.props.rawData.clues.Down;
      return clues[number] || {};
    },

    getCurrentClueNumber: function() {
      return this.state.direction == DIRECTIONS.ACROSS ?
                                     this.state.activeAcrossClue :
                                     this.state.activeDownClue;
    },

    closeKeyboard: function() {
      this.setState({
        showKeyboard: false
      });
    },
    
    render: function() {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              {this.state.activeCell !== undefined ? 
              <CurrentClue direction={this.state.direction}
               clue={this.getClue(this.getCurrentClueNumber(), this.state.direction)}
               />
                              : <h3 className="current-clue">Random {this.props.size} x {this.props.size} Crossword</h3> }
                           
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Cells numbered={this.props.numbered}
                     highlightedCells={this.props.model.wordAt(this.state.activeCell, this.state.direction)}
                     highlightErrors={this.state.highlightErrors}
                     revealEverything={this.state.revealEverything}
                     makeActive={this.handleMakeActive}
                     activeCell={this.state.activeCell}
                     direction={this.state.direction}
                     skipWord={this.handleSkipWord}
                     showKeyboard={this.state.showKeyboard}
                     closeKeyboard={this.closeKeyboard}
                     toggleDirection={this.toggleDirection}
                     values={this.props.cells}
                     size={this.props.size}/>
              <label>
                <input type="checkbox" onChange={this.toggleHighlightErrors} checked={this.state.highlightErrors}/> Show Errors
              </label>
              <label>
                <input type="checkbox" onChange={this.toggleRevealEverything} checked={this.state.revealEverything}/> Reveal Answers
              </label>
              <label className="keyboard-label">
                <input type="checkbox" onChange={this.toggleKeyboard} checked={this.state.showKeyboard}/> Show Keyboard
              </label>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className={"col-xs-6 col-md-12"}>
                  <ClueList direction="Across"
                            directionEnum={DIRECTIONS.ACROSS}
                            activeClue={this.state.activeAcrossClue}
                            clues={this.props.clues.Across}
                            handleClueClick={this.handleClueClick}/>
                </div>
                <div className={"col-xs-6 col-md-12"}>
                  <ClueList direction="Down"
                            directionEnum={DIRECTIONS.DOWN}
                            activeClue={this.state.activeDownClue}
                            clues={this.props.clues.Down}
                            handleClueClick={this.handleClueClick}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
}(React, module));
