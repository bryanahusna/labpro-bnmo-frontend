import React, { Component } from 'react';

class Pagination extends Component {
    state = {  } 
    render() {
        const page = this.props.page;
        const lastPage = Math.ceil(this.props.count / this.props.pageSize);
        return (
            <nav aria-label="History page navigation">
                <ul className="pagination" style={{ cursor: 'pointer' }}>
                    <li className={"page-item" + (page == 1 && " disabled")}><a onClick={()=> this.props.onPageChange(page - 1)} className="page-link">Previous</a></li>
                    { this.range(1, lastPage).map(e =>(
                        <li key={e} className={"page-item" + (e == this.props.page && " active")}><a onClick={() => this.props.onPageChange(e)} className="page-link">{e}</a></li>) 
                    )}
                    <li className={"page-item" + (this.props.page == lastPage && " disabled")}><a onClick={() => this.props.onPageChange(page + 1)}  className="page-link">Next</a></li>
                </ul>
            </nav>
        );
    }

    range(a, b){
        const res = [];
        for(let i = a; i <= b; i++){
            res.push(i);
        }
        return res;
    }
}
 
export default Pagination;