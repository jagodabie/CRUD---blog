
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import Pagination from './Pagination';

const ListPage = (props) => {
const [post, setPost] = useState();
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(5);

const fetchData = async () => {
  return await fetch('http://localhost:3000/post?_limit=15')
    .then(response => response.json())
    .then(data => {
        setPost(data) 
    });}

useEffect( () => {fetchData()},[]);
console.log(typeof(post))
const paginate = pageNumber => setCurrentPage(pageNumber);
	
  return (
    <>
    <h1>Articles</h1>
    <ListItem post={post} />
    <Pagination
        postsPerPage={postsPerPage}
        post={post}
        paginate={paginate}
        currentPage={currentPage}
    />
  </>
   );
}

export default ListPage