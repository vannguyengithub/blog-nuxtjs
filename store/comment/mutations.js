export default {
  setCommentsList(state, { curPage, wpTotal, wpTotalPages, comments }) {
    const data = {
      curPage,
      wpTotal,
      wpTotalPages,
      comments,
    };

    if (curPage > 1) {
      data.comments = [
        ...state.commentsPaging.comments,
        ...comments,
      ];
    }

    state.commentsPaging = data;
  },

  setCommentsReply(state, { curPage, wpTotal, wpTotalPages, comments, parentId } ) {
    const key = 'reply-parent-' + parentId;

    const data = {
      curPage,
      wpTotal,
      wpTotalPages,
      commentsReply: comments,
    };

    if (curPage > 1) {
      data.commentsReply = [
        ...state.hashCommentsReplyPaging[key].commentsReply,
        ...data.commentsReply,
      ];
    }

    if (state.hashCommentsReplyPaging[key] && state.hashCommentsReplyPaging[key].curPage === 0) {
      data.commentsReply = [
        ...data.commentsReply,
        state.hashCommentsReplyPaging[key].commentsReply
      ]
    }
    state.hashCommentsReplyPaging = {
      ...state.hashCommentsReplyPaging,
      [key]: data,
    };
  },

  pushParentComments(state, newComment) {
    state.commentsPaging = {
      ...state.commentsPaging,
      comments: {
        ...state.commentsPaging.comments,
        newComment
      }
    }
  },

  increaseCommenReplytCount(state, parentId) {
    let isFound = false;
    const newComments = state
      .commentsPaging
      .comments
      .map(cmt => {
        if (cmt.id === parentId) {
          isFound = true;
          return {
            ...cmt,
            comment_reply_count: cmt.comment_reply_count + 1
          }
        }
        return cmt
      })

      if (isFound === true) {
        state.commentsPaging = {
          ...state.commentsPaging,
          comments: newComments,
        }
      }
  },

  pushReplyComments(state, { parentId, newComment }) {
    const key = `reply-parent-${parentId}`;

    if (state.hashCommentsReplyPaging[key]) {
      const newCommentsReply = [
        ...state.hashCommentsReplyPaging[key].commentsReply,
        newComment
      ]
      state.hashCommentsReplyPaging = {
        ...state.hashCommentsReplyPaging,
        [key]: {
          ...state.hashCommentsReplyPaging[key],
          commentsReply: newCommentsReply,
        }
      }
    } else {
      state.hashCommentsReplyPaging = {
        ...state.hashCommentsReplyPaging,
        [key]: {
          commentsReply: [newComment],
          curPage: 0,
          wpTotal: 1,
          wpTotalPages: 1
        }
      }
    }
  }

}
