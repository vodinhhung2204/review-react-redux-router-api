import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
        <div className="container">
          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>KHÔNG TÌM THẤY TRANG</strong> 
          </div>
        </div>
    );
  }

}

export default NotFoundPage;
