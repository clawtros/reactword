(function(React, module, undefined) {
  var Cells = require('./Cells.jsx'),
      ClueList = require('./ClueList.jsx');
      
  module.exports = React.createClass({

    getInitialState: function() {
      return {
        activeCell: undefined
      };
    },
    
    handleMakeActive: function(cellId) {      
      this.setState({'activeCell': cellId});
    },
    
    handleClueClick: function(clueId, direction) {
      this.setState({activeClue: clueId});
    },
    
    render: function() {
      return (
        <div className="row">
          <div className="col-xs-8">
            <h1>{this.props.title}</h1>
            <Cells numbered={this.props.numbered}
                   makeActive={this.handleMakeActive}
                   activeCell={this.state.activeCell}
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
