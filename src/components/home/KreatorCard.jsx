import React from 'react';
import Content from './Content';

const KreatorCard = (props) => {
  const { content, contentComponent } = props;
  const PageContent = contentComponent || Content;

  return (
    <div>
      <iframe
        async
        loading='lazy'
        style={{
          width: '100% !important',
          marginTop: '0px',
          height: '865px',
          overflow: 'visible',
        }}
        src='https://kreator.pierluigi.pl/?mode=iframe&amp;lang=pl'
        width='100%'
        height='150%'
      ></iframe>

      <section className='section section--gradient'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <PageContent className='content' content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KreatorCard;
