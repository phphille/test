import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {
          this.props.posts.length
          ?
          this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)
          :
          <div className="loading-container">
          LOADING
          </div>
        }
      </div>
    )
  }
}

export default PhotoGrid;
