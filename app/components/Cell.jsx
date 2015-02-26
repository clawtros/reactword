(function(React, module, undefined) {
  module.exports = React.createClass({
    getInitialState: function() {

      console.log(this.props);
      return {
        value: this.props.value
      };
    },
    
    render: function() {
      var fontSize = this.props.size * 0.3,
          style = {
            width: this.props.size + "%",
            fontSize: fontSize + 'vw',
            paddingTop: this.props.size + "%"
          },
          numStyle = {
            fontSize: this.props.size + 'pt'
          },
          classes = React.addons.classSet({
            'cell': true,
            'incorrect': this.props.value && this.props.value.toLowerCase() != this.props.correctValue.toLowerCase(),
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
