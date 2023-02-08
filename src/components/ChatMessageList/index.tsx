import ChatOptions from "components/ChatOptions";
import Stocks from "components/Stocks";
import React, { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatTimeAgo } from "utils/time";
import { isEmojisOnly } from "utils/convertString";

interface ChatMessageListProps {
  messages: any;
}

function ChatMessageList({ messages = [] }: ChatMessageListProps) {
  // const user = JSON.parse(localStorage.getItem("_profile"));
  const user = useSelector(({ auth }) => auth.user);
  const messagesRef = useRef<any>({});

  const isAuthorOf = useCallback(
    (message: any) => {
      return message?.author?.uid === user?.uid ? "chat-right" : "chat-left";
    },
    [messages]
  );

  useEffect(() => {
    if (messages && messages?.length > 0 && messagesRef) {
      messagesRef?.current?.scrollIntoView(false);
    }
  }, [messages?.length, messagesRef]);

  return (
    <ChatMessageListStyled className="chat--container">
      <ul ref={messagesRef} className="chat-box chatContainerScroll">
        {messages?.map((message: any, idx: number) => {
          if (message?.stocks) {
            return (
              <li
                className={`${isAuthorOf(message)} chat-stocks`}
                key={`${message?.id}-${idx}`}
              >
                <div className="chat-avatar">
                  <object
                    className="icon40 avatar"
                    data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=${message?.stocks?.user.params.userId}&roomid=${message?.stocks.user?.roomId}`}
                    type="image/png"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt="avatar"
                      className="icon40 avatar"
                    />
                  </object>
                  <div className="chat-name">
                    {message?.author?.username}
                    <div className="chat-hour">
                      {formatTimeAgo(message.timestamp)}
                    </div>
                  </div>
                </div>
                <div className="chat-text-wrapper">
                  <Stocks stocks={message?.stocks} />
                </div>
              </li>
            );
          } else if (
            message?.files &&
            ["image/jpeg", "image/png"].includes(message?.fileType)
          ) {
            return (
              <li
                className={`${isAuthorOf(message)} chat-images`}
                key={`${message?.ID}-${idx}`}
              >
                <div className="chat-avatar">
                  <object
                    className="icon40 avatar"
                    data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=${message?.user.params.userId}&roomid=${message?.user?.roomId}`}
                    type="image/png"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt="avatar"
                      className="icon40 avatar"
                    />
                  </object>
                  <div className="chat-name">
                    {message?.author.username}
                    <div className="chat-hour">
                      {formatTimeAgo(message.timestamp)}
                    </div>
                  </div>
                </div>
                <div className="chat-text-wrapper">
                  <img
                    className="image-chat"
                    src={JSON.parse(message?.files)}
                    alt="Thumb"
                  />
                </div>
              </li>
            );
          } else if (
            message?.files &&
            ["video/mp4", "video/mp3"].includes(message?.fileType)
          ) {
            return (
              <li
                className={`${isAuthorOf(message)} chat-images`}
                key={`${message?.ID}-${idx}`}
              >
                <div className="chat-avatar">
                  <object
                    className="icon40 avatar"
                    data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=${message?.user.params.userId}&roomid=${message?.user?.roomId}`}
                    type="image/png"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt="avatar"
                      className="icon40 avatar"
                    />
                  </object>
                  <div className="chat-name">
                    {message?.author.username}
                    <div className="chat-hour">
                      {formatTimeAgo(message.timestamp)}
                    </div>
                  </div>
                </div>
                <div className="chat-text-wrapper">
                  <video
                    width="320"
                    height="240"
                    controls
                    src={JSON.parse(message?.files)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </li>
            );
          } else if (
            message?.files &&
            ["application/pdf"].includes(message?.fileType)
          ) {
          } else {
            return (
              <li className={isAuthorOf(message)} key={`${message?.id}-${idx}`}>
                <div className="chat-avatar">
                  <object
                    className="icon40 avatar"
                    data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=${message?.user.params.userId}&roomid=${message?.roomId}`}
                    type="image/png"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt="avatar"
                      className="icon40 avatar"
                    />
                  </object>

                  <div className="chat-name">
                    {message?.author.username}
                    <div className="chat-hour">
                      {" "}
                      {formatTimeAgo(message.timestamp)}
                    </div>
                  </div>
                </div>
                <div
                  className={`chat-text-wrapper ${
                    isEmojisOnly(message?.content) ? "hasEmoj" : ""
                  }`}
                >
                  <span className="chat-text">{message?.content}</span>
                  <span className="chat-spacer"></span>
                </div>
              </li>
            );
          }
        })}

        {/* 
       
        
        <li className="chat-right chat-image">
          <div className="chat-avatar">
            <img
              src="http://file.hstatic.net/1000159991/file/doremon-min_d7fba7f7f60a41a0af6e67dcaeb75634_grande.jpg"
              alt="Retail Admin"
              className="icon40 avatar"
            />
            <div className="chat-name">
              User 1 <div className="chat-hour">2:30</div>
            </div>
          </div>
          <div className="chat-text-wrapper">
            <img
              src="http://cdn.tgdd.vn/Files/2020/09/03/1286576/top-26-tap-phim-hoat-hinh-doremon-dai-hay-nhat-cho-be-202206071148483160.jpg"
              alt=""
            />
            <span className="chat-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus dolorum sint vitae tenetur commodi animi itaque beatae
              blanditiis quis a officiis minima quidem voluptatem, nisi
              exercitationem explicabo laudantium laboriosam assumenda.
            </span>
            <span className="chat-spacer">
              <span className="chat-href">www.etnews.com</span>
            </span>
          </div>
        </li> 
        <li className="chat-left">
          <div className="chat-avatar">
            <img
              src="http://file.hstatic.net/1000159991/file/doremon-min_d7fba7f7f60a41a0af6e67dcaeb75634_grande.jpg"
              alt="Retail Admin"
              className="icon40 avatar"
            />
            <div className="chat-name">
              User 2 <div className="chat-hour">2:30</div>
            </div>
          </div>
          <div className="chat-text-wrapper">
            <span className="chat-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus dolorum sint vitae tenetur commodi animi itaque beatae
              blanditiis quis a officiis minima quidem voluptatem, nisi
              exercitationem explicabo laudantium laboriosam assumenda.
            </span>
            <span className="chat-spacer"></span>
          </div>
        </li> */}
      </ul>
    </ChatMessageListStyled>
  );
}

