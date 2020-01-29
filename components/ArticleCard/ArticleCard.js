import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const getResizedImageUrl = props => {
  const resizeImageProxy = `/cdn-cgi/image/width=${props.width},height=${props.height}`;
  const position = props.url.indexOf("/", 8);
  const resizedPhotoUrl = [
    props.url.slice(0, position),
    resizeImageProxy,
    props.url.slice(position)
  ].join("");

  return resizedPhotoUrl;
};

const ArticleCard = ({ index, photo }) => {
  const params = {
    url: photo.src,
    width: photo.width,
    height: photo.height * 0.8
  };

  let resizedUrl = photo.src && getResizedImageUrl(params);

  return (
    <div key={index} className="card">
      <div className="mask" style={{ width: `${params.width}px` }}>
        {!photo.state && resizedUrl ? (
          <img src={resizedUrl} width={params.width} height={params.height} />
        ) : (
          <Skeleton
            variant="rect"
            width={params.width}
            height={params.height}
          />
        )}
        {!photo.state && photo.photo.title ? (
          <div className="article-title">{photo.photo.title}</div>
        ) : (
          <div>
            <Skeleton
              variant="rect"
              width={"100%"}
              height={"10px"}
              style={{ marginTop: "5px", borderRadius: "3px" }}
            />
            <Skeleton
              variant="rect"
              width={"80%"}
              height={"10px"}
              style={{ marginTop: "5px", borderRadius: "3px" }}
            />
          </div>
        )}
      </div>
      <style jsx>{`
        .card {
          margin: 5px 0 0 5px;
        }
        .mask {
          height: 100%;
        }
        .mask:hover {
          opacity: 0.5;
        }
        .article-title {
          font-weight: 700;
          color: #000000;
          display: -webkit-box;
          padding: 5px;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default ArticleCard;
