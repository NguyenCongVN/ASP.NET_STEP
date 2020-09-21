import React from "react";
import "./sass/main.scss";
export const WelcomePage = () => (
  <div>
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>Đăng Nhập
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Đăng Kí
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Giới Thiệu
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>Về Chúng Tôi
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <header className="header-home">
      <div className="header-home__logo-box">
        <img src="/assets/logo.png" alt="Logo" className="header-home__logo" />
      </div>

      <div className="header-home__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Reactivities</span>
          <span className="heading-primary--sub">
            chia sẻ hoạt động của bạn với người thân và bạn bè
          </span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Khám phá ngay
        </a>
      </div>
    </header>

    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Chia sẻ các hoạt động thường ngày với mọi người
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Tôi sẽ tổ chức một bữa tiệc ngoài trời vào cuối tuần này
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Hẹn các bạn tại quán bar nhé!
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>

            <a href="#" className="btn-text">
              Xem thêm &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                srcSet="/assets/activity-1.jpg 300w, /assets/activity-1.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
                src="/assets/activity-1.jpg"
              />

              <img
                srcSet="/assets/activity-2.jpg 300w, /assets/activity-2.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
                src="/assets/activity-2.jpg"
              />

              <img
                srcSet="/assets/img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
                src="/assets/img/nat-3-large.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Dễ dàng chia sẻ
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Tìm kiếm bạn mới
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Tạo trang cá nhân của riêng bạn
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Thảo luận về các hoạt động
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/assets/img/video.mp4" type="video/mp4" />
            <source src="/assets/img/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Kết nối mọi người</h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src="/assets/img/nat-8.jpg"
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Tôi đã có chuyến đi tuyệt với bạn bè chỉ bằng Reactivities
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src="/assets/img/nat-9.jpg"
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">Jack Wilson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Wow ! Tôi đã thay đổi thói quen của mình từ khi dùng
                Reactivities
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn-text">
            Xem thêm các câu chuyện khác &rarr;
          </a>
        </div>
      </section>

      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">
                    Tham gia với chúng tôi ngay bây giờ
                  </h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group u-margin-bottom-medium">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer__logo-box">
        {/* <picture className="footer__logo">
          <source
            srcSet="/assets/img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcSet="/assets/img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
            alt="Full logo"
            src="img/logo-green-2x.png"
          />
        </picture> */}
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Doanh nghiệp
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Liên hệ
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Điều khoản
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">Bản quyền thuộc về Bedepzai</p>
        </div>
      </div>
    </footer>
  </div>
);
