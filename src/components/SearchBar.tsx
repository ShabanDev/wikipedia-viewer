import * as React from 'react';

interface ISearchBarProps {
    onSearchBarChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default class SearchBar extends React.Component<ISearchBarProps, {}> {
   render(){
       return <div className="wiki-search">
            <input type="text" className="input" onChange={this.props.onSearchBarChange} />
       </div>
   } 
}