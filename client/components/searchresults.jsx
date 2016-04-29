import React, {Component} from 'react';
import SearchItem from './searchitem';


export default class SearchResults extends Component {

  populateResults(){
    // console.log(this.props.results.data);
    return _.reduce(this.props.results.data, (accum, item)=>{
      console.log(item.clone_url);
      let html =(
        <SearchItem description={item.description} repo_url={item.clone_url}/>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (
      <div>
      Results!
      {this.populateResults()}
      </div>
    );
  }
}


// git_url: "git://github.com/reactjs/redux.git"
