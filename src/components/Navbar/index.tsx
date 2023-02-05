import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chat1 from "assets/images/icon/chat.png";
import Chat2 from "assets/images/icon/chat2.png";
import Person from "assets/images/icon/person.png";
import Settings from "assets/images/icon/settings.png";
import Home from "assets/images/icon/home.png";

interface NavbarProps {
  view: string;
}

function Navbar() {
  return (
    <NavbarStyled className="navbar-left">
      <ul>
        <li>
          <Link to="/home">
            <img src={Home} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/channel">
            <img src={Chat2} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/home">
            <img src={Chat1} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src={Person} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  background-color: #fff;
  min-width: 80px;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #e6ecf3;

  ul {
    li {
      cursor: pointer;
      min-height: 80px;
      max-height: 80px;
      line-height: 80px;

      &:hover {
        background-color: #ccc;
      }

      &:last-child {
        margin-bottom: 0;
      }

      a {
        width: 100%;
        height: 100%;
        display: inline-block;

        img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
      }
    }
  }
`;
export default Navbar;
