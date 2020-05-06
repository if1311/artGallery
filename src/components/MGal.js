import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Masonry from "react-masonry-css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./mgal.css";
import GalleryItem from "./GalleryItem";
import InfiniteScroll from "react-infinite-scroller";

export default class MGal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apikey: "221b4e10-7bc5-11ea-8865-8f439f2941d8",
      imagesList: [],
      prev: null,
      next: null,
      breakpointsColumnsObj: {
        default: 3,
        1200: 3,
        992: 3,
        768: 2,
        576: 1,
      },
    };
    this.fetchNextImages = this.fetchNextImages.bind(this);
  }
  fetchNextImages() {
    axios
      .get(this.state.next)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          imagesList: [...this.state.imagesList, ...data.records],
          next: data.info.next,
          prev: data.info.prev,
        });
      });
  }
  componentDidMount() {
    axios
      .get(
        `https://api.harvardartmuseums.org/object?size=20&page=1&apikey=${this.state.apikey}&hasimage=1`
      )
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          imagesList: data.records,
          next: data.info.next,
          prev: data.info.prev,
        });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <InfiniteScroll
              pageStart={0}
              loadMore={() => this.fetchNextImages()}
              hasMore={this.state.next != null ? true : false}
            >
              <Masonry
                breakpointCols={this.state.breakpointsColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {this.state.imagesList.map((record) => (
                  <GalleryItem url={record.primaryimageurl}></GalleryItem>
                ))}
              </Masonry>
            </InfiniteScroll>
          </Col>
        </Row>
      </Container>
    );
  }
}
