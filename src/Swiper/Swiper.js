import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

class Timeline extends Component {
  componentDidMount() {
    // Initialize Swiper
    var timelineSwiper = new Swiper('.timeline .swiper-container', {
      direction: 'vertical',
      loop: false,
      speed: 1600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
          return '<span class="' + className + '">' + year + '</span>';
        },
      },
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      breakpoints: {
        768: {
          direction: 'horizontal',
        }
      }
    });
  }

  componentWillUnmount() {
    // Destroy Swiper instance if exists
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  render() {
    return (
      <section className="schedule">
        <h2 className="titl" style={{ textAlign: 'center', margin: '30px 0', fontSize: '2em' }}>Schedule</h2>
        <div className="tcontainer">
          <div className="timeline">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11)' }} data-year="2011">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">2011</span>
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11)' }} data-year="2011">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">21</span>
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11)' }} data-year="2011">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">11</span>
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11)' }} data-year="2011">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">20</span>
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                {/* Add more swiper slides with similar structure */}
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
