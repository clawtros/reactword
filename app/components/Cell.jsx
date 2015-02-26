(function(React, module, undefined) {
  module.exports = React.createClass({
    getInitialState: function() {
      return {
        value: this.props.value
      };
    },
    
    render: function() {
      var fontSize = 100 / this.props.size,
          style = {
            width: this.props.size + "%",
            fontSize: fontSize + 'pt',
            paddingTop: this.props.size + "%"
          },
          numStyle = {
            fontSize: this.props.size + 'pt'
          },
          classes = React.addons.classSet({
            'cell': true,
            'input-cell': this.props.selected,
            'flex-centered': true,
            'focused': this.props.focused === true,
            'unplayable': !this.props.playable
          });
      
      return (
        <div style={style} className={classes}>          
          <div style={numStyle} className="cell-number">{this.props.number}</div>
          <div onClick={this.props.onClick}
               className="cell-content flex-centered">
            {this.props.playable ? this.props.value : ""}
          </div>
        </div>
      );
    }
  });
}(React, module));
