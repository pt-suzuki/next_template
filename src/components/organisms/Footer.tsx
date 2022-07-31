import React, { Component } from "react";

export interface FooterProps {
}

export const Footer: React.FC<FooterProps> = () => {


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
      </footer>
  );
}
