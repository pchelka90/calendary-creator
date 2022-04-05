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
          width: '90% !important',
          marginTop: '0px',
          height: '865px',
          overflow: 'hidden',
        }}
        src='https://kreator.pierluigi.pl/'
        width='90%'
        height='150%'
      ></iframe>
      <div className='column is-10 is-offset-1'>
        <PageContent content={content} />
      </div>
    </div>
  );
};

export default KreatorCard;
