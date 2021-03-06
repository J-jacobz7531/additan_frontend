import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Link to="/service-motor-profiles">
                  <Button theme="white">
                    <span className="text-light">
                      <i className="material-icons">more_vert</i>
                    </span>{" "}
                    Edit
                  </Button>
                 </Link> 
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
           <Link to="/profile-types">
             <Button theme="white" type="submit">
                Create New Profile
            </Button>
          </Link> 
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
                <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
                </a>{" "}
                on{" "}
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Your Ad-ditan Profiles",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Mentor"
      },
      body: ""
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: require("../../images/avatars/2.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Investor",
        url: "#"
      },
      body: "."
    }
  ]
};

export default Discussions;
