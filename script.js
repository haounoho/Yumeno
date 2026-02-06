
const data = {
  pasta: [
    { name: "la bottega yossci", time: "11:00-13:30, 18:00-20:30", url: "https://tabelog.com/aichi/A2305/A230503/23093152/?msockid=3bce2742de58646f00ce3215df7a6529://example.com/pastaA" },
    { name: "農家のパスタ NAPPA", time: "11:30-14:30, 17:30-21:00", url: "https://tabelog.com/aichi/A2305/A230503/23074929/?cid=yo_ms_kw_shop_st01_23074929&msclkid=b766d6cf69c310d4141bbf4a8543feee://example.com/pastaB" },
    { name: "Cafe KUREBA", time: "9:00-21:00", url: "https://example.com/https://tabelog.com/aichi/A2304/A230401/23085052/?msockid=3bce2742de58646f00ce3215df7a6529" },
    { name: "motti-pasta", time: "11:00-15:00, 17:00-22:00", url: "https://https://tabelog.com/aichi/A2301/A230113/23081950/?msockid=3bce2742de58646f00ce3215df7a6529.com/pastaB" }
  ],
  meat: [
    { name: "れすとらん仔馬", time: "11:00-15:00, 17:00-21:00", url: "https://tabelog.com/aichi/A2305/A230503/23001303/?msockid=3bce2742de58646f00ce3215df7a6529://example.com/meatC" },
    { name: "木こり家", time: "10:00-14:30, 17:00-22:00", url: "https://example.https://tabelog.com/aichi/A2304/A230401/23092229/?msockid=3bce2742de58646f00ce3215df7a6529/meatD" },
    { name: "鶏匠", time: "13:00-0:00", url: "https://https://tabelog.com/aichi/A2305/A230503/23086602/?msockid=3bce2742de58646f00ce3215df7a6529.com/pastaB" }
  ],
  ramen: [
    { name: "すすきのらぁめん 膳", time: "11:30-14:00, 17:30-0:00", url: "https://https://tabelog.com/aichi/A2305/A230503/23038415/?msockid=3bce2742de58646f00ce3215df7a6529.com/ramenE" },
    { name: "拉麺 ぶらい", time: "11:30-14:00, 18:00-21:00", url: "https://https://tabelog.com/aichi/A2301/A230112/23071163/?msockid=3bce2742de58646f00ce3215df7a6529example.com/ramenF" },
    { name: "かっつも亭", time: "11:00-14:00", url: "https://https://tabelog.com/aichi/A2301/A230112/23049995/?msockid=3bce2742de58646f00ce3215df7a6529.com/pastaB" },
    { name: "名古屋コーチン&らーめん 鳥よし", time: "11:00-15:00, 17:00-3:00", url: "https://tabelog.com/aichi/A2305/A230503/23045268/?msockid=3bce2742de58646f00ce3215df7a6529://example.com/pastaB" }
  ]
};

function showList(category) {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";

  data[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>🕒 ${item.time}</p>
      <a href="${item.url}" target="_blank">お店を見る →</a>
    `;

    cards.appendChild(card);
  });
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
