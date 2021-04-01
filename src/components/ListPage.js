import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import Pagination from './Pagination';

const ListPage = (props) => {
const [post, setPost] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(15);

useEffect( () => {
  const fetchData = async () => {
    return await fetch('http://localhost:3000/post')
      .then(response => response.json())
      .catch((error) => {console.error('Error:', error);})
      .then(data => {
          setPost(data) 
      });}
  fetchData()
},[]);

const indexOfLastPost = currentPage * postsPerPage; // index of last post in page
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = post.slice(indexOfFirstPost,indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <h1>Articles</h1>
    <ListItem post={post} currentPosts ={currentPosts} />
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