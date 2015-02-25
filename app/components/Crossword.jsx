(function(React, module, undefined) {
    var Cells = require('./Cells.jsx');
    module.exports = React.createClass({
        render: function() {
            return (
                <Cells numbered={this.props.numbered} values={this.props.cells} size={this.props.size}/>
            );
        }
    });
}(React, module));