import { currencyFormat } from "hooks/useFormatNumber";
import { Channel } from "models/channel";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import IconStockTop from "assets/images/chat/stock-top.png";
import IconSearch from "assets/images/chat/search.png";
import IconMoreMenu from "assets/images/chat/moremenu.png";

interface ChatBarProps {
  channel?: any;
}

function ChatBar({ channel }: ChatBarProps) {
  // const channelDetail = useSelector(({ channel }) => channel.channelDetail);

  return (
    <ChatBarStyled className="chat--bars">
      <div className="chat--bar">
        <div className="chat--bar__infor">
          {channel?.room_profile_image ? (
            <object
              className="icon40 avatar"
              data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=7&serverfile=thumb_${channel.room_profile_image}`}
              type="image/png"
            >
              {channel?.device === "web" ? (
                <img
                  className="image-chat"
                  src={JSON.parse(channel?.room_profile_image)}
                  alt="Thumb"
                />
              ) : (
                <img
                  src="http://www2.aveapp.com/wp-content/uploads/2021/05/w2560.jpg"
                  alt="avatar"
                  className="icon40 avatar"
                />
              )}
            </object>
          ) : (
            <img
              src="http://www2.aveapp.com/wp-content/uploads/2021/05/w2560.jpg"
              alt="avatar"
              className="icon40 avatar"
            />
          )}

          <div className="chat--bar__infor__groupname">
            <div className="chat--bar__infor__groupname__top">
              <h4>{channel?.room_name}</h4>
              <span className="marks"></span>
              <span className="number">
                {currencyFormat(Number(channel?.userCount))}
              </span>
            </div>
            <div className="chat--bar__infor__groupname__bottom">
              <p className="user">
                {channel?.owner_name}-{channel?.ownerId}
              </p>
            </div>
          </div>
        </div>
        <div className="chat--bar__options">
          <button className="btn-hover">
            <img className="icon24 img-show" src={IconStockTop} alt="" />
            <img className="icon24 img-hover" src={IconStockTop} alt="" />
          </button>
          <button className="btn-hover">
            <img className="icon24 img-show" src={IconSearch} alt="" />
            <img className="icon24 img-hover" src={IconSearch} alt="" />
          </button>
          <button className="btn-hover">
            <img
              className="icon24 img-show"
              src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"
              alt=""
            />
            <img
              className="icon24 img-hover"
              src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"
              alt=""
            />
          </button>
          <button className="btn-hover">
            <img className="icon24 img-show" src={IconMoreMenu} alt="" />
            <img className="icon24 img-hover" src={IconMoreMenu} alt="" />
          </button>
        </div>
      </div>
    </ChatBarStyled>
  );
}

const ChatBarStyled = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid #e6ecf3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 91px;
  max-height: 91px;

  .chat--bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    &__options {
      button {
        margin-right: 8px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__infor {
      display: flex;

      img {
        margin-right: 16px;
      }

      &__groupname {
        &__top {
          display: flex;
          align-items: center;

          h4 {
            font-weight: bold;
            font-size: 16px;
            margin-right: 6px;
          }

          .number {
            font-size: 14px;
            color: #333;
          }
        }

        &__bottom {
          .user {
            margin: 0;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
`;

export default ChatBar;
