import React, { Component } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper'
import Form from './components/Form'
import './index.css'

const initialStateItems = [
    {
        image: 'http://tateamericas.org/site/wp-content/uploads/2017/07/kelly.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'http://tateamericas.org/site/wp-content/uploads/2017/07/kelly.jpg',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'http://tateamericas.org/site/wp-content/uploads/2017/07/kelly.jpg',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'http://tateamericas.org/site/wp-content/uploads/2017/07/kelly.jpg',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },

]

class App extends Component {

    state = {
        items: [...initialStateItems]

    }

    newItem = {

        image: '',
        name: '',
        description: '',
        twitterLink: '',

    }

    addItem = (e) => {

        e.preventDefault()

        const { name, value } = e.target

        if (name === "name") {

            this.newItem.name = value

        } else if (name === "link") {

            this.newItem.twitterLink = value

        } else if (name === "description") {

            this.newItem.description = value

        } else if (name === "image") {

            this.newItem.image = value

        }

    }

    handleState = () => {

        this.state.items.push(this.newItem)


        this.setState({

            items: this.state.items
        })

    }

    render() {



        return (

            <>
                <div className="wrapper">
                    <ListWrapper items={this.state.items} />
                    <Form submitFn={this.addItem} handle={this.handleState} />
                </div>


            </>

        )
    }

}

export default App;
