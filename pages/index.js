import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tw8r</title>
        <link rel="icon" href="/bird_icon.ico" />

        <meta name="title" content="tw8r"></meta>
        <meta name="description" content="bird app with 8 characters" />
        <meta name="keywords" content="tw8r twitter clone" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:image" content="/bird_icon.png" />
        <meta name="twitter:image" content="/bird_icon.png" />
      </Head>

      <main className="main">
        <div className="navbar">
          <div className='navbar-list'>
            <div>
              <img src="/bird_icon.png" alt="" /><h2 style={{ "display": "inline" }}>tw8r</h2>
            </div>
            <div>
              <img src="/bird_icon.png" alt="" /><h2 style={{ "display": "inline", "font-weight": "normal" }}>notifs</h2>
            </div>
            <div>
              <img src="/bird_icon.png" alt="" /><h2 style={{ "display": "inline", "font-weight": "normal" }}>profile</h2>
            </div>
            <div>
              <img src="/bird_icon.png" alt="" /><h2 style={{ "display": "inline", "font-weight": "normal" }}>more</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className='tweet-create'>
            <h1>Chief Twit Area</h1>
          </div>

          <div className='tweet-list'>
            <div className='tweet-item'>Elon musk: bitch im a bottom 😂</div>
            <div className='tweet-item'>Elon musk: bitch im a bottom 😂</div>
            <div className='tweet-item'>Elon musk: bitch im a bottom 😂</div>
          </div>


        </div>
        <div className="sidebar">
          <h1>war idk</h1>

        </div>
      </main>
    </div>
  )
}
