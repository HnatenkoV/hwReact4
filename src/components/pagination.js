import React, {useContext} from "react";
import {HttpClientContext} from "../providers/httpClientProvider";

class Pagination extends React.Component {
    static contextType = HttpClientContext
    constructor(props) {
        super(props);


        this.prevPage = () => {
            this.context.fetchHeros(this.context.heroList.info?.prev)
        }

        this.nextPage = () => {
            this.context.fetchHeros(this.context.heroList.info?.next)
        }
    }

    render() {
        return (
            <div className={this.props.theme ? 'Theme-dark' : 'Theme-light'}>
            <div className="pagination-sec">
                <button className="btn" onClick={this.prevPage}>Prev</button>
                <button className="btn" onClick={this.nextPage}>Next</button>
            </div>
            </div>
        )
    }
}

export default Pagination