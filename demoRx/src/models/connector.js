import { BehaviorSubject } from 'rx'
import ConnectorStore from 'stores/connector'
const subject = new BehaviorSubject({ searchResult: {} })

ConnectorStore.jsonSubjects.goSearch.subscribe((response) => {
  const state = { ...initialState, searchResult: response }
  subject.onNext(state)
})

// subject.onNext(initialState)

export default {
  subject
}
