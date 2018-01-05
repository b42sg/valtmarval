import React from 'react'
import storage from 'store'
import { Provider } from 'react-redux'
import { withStyles } from 'material-ui'
import { subDays, subSeconds } from 'date-fns'

import App from './containers/App'
import { createStore } from './store'
import { users } from './ducks'

const styles = () => {
  const reset = {
    margin: 0,
    padding: 0
  }

  return {
    '@global': {
      html: reset,
      body: reset
    }
  }
}

const defaultInitialState = {
  messages: [
    {
      id: 0,
      by: users.ME,
      text: 'Gi meg en markedsoppdatering',
      date: subDays(subSeconds(new Date(), 400), 3)
    },
    {
      id: 1,
      by: users.BOT,
      text: 'Alle dine mål er i rute basert på dine behov. Len deg tillbake og ta et glass Amarone',
      date: subDays(subSeconds(new Date(), 300), 3)
    },
    {
      id: 2,
      by: users.ME,
      text: 'Gi meg en markedsoppdatering',
      date: subDays(subSeconds(new Date(), 200), 3)
    },
    {
      id: 3,
      by: users.BOT,
      text: 'Hovedindeksen falt 1.3 prosent i november, og vi fikk den første måneden med kursfall siden juni',
      date: subDays(subSeconds(new Date(), 100), 3)
    }
  ]
}
const storedInitialState = storage.get('valmarval-store')
const initialState = storedInitialState || defaultInitialState

const store = createStore(initialState)

const ValtMarVal = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default withStyles(styles)(ValtMarVal)
