(function(React, module, undefined) {
    var Cell = require('./Cell.jsx');
    
    module.exports = React.createClass({
        render: function() {
            var size = this.props.size,
            templated = this.props.values.split("").map(function(cell, id) {
                return <Cell key={id} value={cell} size={100 / size} />;
            });
            return (
                <div className="cell-list">
                {templated}
                <div className="clearfix"></div>
                </div>
            );
        }
    });
}(React, module));
