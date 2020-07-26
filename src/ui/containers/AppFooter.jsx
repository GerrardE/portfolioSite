import React from 'react';
import {
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer>
      <Container>
        <p>
          &copy;ezeugwagerrard 
          {' '}
          {new Date().toJSON().slice(0, 4)}
          {'. '}
          All Rights Reserved.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href>Privacy</Link>
          </li>
          <li className="list-inline-item">
            <Link href>Terms</Link>
          </li>
          <li className="list-inline-item">
            <Link href>FAQ</Link>
          </li>
        </ul>
      </Container>
    </footer>
  )
}


export default AppFooter;