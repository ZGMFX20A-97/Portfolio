import { Website } from "./Type";
import PORTFOLIIO from '../public/WebsiteImgs/PortfolioSite.png'
import REACTNOTE from '../public/WebsiteImgs/NoteApp.png'
import DISCORD from '../public/WebsiteImgs/DiscordApp.png'
import POKEMON from '../public/WebsiteImgs/PokemonPicBook.png'

//ホームページに展示する常用ウェブサイトのデータ

export const Websites: Website[] = [
     {
          name: 'catinpajamas.com',
          imgUrl: PORTFOLIIO.src,
          introduction: `今皆様が見ているポートフォリオサイト

Front ：Material-UI/React
Back ：Next.js/FireBase
API   ：Github API/QIITA API

3月にNext.jsを使用しリファクタリングしました。

ソースコードはProjectページからどうぞ!`,
          url: 'https://catinpajamas.com/'
     },
     {
          name: 'reactnote-78734.firebaseapp.com',
          imgUrl: REACTNOTE.src,
          introduction: `Reactノートアプリ

作ったノートの一覧や記載中ノートのプレビュも見られ、マークダウン記法もサポートしています。

ソースコードはProjectページからどうぞ!`,
          url: 'https://reactnote-78734.firebaseapp.com/'
     },
     {
          name: 'discord-clone-7191b.firebaseapp.com',
          imgUrl: DISCORD.src,
          introduction: `Discordをクローンしたチャットサイト

初めてFireBaseを実装して作ったSPAで、チャンネルの追加やチャンネルごとのメッセージ履歴も保持して表示できるのが良かったと思います。

ソースコードはProjectページからどうぞ!`,
          url: 'https://discord-clone-7191b.firebaseapp.com/'
     },

     {
          name: 'pokemonpicturebook.firebaseapp.com',
          imgUrl: POKEMON.src,
          introduction: `ポケモン図鑑

初めて外部APIからデータfetchして作ったアプリです。

ページネーションも実装し、1ページごと20個のポケモンを表示しています。

ソースコードはProjectページからどうぞ!`,
          url: 'https://pokemonpicturebook.firebaseapp.com/'
     }

]