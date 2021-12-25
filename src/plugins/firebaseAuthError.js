const errors = (code) => {
  switch (code) {
    case "auth/network-request-failed":
      return "接続がエラー、またはタイムアウトになりました"

    case "auth/weak-password":
      return "パスワードを6文字以上にしてください"

    case "auth/email-already-in-use":
      return "既に使用されているメールアドレスです"

    case "auth/invalid-email":
      return "メールアドレスの形式が正しくありません"

    case "auth/wrong-password":
      return "メールアドレスまたはパスワードが違います"

    default:
      return "作成に失敗しました。原因は不明です"
  }
}

export default errors