// ===== BUSINESS SETTINGS =====
const businessName = "Prathvi Sales & Services";
const googleReviewLink = "https://g.page/r/CYlFqC-4nLIcEBE/review"; 

// PRATHVI BACKEND URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbztnJnnRbAgV0-KhEGJ72-auTyuImoIQPW2KbCrqjGYhJwjdiBJPlODrK8D7QkzEHg/exec"; 

// ===== REVIEW TEMPLATES (HUMAN & CASUAL TONE) =====
const templates = {
  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Honestly, calling [BIZ] was the best decision.",
      "If you need home appliances fixed, [BIZ] is the absolute best.",
      "Had a great experience with [BIZ].",
      "Can't recommend [BIZ] enough for AC repair.",
      "Just got my washing machine serviced by [BIZ].",
      "Very professional appliance repair service at [BIZ].", 
      "My fridge stopped cooling, but [BIZ] fixed it immediately.", 
      "Easily the best appliance technicians in Pashan.", 
      "A neighbor recommended [BIZ] and I am so glad I called them.", 
      "[BIZ] provided incredibly fast service."
    ],
    middle: [
      "Outstanding AC servicing and repair work by Omkar. The service was excellent and professional.",
      "Gajanan and Mukul were very professional, punctual, and knowledgeable.",
      "The technician quickly identified the problem and repaired my front-load washing machine drum perfectly.",
      "Omkar provided support even late at night when it was urgently needed.",
      "They replaced the PCB and my washing machine works like new.",
      "The issue was diagnosed and resolved efficiently by Mukul.", 
      "It's hard to find reliable repairmen, but Gajanan and his team are totally transparent.", 
      "The technician explained the issue clearly before starting the repair.", 
      "They carried all the necessary spare parts with them.", 
      "Clean, efficient, and highly professional work by the entire Prathvi team."
    ],
    ending: [
      "Highly recommend them for any appliance repair!",
      "100% recommend keeping their number handy.",
      "Best repair service in Pune, hands down.",
      "Will definitely call them again if anything breaks.",
      "Saved me from buying a new machine.",
      "Totally worth the service charge.", 
      "Big thanks to Omkar, Gajanan, Mukul and the team!", 
      "Do yourself a favor and call them for any repairs.", 
      "10/10 service quality.", 
      "Great job by the entire team."
    ]
  },

  // ---------- HINDI ----------
  hi: {
    intro: [
      "सच बोलूं तो [BIZ] को बुलाना एकदम सही फैसला था।",
      "घर के अप्लायंसेज रिपेयर के लिए [BIZ] बेस्ट है।",
      "[BIZ] की सर्विस से मैं बहुत खुश हूँ।",
      "AC रिपेयर के लिए [BIZ] को ही बुलाना चाहिए।",
      "मेरी वाशिंग मशीन खराब थी, [BIZ] ने तुरंत ठीक कर दी।",
      "फ्रिज की कूलिंग बंद हो गई थी, [BIZ] ने आकर सॉल्व कर दिया।", 
      "यहाँ के टेक्निशियन बहुत प्रोफेशनल और हेल्पफुल हैं।", 
      "पाषाण एरिया में सबसे बेस्ट रिपेयर सर्विस है यार।", 
      "पड़ोसी ने [BIZ] के बारे में बताया था, एकदम सही सर्विस है।", 
      "इतनी फास्ट सर्विस मैंने पहले कभी नहीं देखी।"
    ],
    middle: [
      "ओमकार ने AC की सर्विसिंग बहुत बढ़िया और प्रोफेशनल तरीके से की।",
      "गजानन और मुकुल भैया बहुत प्रोफेशनल और पंक्चुअल थे, काम एकदम परफेक्ट किया।",
      "इन्होंने मेरी फ्रंट-लोड वाशिंग मशीन का ड्रम प्रॉब्लम तुरंत पकड़ लिया और अच्छे से रिपेयर कर दिया।",
      "रात को अर्जेंट जरूरत पड़ने पर भी ओमकार ने बहुत सपोर्ट किया।",
      "इन्होंने मशीन का पार्ट चेंज किया और अब वो एकदम नई जैसी चल रही है।",
      "मुकुल ने AC की प्रॉब्लम तुरंत समझी और जल्दी से सॉल्व कर दी।", 
      "आजकल अच्छे रिपेयर वाले मिलना मुश्किल है, पर गजानन और उनकी टीम बहुत सही है।", 
      "काम शुरू करने से पहले इन्होंने पूरा प्रॉब्लम अच्छे से समझाया।", 
      "ज़रूरी स्पेयर पार्ट्स ये लोग अपने साथ ही लेकर आए थे।", 
      "एकदम साफ-सुथरा और बढ़िया काम किया पृथ्वी टीम ने।"
    ],
    ending: [
      "रिपेयरिंग के लिए 100% रेकमेंडेड है।",
      "पुणे में सबसे बेस्ट रिपेयर सर्विस।",
      "पैसे एकदम वसूल सर्विस है।",
      "आगे से घर में कुछ भी खराब होगा तो इन्हीं को बुलाऊंगा।",
      "नई मशीन लेने का खर्चा बच गया।",
      "सर्विस चार्ज के हिसाब से काम बहुत भारी है।", 
      "ओमकार, गजानन, मुकुल और पूरी टीम को थैंक्स!", 
      "रिपेयरिंग के लिए बिना सोचे इन्हें कॉल करो।", 
      "मेरी तरफ से 10/10।", 
      "पूरी टीम का काम बहुत बढ़िया है।"
    ]
  },

  // ---------- MARATHI ----------
  mr: {
    intro: [
      "खरं सांगायचं तर [BIZ] ला बोलावणं एकदम योग्य निर्णय होता.",
      "घरातील वस्तू रिपेअर करायच्या असतील तर [BIZ] बेस्ट आहे.",
      "[BIZ] ची सर्व्हिस मला खूप आवडली.",
      "AC रिपेअरसाठी [BIZ] लाच नक्की बोलवा.",
      "माझी वॉशिंग मशीन खराब होती, [BIZ] ने लगेच ठीक केली.",
      "फ्रिजची कूलिंग गेली होती, [BIZ] च्या माणसांनी येऊन लगेच दुरुस्त केली.", 
      "इथले टेक्निशियन खूप प्रोफेशनल आणि मदत करणारे आहेत.", 
      "पाषाण मधील सर्वात बेस्ट रिपेअर सर्व्हिस आहे.", 
      "शेजाऱ्यांनी [BIZ] बद्दल सांगितलं, सर्व्हिस एकदम भारी निघाली.", 
      "इतकी फास्ट सर्व्हिस मी पहिल्यांदाच बघितली."
    ],
    middle: [
      "ओमकारने AC ची सर्व्हिसिंग एकदम उत्तम आणि प्रोफेशनल केली.",
      "गजानन आणि मुकुल खूप प्रोफेशनल होते आणि वेळेवर आले, त्यांनी प्रॉब्लेम लगेच ओळखला.",
      "माझ्या फ्रंट-लोड वॉशिंग मशीनच्या ड्रमचा प्रॉब्लेम त्यांनी अगदी काही वेळातच परफेक्ट रिपेअर केला.",
      "रात्रीच्या वेळी अर्जेंट गरज असतानाही ओमकारने खूप चांगली मदत केली.",
      "त्यांनी पार्ट बदलला आणि मशीन आता एकदम नवीन सारखी चालतेय.",
      "मुकुलने AC चा फॉल्ट लगेच शोधला आणि काम फास्ट पूर्ण केलं.", 
      "आजकाल चांगले रिपेअर वाले मिळणं कठीण आहे, पण गजानन आणि त्यांची टीम एकदम पारदर्शक आहे.", 
      "काम सुरू करण्याआधी त्यांनी प्रॉब्लेम व्यवस्थित समजावून सांगितला.", 
      "लागणारे सर्व स्पेयर पार्ट्स ते सोबतच घेऊन आले होते.", 
      "पृथ्वी टीमने एकदम स्वच्छ आणि परफेक्ट काम केलं."
    ],
    ending: [
      "रिपेअरिंगसाठी १००% रेकमेंडेड.",
      "पुण्यातील सर्वात बेस्ट रिपेअर सर्व्हिस.",
      "पैसे पूर्ण वसूल झाले.",
      "इथून पुढे काही बिघडलं तर यांनाच बोलावणार.",
      "नवीन मशीन घेण्याचा खर्च वाचला.",
      "सर्व्हिस चार्ज एकदम वर्थ आहे.", 
      "ओमकार, गजानन, मुकुल आणि पूर्ण टीमचे खूप खूप आभार!", 
      "रिपेअरिंगसाठी नक्की यांनाच कॉल करा.", 
      "माझ्याकडून १० पैकी १० मार्क.", 
      "टीमचं काम खूप भारी आहे."
    ]
  }
};

