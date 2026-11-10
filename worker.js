export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl" id="rootHtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>ارتباط | Ertebat</title>
  <script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
  <style>
    :root {
      --primary-blue: #0284c7;
      --accent-cyan: #38bdf8;
      --glass-surface: rgba(255, 255, 255, 0.75);
      --glass-card: rgba(255, 255, 255, 0.55);
      --glass-border: rgba(255, 255, 255, 0.7);
      --text-main: #0f172a;
      --text-muted: #475569;
      --bubble-out: rgba(186, 230, 253, 0.85);
      --bubble-in: rgba(255, 255, 255, 0.9);
      --shadow-ambient: 0 25px 50px -12px rgba(2, 132, 199, 0.2), 0 0 30px rgba(0, 0, 0, 0.05);
      --shadow-card: 0 10px 25px -5px rgba(15, 23, 42, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.95);
      --danger: #f43f5e;
      --success: #10b981;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Vazirmatn", sans-serif;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background: radial-gradient(circle at 10% 20%, #e0f2fe 0%, #f8fafc 50%, #dbeafe 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      color: var(--text-main);
      overflow-x: hidden;
    }

    .app-window {
      width: 100%;
      max-width: 1140px;
      height: 94vh;
      background: var(--glass-surface);
      backdrop-filter: blur(32px);
      -webkit-backdrop-filter: blur(32px);
      border-radius: 28px;
      border: 1px solid var(--glass-border);
      box-shadow: var(--shadow-ambient);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }

    .top-bar {
      padding: 14px 24px;
      background: rgba(255, 255, 255, 0.45);
      border-bottom: 1px solid var(--glass-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .branding {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-badge {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: linear-gradient(135deg, #0284c7, #38bdf8);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.15rem;
      box-shadow: 0 8px 16px -4px rgba(2, 132, 199, 0.45);
    }

    .brand-text h1 {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: -0.3px;
    }

    .brand-text p {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .lang-btn {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid var(--glass-border);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--primary-blue);
      cursor: pointer;
      box-shadow: var(--shadow-card);
      transition: all 0.2s ease;
    }

    .lang-btn:hover {
      background: #ffffff;
      transform: scale(1.03);
    }

    .security-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(16, 185, 129, 0.14);
      border: 1px solid rgba(16, 185, 129, 0.35);
      padding: 6px 14px;
      border-radius: 30px;
      font-size: 0.76rem;
      color: #059669;
      font-weight: 700;
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.9);
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 10px var(--success);
      animation: pulse 1.8s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    .main-grid {
      flex: 1;
      display: grid;
      grid-template-columns: 1.18fr 0.82fr;
      overflow: hidden;
    }

    @media (max-width: 880px) {
      .main-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
      }
    }

    .video-side {
      background: rgba(248, 250, 252, 0.5);
      border-left: 1px solid var(--glass-border);
      border-right: 1px solid var(--glass-border);
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 14px;
      overflow-y: auto;
    }

    .video-stage {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      flex: 1;
      min-height: 290px;
      background: rgba(15, 23, 42, 0.98);
      border-radius: 22px;
      padding: 10px;
      box-shadow: inset 0 2px 12px rgba(0, 0, 0, 0.4), 0 14px 28px -8px rgba(15, 23, 42, 0.28);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .video-card {
      position: relative;
      background: #0f172a;
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }

    .video-card video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .video-card.local video {
      transform: scaleX(-1);
    }

    .user-tag {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(10px);
      color: #f8fafc;
      font-size: 0.68rem;
      padding: 3px 10px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-weight: 700;
      letter-spacing: 0.3px;
    }

    html[dir="ltr"] .user-tag {
      right: auto;
      left: 8px;
    }

    .identity-card {
      background: var(--glass-card);
      backdrop-filter: blur(14px);
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: var(--shadow-card);
    }

    .id-value {
      font-family: monospace;
      font-weight: 700;
      color: var(--primary-blue);
      font-size: 0.94rem;
      letter-spacing: 0.5px;
    }

    .controls-bar {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .glass-input {
      flex: 1;
      height: 44px;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid var(--glass-border);
      border-radius: 14px;
      padding: 0 14px;
      font-size: 0.88rem;
      color: var(--text-main);
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);
      transition: all 0.25s ease;
    }

    .glass-input:focus {
      border-color: var(--primary-blue);
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.18);
      background: #ffffff;
    }

    .glass-btn {
      height: 44px;
      padding: 0 16px;
      border-radius: 14px;
      border: none;
      font-weight: 700;
      font-size: 0.84rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .btn-connect {
      background: linear-gradient(135deg, #0284c7, #0369a1);
      color: #ffffff;
      box-shadow: 0 6px 16px -3px rgba(2, 132, 199, 0.4);
    }

    .btn-connect:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px -3px rgba(2, 132, 199, 0.5);
    }

    .btn-circle {
      width: 44px;
      height: 44px;
      padding: 0;
      border-radius: 14px;
      background: var(--glass-card);
      border: 1px solid var(--glass-border);
      color: var(--text-main);
      font-size: 1.15rem;
      box-shadow: var(--shadow-card);
      transition: all 0.2s ease;
    }

    .btn-circle:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-1px);
    }

    .btn-circle.off-state {
      background: rgba(244, 63, 94, 0.15) !important;
      border-color: rgba(244, 63, 94, 0.4) !important;
      color: var(--danger) !important;
    }

    .chat-side {
      background: rgba(255, 255, 255, 0.32);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
    }

    .messages-container {
      flex: 1;
      padding: 18px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .messages-container::-webkit-scrollbar {
      width: 5px;
    }

    .messages-container::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.4);
      border-radius: 10px;
    }

    .bubble {
      max-width: 82%;
      padding: 10px 16px;
      border-radius: 18px;
      font-size: 0.92rem;
      line-height: 1.5;
      word-break: break-word;
      backdrop-filter: blur(14px);
      border: 1px solid var(--glass-border);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
      position: relative;
    }

    .bubble.out {
      align-self: flex-end;
      background: var(--bubble-out);
      border-bottom-left-radius: 4px;
      color: #0369a1;
    }

    .bubble.in {
      align-self: flex-start;
      background: var(--bubble-in);
      border-bottom-right-radius: 4px;
      color: var(--text-main);
    }

    html[dir="ltr"] .bubble.out {
      border-bottom-left-radius: 18px;
      border-bottom-right-radius: 4px;
    }

    html[dir="ltr"] .bubble.in {
      border-bottom-right-radius: 18px;
      border-bottom-left-radius: 4px;
    }

    .bubble-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 4px;
      font-size: 0.65rem;
      color: var(--text-muted);
    }

    .sender-name {
      font-weight: 700;
      color: var(--primary-blue);
      margin-bottom: 2px;
    }

    .bottom-input-bar {
      padding: 12px 18px;
      background: rgba(255, 255, 255, 0.6);
      border-top: 1px solid var(--glass-border);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn-action-icon {
      background: transparent;
      border: none;
      font-size: 1.25rem;
      color: var(--text-muted);
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .btn-action-icon:hover {
      background: rgba(2, 132, 199, 0.1);
      color: var(--primary-blue);
    }

    .btn-send {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: linear-gradient(135deg, #0284c7, #0369a1);
      border: none;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 6px 14px -3px rgba(2, 132, 199, 0.4);
      transition: all 0.2s;
    }

    .btn-send:hover {
      transform: translateY(-1px);
    }

    .recording-active {
      background: var(--danger) !important;
      color: #fff !important;
      box-shadow: 0 0 15px rgba(244, 63, 94, 0.5);
      animation: pulse 1s infinite;
    }
  </style>
</head>
<body>

<div class="app-window">
  <div class="top-bar">
    <div class="branding">
      <div class="logo-badge">ار</div>
      <div class="brand-text">
        <h1 id="txtTitle">ارتباط</h1>
        <p id="txtSub">کیفیت استودیویی فوق‌پایدار • معماری اسکای‌روم • طراحی: بنیامین</p>
      </div>
    </div>
    <div class="header-actions">
      <button class="lang-btn" onclick="toggleLanguage()" id="langBtn">English</button>
      <div class="security-pill">
        <span class="pulse-dot" id="secDot"></span>
        <span id="userCount">اتصال HD کریستالی فعال</span>
      </div>
    </div>
  </div>

  <div class="main-grid">
    <div class="video-side">
      <div class="video-stage" id="videoGrid">
        <div class="video-card local">
          <video id="localVideo" autoplay playsinline muted></video>
          <div class="user-tag" id="localTag">شما (Full HD)</div>
        </div>
        <div class="video-card" id="slot1" style="display:none;">
          <video id="vid1" autoplay playsinline></video>
          <div class="user-tag" id="tag1">کاربر ۲</div>
        </div>
        <div class="video-card" id="slot2" style="display:none;">
          <video id="vid2" autoplay playsinline></video>
          <div class="user-tag" id="tag2">کاربر ۳</div>
        </div>
        <div class="video-card" id="slot3" style="display:none;">
          <video id="vid3" autoplay playsinline></video>
          <div class="user-tag" id="tag3">کاربر ۴</div>
        </div>
      </div>

      <div id="audioHost"></div>

      <div class="identity-card">
        <div>
          <div style="font-size:0.68rem; color:var(--text-muted); font-weight:600;" id="txtMyIdLabel">شناسه امن ارتباط شما:</div>
          <div id="myId" class="id-value">درحال برقراری تونل امن...</div>
        </div>
        <button class="glass-btn btn-connect" style="height:32px; padding:0 12px; font-size:0.75rem;" onclick="copyId()" id="btnCopyId">کپی شناسه</button>
      </div>

      <div class="controls-bar">
        <input type="text" id="targetId" class="glass-input" placeholder="شناسه عضو جدید...">
        <button class="glass-btn btn-connect" onclick="callPeer()" id="btnConnect">اتصال</button>
        <button class="glass-btn btn-circle" id="micBtn" onclick="toggleMute()" title="میکروفون">🎤</button>
        <button class="glass-btn btn-circle" id="camBtn" onclick="toggleCamera()" title="دوربین">📹</button>
        <button class="glass-btn btn-circle" onclick="toggleFullScreen()" title="تمام صفحه">⛶</button>
      </div>
    </div>

    <div class="chat-side">
      <div class="messages-container" id="chatBox">
        <div class="bubble in">
          <div class="sender-name" id="txtSysSender">ارتباط</div>
          <span id="txtSysWelcome">کیفیت صدا و تصویر استودیویی آماده است. مکالمات کاملاً بدون سرور، امن و ضد فیلتر منتقل می‌شوند.</span>
          <div class="bubble-meta"><span id="txtSysTag">سیستم</span></div>
        </div>
      </div>

      <div class="bottom-input-bar">
        <button class="btn-action-icon" onclick="document.getElementById('fileInput').click()" title="ارسال فایل امن">📎</button>
        <input type="file" id="fileInput" style="display:none;" onchange="sendFile(this)">

        <input type="text" id="msgInput" class="glass-input" placeholder="پیام بنویسید..." onkeypress="if(event.key==='Enter') sendText()">

        <button class="btn-action-icon" id="voiceBtn" onclick="toggleVoice()" title="ارسال ویس">🎙️</button>
        <button class="btn-send" onclick="sendText()" title="ارسال">➤</button>
      </div>
    </div>
  </div>
</div>

<script>
  var currentLang = 'fa';
  var translations = {
    fa: {
      langToggle: 'English',
      title: 'ارتباط',
      sub: 'کیفیت استودیویی فوق‌پایدار • معماری اسکای‌روم • طراحی: بنیامین',
      statusReady: 'اتصال HD کریستالی فعال',
      statusPeers: ' نفر آنلاین (کیفیت استودیویی)',
      myIdLabel: 'شناسه امن ارتباط شما:',
      copyBtn: 'کپی شناسه',
      copiedAlert: 'شناسه امن کپی شد: ',
      connectPlaceholder: 'شناسه عضو جدید...',
      connectBtn: 'اتصال',
      chatPlaceholder: 'پیام بنویسید...',
      sysSender: 'ارتباط',
      sysWelcome: 'کیفیت صدا و تصویر استودیویی آماده است. مکالمات کاملاً بدون سرور، امن و ضد فیلتر منتقل می‌شوند.',
      sysTag: 'سیستم',
      youTag: 'شما (Full HD)',
      camOff: 'تصویر شما بسته است',
      userPrefix: 'کاربر ',
      selfName: 'شما',
      errInput: 'شناسه را وارد کنید',
      errSelf: 'شناسه خود را نمی‌توانید وارد کنید',
      errExist: 'این مخاطب متصل است',
      errFull: 'اتاق تکمیل است (حداکثر ۴ نفر).',
      fileLimit: 'حداکثر حجم مجاز فایل ۲۵ مگابایت است.'
    },
    en: {
      langToggle: 'فارسی',
      title: 'Ertebat',
      sub: 'Studio-Grade Live Stream • Skyroom Architecture • Designed by Benyamin',
      statusReady: 'Crystal HD Link Active',
      statusPeers: ' peers online (Studio Quality)',
      myIdLabel: 'Your Secure Peer ID:',
      copyBtn: 'Copy ID',
      copiedAlert: 'Secure ID Copied: ',
      connectPlaceholder: 'Enter Peer ID to call...',
      connectBtn: 'Call',
      chatPlaceholder: 'Type a message...',
      sysSender: 'Ertebat',
      sysWelcome: 'Studio-grade voice and video ready. End-to-end encrypted, zero-server & censorship-resistant.',
      sysTag: 'System',
      youTag: 'You (Full HD)',
      camOff: 'Camera is Off',
      userPrefix: 'Peer ',
      selfName: 'You',
      errInput: 'Please enter a valid Peer ID',
      errSelf: 'You cannot call your own ID',
      errExist: 'This peer is already connected',
      errFull: 'Room is full (max 4 participants).',
      fileLimit: 'Max allowed file size is 25MB.'
    }
  };

  function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    var t = translations[currentLang];

    document.getElementById('rootHtml').dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    document.getElementById('rootHtml').lang = currentLang;

    document.getElementById('langBtn').innerText = t.langToggle;
    document.getElementById('txtTitle').innerText = t.title;
    document.getElementById('txtSub').innerText = t.sub;
    document.getElementById('txtMyIdLabel').innerText = t.myIdLabel;
    document.getElementById('btnCopyId').innerText = t.copyBtn;
    document.getElementById('targetId').placeholder = t.connectPlaceholder;
    document.getElementById('btnConnect').innerText = t.connectBtn;
    document.getElementById('msgInput').placeholder = t.chatPlaceholder;
    document.getElementById('txtSysSender').innerText = t.sysSender;
    document.getElementById('txtSysWelcome').innerText = t.sysWelcome;
    document.getElementById('txtSysTag').innerText = t.sysTag;

    var track = localStream ? localStream.getVideoTracks()[0] : null;
    var isCamOn = track ? track.enabled : true;
    document.getElementById('localTag').innerText = isCamOn ? t.youTag : t.camOff;

    updateOnlineCount();
  }

  var localStream = null;
  var peer = null;
  var peers = {};
  var slots = [
    { el: 'slot1', vid: 'vid1', tag: 'tag1', id: null },
    { el: 'slot2', vid: 'vid2', tag: 'tag2', id: null },
    { el: 'slot3', vid: 'vid3', tag: 'tag3', id: null }
  ];

  var mediaRecorder = null;
  var audioChunks = [];
  var isRecording = false;

  var rtcConfig = {
    config: {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:stun3.l.google.com:19302' },
        { urls: 'stun:stun4.l.google.com:19302' },
        { urls: 'stun:stun.cloudflare.com:3478' }
      ],
      iceTransportPolicy: 'all',
      iceCandidatePoolSize: 10,
      sdpSemantics: 'unified-plan'
    }
  };

  async function initCamera() {
    try {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1920, min: 640 },
          height: { ideal: 1080, min: 480 },
          frameRate: { ideal: 30, min: 20 },
          facingMode: "user"
        },
        audio: {
          echoCancellation: { ideal: true },
          noiseSuppression: { ideal: true },
          autoGainControl: { ideal: true },
          sampleRate: 48000,
          channelCount: 1
        }
      });
      document.getElementById('localVideo').srcObject = localStream;
    } catch (e) {
      alert('Camera or Microphone access was denied.');
    }
  }

  function initPeer() {
    peer = new Peer(rtcConfig);

    peer.on('open', function(id) {
      document.getElementById('myId').innerText = sanitizeText(id);
      updateNetworkBadge(true);
    });

    peer.on('call', function(call) {
      call.answer(localStream);
      bindCall(call);
    });

    peer.on('connection', function(conn) {
      bindChat(conn);
    });

    peer.on('disconnected', function() {
      updateNetworkBadge(false);
      peer.reconnect();
    });

    peer.on('error', function(err) {
      console.log('Peer error fallback:', err);
    });
  }

  function callPeer() {
    var t = translations[currentLang];
    var rawTarget = document.getElementById('targetId').value.trim();
    var target = sanitizeText(rawTarget);
    if (!target) return alert(t.errInput);
    if (target === peer.id) return alert(t.errSelf);
    if (peers[target]) return alert(t.errExist);

    var slot = slots.find(function(s) { return s.id === null; });
    if (!slot) return alert(t.errFull);

    var call = peer.call(target, localStream);
    bindCall(call);

    var conn = peer.connect(target);
    bindChat(conn);

    document.getElementById('targetId').value = '';
  }

  function optimizeSenderQuality(pc) {
    if (!pc.getSenders) return;
    pc.getSenders().forEach(function(sender) {
      if (sender.track && sender.track.kind === 'video') {
        var params = sender.getParameters();
        if (!params.encodings) params.encodings = [{}];
        params.degradationPreference = 'balanced';
        if (sender.setParameters) {
          sender.setParameters(params).catch(function() {});
        }
      }
    });
  }

  function bindCall(call) {
    var id = sanitizeText(call.peer);
    var t = translations[currentLang];

    call.on('stream', function(stream) {
      var slot = slots.find(function(s) { return s.id === id; });
      if (!slot) {
        slot = slots.find(function(s) { return s.id === null; });
        if (!slot) return;
        slot.id = id;
      }
      document.getElementById(slot.vid).srcObject = stream;
      document.getElementById(slot.el).style.display = 'flex';
      document.getElementById(slot.tag).innerText = t.userPrefix + id.substring(0, 4);

      var aud = document.getElementById('aud_' + id);
      if (!aud) {
        aud = document.createElement('audio');
        aud.id = 'aud_' + id;
        aud.autoplay = true;
        document.getElementById('audioHost').appendChild(aud);
      }
      aud.srcObject = stream;
      aud.play().catch(function() {});

      updateOnlineCount();
    });

    if (call.peerConnection) {
      var pc = call.peerConnection;
      optimizeSenderQuality(pc);
      pc.oniceconnectionstatechange = function() {
        if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed') {
          if (pc.restartIce) pc.restartIce();
        }
      };
    }

    call.on('close', function() { dropPeer(id); });
    call.on('error', function() { dropPeer(id); });

    if (!peers[id]) peers[id] = {};
    peers[id].call = call;
  }

  function bindChat(conn) {
    var id = sanitizeText(conn.peer);

    conn.on('data', function(payload) {
      if (typeof payload === 'string') {
        renderMessage(payload, 'in', id);
      } else if (payload && payload.type === 'file') {
        renderFile(payload, 'in', id);
      } else if (payload && payload.type === 'voice') {
        renderVoice(payload.audio, 'in', id);
      }
    });

    conn.on('close', function() { dropPeer(id); });

    if (!peers[id]) peers[id] = {};
    peers[id].conn = conn;
    updateOnlineCount();
  }

  function dropPeer(id) {
    var slot = slots.find(function(s) { return s.id === id; });
    if (slot) {
      document.getElementById(slot.vid).srcObject = null;
      document.getElementById(slot.el).style.display = 'none';
      slot.id = null;
    }
    var aud = document.getElementById('aud_' + id);
    if (aud) aud.remove();

    delete peers[id];
    updateOnlineCount();
  }

  function updateOnlineCount() {
    var t = translations[currentLang];
    var count = Object.keys(peers).length + 1;
    if (count === 1) {
      document.getElementById('userCount').innerText = t.statusReady;
    } else {
      document.getElementById('userCount').innerText = count + t.statusPeers;
    }
  }

  function updateNetworkBadge(isOnline) {
    var dot = document.getElementById('secDot');
    dot.style.background = isOnline ? '#10b981' : '#f43f5e';
    dot.style.boxShadow = isOnline ? '0 0 10px #10b981' : '0 0 10px #f43f5e';
  }

  function toggleMute() {
    if (!localStream) return;
    var track = localStream.getAudioTracks()[0];
    if (track) {
      track.enabled = !track.enabled;
      var btn = document.getElementById('micBtn');
      if (track.enabled) {
        btn.innerText = '🎤';
        btn.classList.remove('off-state');
      } else {
        btn.innerText = '🔇';
        btn.classList.add('off-state');
      }
    }
  }

  function toggleCamera() {
    if (!localStream) return;
    var track = localStream.getVideoTracks()[0];
    var t = translations[currentLang];
    if (track) {
      track.enabled = !track.enabled;
      var btn = document.getElementById('camBtn');
      var tag = document.getElementById('localTag');
      if (track.enabled) {
        btn.innerText = '📹';
        btn.classList.remove('off-state');
        tag.innerText = t.youTag;
      } else {
        btn.innerText = '🚫';
        btn.classList.add('off-state');
        tag.innerText = t.camOff;
      }
    }
  }

  function toggleFullScreen() {
    var grid = document.getElementById('videoGrid');
    if (!document.fullscreenElement) {
      grid.requestFullscreen ? grid.requestFullscreen() : grid.webkitRequestFullscreen();
    } else {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
    }
  }

  function sendText() {
    var input = document.getElementById('msgInput');
    var raw = input.value.trim();
    if (!raw) return;

    var safe = sanitizeText(raw);
    broadcast({ type: 'text', val: safe });
    renderMessage(safe, 'out', translations[currentLang].selfName);
    input.value = '';
  }

  function broadcast(data) {
    Object.values(peers).forEach(function(p) {
      if (p.conn && p.conn.open) {
        p.conn.send(data.type === 'text' ? data.val : data);
      }
    });
  }

  function sanitizeText(str) {
    if (typeof str !== 'string') return '';
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function renderMessage(text, dir, sender) {
    var box = document.getElementById('chatBox');
    var b = document.createElement('div');
    b.className = 'bubble ' + dir;
    var time = new Date().toLocaleTimeString(currentLang === 'fa' ? 'fa-IR' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    var senderTag = dir === 'in' ? '<div class="sender-name">' + sanitizeText(sender.substring(0, 6)) + '</div>' : '';

    b.innerHTML = senderTag + '<div>' + sanitizeText(text) + '</div><div class="bubble-meta"><span>' + time + '</span></div>';
    box.appendChild(b);
    box.scrollTop = box.scrollHeight;
  }

  function sendFile(input) {
    var file = input.files[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      alert(translations[currentLang].fileLimit);
      input.value = '';
      return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
      var payload = {
        type: 'file',
        name: sanitizeText(file.name),
        fileType: file.type,
        data: e.target.result
      };
      broadcast(payload);
      renderFile(payload, 'out', translations[currentLang].selfName);
      input.value = '';
    };
    reader.readAsDataURL(file);
  }

  function renderFile(payload, dir, sender) {
    var box = document.getElementById('chatBox');
    var b = document.createElement('div');
    b.className = 'bubble ' + dir;
    var time = new Date().toLocaleTimeString(currentLang === 'fa' ? 'fa-IR' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    var senderTag = dir === 'in' ? '<div class="sender-name">' + sanitizeText(sender.substring(0, 6)) + '</div>' : '';

    var cleanName = sanitizeText(payload.name);
    var cleanData = payload.data;

    if (payload.fileType && payload.fileType.startsWith('image/')) {
      b.innerHTML = senderTag + '<img src="' + cleanData + '" style="max-width:100%; border-radius:12px; margin-bottom:4px; box-shadow:0 4px 10px rgba(0,0,0,0.1);"/><div class="bubble-meta"><span>' + time + '</span></div>';
    } else {
      b.innerHTML = senderTag + '<div>📎 <a href="' + cleanData + '" download="' + cleanName + '" style="color:var(--primary-blue); font-weight:700; text-decoration:none;">' + cleanName + '</a></div><div class="bubble-meta"><span>' + time + '</span></div>';
    }
    box.appendChild(b);
    box.scrollTop = box.scrollHeight;
  }

  async function toggleVoice() {
    var btn = document.getElementById('voiceBtn');

    if (!isRecording) {
      try {
        var stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = function(e) {
          if (e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = function() {
          var blob = new Blob(audioChunks, { type: 'audio/webm' });
          var reader = new FileReader();
          reader.onloadend = function() {
            var base64 = reader.result;
            var payload = { type: 'voice', audio: base64 };
            broadcast(payload);
            renderVoice(base64, 'out', translations[currentLang].selfName);
          };
          reader.readAsDataURL(blob);
        };

        mediaRecorder.start();
        isRecording = true;
        btn.classList.add('recording-active');
      } catch (err) {
        alert('Microphone access was denied.');
      }
    } else {
      mediaRecorder.stop();
      isRecording = false;
      btn.classList.remove('recording-active');
    }
  }

  function renderVoice(src, dir, sender) {
    var box = document.getElementById('chatBox');
    var b = document.createElement('div');
    b.className = 'bubble ' + dir;
    var time = new Date().toLocaleTimeString(currentLang === 'fa' ? 'fa-IR' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    var senderTag = dir === 'in' ? '<div class="sender-name">' + sanitizeText(sender.substring(0, 6)) + '</div>' : '';

    b.innerHTML = senderTag + '<div style="display:flex; align-items:center; gap:8px;"><audio controls src="' + src + '" style="max-width:200px; height:34px;"></audio></div><div class="bubble-meta"><span>' + time + '</span></div>';
    box.appendChild(b);
    box.scrollTop = box.scrollHeight;
  }

  function copyId() {
    var val = document.getElementById('myId').innerText;
    var t = translations[currentLang];
    if (val && !val.includes('...')) {
      navigator.clipboard.writeText(val);
      alert(t.copiedAlert + val);
    }
  }

  window.addEventListener('load', async function() {
    await initCamera();
    initPeer();
  });
</script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'no-cache, no-store, must-revalidate',
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY',
        'referrer-policy': 'no-referrer'
      }
    });
  }
};
