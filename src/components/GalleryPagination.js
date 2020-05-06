import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ImageInGallery from "./ImageInGallery";
import FilterItem from "./FilterItem";
// import Filters from "./Filters";
import { categs } from "./categs";
import { periods } from "./periods";
import { technique } from "./technique";

const ButtonWrapper = styled.ul`
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  background-color: inherit;
  justify-content: space-around;
  color: #284b63;
`;
const FilterButton = styled.li`
  /* position: relative; */
  /* top: 20%; */
  border: none;

  background-color: inherit;
  list-style-type: none;
  text-align: center;
  cursor: pointer;
  color: #284b63;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const GalleryWrapper = styled.div`
  width: 80%;
  display: grid;
  padding: 15px;
  border: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const StyledUl = styled.ul`
  height: 135px;
  overflow: scroll;
  display: flex;
  width: 80%;
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
      periods: periods,
      technique: technique,
      showTechnique: false,
      showPeriods: false,
      showCategories: false,
      filter: null,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.filterCallCategories = this.filterCallCategories.bind(this);
    this.filterCallPeriod = this.filterCallPeriod.bind(this);
    this.filterCallTechnique = this.filterCallTechnique.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
    // this.flexibleAPICall = this.flexibleAPICall.bind(this);
  }

  // flexibleAPICall() {
  //   axios
  //     .get(
  //       "https://api.harvardartmuseums.org/technique?apikey=e8cc9db0-884b-11ea-8c3f-cde07fe08362&size=400"
  //     )
  //     .then((res) => res.data)
  //     .then((data) => console.log(data.records.map((e) => e.name)));
  // }

  filterCallCategories(event) {
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
  filterCallPeriod(event) {
    axios
      .get(
        `https://api.harvardartmuseums.org/object?size=20&page=1&apikey=${this.state.apikey}&period=${event.target.innerText}&hasimage=1`
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
  filterCallTechnique(event) {
    axios
      .get(
        `https://api.harvardartmuseums.org/object?size=20&page=1&apikey=${this.state.apikey}&technique=${event.target.innerText}&hasimage=1`
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
        `https://api.harvardartmuseums.org/object?size=20&page=1&apikey=${this.state.apikey}&hasimage=1`
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
  checkFilter() {
    switch (this.state.filter) {
      case "categories":
        return (
          <StyledUl>
            {this.state.categories.map((e) => (
              <FilterItem
                name={e}
                function={this.filterCallCategories}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        );
      case "period":
        return (
          <StyledUl>
            {this.state.periods.map((e) => (
              <FilterItem
                name={e}
                function={this.filterCallPeriod}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        );
      case "technique":
        return (
          <StyledUl>
            {this.state.technique.map((e) => (
              <FilterItem
                name={e}
                function={this.filterCallTechnique}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <MainWrapper>
        <ButtonWrapper>
          <FilterButton
            onClick={() => {
              this.setState({ filter: "categories" });
            }}
          >
            categories
          </FilterButton>

          <FilterButton onClick={() => this.setState({ filter: "period" })}>
            periods
          </FilterButton>
          <FilterButton onClick={() => this.setState({ filter: "technique" })}>
            technique
          </FilterButton>
          <FilterButton onClick={() => this.setState({ filter: null })}>
            clear
          </FilterButton>
        </ButtonWrapper>
        {this.checkFilter()}
        {/* {this.state.filter === "categories" ? (
          <StyledUl>
            {this.state.categories.map((e) => (
              <FilterItem
                name={e}
                function={this.filterCallCategories}
              ></FilterItem>
            ))}{" "}
          </StyledUl>
        ) : null}

        <StyledUl showPeriod={this.state.showPeriod}>
          {this.state.periods.map((e) => (
            <FilterItem name={e} function={this.filterCallPeriod}></FilterItem>
          ))}
        </StyledUl>

        {console.log(this.state.periods)}
        <StyledUl showTechnique={this.state.showTechnique}>
          {this.state.technique.map((e) => (
            <FilterItem
              name={e}
              function={this.filterCallTechnique}
            ></FilterItem>
          ))}
        </StyledUl> */}

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
          <button onClick={this.prevPage}>PREV PAGE</button>
        ) : null}
      </MainWrapper>
    );
  }
}
