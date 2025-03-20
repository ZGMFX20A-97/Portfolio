import { collection, DocumentData, onSnapshot, orderBy, query, Query } from 'firebase/firestore'
import { db } from './firebase'
import { Message } from './Type'
import { useEffect, useState } from 'react'

//FireStoreからメッセージデータを取得するためのカスタムフック
const useTakeMessages = () => {
  //DBの参照を定義
  const messageRef: Query<DocumentData> = query(collection(db, 'Messages'), orderBy('timestamp', 'desc'))

  const [data, setData] = useState<Message[]>([])

  useEffect(() => {
    //DB内の変化をトリガーにタイムリーにDBのスナップショットを取得する
    onSnapshot(messageRef,
      querySnapshot => {
        const messages: Message[] = []
        //スナップショットのデータを配列に詰め込む
        querySnapshot.docs.forEach(
          doc => messages.push({
            id: doc.id,
            uid: doc.data().uid,
            content: doc.data().content,
            userPhoto: doc.data().userPhoto,
            timestamp: doc.data().timestamp,
            displayName: doc.data().displayName
          })
        )
        setData(messages)
      }
    )

  }, [data])

  return { data }


}

export default useTakeMessages







