  document.addEventListener('DOMContentLoaded', () => {
    const category = localStorage.getItem('selectedCategory');
    document.getElementById('category').innerText = category;
  
    const ayats = getAyatsByCategory(category);
    if (ayats.length === 0) {
      document.getElementById('ayat').innerText = 'No ayats available.';
      document.getElementById('reference').innerText = '';
    } else {
      const randomAyat = ayats[Math.floor(Math.random() * ayats.length)];
      document.getElementById('ayat').innerText = randomAyat.ayat;
      document.getElementById('reference').innerText = `${randomAyat.surah} ${randomAyat.verse}`;
    }
  
    document.getElementById('backButton').addEventListener('click', () => {
      window.location.href = 'popup.html';
    });
  });
  
  function getAyatsByCategory(category) {
    const ayats = [
        { surah: "Yusuf", verse: "12:87", ayat: "...Indeed, no one despairs of relief from Allah except the disbelieving people.", category: ["Hopelessness"] },
        { surah: "Al-Hijr", verse: "15:56", ayat: "...And who despairs of the mercy of his Lord except for those astray?", category: ["Hopelessness"] },
        { surah: "Az-Zumar", verse: "39:53", ayat: "Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'", category: ["Hopelessness", "Guilt"] },
        { surah: "Al-Imran", verse: "3:139", ayat: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.", category: ["Hopelessness"] },
        { surah: "At-Tawbah", verse: "9:51", ayat: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely.", category: ["Hopelessness"] },
        { surah: "Al-Imran", verse: "3:134", ayat: "Who spend [in the cause of Allah] during ease and hardship and who restrain anger and who pardon the people - and Allah loves the doers of good.", category: ["Anger"] },
        { surah: "Ash-Shura", verse: "42:37", ayat: "And those who avoid the major sins and immoralities, and when they are angry, they forgive.", category: ["Anger"] },
        { surah: "An-Nahl", verse: "16:126", ayat: "And if you punish [an enemy], O believers, punish with an equivalent of that with which you were harmed. But if you are patient - it is better for those who are patient.", category: ["Anger"] },
        { surah: "Al-Furqan", verse: "25:63", ayat: "And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them [harshly], they say [words of] peace.", category: ["Anger"] },
        { surah: "Al-A'raf", verse: "7:199", ayat: "Take what is given freely, enjoin what is good, and turn away from the ignorant.", category: ["Anger"] },
        { surah: "Al-Inshirah", verse: "94:5-6", ayat: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.", category: ["Frustration"] },
        { surah: "Al-Baqarah", verse: "2:45", ayat: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah].", category: ["Frustration"] },
        { surah: "An-Nisa", verse: "4:19", ayat: "...But if you dislike them - perhaps you dislike a thing and Allah makes therein much good.", category: ["Frustration"] },
        { surah: "Al-Kahf", verse: "18:10", ayat: "[Mention] when the youths retreated to the cave and said, 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.'", category: ["Frustration"] },
        { surah: "Al-Ankabut", verse: "29:69", ayat: "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.", category: ["Frustration"] },
        { surah: "At-Tawbah", verse: "9:104", ayat: "Do they not know that it is Allah who accepts repentance from His servants and receives charities and that it is Allah who is the Accepting of repentance, the Merciful?", category: ["Guilt"] },
        { surah: "Al-Furqan", verse: "25:70", ayat: "Except for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good. And ever is Allah Forgiving and Merciful.", category: ["Guilt"] },
        { surah: "An-Nisa", verse: "4:110", ayat: "And whoever does a wrong or wrongs himself but then seeks forgiveness of Allah will find Allah Forgiving and Merciful.", category: ["Guilt"] },
        { surah: "Al-Baqarah", verse: "2:222", ayat: "...Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.", category: ["Guilt"] },
        { surah: "Az-Zumar", verse: "39:53", ayat: "Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'", category: ["Guilt"] },
        { surah: "Ibrahim", verse: "14:7", ayat: "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'", category: ["Gratitude"] },
        { surah: "Ar-Rahman", verse: "55:13", ayat: "So which of the favors of your Lord would you deny?", category: ["Gratitude"] },
        { surah: "Al-Baqarah", verse: "2:152", ayat: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.", category: ["Gratitude"] },
        { surah: "An-Nahl", verse: "16:18", ayat: "And if you should count the favors of Allah, you could not enumerate them. Indeed, Allah is Forgiving and Merciful.", category: ["Gratitude"] },
        { surah: "Luqman", verse: "31:12", ayat: "And We had certainly given Luqman wisdom [and said], 'Be grateful to Allah.' And whoever is grateful is grateful for the benefit of himself. And whoever denies [His favor] - then indeed, Allah is Free of need and Praiseworthy.", category: ["Gratitude"] },
        { surah: "Al-Baqarah", verse: "2:286", ayat: "Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. 'Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.'", category: ["Guidance"] },
        { surah: "Al-Isra", verse: "17:80", ayat: "And say, 'My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority.'", category: ["Guidance"] },
        { surah: "An-Nisa", verse: "4:59", ayat: "O you who have believed, obey Allah and obey the Messenger and those in authority among you. And if you disagree over anything, refer it to Allah and the Messenger, if you should believe in Allah and the Last Day. That is the best [way] and best in result.", category: ["Guidance"] },
        { surah: "Al-Baqarah", verse: "2:186", ayat: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided.", category: ["Guidance"] },
        { surah: "An-Nahl", verse: "16:125", ayat: "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best. Indeed, your Lord is most knowing of who has strayed from His way, and He is most knowing of who is [rightly] guided.", category: ["Guidance"] },
        { surah: "Al-Imran", verse: "3:173", ayat: "Those to whom hypocrites said, 'Indeed, the people have gathered against you, so fear them.' But it [merely] increased them in faith, and they said, 'Sufficient for us is Allah, and [He is] the best Disposer of affairs.'", category: ["Strength"] },
        { surah: "Anfal", verse: "8:46", ayat: "And obey Allah and His Messenger, and do not dispute and [thus] lose courage and [then] your strength would depart; and be patient. Indeed, Allah is with the patient.", category: ["Strength"] },
        { surah: "Al-Ankabut", verse: "29:69", ayat: "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.", category: ["Strength"] },
        { surah: "Az-Zumar", verse: "39:10", ayat: "Say, 'O My servants who have believed, fear your Lord. For those who do good in this world is good, and the earth of Allah is spacious. Indeed, the patient will be given their reward without account.'", category: ["Strength"] },
        { surah: "Al-Imran", verse: "3:139", ayat: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.", category: ["Strength"] }
      ];
  
    return ayats.filter(ayat => ayat.category.includes(category));
  }
  