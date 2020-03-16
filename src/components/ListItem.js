import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ListItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12 mb-2">
                        <div className="card col-xs">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <div className="card-text">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên</th>
                                                <th>Gía</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.Item}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/products/add">
                        <button type="button" className="btn btn-primary ml-auto mr-5">
                            Them san pham
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default ListItem;
