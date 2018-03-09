import React from 'react';
import Photo from './Photo';
import glamorous from 'glamorous';

const Grid = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '-10px',
  marginRight: '-10px'
})

class PhotoGrid extends React.Component {
  render() {
    return (
      <Grid>
        {
          this.props.posts.length
          ?
          this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)
          :
          <div className="loading-container">
          LOADING
          </div>
        }
      </Grid>
    )
  }
}

export default PhotoGrid;
