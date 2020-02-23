import * as React from 'react';
import { IWikiItem } from '../types';


interface ISearchListProps {
    results: Array<IWikiItem>
}

export default class SearchList extends React.Component<ISearchListProps, {}>{
    render(){
        return <div>{this.props.results.map((item, index) => <a className="box list-item"
        style={{animationDelay: `${index*0.2}s`}}
        href={`https://en.wikipedia.org/?curid=${item.pageid}`} key={item.pageid}  target="_blank">
            <ListItem title={item.title} snippet={item.snippet}/>
            </a>)}</div>
    }
}

interface IListItemProps {
    title: string,
    snippet: string
}

function ListItem(props: IListItemProps): JSX.Element {
    return (<article className="media">
        <div className="media-content">
            <h3>{props.title}</h3>
            <p dangerouslySetInnerHTML={{__html: props.snippet}}></p>
        </div>
    </article>);
}