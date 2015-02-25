(function(React, module, undefined) {
  module.exports = React.createClass({
    getInitialState: function() {
      return {
        value: this.props.value
      };
    },

    handleMouseEnter: function() {
      this.setState({ focused: true });
    },
    
    handleMouseExit: function() {
      this.setState({ focused: false });
    },
    
    render: function() {
      var style = {
        width: this.props.size + "%",
        fontSize: (this.props.size - 3) + "vw",
        paddingTop: this.props.size + "%"
      },
          numStyle = {
            fontSize: (this.props.size * 0.25) + 'vw'
          },
          cx = React.addons.classSet,
          classes = cx({
            'cell': true,
            'input-cell': this.props.selected,
            'flex-centered': true,
            'focused': this.props.focused === true,
            'unplayable': !this.props.playable
          });
      
      return (
        <div style={style} className={ classes }>
          
          <div style={numStyle} className="cell-number">{this.props.number}</div>
          <div onClick={this.props.onClick}
               className="cell-cotent flex-centered">
            {this.props.playable ? this.props.value : ""}
          </div>
        </div>
      );
    }
  });
}(React, module));
