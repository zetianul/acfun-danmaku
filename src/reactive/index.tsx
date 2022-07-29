import { Subject } from 'rxjs'
import {CommentDanmaku} from "../types";

export const observers = {
  comment: undefined,
}

export const subjects = {
  comment: new Subject<CommentDanmaku>(),
  like: new Subject(),
}