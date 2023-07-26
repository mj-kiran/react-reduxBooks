import React, { useEffect } from 'react'
import './Home.css'
import { Col, Row } from 'react-bootstrap'
import Books from '../Books/Books';
import {useDispatch, useSelector}from 'react-redux'
import { listBooks } from '../../actions/booksAction';

function Home() {
    const dispatch = useDispatch();
    const booksData = useSelector((state) => state.bookReducer);
    const { books } = booksData;
  // const stationariesData = useSelector((state) => state.stationaryReducer);
  // const {staionaryList}=stationariesData
  
  
     useEffect(() => {
      
       dispatch(listBooks());
     }, [dispatch]);
  
  // useEffect(() => {
  //   dispatch(listStationary())
  // },[dispatch])
  return (
    <>
      <Row>
        <Col className="text-center">
          <h1 className="store_title">Welcome to Choice Book House</h1>
        </Col>
      </Row>
      <br />

      {/* Books  */}
      <Row>

        <Row>
          <h2 className="books_title">Books And Stationary</h2>
        </Row>

        <Row>
          {books
            ? books.map((item) => (
                // <p>{item.name}</p>
                //
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Books key={item._id} item={item} />
                </Col>
              ))
            : "error"}
        </Row>

      </Row>
    </>
  );
}

export default Home