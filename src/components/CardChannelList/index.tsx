import { clearNotifications, setCurrentChannel } from "actions/channel";
import ORGIcon from "assets/images/icon/ORG.png";
import PERIcon from "assets/images/icon/PER.png";
import SPLIcon from "assets/images/icon/SPL.png";
import STOIcon from "assets/images/icon/STO.png";
import { currencyFormat } from "hooks/useFormatNumber";
import { Channel } from "models/channel";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface CardChannelListProps {
  channel: Channel;
  onClick?: (data: any) => void;
  setChannel: (channel: any) => void;
  // getNotificationCount?: any;
  notifications: any;
  setLastVisited: any;
}

function CardChannelList({
  channel,
  onClick,
  setChannel,
  notifications,
  setLastVisited,
}: CardChannelListProps) {
  const dispatch: any = useDispatch();
  const history = useHistory();
  const user = useSelector(({ auth }) => auth.user);
  const renderChannelType = (channelType: string) => {
    switch (channelType) {
      case "STO":
        return (
          <p>
            <span className="tag">
              <img src={STOIcon} className="iconTag" />
            </span>
            종목
          </p>
        );
      case "ORG":
        return (
          <p>
            <span className="tag">
              <img src={ORGIcon} className="iconTag" />
            </span>
            기관
          </p>
        );
      case "PER":
        return (
          <p>
            <span className="tag">
              <img src={PERIcon} className="iconTag" />
            </span>
            개인
          </p>
        );
      case "SPL":
        return (
          <p>
            <span className="tag">
              <img src={SPLIcon} className="iconTag" />
            </span>
            전문가
          </p>
        );
      default:
        return null;
    }
  };

  const onChooseChannel = async (channel: any) => {
    setChannel(channel);
    dispatch(setCurrentChannel(channel));
    dispatch(clearNotifications(notifications, channel?.id));
    setLastVisited(user, channel?.id);
    history.push(`/channel-detail/${channel?.id}`);
  };

  const getNotificationCount = (channel: any) => {
    let count = 0;

    notifications?.forEach((notification: any) => {
      if (notification.id === channel.id) {
        count = notification.count;
      }
    });

    if (count > 0) {
      console.log("count > 0", count);
      return count;
    }
    // dispatch(setNotification(notifications));
  };

  return (
    <CardChannelStyled>
      <div
        className="card"
        onClick={() => {
          onChooseChannel(channel);
        }}
        key={`${channel?.room_name}-${channel?.id}`}
      >
        <div className="card--top">
          <div className="card--top__infor">
            <object
              className="icon40 avatar"
              data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=7&serverfile=thumb_${channel?.room_profile_image}`}
              type="image/png"
            >
              {channel?.device === "web" &&
              channel?.room_profile_image !== "" ? (
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
            <div className="infor">
              <h3>{channel?.room_name}</h3>
              {renderChannelType(channel?.chnl_type)}
            </div>
          </div>
          {getNotificationCount(channel) && (
            <div className="card--top__notify">
              <p>New - {getNotificationCount(channel)}</p>
            </div>
          )}
        </div>
        <div className="card--bottom">
          <div className="card--bottom__person">
            <object
              className="icon24 avatar"
              data={`http://moa.aveapp.com:21405/file/api/down_proc.jsp?type=12&userid=${channel?.ownerId}&roomid=${channel?.roomId}`}
              type="image/png"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                alt="avatar"
                className="icon24 avatar"
              />
            </object>

            <span className="card--bottom__person__name">
              {channel?.owner_name}
            </span>
          </div>
          <div className="card--bottom__buyer">
            <p className="card--bottom__buyer--name">Buyer</p>
            <span className="card--bottom__buyer--quantity">
              {!channel?.userCount
                ? currencyFormat(Number(channel?.joinedUsers?.length))
                : currencyFormat(Number(channel?.userCount))}
            </span>
          </div>
        </div>
      </div>
    </CardChannelStyled>
  );
}
const CardChannelStyled = styled.div`
  .card {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 10px;
    margin-bottom: 16px;
    cursor: pointer;

    &--top {
      display: flex;
      justify-content: space-between;
      padding: 20px 15px;
      border-bottom: 1px solid #e6ecf3;

      &__notify {
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          margin: 0;
          font-size: 12px;
          background-color: #6161e3;
          color: #fff;
          border-radius: 20px;
          padding: 1px 4px;
        }
      }
      &__infor {
        display: flex;

        img {
          // width: 40px;
          // height: 40px;
          // border-radius: 100%;
          // object-fit: cover;
          // margin-right: 6px;
        }
        .infor {
          h3 {
            font-size: 16px;
            margin: 0;
            font-weight: bold;
          }
          p {
            font-size: 14px;
            margin: 0;
            display: flex;
            align-items: center;

            font-size: 12px;
          }
        }
      }
    }
    &--bottom {
      display: flex;
      justify-content: space-between;
      algin-items: center;
      padding: 8px 15px;

      &__person {
        img {
          width: 24px;
          height: 24px;
          border-radius: 100%;
          object-fit: cover;
          margin-right: 6px;
        }
        span {
          font-size: 13px;
          font-weight: bold;
        }
      }

      &__buyer {
        display: flex;
        align-items: center;

        &--name {
          font-size: 13px;
          margin: 0 10px 0 0;
          color: rgb(112, 112, 112);
        }

        &--quantity {
          font-size: 13px;
          color: rgb(112, 112, 112);
        }
      }
    }
  }
`;

export default CardChannelList;
