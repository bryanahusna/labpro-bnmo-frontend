import React, { Component } from 'react';
import HistoryEntry from '../components/HistoryEntry';
import Pagination from '../components/Pagination';
import { backendHost } from '../config';

class History extends Component {
    state = {
        transactions: [],
        count: 0,
        page: 1,
        pageSize: 10
    }

    async componentDidMount(){
        const resCount = await fetch(`${backendHost}/api/history/count`, { credentials: 'include' });
        const countObj = await resCount.json();
        this.setState({ count: countObj.count });

        const res = await fetch(`${backendHost}/api/history?page=${this.state.page}&pageSize=${this.state.pageSize}`, { credentials: 'include' });
        if(res.status == 200){
            this.setState({ transactions: await res.json() });
        } else{
            alert(await res.text());
        }
    }

    async componentDidUpdate(prevProps, prevState){
        if(this.state.page != prevState.page){
            const res = await fetch(`${backendHost}/api/history?page=${this.state.page}&pageSize=${this.state.pageSize}`, { credentials: 'include' });
            if(res.status == 200){
                this.setState({ transactions: await res.json() });
            } else{
                alert(await res.text());
            }
        }
    }

    render() { 
        return (
            <div className='container'>
                <h1>History</h1>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>{this.state.count} Transactions</p>
                    <p>{this.state.page} / {Math.ceil(this.state.count/this.state.pageSize)} Pages ({this.state.pageSize} per page)</p>
                    <Pagination
                        onPageChange={ this.handlePageChange }
                        page={this.state.page} count={this.state.count} pageSize={this.state.pageSize} pagerange={5} />
                </div>
                { this.state.transactions.map(el =>
                    <HistoryEntry key={el.id} transaction = { el } />
                )}
            </div>
        );
    }

    handlePageChange = async (e) => {
        this.setState({ page: e });
    }
}

export default History;