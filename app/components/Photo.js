import React from 'react';
import { Link } from 'react-router';
import glamorous from 'glamorous';
// import CSSTransitionGroup from 'react-addons-css-transition-group';


const Img = glamorous.img({
  width: '100%',
  maxWidth: '100%',
  marginBottom: '30px',
  textAlign: 'center'
})

const Figure = glamorous.figure({
  width: '31%',
  margin: 0,
  marginBottom: '30px',
  paddingLeft: '10px',
  paddingRight: '10px',
})

const FigCaption = glamorous.figcaption({
  background: 'black',
  color: 'white',
})

const BtnLike = glamorous.button({
  background: 'green',
  color: 'pink',
})

const CommentLink = glamorous(Link)({
  float: 'right',
  fontSize: '20px',
  color: 'red',
})


class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props;
    return (
      <Figure>
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <Img src={post.display_src} alt={post.caption}/>
          </Link>

           {/*<CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
             <span key={post.likes} className="likes-heart">{post.likes}</span>
             </CSSTransitionGroup>*/}

        </div>

        <FigCaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <BtnLike onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</BtnLike>
            <CommentLink className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
            </CommentLink>
          </div>
        </FigCaption>

      </Figure>
    )
  }
}

export default Photo;
