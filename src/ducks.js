import crud from 'redux-crud'
import fetch from 'isomorphic-fetch'
import locale from 'date-fns/locale/nl'
import { format } from 'date-fns'
import { get, assign, sortBy, reverse } from 'lodash'

const URL = 'https://cors-anywhere.herokuapp.com/' +
  'https://lt.morningstar.com/api/rest.svc/timeseries_price/swfjds4ofs?id=NO0010455694&idtype=ISIN&timeperiod=1'

const genId = () => (new Date().getTime() + '' + Math.random())

export const app = assign(
  crud.Map.reducersFor('app'),
  crud.actionCreatorsFor('app')
)

export const messages = assign(
  crud.List.reducersFor('messages'),
  crud.actionCreatorsFor('messages')
)

export const users = {
  ME: 1,
  BOT: 2
}

const incrLoading = () => (dispatch, getState) => {
  const loading = get(getState(), 'app.status.loading', 0)
  dispatch(app.updateSuccess({ id: 'status', loading: loading + 1 }))
}

const decrLoading = () => (dispatch, getState) => {
  const loading = get(getState(), 'app.status.loading', 1)
  dispatch(app.updateSuccess({ id: 'status', loading: loading - 1 }))
}

export const commands = {
  executeHi: data => (dispatch, getState) => {
    dispatch(incrLoading())

    setTimeout(() => {
      dispatch(messages.createSuccess({
        id: genId(),
        by: users.BOT,
        text: 'Hei jeg er Valto',
        date: new Date()
      }))

      dispatch(decrLoading())
    }, 500)
  },
  executeUpdate: data => (dispatch, getState) => {
    const msgId = genId()

    dispatch(messages.createStart({ id: msgId, date: new Date() }))
    dispatch(incrLoading())

    fetch(URL).then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res.text()
    }).then(text => {
      const xml = document.createElement('div')
      xml.innerHTML = text
      return xml
    }).then(xml => {
      const data = []

      xml.querySelectorAll('historydetail').forEach(detail => data.push({
        value: parseFloat(detail.querySelector('value').innerHTML, 10),
        endDate: new Date(detail.querySelector('enddate').innerHTML).getTime()
      }))

      return data
    }).then(data => {
      const sorted = reverse(sortBy(data, 'endDate'))
      const curr = sorted[0] || {}
      const prev = sorted[1] || {}

      const updown = curr.value > prev.value
        ? 'oppe'
        : curr.value < prev.value
          ? 'nede'
          : 'ingen endring'

      const diff = (Math.abs((prev.value - curr.value) / prev.value) * 100).toFixed(4)
      const change = diff > 0 ? ` ${diff}%` : ''
      const date = format(prev.endDate, 'ddd D, MMM YYYY', { locale })

      const message = `Sikker, dagens markedsverdi er ${curr.value}, ${updown}${change} fra ${date}`

      return message
    }).then(message => {
      dispatch(messages.createSuccess({
        id: msgId,
        by: users.BOT,
        date: new Date(),
        text: message
      }))

      dispatch(decrLoading())
    }).catch(err => {
      console.error(err) // eslint-disable-line no-console

      dispatch(messages.createSuccess({
        id: genId(),
        by: users.BOT,
        date: new Date(),
        text: 'Oops, noe gikk galt, prøv igjen senere'
      }))

      dispatch(decrLoading())
    })
  },
  executeSample: () => dispatch => setTimeout(() => {
    dispatch(messages.createSuccess({
      id: genId(),
      by: users.BOT,
      date: new Date(),
      text: 'Dette er en prøvekommando, vennligst prøv en annen'
    }))
  }, 5),
  execute: data => (dispatch, getState) => {
    dispatch(messages.createSuccess({
      id: genId(),
      by: users.ME,
      text: data.message,
      date: new Date()
    }))

    if (/^sample-/.test(data.command)) {
      dispatch(commands.executeSample())
    } else if (data.command === 'hi') {
      return dispatch(commands.executeHi())
    } else {
      return dispatch(commands.executeUpdate(data))
    }
  }
}
