import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import IconFileGrey from "assets/images/chat/send_file_grey.png";
import IconFileHover from "assets/images/chat/send_file_blue.png";
import IconScreenShotGrey from "assets/images/chat/screenshot_grey.png";
import IconScreenShotHover from "assets/images/chat/screenshot_hover.png";
import IconChatGrey from "assets/images/chat/chat_enter_grey.png";
import IconChatBlue from "assets/images/chat/chat_enter_blue.png";
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation,
} from "emoji-picker-react";
import { v4 as uuidv4 } from "uuid";
import { createTimestamp } from "utils/time";
import { useSelector } from "react-redux";

interface MessangerProps {
  channel: any;
  onSubmit: (message: any) => void;
  uploadFileProp?: (data: any) => void;
}

function Messanger({ onSubmit, channel, uploadFileProp }: MessangerProps) {
  const [value, setValue] = useState<any>("");
  const [isOpenEmoj, setIsOpenEmoj] = useState<boolean>(false);
  const textareaRef = useRef<any>(null);
  const user = JSON.parse(localStorage.getItem("_profile"));

  let myuuid = uuidv4();

  /**
   * Choose Emoji
   * @param emojiData
   * @param event
   */
  const onClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    const textAreaElement: any = document.getElementById("text-area");
    setValue(
      value.substr(0, textAreaElement.selectionStart) +
        emojiData.emoji +
        value.substr(textAreaElement.selectionEnd)
    );
  };

  /**
   *  This function will be triggered when the file field change
   * */
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      console.log({ image });
      const metadata = {
        type: image.type,
        name: image.name,
      };

      const afterDot = image.name.substr(image.name.lastIndexOf(".") + 1);
      console.log("dot", afterDot);
      if (["video/mp4", "video/mp3"].includes(metadata.type)) {
        metadata.type = image.type.replace("video/", "");
      } else if (
        ["image/png", "image/jpeg", "image/jpg"].includes(metadata.type)
      ) {
        metadata.type = image.type.replace("image/", "");
      } else if (afterDot === "pptx") {
        console.log("pptx");
        metadata.type = "pptx";
      } else if (afterDot === "docx") {
        console.log("docx");
        metadata.type = "docx";
      } else if (afterDot === "xlsx") {
        console.log("xlsx");
        metadata.type = "xlsx";
      } else if (afterDot === "mov") {
        console.log("xlsx");
        metadata.type = ".mov";
      } else {
        metadata.type = image.type.replace("application/", "");
      }

      console.log(metadata.type);

      let newMessage = {
        content: ``,
        files: image,
        idMessage: myuuid,
        user,
        timestamp: createTimestamp(),
        fileType: image.type,
        metadata,
      };

      uploadFileProp(newMessage);
      // const reader = new FileReader();

      // reader.readAsDataURL(image);

      // reader.onload = () => {
      // let newMessage = {
      //   content: `${e.target.files[0].type}`,
      //   files: JSON.stringify(reader?.result),
      //   idMessage: myuuid,
      //   user,
      //   timestamp: createTimestamp(),
      //   fileType: e.target.files[0].type,
      // };

      //   onSubmit(newMessage);
      // };
    }
  };

  /**
   * Check key press 'Enter'
   * @param e
   */
  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
      setValue("");
    }
  };

  /**
   * Submit form data
   * @returns
   */
  const sendMessage = async () => {
    if (value.trim() === "") return;
    const messages: any = {
      idMessage: myuuid,
      content: value.trim(),
      user,
      timestamp: createTimestamp(),
    };
    onSubmit(messages);
  };

  /**
   * Capture
   */
  const capture = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const video = document.createElement("video");

    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia();
      video.srcObject = captureStream;
      context.drawImage(video, 0, 0, window.innerWidth, window.innerHeight);
      const frame = canvas.toDataURL("image/png");
      captureStream.getTracks().forEach((track) => track.stop());
      window.location.href = frame;
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  /**
   * Check auto height of Textarea
   */
  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  return (
    <MessangerStyled
      className={`${
        channel?.enableWriteMsg === "0" ? "enableWriteMsg" : ""
      } chat-input form-group mt-3 mb-0`}
    >
      <textarea
        id="text-area"
        ref={textareaRef}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onKeyPress}
        value={value}
        className="form-control"
        placeholder={`${
          channel?.enableWriteMsg === "0"
            ? "Chat is disabled"
            : "Type your message here..."
        } `}
      ></textarea>

      <div className="chat-input__options">
        <div className="chat-input__options__left">
          <button className="btn-hover mr-3">
            <div id="fileUpload">
              <label htmlFor="file-input">
                <img className="icon24 img-show" src={IconFileGrey} alt="" />
                <img className="icon24 img-hover" src={IconFileHover} alt="" />
              </label>
              <input
                className="file-input"
                id="file-input"
                type="file"
                onChange={imageChange}
              />
            </div>
          </button>
          <button className="btn-hover" onClick={capture}>
            <img className="icon24 img-show" src={IconScreenShotGrey} alt="" />
            <img
              className="icon24 img-hover"
              src={IconScreenShotHover}
              alt=""
            />
          </button>
          <div className="ml-3 chat--emoj">
            <button
              className="btn-hover"
              onClick={() => setIsOpenEmoj(!isOpenEmoj)}
            >
              <img
                className="icon24 img-show"
                src="https://cdn-icons-png.flaticon.com/512/1500/1500458.png"
                alt=""
              />
              <img
                className="icon24 img-hover"
                src="https://cdn-icons-png.flaticon.com/512/1500/1500458.png"
                alt=""
              />
            </button>

            <div className="chat--emoj__display">
              {isOpenEmoj && (
                <>
                  <EmojiPicker onEmojiClick={onClick} autoFocusSearch={false} />
                  <div
                    className="layer"
                    onClick={() => setIsOpenEmoj(false)}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="chat-input__options__right">
          <button
            className="btn-hoveree btn-chat"
            onClick={() => {
              sendMessage();
              setValue("");
            }}
          >
            {value?.length > 0 && channel?.enableWriteMsg === "1" ? (
              <img className="icon24 img-hover" src={IconChatBlue} alt="" />
            ) : (
              <img className="icon24 img-show" src={IconChatGrey} alt="" />
            )}
          </button>
        </div>
      </div>
    </MessangerStyled>
  );
}

