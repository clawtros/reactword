(function (React, module, undefined) {
  module.exports = React.createClass({
    handleClick: function(clueId) {
      this.props.handleClueClick(clueId, this.props.directionEnum);
    },

    componentDidUpdate: function() {
      var node = this.getDOMNode(),
          container = $(node).find('.clue-list-container'),
          activeClue = container.find('.active-clue'),
          newTop = activeClue.offset().top - container.offset().top - container.height() / 2 + activeClue.height() / 2;
      container.animate({ scrollTop : "+=" + newTop}, 150);
    },
    
    render: function () {
      var activeClue = this.props.activeClue,
          templated = Object.keys(this.props.clues).map(function(clueId) {
            var clue = this.props.clues[clueId],
                classes = React.addons.classSet({
                  'clue-container': true,
                  'active-clue': parseInt(clueId) === activeClue
                });
            return (
              <li className={classes}  onClick={this.handleClick.bind(this, clueId, this.props.directionEnum)} key={this.props.direction + "_" + clueId}>
                <div className="clue-phrase">
                  <div className="clue-number">{clue.clue_number}</div>
                  {clue.clue_text}
                </div>
              </li>
            )
          }, this);
      
      return <div>
       <h2 className="clue-list-header">{this.props.direction}</h2>
       <div className="clue-list-container">
         <ul className="clue-list">
           {templated}
         </ul>
       </div>
      </div>
    }
  });
}(React, module));
