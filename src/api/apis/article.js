import request from '@/utils/request'
import articleUrls from '../urls/article'

// 发表文章
export function fetchAddArticle(data) {
  return request({
    url: articleUrls.addArticle,
    method: 'post',
    data
  })
}

// 文章列表
export function fetchArticleList(query) {
  return request({
    url: articleUrls.articleList,
    method: 'get',
    params: query
  })
}

// 文章回显
export function fetchGetArticle(data) {
  return request({
    url: articleUrls.getArticle,
    method: 'post',
    data
  })
}

// 文章删除
export function fetchDelArticle(data) {
  return request({
    url: articleUrls.delArticle,
    method: 'post',
    data
  })
}

// 评论列表
export function fetchCommentList(query) {
  return request({
    url: articleUrls.commentList,
    method: 'get',
    params: query
  })
}

// 删除评论
export function fetchDelComment(data) {
  return request({
    url: articleUrls.delComment,
    method: 'post',
    data
  })
}
