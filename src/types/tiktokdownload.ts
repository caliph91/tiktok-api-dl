export interface TiktokFetchTT {
  status: "success" | "error"
  message?: string
  result?: string
}

export interface TiktokDownload {
  status: "success" | "error"
  message?: string
  result?: {
    type: "image" | "video"
    desc: string
    author: Author
    statistics: Statistics
    images?: string[]
    video?: string
    music: string
  }
}

export interface Author {
  avatar: string
  nickname: string
}

export interface Statistics {
  likeCount: string
  commentCount: string
  shareCount: string
}
