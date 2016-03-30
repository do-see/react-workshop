import { Subject } from 'rx'
import Request from 'helpers/ApiClient'

var jsonSubjects = {
  goSearch: new Subject()
}

export default {
  jsonSubjects,
  getSearch: () => Request.get('').subscribe(::jsonSubjects.goSearch.onNext)
}
