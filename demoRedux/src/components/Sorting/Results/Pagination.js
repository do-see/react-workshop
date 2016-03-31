import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { loadResults } from '../../../redux/modules/connector'
import config from 'config'

export class Pagination extends React.Component {
  static propTypes = {
    totalCounter: PropTypes.number,
    loadResults: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props)
    this.handlePageClick = ::this.loadPage
    this.state = { offset: 0 } // braucht man den counter wo anders?
  }

  get pageCount () {
    const { totalCounter } = this.props
    return totalCounter / config.perPage
  }

  loadPage (data) {
    // data.selected behinhaltet die angefragte Seite
    const selected = data.selected
    const offset = Math.ceil(selected * config.perPage)
    this.setState({offset: offset}, () => {
      this.props.loadResults(offset, config.perPage)
    })
  }

  render () {
    return (
      <ReactPaginate previousLabel={<span>&laquo;</span>}
        nextLabel={<span>&raquo;</span>}
        breakLabel={<a href='' className='disabled'>...</a>}
        pageNum={this.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        clickCallback={this.handlePageClick}
        containerClassName={"pagination pagination-sm"}
        subContainerClassName={"pagination pagination-sm"}
        activeClassName={"active"} />
    )
  }
}

const mapStateToProps = (state) => ({
  totalCounter: state.connector.counters.total
})
export default connect((mapStateToProps), {
  loadResults
})(Pagination)
