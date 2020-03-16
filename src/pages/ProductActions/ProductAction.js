import React, { Component } from 'react';
import callAPI from '../../utils/apiCaller'
import * as action from '../../actions/action'
import { connect } from 'react-redux'
class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      status: ''
    }
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.act_get_data_to_edit(id)
    }
  }
  componentWillReceiveProps(nextprops) {
    console.log(nextprops.dataProduct_edit)
    this.setState({
      id: nextprops.dataProduct_edit.id,
      name: nextprops.dataProduct_edit.name,
      price: nextprops.dataProduct_edit.price,
      status: nextprops.dataProduct_edit.status ? nextprops.dataProduct_edit.status : 'false'
    })
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  Submit = () => {
    var product = this.state
    var { history } = this.props
    if (this.state.id !== '') {
      this.props.act_update_item_request(product)
      history.push("/products")
    } else {
      this.props.act_request_add_item(product)
      history.push("/products")
    }
  }
  render() {
    var { name, price, status } = this.state;
    return (
      <div class="container">
        <h1>PRODUCT ACTION</h1>
        <div class="form-group row">
          <label class="col-sm-1" >Tên</label >
          <input type="text"
            class="form-control col-sm-5"
            name="name"
            value={name}
            onChange={this.onChange} />
        </div>
        <div class="form-group row">
          <label class="col-sm-1">Gía</label>
          <input type="text"
            class="form-control col-sm-5"
            name="price"
            value={price}
            onChange={this.onChange} />
        </div>
        <div class="form-group row">
          <label class="col-sm-2">Tình trạng</label>
          <div class="form-check">
            <label class="form-check-label ">
              <input type="radio"
                class="form-check-input"
                name="status"
                value="true"
                checked={status === "true" ? true : false}
                onChange={this.onChange} /><span>Còn hàng</span>
              <input type="radio"
                class="form-check-input ml-4"
                name="status"
                value="false"
                checked={status === "false" ? true : false}
                onChange={this.onChange} /><span class="ml-5">Hết hàng</span>
            </label>
          </div>
        </div>
        <button type="button" class="btn btn-primary" onClick={this.Submit}>Add</button>
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    dataProduct_edit: state.item
  }
}
const mapDispatchToProp = (dispatch, props) => {
  return {
    act_request_add_item: (products) => {
      dispatch(action.act_request_add_item(products))
    },
    act_get_data_to_edit: (id) => {
      dispatch(action.get_data_to_edit_request(id))
    },
    act_update_item_request: product =>{
      dispatch(action.update_item_request(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(ProductAction);
