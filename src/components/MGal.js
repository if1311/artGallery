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
import { StyledUl } from "./styled-components/StyledUl";
import FilterItem from "./FilterItem";
import { categs } from "./resources/categs";
import { periods } from "./resources/periods";
import { technique } from "./resources/technique";
import { FilterToggleLink } from "./styled-components/FilterToggleLink";
import { FiltersWrapper } from "./styled-components/FiltersWrapper";
import Spinner from "react-bootstrap/Spinner";

const StyledCol = styled(Col)`
  background-color: #ffffff;
`;

export default class MGal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apikey: "221b4e10-7bc5-11ea-8865-8f439f2941d8",
      imagesList: [],
      prev: null,
      next: null,
      categories: categs,
      periods: periods,
      technique: technique,
      filter: null,
      breakpointsColumnsObj: {
        default: 3,
        1200: 2,
        992: 2,
        768: 1,
        576: 1,
      },
    };
    this.fetchNextImages = this.fetchNextImages.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
    this.filterCall = this.filterCall.bind(this);
    this.showFilter = this.showFilter.bind(this);
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

  fetchImages() {
    axios
      .get(this.state.next)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          imagesList: data.records,
          next: data.info.next,
          prev: data.info.prev,
        });
      });
  }

  filterCall(event, filter) {
    axios
      .get(
        `https://api.harvardartmuseums.org/object?size=20&page=1&apikey=${this.state.apikey}&${filter}=${event.target.innerText}&hasimage=1`
      )
      .then((res) => res.data)
      .then((data) =>
        this.setState({
          imagesList: data.records,
          next: data.info.next,
          prev: data.info.prev,
        })
      );
  }

  showFilter(filter) {
    console.log("clicked");
    switch (filter) {
      case "classification":
        return (
          <StyledUl>
            {this.state.categories.sort().map((e) => (
              <FilterItem
                name={e}
                function={(event) => this.filterCall(event, filter)}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        );
      case "period":
        return (
          <StyledUl>
            {this.state.periods.sort().map((e) => (
              <FilterItem
                name={e}
                function={(event) => this.filterCall(event, filter)}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        );

      case "technique":
        return (
          <StyledUl>
            {this.state.technique.sort().map((e) => (
              <FilterItem
                name={e}
                function={() => this.filterCall(filter)}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        );
      default:
        return null;
    }
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
          {" "}
          <StyledCol>
            <FiltersWrapper>
              <FilterToggleLink
                onClick={() =>
                  this.state.filter !== "classification"
                    ? this.setState({ filter: "classification" })
                    : this.setState({ filter: null })
                }
              >
                classification
              </FilterToggleLink>

              <FilterToggleLink
                onClick={() =>
                  this.state.filter !== "period"
                    ? this.setState({ filter: "period" })
                    : this.setState({ filter: null })
                }
              >
                periods
              </FilterToggleLink>
              <FilterToggleLink
                onClick={() =>
                  this.state.filter !== "technique"
                    ? this.setState({ filter: "technique" })
                    : this.setState({ filter: null })
                }
              >
                technique
              </FilterToggleLink>
            </FiltersWrapper>
            {this.showFilter(this.state.filter)}
          </StyledCol>
          <StyledCol md={12}>
            <InfiniteScroll
              pageStart={0}
              loadMore={() => this.fetchNextImages()}
              hasMore={this.state.next != null ? true : false}
              loader={<Spinner animation="border" />}
            >
              <Masonry
                breakpointCols={this.state.breakpointsColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {this.state.imagesList.map((record) =>
                  record.images.length > 0 ? (
                    <GalleryItem url={record.primaryimageurl}></GalleryItem>
                  ) : null
                )}
              </Masonry>
            </InfiniteScroll>
          </StyledCol>
        </Row>
      </Container>
    );
  }
}
