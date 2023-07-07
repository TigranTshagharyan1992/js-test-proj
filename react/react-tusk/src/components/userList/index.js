import React from 'react';
import './index.css';
import Row from '../Row';

class UserList extends React.Component{

    constructor() {
        super();
        this.state = { //
            data: [],
        }
    }
    async getListing () {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();

            this.setState({
                data: data
            });

        }catch (e) {
            console.log('error');
        }

    }
    componentDidMount() {
        this.getListing();
    }
    render() {

        return(
            <div className='Table-container'>
                <table className="Table">
                    <thead className="Table-head">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Website</th>
                        <th>Phone</th>
                    </tr>
                    </thead>

                    <tbody className="Table-body">
                    {
                        this.state.data.map((item,index) =>{
                            return <Row item={item} key={index+1}/>

                        })
                    }
                    </tbody>
                </table>
            </div>
        )

    }
}
export default UserList;