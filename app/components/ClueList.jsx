(function (React, module, undefined) {
  module.exports = React.createClass({
    handleClick: function(clueId) {
      this.props.handleClueClick(clueId, this.props.directionEnum);
    },
    
    render: function () {
      console.log(this.props.activeClue);
      
      var activeClue = this.props.activeClue,
          templated = Object.keys(this.props.clues).map(function(clueId) {
            var clue = this.props.clues[clueId],
                classes = React.addons.classSet({
                  'clue-container': true,
                  'active-clue': parseInt(clueId) === activeClue
                });
            return (
              <li className={classes} key={this.props.direction + "_" + clueId}>
                <div className="clue-phrase" onClick={this.handleClick.bind(this, clueId, this.props.directionEnum)}>
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
