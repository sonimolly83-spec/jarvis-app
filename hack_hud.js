(function(){
  var st = document.createElement('style');
  st.innerHTML =
    "#ghostHack { position:fixed; inset:0; pointer-events:none; z-index:1; font-family:monospace; font-size:10px; color:rgba(0,255,65,0.22); padding:55px 10px; overflow:hidden; white-space:pre-wrap; line-height:1.4; } " +
    "#cyberRadar { position:fixed; right:12px; bottom:62px; width:68px; height:68px; border:1px solid rgba(0,240,255,0.4); border-radius:50%; pointer-events:none; z-index:2; box-shadow:0 0 15px rgba(0,255,65,0.2); background:radial-gradient(circle, rgba(0,255,65,0.12) 0%, transparent 70%); } " +
    "#cyberRadar::after { content:''; position:absolute; inset:0; border-radius:50%; border-top:2px solid #00ff41; animation:spinR 1.8s linear infinite; } " +
    "@keyframes spinR { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} } " +
    ".card { border:1px solid #00f0ff !important; box-shadow:0 0 18px rgba(0,240,255,0.2), inset 0 0 15px rgba(0,255,65,0.12) !important; }";
  document.head.appendChild(st);

  var bg = document.createElement('div'); bg.id = 'ghostHack'; document.body.appendChild(bg);
  var rd = document.createElement('div'); rd.id = 'cyberRadar'; document.body.appendChild(rd);

  var fakeLogs = [
    "[+] BRUTEFORCE_SSH: 192.168.42.11 -> PASSWORD CRACKED: #AaruRoot99!",
    "[+] SHA-512 DECRYPTED: 8f9d2a7c4b1e00f8a9c2 -> ACCESS GRANTED",
    "[*] BYPASSING FIREWALL NODE_07... [SUCCESS // ROOT SHELL OPEN]",
    "[+] WPA3 HANDSHAKE CAPTURED -> KEY CRACKED: CyberKing_Aadi_01",
    "[*] SATELLITE TELEMETRY LINKED: KANPUR_CORE_MAINFRAME [100%]",
    "[+] INJECTING PAYLOAD 0x7F4A9C -> KERNEL OVERRIDE COMPLETE",
    "[+] ADMIN HASH MATCHED: root@mainframe -> PRIVILEGE: GOD_MODE"
  ];
  setInterval(function(){
    var line = fakeLogs[Math.floor(Math.random()*fakeLogs.length)] + " [" + Math.floor(1000+Math.random()*9000) + "ms]";
    bg.innerText = (line + "\n" + bg.innerText).substring(0, 1300);
  }, 650);
})();
