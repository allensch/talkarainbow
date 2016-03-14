import React from 'react'
import Moment from 'moment'
import Store from '../../store'
import Actions from '../../actions'

export default class Activity extends React.Component {

	constructor() {
		super()
		this.timeout = 0
		this.state = {
			results: []
		}
	}

	componentDidMount() {
		Actions.showLoading(true)
		Store.listen(this.onStoreUpdate.bind(this))
	}

	componentWillUnmount() {
		// clearTimeout(this.timeout)
	}

	onStoreUpdate() {
		const { results } = Store
		this.setState({ results })
	}

	renderRows() {
		return this.state.listing.map(function(item, index) {
			var klass = '', status = 'pending'
			if (item.complete) {
				klass = 'success'
				status = 'complete'
			} else if (item.failed) {
				klass = 'danger'
				status = 'failed'
			}
			return (
				<tr key={item._id} className={klass}>
					<td>{item.type}</td>
					<td>{item.provider}</td>
					<td>{Moment(new Date(item.createdAt)).fromNow()}</td>
					<td>{Moment(new Date(item.scheduledAt)).fromNow()}</td>
					<td>{status}</td>
				</tr>
			)
		})
	}

	renderListing() {
		if (this.state.listing.length) {
			return (
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Action</th>
							<th>Source</th>
							<th>Created</th>
							<th>Scheduled</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			)
		}
		return null
	}

    render() {
        return (
			<div className="container">
				<h3>Recent Activity</h3>
				<div className="row">
					{this.renderListing()}
				</div>
			</div>
        )
    }

}
