import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


const Menu = () => {
    
        return (
            <div>
            <div>
            <Carousel>
            <Carousel.Item>
            <Card style={styles.card}>
            <Card.Img variant="top" src="https://media4.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif" style={styles.cardImage}/>
            <Card.Body>
            <Card.Title style={styles.h}><h3 style={styles.h}><Link to={'/games/0'}>GIF Memory</Link></h3></Card.Title>
            <Card.Text>
                Powered by GIPHY
            </Card.Text>
            </Card.Body>
            </Card>
            </Carousel.Item>

            <Carousel.Item>
            <Card style={styles.card}>
            <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2017/04/ny-times-logo.jpg" style={styles.cardImage}/>
            <Card.Body>
            <Card.Title style={styles.h}><h3 style={styles.h}><Link to={'/games/1'}>New York Times Top Stories Memory</Link></h3></Card.Title>
            <Card.Text>
                Photos from the top-read stories on NewYorkTimes.com
            </Card.Text>
            </Card.Body>
            </Card>
            </Carousel.Item>

            <Carousel.Item>
            <Card style={styles.card}>
            <Card.Img variant="top" src="https://media3.giphy.com/media/ktW8FqKodoPUk/giphy.gif?cid=ecf05e470q9gy7u3nkw5ygtwxjka89gwctmpshdctimse3mq&rid=giphy.gif" style={styles.cardImage}/>
            <Card.Body>
            <Card.Title style={styles.h}><h3 style={styles.h}><Link to={'/games/3'}>Cat Memory</Link></h3></Card.Title>
            <Card.Text>
                Powered by GIPHY
            </Card.Text>
            </Card.Body>
            </Card>
            </Carousel.Item>

            <Carousel.Item>
            <Card style={styles.card}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuJ-xgN0-HA8KK2N-4gX8prrEm_U7ogkvTQ&usqp=CAU" style={styles.cardImage}/>
            <Card.Body>
            <Card.Title style={styles.h}><h3><Link to={'/games/2'}>Trending TV & Movies Memory</Link></h3></Card.Title>
            <Card.Text>
                Powered by The Movie Database
            </Card.Text>
            </Card.Body>
            </Card>
            </Carousel.Item>
        </Carousel>
        </div>
        <div>
            <br></br>
        <h3><Link to={'/games/new'}>Create Your Own Game!</Link></h3>

        </div>
        </div>
        )

    }

    const styles = {
        card: {
          backgroundColor: 'rgb(36, 156, 192)',
          padding: '4rem',
          color: 'white'
        }
      }

const mapStateToProps = state => {
        return state
      }
     
export default connect(mapStateToProps)(Menu)