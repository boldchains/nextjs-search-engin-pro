import React from 'react';

const ArticleCard = ({
    index,
    margin,
    photo
}) => {
    
    return (
        <div key={index} style={{ margin, height: photo.height, width: photo.width }}>
            <div className="mask">
                <img src={photo.src} width={photo.width} height={"80%"}/>
                <div className="article-title">
                    {photo.photo.title}
                </div>
            </div>
            <style jsx>{`
                .mask {
                    width: 100%;
                    height: 100%;
                }
                .mask:hover {
                    opacity: 0.5;
                }
                .article-title {
                    font-weight: 700;
                    color: #000000;
                    padding: 5px;
                }
            `}</style>
        </div>
    );
};

export default ArticleCard;