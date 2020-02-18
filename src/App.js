import React, { Component } from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper'
import Form from './components/Form/Form'
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
        items: [...initialStateItems],

    }


    addItem = (e) => {

        e.preventDefault()
        const { target } = e

        const newItem = {

            name: target[0].value === "" ? null : target[0].value,
            twitterLink: target[1].value,
            image: target[2].value,
            description: target[3].value,

        }

        console.log(newItem)
        console.log(newItem.image === true)

        // newItem.image ? console.log("prawda") : console.log("falsz")

        this.setState(prevState => ({

            items: [...prevState.items, newItem]

        }))

        e.target.reset()
    }


    render() {
        return (
            <div className="wrapper">
                <ListWrapper items={this.state.items} />
                <Form submitFn={this.addItem} />
            </div>
        )
    }
}

export default App;
