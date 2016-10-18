import React from 'react';
import {observer} from 'mobx-react';

import GithubStore from '../stores/GithubStore';
import CardItem from './CardItem';
import TableHeader from './TableHeader';


@observer
class Card extends React.Component {
  render() {
    let taskStyle = {
      "font-family"    : "arial",
      "border-collapse": "collapse",
      "width"          : "50%"
    };
    let profiles  = GithubStore.profiles;
    return (
      <table style={taskStyle}>
        <TableHeader/>
        <tbody>
        {profiles.map((profile, index) => <CardItem key={index} profile={profile}/>)}
        </tbody>
      </table>
    )
  }
}

export default Card;