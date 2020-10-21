import React, {Component} from 'react';
class Product extends Component{
    render(){
        return(
            <div>
                <div>
                    <h3>{this.props.name}</h3>
                    <p>
                        {this.props.price}
                    </p>
                    <p>
                        <a class="btn btn-primary">Mua</a>
                    </p>
                </div>
            </div>
        )
    }
    
}
export default Product;