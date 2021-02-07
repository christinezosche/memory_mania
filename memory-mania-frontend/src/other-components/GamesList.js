import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GamesList = (props) => {
  let allGames = props.games
  
  const renderCreatorName = (object) => {
    if (object.id >= 5) {
      return ` | Created by: ${object.creator}`
    }
  }
  const renderAllGames = (gameArray) => {
    let array = [...gameArray] 
    return (<div className='list'>
    <h3 style={styles.h}>All Games</h3>
    {array.map(object => <p key={gameArray.indexOf(object)}><Link to={`/games/${gameArray.indexOf(object)}`}>{object.name} Memory</Link>{renderCreatorName(object)}</p>)}
    </div>)
  }

  const renderTopGames = (gameArray) => {
    let array = [...gameArray]
    array.sort((a, b) => {
        return b.times_played - a.times_played
      });
    let shortArray = array.slice(0,15)
    return (
    <div className='list'>
    <h3 style={styles.h}>Most Played Games</h3>
    
    {shortArray.map(object => <p key={gameArray.indexOf(object)}><Link to={`/games/${gameArray.indexOf(object)}`}>{object.name} Memory</Link>{renderCreatorName(object)}</p>)}
    
    </div>
    )
}

const renderNewGames = (gameArray) => {
  let array = [...gameArray]
  array.sort((a, b) => {
      return b.id - a.id
    });
  let shortArray = array.slice(0,15)
  return (
  <div className='list'>
  <h3 style={styles.h}>Newest Games</h3>
  
  {shortArray.map(object => <p key={gameArray.indexOf(object)}><Link to={`/games/${gameArray.indexOf(object)}`}>{object.name} Memory</Link>{renderCreatorName(object)}</p>)}
  
  </div>
  )
}

  return (
      <div>

        <Container fluid style={styles.list}>
        <Row>
            <Col>{renderTopGames(allGames)}</Col>
            <Col>{renderNewGames(allGames)}</Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs={8}>{renderAllGames(allGames)}</Col>
            <Col></Col>
        </Row>
        </Container>
    
      </div>

  );
};

const styles = {
  list: {
    padding: '1rem',
    textAlign: "left"

  },
  h: {
    textAlign: "center",
  }
}
 
export default GamesList;