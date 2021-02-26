
import React from 'react';

const Pagination = ({ postsPerPage, post =[], paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(post.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationStyle = {marginLeft:"45%", marginTop:"1%"}
  const color = {color:"#495057"}

  return (
  <div className = "Pagination" style ={paginationStyle}>
    <nav>
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a onClick={() => paginate(number)} href='!#' className='page-link' style = {color}>
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