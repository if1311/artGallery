import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ImageInGallery from "./ImageInGallery";
import FilterItem from "./FilterItem";
import Filters from "./Filters";
import { categs } from "./categs";

const FilterButton = styled.button`
  width: 100px;
  /* position: relative; */
  /* top: 20%; */
  height: 50px;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: grid;
  padding: 15px;
  border: 2px solid black;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const StyledUl = styled.ul`
  height: 150px;
  overflow: scroll;
  display: ${(props) => (props.showCategories ? "flex" : "none")};
  width: 75%;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 5px;
  margin: 0;
  align-self: center;

  overflow-x: hidden;
`;

export default class GalleryPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
      imagesList: null,
      imageDiv: false,
      currentImage: null,
      apikey: "221b4e10-7bc5-11ea-8865-8f439f2941d8",
      page: 1,
      info: null,
      categories: categs,
      showCategories: false,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.filterCall = this.filterCall.bind(this);
  }
  filterCall(event) {
    console.log(event.target.value);
    axios
      .get(
        `https://api.harvardartmuseums.org/object?size=20&page=1&apikey=${this.state.apikey}&classification=${event.target.innerText}&hasimage=1`
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

  nextPage() {
    axios
      .get(this.state.next)
      .then((res) => res.data)
      .then((data) =>
        this.setState({
          imagesList: data.records,
          next: data.info.next,
          prev: data.info.prev,
        })
      );
  }

  prevPage() {
    axios
      .get(this.state.prev)
      .then((res) => res.data)
      .then((data) =>
        this.setState({
          imagesList: data.records,
          next: data.info.next,
          prev: data.info.prev,
        })
      );
  }

  componentDidMount() {
    axios
      .get(
        `https://api.harvardartmuseums.org/object?size=20&page=${this.state.page}&apikey=${this.state.apikey}`
      )
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          imagesList: data.records,
          next: data.info.next,
          prev: data.info.prev,
        });
        console.log(data.info.next);
      });
  }

  render() {
    return (
      <MainWrapper>
        <FilterButton
          onClick={() =>
            this.setState({ showCategories: !this.state.showCategories })
          }
        >
          filter
        </FilterButton>
        <StyledUl showCategories={this.state.showCategories}>
          {this.state.categories.map((e) => (
            <FilterItem name={e} function={this.filterCall}></FilterItem>
          ))}
        </StyledUl>

        <GalleryWrapper>
          {this.state.imagesList === null ? (
            <h1>Loading...</h1>
          ) : (
            this.state.imagesList.map((item) =>
              item.primaryimageurl &&
              item.primaryimageurl != null &&
              item.images.length > 0 ? (
                <ImageInGallery src={item.primaryimageurl} />
              ) : null
            )
          )}
          {() => console.log(this.state.info)}
        </GalleryWrapper>
        {this.state.next != null ? (
          <button onClick={this.nextPage}>NEXT PAGE</button>
        ) : null}
        {this.state.prev != null ? (
          <button onClick={() => this.prevPage()}>PREV PAGE</button>
        ) : null}
      </MainWrapper>
    );
  }
}
