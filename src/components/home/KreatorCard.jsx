import React from 'react';
import Content from './Content';

const KreatorCard = (props) => {
  const { content, contentComponent } = props;
  const PageContent = contentComponent || Content;

  return (
    <div>
      <iframe
        allowtransparency='true'
        loading='lazy'
        scrolling='no'
        style={{
          width: '100% !important',
          marginTop: '0px',
          height: '865px',
          overflow: 'hidden',
        }}
        src='https://kreator.pierluigi.pl/'
        width='100%'
        height='150%'
      ></iframe>
      <PageContent content={content} />
    </div>
  );
};

export default KreatorCard;
