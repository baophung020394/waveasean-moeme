import { createChannel, getChannelList, joinChannel } from "actions/channel";
import CardChannel from "components/CardChannel";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "utils/styled-component";

interface NewChannelsProps {
  availableChannels: any;
  joinedChannels: any;
  channels: any;
}

function NewChannels({
  availableChannels,
  joinedChannels,
  channels,
}: NewChannelsProps) {
  const [isGoChannel, setIsGoChannel] = useState<string>("");
  const dispatch: any = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  let ids = new Set(joinedChannels.map(({ roomId }: any) => roomId));
  let idsChannels = new Set(
    availableChannels?.map(({ roomId }: any) => roomId)
  );

  return (
    <AvailableChatsStyled>
      <div className="availables container-fluid mt-3">
        {false && (
          <div className="availables--null">
            <div className="alert alert-warning">No channels to join :(</div>
          </div>
        )}

        <div className="available--created ">
          <h1 className="mb-3">Channels Available</h1>
          <div className="container-fluid">
            {availableChannels?.length > 0 &&
              availableChannels.map((channel: any, idx: number) => (
                <div className="available mb-4">
                  <CardChannel
                    channel={channel}
                    key={`${channel?.room_name}-${idx}`}
                    onClick={() => setIsGoChannel("JOIN_CHANNEL")}
                    isGoChannel="JOIN_CHANNEL"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="available--exists">
          <h1 className="mb-3">Channels Exists</h1>
          <div className="container-fluid">
            {channels?.length > 0 &&
              channels
                .filter(({ roomId }: any) => !idsChannels.has(roomId))
                .filter(({ roomId }: any) => !ids.has(roomId))

                .filter(
                  (channel: any) =>
                    (channel?.room_type === "2" ||
                      channel?.room_type === "3") &&
                    channel?.ownserId !== user.uid
                )
                .map((channel: any, idx: number) => (
                  <div
                    className="available mb-4"
                    onClick={() => setIsGoChannel("CREATE_CHANNEL")}
                  >
                    <CardChannel
                      channel={channel}
                      key={`${channel?.room_name}-${idx}`}
                      onClick={() => {}}
                      isGoChannel="CREATE_CHANNEL"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </AvailableChatsStyled>
  );
}

const AvailableChatsStyled = styled.div`
  width: 100%;

  .availables {
    // display: flex;
    // flex-wrap: wrap;

    .available {
      min-width: 300px;
      max-width: 25%;
      flex: 1 1 auto;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
      
    }

    .available--created {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      h1 {
        font-size: 24px;
        padding-right: 15px;
        padding-left: 15px;
      }

      .container-fluid {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
      }
    }

    .available--exists {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      h1 {
        font-size: 24px;
        padding-right: 15px;
        padding-left: 15px;
      }

      .container-fluid {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
      }
    }
  }
`;
export default NewChannels;