// ===== APP STATE =====
let currentLang = "en";
let shownCount = 0;
const batchSize = 10;
let generatedReviews = [];
let usedReviewsFromServer = []; 

// ===== HELPERS =====
function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function createReview(lang) {
  const t = templates[lang];
  const intro = randomItem(t.intro).replace("[BIZ]", businessName);
  return `${intro} ${randomItem(t.middle)} ${randomItem(t.ending)}`;
}

// ===== INIT APP & CONNECT TO DB =====
async function initApp() {
  const reviewsBox = document.getElementById("reviews");
  if (reviewsBox) reviewsBox.innerHTML = "<p style='text-align:center; color: gray;'>Loading fresh reviews...</p>";
  document.getElementById("loadMoreBtn").style.display = "none";
  
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();
    
    usedReviewsFromServer = Array.isArray(data) ? data : [];
    
  } catch (error) {
    console.error("Database connection failed. Loading offline mode.", error);
    usedReviewsFromServer = [];
  }
  
  setLanguage('en'); 
}

// ===== BUILD SAFE REVIEWS & FAILSAFE =====
function buildPool() {
  generatedReviews = [];
  const used = new Set();
  let safetyCounter = 0; 

  while (used.size < 30 && safetyCounter < 3000) {
    safetyCounter++;
    const newReview = createReview(currentLang);
    if (!usedReviewsFromServer.includes(newReview) && !used.has(newReview)) {
      used.add(newReview);
    }
  }

  generatedReviews = [...used];
  shownCount = 0;

  if (generatedReviews.length === 0) {
    document.getElementById("reviews").innerHTML = `
      <div style="text-align:center; padding: 30px 10px;">
        <h3 style="margin-bottom:10px;">🎉 Thank You!</h3>
        <p style="color:gray;">We have received an overwhelming amount of support. All available unique reviews in this language have been posted.</p>
      </div>`;
    document.getElementById("loadMoreBtn").style.display = "none";
    return false; 
  }
  return true; 
}

