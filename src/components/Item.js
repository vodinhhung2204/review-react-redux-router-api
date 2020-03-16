import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    deleteItem = (id) => {
        if (confirm('Suy nghi ki chua??')) { //eslint-disable-line
            this.props.delete_item(id)
        }
    }
    render() {
        var { dataItem } = this.props;
        var classNameStatus = "badge badge-primary"
        var status = 'Còn Hàng'
        if (dataItem.status === "false") {
            status = 'Hết Hàng';
            classNameStatus = "badge badge-danger"
        }
        return (
            <tr>
                <td>{dataItem.id}</td>
                <td>{dataItem.name}</td>
                <td>{dataItem.price}</td>
                <td><span className={classNameStatus}>{status}</span></td>
                <td>
                    <Link to={`/products/edit/${dataItem.id}`} type="button" className="btn btn-primary mr-2" >Sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>this.deleteItem(dataItem.id)}>Xóa</button>
                </td>
            </tr>
        );
    }

}

export default ListItem;
