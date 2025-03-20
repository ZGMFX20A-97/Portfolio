'use server'
import axios from "axios"
import { Octokit } from '@octokit/core'
import { db } from "./firebase"
import { User } from "./Type"
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { revalidatePath } from "next/cache"


//自分にメール送信するための処理
export async function sendEmail() {
  window.location.href = 'mailto:minstrel1997@gmail.com'
}

//ブログデータを取得する処理
export async function getBlog() {
  //QIITA APIを使用するためのAPI KEYとAPIエンドポイント
  const QIITA_ACCESSTOKEN = process.env.QIITA_ACCESSTOKEN as string
  const QIITA_API = process.env.QIITA_API as string

  const response = await axios.get(QIITA_API, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${QIITA_ACCESSTOKEN}`
    }
  }
  )
  return response.data
}

//自分のレポジトリーデータを取得するための関数を定義
export async function getRepositories() {
  //Github APIを使うためのAPIkey
  const GITHUB_KEY = process.env.GITHUB_TOKEN as string
  const octokit = new Octokit({
    auth: GITHUB_KEY
  })
  const response = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      'accept': 'application/vnd.github+json',
    }
  })

  return response.data
}

//メッセージを送信する関数を定義
export async function sendMessage(user: User, inputText: string) {
  const messageRef = collection(db, 'Messages')
  //空メッセージは送信できない判定にする
  if (!inputText.trim()) {
    alert('空の内容では送信できません！')
  } else {
    await addDoc(messageRef, { uid: user?.uid, content: inputText, userPhoto: user?.photo, timestamp: serverTimestamp(), displayName: user?.displayName })
  }
  revalidatePath('/messageboard')
}

