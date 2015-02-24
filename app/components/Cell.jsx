(function(React, module, undefined) {
  module.exports = React.createClass({
    getInitialState: function() {
      return {
        focused: false,
        value: this.props.value
      };
    },

    handleMouseEnter: function() {
      this.setState({ focused: true });
    },
    
    handleMouseExit: function() {
      this.setState({ focused: false });
    },

    makeActive: function() {
      
    },
    
    render: function() {
      var style = {
        width: this.props.size + "%",
        fontSize: (this.props.size - 3) + "vw",
        paddingTop: this.props.size + "%"
      },
          cx = React.addons.classSet,
          isUnplayable = this.state.value === "#",
          classes = cx({
            'cell': true,
            'flex-centered': true,
            'focused': this.state.focused === true,
            'unplayable': isUnplayable
          });
      
      return (
        <div onMouseEnter={this.handleMouseEnter}
             onMouseLeave={this.handleMouseExit}
             onClick={this.makeActive}
             style={style} className={ classes }>
          <div  className="cell-content flex-centered">
            {isUnplayable ? "" : this.state.value}
          </div>
        </div>
      );
    }
  });
}(React, module));