const ChatMessageListStyled = styled.div`
  padding: 16px;
  background-color: #ccc;
  overflow: auto;
  flex: 1 1 100%;

  /* Track */
  /* width */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  ul {
    li {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  li.chat-right,
  li.chat-left {
    display: flex;
    flex: 1;
    flex-direction: row;
    margin-bottom: 40px;

    .chat-avatar {
      align-self: flex-end;
    }

    .chat-name {
      display: flex;
      align-items: center;
    }

    .chat-text-wrapper {
      align-self: flex-start;
      word-break: break-all;

      &.hasEmoj {
        background-color: transparent;

        .chat-text {
          font-size: 45px;
          line-height: 1;
        }
      }
    }

    &.chat-images {
      .chat-text-wrapper {
        background-color: #fff;
        padding: 0;
      }
    }
  }

  li {
    &.chat-left {
      &.chat-stocks {
        .chat-text-wrapper {
          h4 {
            color: #000;
          }

          background-color: #fff;
          padding: 0;
          max-width: 420px;
          width: 100%;
        }
      }
    }

    &.chat-right {
      justify-content: flex-end;

      &.chat-stocks {
        h4 {
          color: #000;
        }
        .chat-text-wrapper {
          background-color: #fff;
          padding: 0;
          max-width: 420px;
          width: 100%;
        }
      }

      &.chat-image {
        img:not(.icon40) {
          width: 100%;
          height: auto;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .chat-text-wrapper {
          max-width: 15%;
          padding: 0;

          .chat-text {
            display: inline-block;
            padding: 10px;
          }
        }

        .chat-href {
          color: #e2e2e2;
          font-size: 10px;
          display: inline-block;
          margin-left: 10px;
          cursor: hover;
        }
      }

      & > .chat-avatar {
        // margin-right: 20px;
      }

      & > .chat-text-wrapper {
        background-color: #7869ef;
        color: #fff;
      }
    }

    .chat-avatar {
      //   margin-right: 20px;
    }

    .chat-name {
      font-size: 0.75rem;
      color: #999999;
      text-align: center;
    }

    .chat-text-wrapper {
      padding: 0.4rem 1rem;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 12px;
      background: #ffffff;
      font-weight: 300;
      line-height: 150%;
      position: relative;
      max-width: 55%;
      font-size: 0.9rem;
    }

    .chat-spacer {
      width: 50px;
      display: inline-block;
    }

    .chat-hour {
      float: right;
      font-size: 12px;
      margin-left: 8px;
      margin-right: 3px;
    }
  }

  @media (max-width: 1600px) {
    li {
      &.chat-right {
        justify-content: flex-end;

        &.chat-image {
          cursor: pointer;
          .chat-text-wrapper {
            max-width: 30%;
            padding: 0;

            .chat-text {
              display: inline-block;
              padding: 10px;
            }
          }
        }
      }
    }
  }
`;

export default ChatMessageList;
