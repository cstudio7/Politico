import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uploadParam from './uploadParam';
export default class uploadImage extends Component {
  constructor(props) {
    super();
  }
  upload() {
    const widgetOpener = document.getElementById('upload_widget_opener');
    let image;
    // eslint-disable-next-line no-undef
    cloudinary.applyUploadWidget(widgetOpener, uploadParam, (error, result) => {
      if (result && result.event === 'success') {
        /*Get image Url*/
        image = result.info.url;
        this.props.getUrl(image);
      }
    });
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
    script.async = true;
    script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  }
  scriptLoaded() {
    this.upload();
  }
  render() {
    return (
      <Fragment>
        <p className="alignTxtRight">
          <button
            id="upload_widget_opener"
            className="button_3"
            onClick={this.upload}
          >
          {this.props.title || 'Upload Image'}
          </button>
        </p>
      </Fragment>
    );
  }
}
uploadImage.propTypes = {
  getUrl: PropTypes.func.isRequired,
  title: PropTypes.string
};
