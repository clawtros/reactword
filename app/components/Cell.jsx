(function(React, module, undefined) {
  module.exports = React.createClass({
    render: function() {
      var fontSize = this.props.size * 0.35,
          style = {
            width: this.props.size + "%",
            fontSize: fontSize + 'vmin',
            paddingTop: this.props.size + "%"
          },
          classes = React.addons.classSet({
            'cell': true,
            'incorrect': this.props.value && this.props.highlightErrors && this.props.value.toLowerCase() != this.props.correctValue.toLowerCase(),
            'input-cell': this.props.selected,
            'flex-centered': true,
            'focused': this.props.focused === true,
            'unplayable': !this.props.playable
          });
      return (
        <div style={style} className={classes}>          
          <div className="cell-number">{this.props.number}</div>
          <div onClick={this.props.onClick}
               className="cell-content flex-centered">
            {this.props.playable ? (this.props.reveal ? this.props.correctValue : this.props.value) : ""} 
          </div>
        </div>
      );
    }
  });
}(React, module));
