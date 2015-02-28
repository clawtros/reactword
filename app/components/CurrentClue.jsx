(function(React, module) {
    var DIRECTIONS = require('../models/Directions.js');
    
    module.exports = React.createClass({
        render: function() {
            return (
                <h3>{this.props.clue.clue_number}{this.props.direction == DIRECTIONS.ACROSS ? 'A' : 'D'} {this.props.clue.clue_text}</h3>
            );
        }
    });
}(React, module));