export enum DanmakuTypeEnum{
  评论 = 1000,
  点赞,
  进直播间,
  关注,
  礼物 = 1005,
  系统消息 ,
  加入守护团,
  分享直播间 = 1008
}

type Medal = {
  uperID:number;
  userID: number;
  clubName: string;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
}

type UserInfo = {
  userID: number;
  nickname: string;
  avatar: string;
  medal: Medal;
  managerType: 0 | 1
}

export type CommentDanmaku = {
  liverUID: number;
  type: DanmakuTypeEnum.评论;
  data: {
    danmuInfo: {
      sendTime: number;
      userInfo: UserInfo
    },
    content: string
  }
}

export type DanmakuType = CommentDanmaku