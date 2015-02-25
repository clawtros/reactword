(function (React, module, undefined) {
  module.exports = React.createClass({
    
    render: function () {
      window.cloos = this.props.clues;
      var templated = Object.keys(this.props.clues).map(function(clueId) {
        var clue = this.props.clues[clueId];
        return (
          <li className="clue-container">
            <div className="clue-phrase">
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
