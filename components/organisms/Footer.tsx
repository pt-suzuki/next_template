import React, { Component } from "react";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <ul id="footer" className="bottom-menu">
          <li>
            <a href="#">
              <i className="blogicon-home"></i>
              <br />
              <span className="mini-text">ホーム</span>
            </a>
          </li>
          <li className="menu-width-max">
            <a href="#">
              <i className="blogicon-list"></i>
              <br />
              <span className="mini-text">メニュー１</span>
            </a>
            <ul className="menu-second-level">
              <li>
                <a href="#">タイトル１</a>
              </li>
              <li>
                <a href="#">タイトル２</a>
              </li>
              <li>
                <a href="#">タイトル３</a>
              </li>
              <li>
                <a href="#">タイトル４</a>
              </li>
              <li>
                <a href="#">タイトル５</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="blogicon-hatenablog"></i>
              <br />
              <span className="mini-text">メニュー２</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="blogicon-twitter"></i>
              <br />
              <span className="mini-text">メニュー３</span>
            </a>
          </li>
        </ul>
        <style>
          {`
          .mini-text {
            font-size: 10px;
          } /*文字大きさ*/
          ul.bottom-menu {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 60px; /*高さ*/
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            border-top: 2px solid #808080;
            border-bottom: 2px solid #808080;
            z-index: 30;
          }
          ul.bottom-menu li {
            float: left;
            width: 25%;
            background-color: #f5f5f5;
            list-style-type: none;
            text-align: center;
            font-size: 25px;
          }
          .bottom-menu li a {
            display: block;
            color: #808080;
            padding-top: 10px;
            padding-bottom: 5px;
            line-height: 10px;
            text-decoration: none;
          }
          .bottom-menu li a:hover {
            color: #a9a9a9;
          }
          ul.menu-second-level {
            visibility: hidden;
            opacity: 0;
            z-index: 1;
          }
          ul.menu-second-level li a {
            border-top: 1px dashed #a9a9a9; /*展開の枠点線*/
            font-size: 15px; /*展開メニューの文字サイズ*/
            line-height: 30px; /*文字の縦幅*/
          }
          .menu-second-level li a:hover {
            height: 100%;
            background: lightgrey; /*マウスオーバーの色*/
          }
          li.menu-width-max ul.menu-second-level {
            position: absolute;
            bottom: 47px; /*高さ*/
            left: 0;
            box-sizing: border-box;
            width: 100%;
            padding: 0;
          }
          li.menu-width-max:hover ul.menu-second-level {
            bottom: 47px; /*高さ*/
            visibility: visible;
            opacity: 1;
          }
          li.menu-width-max ul.menu-second-level li {
            float: left;
            width: 100%;
            border: none;
          }
          @media (min-width: 768px) {
            .bottom-menu {
              display: none;
            }
          }
        `}
        </style>
      </footer>
    );
  }
}