// ===== LOAD MORE =====
function loadMore() {
  const box = document.getElementById("reviews");

  for (let i = 0; i < batchSize; i++) {
    if (shownCount >= generatedReviews.length) {
      document.getElementById("loadMoreBtn").style.display = "none";
      return;
    }

    const review = generatedReviews[shownCount];
    shownCount++;

    const card = document.createElement("div");
    card.className = "review-card";

    const text = document.createElement("p");
    text.textContent = review;

    const btn = document.createElement("button");
    btn.textContent = "Post Review";
    btn.className = "post-btn";
    btn.onclick = () => postReview(review);

    card.appendChild(text);
    card.appendChild(btn);
    box.appendChild(card);
  }
}

// ===== LANGUAGE SWITCH =====
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("reviews").innerHTML = "";
  document.getElementById("loadMoreBtn").style.display = "block";
  
  const poolBuilt = buildPool();
  if (poolBuilt) { loadMore(); }
}

// ===== COPY + OPEN GOOGLE + SAVE TO DB =====
function postReview(text) {
  navigator.clipboard.writeText(text).then(() => {
    window.open(googleReviewLink, "_blank");
    alert("Review copied 👍 Paste it on Google and press POST.");

    fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ review: text })
    });

    usedReviewsFromServer.push(text);
  });
}

// ===== START THE ENGINE =====
initApp();
