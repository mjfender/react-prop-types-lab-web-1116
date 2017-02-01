const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Properties:</p>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Speed: {this.props.speed}</li>
          <li>Rockets: {this.props.hasRockets}</li>
          <li>Color: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight(props, propName, component) {
      if (!props[propName]) {
        return new Error('Weight must be')
      }   
      
      if (typeof props[propName] != 'number') {
        return new Error('Weight is not a number')
      }
      if (props[propName] < 80 || props[propName] > 300) {
        return new Error('Weight must be great than 80 and less than 300.')
      }
    }
};


module.exports = Product;