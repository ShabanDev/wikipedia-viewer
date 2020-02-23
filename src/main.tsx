import * as React from 'react';
import * as ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

import { 
    IWikiItem
} from './types';

import './style.sass';

interface IAppState {
    query: string,
    results: Array<IWikiItem>
}

class App extends React.Component<{}, IAppState> {
    constructor(props: Readonly<{}>){
        super(props);
        this.state = {
            query: '',
            results: []
        }

        this.searchBarChange = this.searchBarChange.bind(this);
    }

    searchBarChange(event: React.ChangeEvent<HTMLInputElement>){
       this.setState({
           query: event.target.value
       });

       if(event.target.value){
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURI(event.target.value)}&format=json&origin=*&prop=info&inprop=url`).then((response) => response.json()).then((results) => {
            console.log(results);
            this.setState({
                results: results.query.search
            });
        })
       }
       else {
           this.setState({
               results: []
           });
       }
       
    }
    
    render(){
        return <section className="hero is-dark is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        WikiViewer
                    </h1>
                    <div className="columns">
                        <div className="column is-5 is-offset-3">
                            <SearchBar onSearchBarChange={this.searchBarChange} />
                        </div>
                        <div className="column is-1">
                            <a className="button" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Random</a>
                        </div>
                    </div>
                    <SearchList results={this.state.results} />
                </div>
            </div>
        </section>
    }
}


ReactDOM.render(<App />, document.getElementById('app'));