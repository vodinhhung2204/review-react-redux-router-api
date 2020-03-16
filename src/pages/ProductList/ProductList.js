import React, { Component } from 'react';
import ListItem from './../../components/ListItem'
import Item from './../../components/Item'
import { connect } from 'react-redux'
import * as action from '../../actions/action'
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  Item = (products) => {
    var data = null;
    if (products.length > 0) {
      data = products.map((product, index) => {
        return <Item
          dataItem={product}
          key={index}
          delete_item= {this.props.delete_item}
        >
        </Item>
      })
    }
    return data;
  }
  componentDidMount() {
    this.props.act_Request_Products();
  }
  render() {
    return (
      <div className="container">
        <h1>LIST PRODUCT</h1>
        <ListItem Item={this.Item(this.props.products)}></ListItem>
      </div>
    );
  }

}
const mapStateToProp = state => {
  return {
    products: state.products,
  }
}
const mapDispatchToprop = (dispatch,prop)=>{
  return {
    act_Request_Products:(products)=>{
      dispatch(action.act_Request_Products(products))
    },
    delete_item :(id)=>{
      dispatch(action.act_request_detele_item(id))
    }
  }

}
export default connect(mapStateToProp, mapDispatchToprop)(ProductList);
