import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Rockets extends Component {
    constructor(){ 
       super();
       this.state = {
       items : [],
       visible: 10,
       error: false
     };
     this.loadMore = this.loadMore.bind(this);
    }
   
   loadMore(){
     this.setState((prev) => {
       return {visible: prev.visible + 10};
     });
   }
   
   
   componentDidMount(){
     fetch("https://api.spacexdata.com/v3/rockets").then(
         res => res.json()
       ).then(res => {
         this.setState({
           items: res
         });
       }).catch(error => {
         console.error(error);
         this.setState({
           error: true
         });
       });
   
     // axios.get('https://api.spacexdata.com/v3/rockets').then((response)=>{
     //   this.setState({
     //     rockets: response.data
     //   })
     // });
   }
   
   render() {
    return(
    <div>
      <h3>Latest Rockets</h3>
     {this.state.items.slice(0, this.state.visible).map((item, index) => {
      return(
              <div>
              <ListGroup flush key={item.id}>
              <ListGroupItem tag="a" href="#" key={item.id}>
                {item.rocket_name}
              </ListGroupItem>
              </ListGroup>
              </div>
              );
              })}
        <div>
        {this.state.visible < this.state.items.length &&
               <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
            }
        </div>
  </div>
  );
   }
   }
   
   export default Rockets;