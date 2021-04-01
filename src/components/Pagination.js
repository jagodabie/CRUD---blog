import React from 'react';
const Pagination = ({ postsPerPage,currentPage, post = [], paginate }) => {
  const paginationStyle = {marginLeft:"42%", marginTop:"1%"}
  const color = {color:"#495057"}
  const totalPosts = post.length
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (  
  <div className = "Pagination" style ={paginationStyle} >
    <nav>
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a href='!#' onClick={() => paginate(number)} className='page-link' style = {color}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>
  );
};

export default Pagination;