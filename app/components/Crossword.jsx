(function(React, module, undefined) {
  var Cells = require('./Cells.jsx'),
      ClueList = require('./ClueList.jsx'),
      CrosswordModel = require('../models/CrosswordModel.js'),
      UNPLAYABLE = "#",
      DIRECTIONS = require('../models/Directions.js');
  
  module.exports = React.createClass({

    buildLookupObject: function(cells, size) {
      
    },
    
    getInitialState: function() {
      return {
        activeCell: undefined,
        direction: DIRECTIONS.ACROSS
      };
    },

    toggleDirection: function() {
      this.setState({direction: this.state.direction == DIRECTIONS.ACROSS ? DIRECTIONS.DOWN : DIRECTIONS.ACROSS});
    },
    
    componentDidMount: function() {
      console.log(this.model);
    },
    
    handleMakeActive: function(cellId) {      
      this.setState({
        activeCell: cellId
      });
    },
    
    handleClueClick: function(clueId) {
      this.setState({
        activeClue: clueId
      });
    },
    
    render: function() {
      return (
        <div className="row">
          <div className="col-xs-8">
            <h1>{this.props.title}</h1>
            <Cells numbered={this.props.numbered}
                   highlightedCells={this.props.model.wordAt(this.state.activeCell, this.state.direction)}
                   makeActive={this.handleMakeActive}
        activeCell={this.state.activeCell}
                   direction={this.state.direction}
                   toggleDirection={this.toggleDirection.bind(this)}
                   values={this.props.cells}
                   size={this.props.size}/>
          </div>
          <div className="col-xs-4">
            <ClueList direction="Across"
                      activeClue={this.state.activeClue}
                      clues={this.props.clues.Across}
                      handleClueClick={this.handleClueClick}/>
            <ClueList direction="Down"
                      activeClue={this.state.activeClue}
                      clues={this.props.clues.Down}
                      handleClueClick={this.handleClueClick}/>
          </div>
        </div>
      );
    }
  });
}(React, module));
