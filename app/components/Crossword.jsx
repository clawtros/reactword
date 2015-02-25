(function(React, module, undefined) {
    var Cells = require('./Cells.jsx'),
    ClueList = require('./ClueList.jsx');
    module.exports = React.createClass({
        render: function() {
            return (
                <div className="row">
                  <div className="col-xs-8">
                    <h1>{this.props.title}</h1>
                    <Cells numbered={this.props.numbered} values={this.props.cells} size={this.props.size}/>
                  </div>
                  <div className="col-xs-4">
                    <ClueList direction="ACROSS" clues={this.props.clues.Across}/>
                    <ClueList direction="DOWN" clues={this.props.clues.Down}/>
                  </div>
                </div>
            );
        }
    });
}(React, module));
