import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';

class ErrorModal extends React.Component {

  componentDidMount() {
    var {title, message} = this.props;
    var modalMarkup = <div id="error-modal" className="reveal tiny text-center" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p><button className="button hollow" data-close="">Okay</button></p>
    </div>;

    var $modal = $(ReactDomServer.renderToString(modalMarkup));
    $(ReactDom.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return <div></div>
  }
}

ErrorModal.defaultProps = {
  title: "Error"
};
ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

export default ErrorModal;