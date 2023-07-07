import React from 'react';
import Post from './Post.jsx'
import { useNavigate } from 'react-router-dom';

const Row = (props) => {
    let item = props.item;
    const navigate = useNavigate();
    return (
            <tr onClick={() => navigate('/post',{ replace: true })}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
                <td>{item.phone}</td>
            </tr>
    );
};

export default Row;