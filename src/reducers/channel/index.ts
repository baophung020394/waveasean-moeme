import { Channel } from "models/channel";
import { createIsFetchingReducer } from "reducers/common";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

interface initialState {
  channel?: Channel;
}

function createChannelReducer() {
  const joined = (state: any = [], action: any) => {
    switch (action.type) {
      case "CHANNELS_FETCH_RESTART":
        return [];
      case "CHANNELS_FETCH_SUCCESS":
        return action.joined;
      case "CHANNELS_JOIN_SUCCESS":
        return [...state, action.channel];
      default:
        return state;
    }
  };
  const available = (state: any = [], action: any) => {
    switch (action.type) {
      case "CHANNELS_FETCH_RESTART":
        return [];
      case "CHANNELS_FETCH_SUCCESS":
        return action.available;
      case "CHANNELS_JOIN_SUCCESS":
        return state.filter((channel: any) => channel.id !== action.channel.id);
      default:
        return state;
    }
  };

  const channelsCompare = (state: any = [], action: any) => {
    switch (action.type) {
      case "CHANNELS_COMPARE_FETCH_SUCCESS":
        return action.channelsCompare;
      default:
        return state;
    }
  };

  const activeChannels = createReducer(
    {},
    {
      CHANNELS_SET_ACTIVE_CHANNEL: (state: any, action) => {
        const { channel } = action;

        state[channel.id] = channel;
      },

      CHANNELS_UPDATE_USER_STATE: (state: any, action) => {
        const { user, channelId } = action;
        const joinedUsers = state[channelId].joinedUsers;
        const index = joinedUsers.findIndex((ju: any) => ju.uid === user.uid);

        if (index < 0) return state;
        if (joinedUsers[index].state === user.state) return state;

        joinedUsers[index].state = user.state;
      },
    }
  );

  const channel = (state: initialState = null, action: any) => {
    switch (action.type) {
      case "AUTH_LOGOUT_SUCCESS":
      case "CHANNEL_ON_ERROR":
      case "CHANNEL_ON_INIT":
        return null;
      case "CHANNEL_ON_SUCCESS":
        return action.channel.params;

      default:
        return state;
    }
  };

  const channelDetail = (state: initialState = null, action: any) => {
    switch (action.type) {
      case "CHOOSE_CHANNEL":
        return action.channelDetail;
      default:
        return state;
    }
  };

  const messages = createReducer(
    {},
    {
      CHANNELS_SET_MESSAGES: (state: any, action) => {
        const prevMessage = state[action.channelId] || [];

        state[action.channelId] = [...prevMessage, ...action.messages];
      },
    }
  );

  const messageSubs = (state = {}, action: any) => {
    switch (action.type) {
      case "CHANNELS_REGISTER_MESSAGE_SUB":
        return { ...state, [action.channelId]: action.sub };

      default:
        return state;
    }
  };

  return combineReducers({
    joined,
    available,
    activeChannels,
    messages,
    messageSubs,
    channel,
    channelDetail,
    channelsCompare,
    isChecking: createIsFetchingReducer("CHANNEL_ON"),
  });
}

export default createChannelReducer();
