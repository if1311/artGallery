import React, { Component } from "react";
import { Masonry } from "masonic";
import axios from "axios";
import styled from "styled-components";
import FilterItem from "./FilterItem";
import Filters from "./Filters";
import { categs } from "./categs";

const MasonryCard = ({ index, data: { id, src }, width }) => (
  <div>
    <div>Index: {index}</div>

    <pre>ID: {id}</pre>
    <img src={src}></img>
    <div>Column width: {width}</div>
  </div>
);

export default class Masonic extends Component {
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
      items: [],
    };
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
          items: data.records.map((item) => ({
            id: item.id,
            src: item.primaryimageurl,
          })),
        });
      });
  }

  render() {
    return (
      <Masonry
        // This contains the data for our grid items
        items={this.state.items}
        // Adds 8px of space between the grid cells
        columnGutter={100}
        // Sets the minimum column width to 172px
        columnWidth={400}
        // Pre-renders 5 windows worth of content
        overscanBy={5}
        render={MasonryCard}
      />
    );
  }
}
