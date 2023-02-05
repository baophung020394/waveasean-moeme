import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();

console.log({myuuid})
export const MESSAGES = [
  {
    idMessage: myuuid,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorum sint vitae tenetur commodi animi itaque beatae blanditiis quis a officiis minima quidem voluptatem, nisi exercitationem explicabo laudantium laboriosam assumenda",
    user: {
      ptCommand: 65537,
      result: "success",
      ptGroup: 65536,
      ptDevice: "",
      params: {
        sessionData: "9bb8a06100fe9bfadac51e040c61b791",
        mobile_push_noti_type: "1",
        tel_crtfc: "0",
        use_pc_push: "1",
        profile_image_type: "1",
        agreement: "1",
        mobile_push_sound: "wave.wav",
        userIdKey: "a9daf592ffecbb557c60690bcae96fe0",
        pc_push_noti_type: "1",
        rtk: "3YIeiZbh2RAdb7bISS0t8C",
        use_mobile_push: "1",
        clear_buddy: "0",
        realUserName: "홍길동",
        profile_subject: "",
        use_web_push: "1",
        userName: "bao",
        userId: "test1",
        email_crtfc: "1",
        profile_image: "image_20230119015316.png",
        user_type: "0",
        atk: "7fMsSp0iz1orps1FbB6vkp",
        tel: "",
        web_push_noti_type: "1",
        email: "bao.future94@gmail.com",
      },
    },
  },
  {
    idMessage: myuuid,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolorum sint vitae tenetur commodi animi itaque beatae blanditiis quis a officiis minima quidem voluptatem, nisi exercitationem explicabo laudantium laboriosam assumenda",
    user: {
      ptCommand: 65537,
      result: "success",
      ptGroup: 65536,
      ptDevice: "",
      params: {
        sessionData: "c12046e5e396bc198b55f4727b85ecd0",
        mobile_push_noti_type: "1",
        tel_crtfc: "1",
        use_pc_push: "1",
        profile_image_type: "0",
        agreement: "1",
        mobile_push_sound: "wave.wav",
        userIdKey: "9f04414958b52a4dca193944f839dc6b",
        pc_push_noti_type: "1",
        rtk: "4TzO0k1NXfs64ftz2mYHTL",
        use_mobile_push: "1",
        clear_buddy: "0",
        realUserName: "테스트2",
        profile_subject: "",
        use_web_push: "1",
        userName: "테스트2",
        userId: "test2",
        email_crtfc: "0",
        profile_image: "",
        user_type: "0",
        atk: "2Qk4Ajca3dSqU0ORhrbr1L",
        tel: "01012340004",
        web_push_noti_type: "1",
        email: "",
      },
    },
  },
];