const MessangerStyled = styled.div`
  position: relative;
  border: 1px solid #e2e2e2;
  max-width: 97%;
  width: 100%;
  margin: auto;
  border-radius: 8px;
  flex: 1 1 115px;

  &.enableWriteMsg {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 99;
    }

    textarea {
      color: #ccc;
      font-size: 14px;
      position: relative;

      &::placeholder {
        color: #ccc;
        font-size: 14px;
      }
    }
  }

  textarea {
    border: none;
    padding: 0;
    resize: none;
    padding: 16px;
    border-bottom: 1px solid #e2e2e2;
    overflow: auto;
    border-radius: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-height: 350px;

    &::placeholder {
      color: #e2e2e2;
    }

    &:focus {
      border-bottom: 1px solid #e2e2e2;
      box-shadow: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .chat-input__options {
    padding: 16px;
    display: flex;
    justify-content: space-between;

    &__left {
      width: 100%;
      border-right: 1px solid #e2e2e2;
    }

    button {
      background: none;
      border: none;
    }
  }

  #fileUpload > label {
    margin: 0;
    cursor: pointer;
  }
  #fileUpload > .file-input {
    display: none;
  }

  .chat--emoj {
    display: inline-block;
    position: relative;
    &__display {
      position: absolute;
      bottom: 32px;
      left: 0;
      z-index: 0;

      .EmojiPickerReact {
        z-index: 9;
      }

      .layer {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        background: transparent;
        width: 100%;
        height: 100%;
      }
    }
  }

  .btn-hover {
    &.btn-chat {
      .img-hover {
        display: inline-block;
      }
    }
  }
`;

export default Messanger;
