import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core'
import SearchBar from './Component/SearchBar'
import VideoDetail from './Component/VideoDetail'
import VideoList from './Component/VideoList'
import Youtube from './Api/Youtube'



export default class App extends Component {

  state = {
    video: [],
    selectVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('ReactJs')
  }
  onVideoSelect = (video) => {
    this.setState({selectVideo: video})
  }
  
  handleSubmit = async (searchTerm) => {
    const res = await Youtube.get('search', {
      params: {
        part:'snippet',
        maxResults: 5,
        key: 'AIzaSyDWhUXH61WPFVLGanmvUmBfX0nap8KYi0c',
        q: searchTerm
      }
    });
    console.log(res)
    this.setState({
      video: res.data.items, selectVideo: res.data.items[0]
    })
  }

  render() {
    return (
      <Container maxWidth="lg">
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail  video={this.state.selectVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={this.state.video} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Container>
  
    )
  }
}