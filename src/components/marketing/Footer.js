import React from "react";
import { Row, Col } from "antd";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Row justify="center" align="middle" className="footer">
      <Col span={24}>
        <footer>
          <p>&copy; Copyright TidyHive 2020</p>
        </footer>
        <Link to="/privacy-policy">
          Privacy Policy
        </Link>
      </Col>
    </Row>
  );
}

export default Footer;