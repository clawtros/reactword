(function (React, module, undefined) {
  module.exports = React.createClass({
    handleClick: function(clueId) {
      this.props.handleClueClick(clueId, this.props.direction);
    },
    
    render: function () {
      var templated = Object.keys(this.props.clues).map(function(clueId) {
        var clue = this.props.clues[clueId],
            classes = React.addons.classSet({
              'clue-container': true,
              'active-clue': clueId === this.props.activeClue
            });
        return (
          <li className={classes} key={this.props.direction + "_" + clueId}>
            <div className="clue-phrase" onClick={this.handleClick.bind(this, clueId)}>
              <div className="clue-number">{clue.clue_number}</div>
              {clue.clue_text}
            </div>
          </li>
        )
      }, this);
      
      return <div>
       <h2>{this.props.direction}</h2>
       <div className="clue-list-container">
         <ul className="clue-list">
           {templated}
         </ul>
       </div>
      </div>
    }
  });
}(React, module));
