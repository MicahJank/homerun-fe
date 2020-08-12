import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

const Name = (props) => {
  const numNames = props.name.split(" ").length;
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (numNames > 1) {
      const firstInitial = props.name.split(" ")[0][0];
      const secondInitial = props.name.split(" ")[1][0];
      setInitials(`${firstInitial}${secondInitial}`.toUpperCase());
    } else {
      const firstInitial = props.name.split(" ")[0][0];
      setInitials(firstInitial.toUpperCase());
    }
  }, []);

  return (
    <li style={{padding: "10px 10px", borderBottom: "1px solid #dbdbdb" }}>
      <Row align="middle">
        <Col span={4}>
          <span className="initials">{initials}</span>
        </Col>
        <Col span={20}>
          <h3>{props.name}</h3>
        </Col>
      </Row>
    </li>
  );
};

export default Name;
