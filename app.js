
const DATA = [
  {
    id:"ishi3", emoji:"🪨", level:1,
    plain:"石の上にも三年",
    ruby:"<ruby>石<rt>いし</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にも<ruby>三年<rt>さんねん</rt></ruby>",
    meaning:"つらくても、長く続けて努力すれば、よい結果につながること。",
    scene:"できなかったことでも、毎日こつこつ練習して、できるようになった。",
    fill:["石の上にも","三年"]
  },
  {
    id:"nanakorobi", emoji:"💪", level:1,
    plain:"七転び八起き",
    ruby:"<ruby>七<rt>なな</rt></ruby><ruby>転<rt>ころ</rt></ruby>び<ruby>八<rt>や</rt></ruby><ruby>起<rt>お</rt></ruby>き",
    meaning:"何度失敗しても、くじけずに立ち直ってがんばること。",
    scene:"失敗してもあきらめず、何度もやり直した。",
    fill:["七転び","八起き"]
  },
  {
    id:"saru", emoji:"🐒", level:1,
    plain:"猿も木から落ちる",
    ruby:"<ruby>猿<rt>さる</rt></ruby>も<ruby>木<rt>き</rt></ruby>から<ruby>落<rt>お</rt></ruby>ちる",
    meaning:"上手な人でも、ときには失敗することがあるということ。",
    scene:"いつも絵が上手な人が、今日は少し失敗してしまった。",
    fill:["猿も木から","落ちる"]
  },
  {
    id:"neko", emoji:"🐱", level:1,
    plain:"猫に小判",
    ruby:"<ruby>猫<rt>ねこ</rt></ruby>に<ruby>小判<rt>こばん</rt></ruby>",
    meaning:"価値が分からない人に、よい物をあげても役に立たないこと。",
    scene:"高価な道具をもらっても、そのよさや使い方がまったく分からなかった。",
    fill:["猫に","小判"]
  },
  {
    id:"isoge", emoji:"🚶", level:1,
    plain:"急がば回れ",
    ruby:"<ruby>急<rt>いそ</rt></ruby>がば<ruby>回<rt>まわ</rt></ruby>れ",
    meaning:"急いでいるときほど、安全で確実な方法を選んだほうがよいこと。",
    scene:"近道は危ないので、少し遠くても安全な道を通った。",
    fill:["急がば","回れ"]
  },
  {
    id:"chiri", emoji:"⛰️", level:1,
    plain:"塵も積もれば山となる",
    ruby:"<ruby>塵<rt>ちり</rt></ruby>も<ruby>積<rt>つ</rt></ruby>もれば<ruby>山<rt>やま</rt></ruby>となる",
    meaning:"小さなことでも、積み重ねれば大きな結果になること。",
    scene:"毎日少しずつ貯金していたら、まとまった金額になった。",
    fill:["塵も積もれば","山となる"]
  },
  {
    id:"hyakubun", emoji:"👀", level:2,
    plain:"百聞は一見にしかず",
    ruby:"<ruby>百聞<rt>ひゃくぶん</rt></ruby>は<ruby>一見<rt>いっけん</rt></ruby>にしかず",
    meaning:"何度も話を聞くより、自分の目で一度見るほうがよく分かること。",
    scene:"写真や説明だけでなく、実際に工場を見学したらよく分かった。",
    fill:["百聞は","一見にしかず"]
  },
  {
    id:"nito", emoji:"🐇", level:2,
    plain:"二兎を追う者は一兎をも得ず",
    ruby:"<ruby>二兎<rt>にと</rt></ruby>を<ruby>追<rt>お</rt></ruby>う<ruby>者<rt>もの</rt></ruby>は<ruby>一兎<rt>いっと</rt></ruby>をも<ruby>得<rt>え</rt></ruby>ず",
    meaning:"二つのことを同時に欲ばると、どちらも失うことがあるということ。",
    scene:"二つの大会で同時に一番を目指し、どちらの練習も十分にできなかった。",
    fill:["二兎を追う者は","一兎をも得ず"]
  },
  {
    id:"inu", emoji:"🐕", level:2,
    plain:"犬も歩けば棒に当たる",
    ruby:"<ruby>犬<rt>いぬ</rt></ruby>も<ruby>歩<rt>ある</rt></ruby>けば<ruby>棒<rt>ぼう</rt></ruby>に<ruby>当<rt>あ</rt></ruby>たる",
    meaning:"行動すると、思いがけない出来事に出会うことがあるということ。",
    scene:"外へ出て行動してみたら、思いがけず新しい発見があった。",
    fill:["犬も歩けば","棒に当たる"]
  },
  {
    id:"tana", emoji:"🍡", level:2,
    plain:"棚からぼたもち",
    ruby:"<ruby>棚<rt>たな</rt></ruby>からぼたもち",
    meaning:"思いがけず幸運がやってくること。",
    scene:"応募したことを忘れていたプレゼントが、突然当たった。",
    fill:["棚から","ぼたもち"]
  },
  {
    id:"kappa", emoji:"🥒", level:2,
    plain:"河童の川流れ",
    ruby:"<ruby>河童<rt>かっぱ</rt></ruby>の<ruby>川流<rt>かわなが</rt></ruby>れ",
    meaning:"その道の名人でも、ときには失敗することがあるということ。",
    scene:"泳ぎが得意な人でも、思いがけずミスをすることがある。",
    fill:["河童の","川流れ"]
  },
  {
    id:"uma", emoji:"🐴", level:2,
    plain:"馬の耳に念仏",
    ruby:"<ruby>馬<rt>うま</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>に<ruby>念仏<rt>ねんぶつ</rt></ruby>",
    meaning:"いくらよいことを言い聞かせても、聞こうとしない人には効果がないこと。",
    scene:"何度注意されても、まったく聞こうとしなかった。",
    fill:["馬の耳に","念仏"]
  },
  {
    id:"koubou", emoji:"🖌️", level:3,
    plain:"弘法にも筆の誤り",
    ruby:"<ruby>弘法<rt>こうぼう</rt></ruby>にも<ruby>筆<rt>ふで</rt></ruby>の<ruby>誤<rt>あやま</rt></ruby>り",
    meaning:"名人でも、ときには失敗することがあるということ。",
    scene:"とても字の上手な先生でも、たまに書き間違えることがある。",
    fill:["弘法にも","筆の誤り"]
  },
  {
    id:"tonari", emoji:"🌿", level:3,
    plain:"隣の芝生は青い",
    ruby:"<ruby>隣<rt>となり</rt></ruby>の<ruby>芝生<rt>しばふ</rt></ruby>は<ruby>青<rt>あお</rt></ruby>い",
    meaning:"他人のものは、自分のものよりよく見えやすいということ。",
    scene:"友達の持ち物ばかり、とてもよく見えてうらやましく感じた。",
    fill:["隣の芝生は","青い"]
  },
  {
    id:"maki", emoji:"🌱", level:3,
    plain:"まかぬ種は生えぬ",
    ruby:"まかぬ<ruby>種<rt>たね</rt></ruby>は<ruby>生<rt>は</rt></ruby>えぬ",
    meaning:"何もしなければ、よい結果も得られないということ。",
    scene:"練習をまったくしなければ、上達することもない。",
    fill:["まかぬ種は","生えぬ"]
  },
  {
    id:"ishi2", emoji:"🪶", level:3,
    plain:"石橋をたたいて渡る",
    ruby:"<ruby>石橋<rt>いしばし</rt></ruby>をたたいて<ruby>渡<rt>わた</rt></ruby>る",
    meaning:"とても用心深く、安全を確かめてから行動すること。",
    scene:"何度も確認してから、大切な書類を提出した。",
    fill:["石橋をたたいて","渡る"]
  },
  {
    id:"warau", emoji:"😊", level:3,
    plain:"笑う門には福来る",
    ruby:"<ruby>笑<rt>わら</rt></ruby>う<ruby>門<rt>かど</rt></ruby>には<ruby>福<rt>ふく</rt></ruby><ruby>来<rt>き</rt></ruby>る",
    meaning:"明るく笑っているところには、自然と幸せがやってくるということ。",
    scene:"みんなで明るく声をかけ合っていたら、雰囲気もよくなった。",
    fill:["笑う門には","福来る"]
  },
  {
    id:"sannin", emoji:"🧠", level:3,
    plain:"三人寄れば文殊の知恵",
    ruby:"<ruby>三人<rt>さんにん</rt></ruby><ruby>寄<rt>よ</rt></ruby>れば<ruby>文殊<rt>もんじゅ</rt></ruby>の<ruby>知恵<rt>ちえ</rt></ruby>",
    meaning:"一人では難しくても、何人かで相談すればよい考えが出るということ。",
    scene:"一人では解決できなかったが、友達と相談したらよい方法が見つかった。",
    fill:["三人寄れば","文殊の知恵"]
  },
  {
    id:"dera", emoji:"⛏️", level:3,
    plain:"雨垂れ石を穿つ",
    ruby:"<ruby>雨垂<rt>あまだ</rt></ruby>れ<ruby>石<rt>いし</rt></ruby>を<ruby>穿<rt>うが</rt></ruby>つ",
    meaning:"小さな力でも、根気よく続ければ大きなことを成しとげられるということ。",
    scene:"毎日の短い練習を長く続けたことで、大きく上達した。",
    fill:["雨垂れ","石を穿つ"]
  },
  {
    id:"mimi", emoji:"👂", level:3,
    plain:"聞くは一時の恥、聞かぬは一生の恥",
    ruby:"<ruby>聞<rt>き</rt></ruby>くは<ruby>一時<rt>いっとき</rt></ruby>の<ruby>恥<rt>はじ</rt></ruby>、<ruby>聞<rt>き</rt></ruby>かぬは<ruby>一生<rt>いっしょう</rt></ruby>の<ruby>恥<rt>はじ</rt></ruby>",
    meaning:"分からないことは、その場で質問して知るほうがよいということ。",
    scene:"分からないままにせず、勇気を出して先生に質問した。",
    fill:["聞くは一時の恥","聞かぬは一生の恥"]
  }
];


const EXISTING_META = {"ishi3": {"sceneRuby": "できなかったことでも、<ruby>毎日<rt>まいにち</rt></ruby>こつこつ<ruby>練習<rt>れんしゅう</rt></ruby>して、できるようになった。", "visual": {"people": 1, "props": ["calendar", "target"], "accent": "#4aa3df"}}, "nanakorobi": {"sceneRuby": "<ruby>失敗<rt>しっぱい</rt></ruby>してもあきらめず、<ruby>何度<rt>なんど</rt></ruby>もやり<ruby>直<rt>なお</rt></ruby>した。", "visual": {"people": 1, "props": ["retry", "star"], "accent": "#ef7b67"}}, "saru": {"sceneRuby": "いつも<ruby>絵<rt>え</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>が、<ruby>今日<rt>きょう</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>失敗<rt>しっぱい</rt></ruby>してしまった。", "visual": {"people": 1, "props": ["canvas", "eraser"], "accent": "#8d6cc9"}}, "neko": {"sceneRuby": "<ruby>高価<rt>こうか</rt></ruby>な<ruby>道具<rt>どうぐ</rt></ruby>をもらっても、そのよさや<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>がまったく<ruby>分<rt>わ</rt></ruby>からなかった。", "visual": {"people": 1, "props": ["toolbox", "question"], "accent": "#e8a23a"}}, "isoge": {"sceneRuby": "<ruby>近道<rt>ちかみち</rt></ruby>は<ruby>危<rt>あぶ</rt></ruby>ないので、<ruby>少<rt>すこ</rt></ruby>し<ruby>遠<rt>とお</rt></ruby>くても<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>道<rt>みち</rt></ruby>を<ruby>通<rt>とお</rt></ruby>った。", "visual": {"people": 1, "props": ["road", "warning"], "accent": "#48a868"}}, "chiri": {"sceneRuby": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>少<rt>すこ</rt></ruby>しずつ<ruby>貯金<rt>ちょきん</rt></ruby>していたら、まとまった<ruby>金額<rt>きんがく</rt></ruby>になった。", "visual": {"people": 1, "props": ["coin", "piggy"], "accent": "#d99b35"}}, "hyakubun": {"sceneRuby": "<ruby>写真<rt>しゃしん</rt></ruby>や<ruby>説明<rt>せつめい</rt></ruby>だけでなく、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>工場<rt>こうじょう</rt></ruby>を<ruby>見学<rt>けんがく</rt></ruby>したらよく<ruby>分<rt>わ</rt></ruby>かった。", "visual": {"people": 2, "props": ["factory", "eye"], "accent": "#5b8fb8"}}, "nito": {"sceneRuby": "<ruby>二<rt>ふた</rt></ruby>つの<ruby>大会<rt>たいかい</rt></ruby>で<ruby>同時<rt>どうじ</rt></ruby>に<ruby>一番<rt>いちばん</rt></ruby>を<ruby>目指<rt>めざ</rt></ruby>し、どちらの<ruby>練習<rt>れんしゅう</rt></ruby>も<ruby>十分<rt>じゅうぶん</rt></ruby>にできなかった。", "visual": {"people": 1, "props": ["trophy", "ball"], "accent": "#e56262"}}, "inu": {"sceneRuby": "<ruby>外<rt>そと</rt></ruby>へ<ruby>出<rt>で</rt></ruby>て<ruby>行動<rt>こうどう</rt></ruby>してみたら、<ruby>思<rt>おも</rt></ruby>いがけず<ruby>新<rt>あたら</rt></ruby>しい<ruby>発見<rt>はっけん</rt></ruby>があった。", "visual": {"people": 1, "props": ["walk", "spark"], "accent": "#3c9a8d"}}, "tana": {"sceneRuby": "<ruby>応募<rt>おうぼ</rt></ruby>したことを<ruby>忘<rt>わす</rt></ruby>れていたプレゼントが、<ruby>突然<rt>とつぜん</rt></ruby><ruby>当<rt>あ</rt></ruby>たった。", "visual": {"people": 1, "props": ["gift", "spark"], "accent": "#db6aa5"}}, "kappa": {"sceneRuby": "<ruby>泳<rt>およ</rt></ruby>ぎが<ruby>得意<rt>とくい</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>でも、<ruby>思<rt>おも</rt></ruby>いがけずミスをすることがある。", "visual": {"people": 1, "props": ["pool", "splash"], "accent": "#479bd1"}}, "uma": {"sceneRuby": "<ruby>何度<rt>なんど</rt></ruby><ruby>注意<rt>ちゅうい</rt></ruby>されても、まったく<ruby>聞<rt>き</rt></ruby>こうとしなかった。", "visual": {"people": 2, "props": ["speech", "ear"], "accent": "#8c7c67"}}, "koubou": {"sceneRuby": "とても<ruby>字<rt>じ</rt></ruby>の<ruby>上手<rt>じょうず</rt></ruby>な<ruby>先生<rt>せんせい</rt></ruby>でも、たまに<ruby>書<rt>か</rt></ruby>き<ruby>間違<rt>まちが</rt></ruby>えることがある。", "visual": {"people": 1, "props": ["paper", "pencil"], "accent": "#72599b"}}, "tonari": {"sceneRuby": "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>ばかり、とてもよく<ruby>見<rt>み</rt></ruby>えてうらやましく<ruby>感<rt>かん</rt></ruby>じた。", "visual": {"people": 2, "props": ["bag", "spark"], "accent": "#6aad78"}}, "maki": {"sceneRuby": "<ruby>練習<rt>れんしゅう</rt></ruby>をまったくしなければ、<ruby>上達<rt>じょうたつ</rt></ruby>することもない。", "visual": {"people": 1, "props": ["empty", "target"], "accent": "#739a5b"}}, "ishi2": {"sceneRuby": "<ruby>何度<rt>なんど</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>してから、<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>した。", "visual": {"people": 1, "props": ["checklist", "paper"], "accent": "#4a8b7a"}}, "warau": {"sceneRuby": "みんなで<ruby>明<rt>あか</rt></ruby>るく<ruby>声<rt>こえ</rt></ruby>をかけ<ruby>合<rt>あ</rt></ruby>っていたら、<ruby>雰囲気<rt>ふんいき</rt></ruby>もよくなった。", "visual": {"people": 3, "props": ["smile", "spark"], "accent": "#e5a63b"}}, "sannin": {"sceneRuby": "<ruby>一人<rt>ひとり</rt></ruby>では<ruby>解決<rt>かいけつ</rt></ruby>できなかったが、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>したらよい<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>見<rt>み</rt></ruby>つかった。", "visual": {"people": 3, "props": ["table", "idea"], "accent": "#5f85cb"}}, "dera": {"sceneRuby": "<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>短<rt>みじか</rt></ruby>い<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>長<rt>なが</rt></ruby>く<ruby>続<rt>つづ</rt></ruby>けたことで、<ruby>大<rt>おお</rt></ruby>きく<ruby>上達<rt>じょうたつ</rt></ruby>した。", "visual": {"people": 1, "props": ["calendar", "graph"], "accent": "#468fbd"}}, "mimi": {"sceneRuby": "<ruby>分<rt>わ</rt></ruby>からないままにせず、<ruby>勇気<rt>ゆうき</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>先生<rt>せんせい</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>した。", "visual": {"people": 2, "props": ["question", "teacher"], "accent": "#af6aa1"}}};
const EXTRA_DATA = [{"id": "zen", "emoji": "🤝", "level": 1, "plain": "善は急げ", "ruby": "<ruby>善<rt>ぜん</rt></ruby>は<ruby>急<rt>いそ</rt></ruby>げ", "meaning": "よいと思ったことは、ためらわず早く実行したほうがよいということ。", "scene": "困っている友達を見て、後でではなく、すぐに手伝った。", "sceneRuby": "<ruby>困<rt>こま</rt></ruby>っている<ruby>友達<rt>ともだち</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、<ruby>後<rt>あと</rt></ruby>でではなく、すぐに<ruby>手伝<rt>てつだ</rt></ruby>った。", "fill": ["善は", "急げ"], "fillRuby": ["<ruby>善<rt>ぜん</rt></ruby>は", "<ruby>急<rt>いそ</rt></ruby>げ"], "visual": {"people": 2, "props": ["help", "bag"], "accent": "#46a678"}}, {"id": "sona", "emoji": "🎒", "level": 1, "plain": "備えあれば憂いなし", "ruby": "<ruby>備<rt>そな</rt></ruby>えあれば<ruby>憂<rt>うれ</rt></ruby>いなし", "meaning": "前もって準備しておけば、いざというときに心配が少ないということ。", "scene": "大雨に備えて、前の日に懐中電灯や水を確認しておいた。", "sceneRuby": "<ruby>大雨<rt>おおあめ</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて、<ruby>前<rt>まえ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>に<ruby>懐中電灯<rt>かいちゅうでんとう</rt></ruby>や<ruby>水<rt>みず</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しておいた。", "fill": ["備えあれば", "憂いなし"], "fillRuby": ["<ruby>備<rt>そな</rt></ruby>えあれば", "<ruby>憂<rt>うれ</rt></ruby>いなし"], "visual": {"people": 1, "props": ["flashlight", "water"], "accent": "#4188c7"}}, {"id": "shippai", "emoji": "🛠️", "level": 1, "plain": "失敗は成功のもと", "ruby": "<ruby>失敗<rt>しっぱい</rt></ruby>は<ruby>成功<rt>せいこう</rt></ruby>のもと", "meaning": "失敗から原因や方法を学べば、次の成功につなげられるということ。", "scene": "工作がうまくいかなかったので、作り方を直してもう一度挑戦した。", "sceneRuby": "<ruby>工作<rt>こうさく</rt></ruby>がうまくいかなかったので、<ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>を<ruby>直<rt>なお</rt></ruby>してもう<ruby>一度<rt>いちど</rt></ruby><ruby>挑戦<rt>ちょうせん</rt></ruby>した。", "fill": ["失敗は", "成功のもと"], "fillRuby": ["<ruby>失敗<rt>しっぱい</rt></ruby>は", "<ruby>成功<rt>せいこう</rt></ruby>のもと"], "visual": {"people": 1, "props": ["puzzle", "wrench"], "accent": "#d36d5b"}}, {"id": "keizoku", "emoji": "📚", "level": 1, "plain": "継続は力なり", "ruby": "<ruby>継続<rt>けいぞく</rt></ruby>は<ruby>力<rt>ちから</rt></ruby>なり", "meaning": "小さなことでも続けることで、やがて大きな力になるということ。", "scene": "毎日10分ずつ本を読むことを続けて、読める量が増えた。", "sceneRuby": "<ruby>毎日<rt>まいにち</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>ずつ<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>むことを<ruby>続<rt>つづ</rt></ruby>けて、<ruby>読<rt>よ</rt></ruby>める<ruby>量<rt>りょう</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えた。", "fill": ["継続は", "力なり"], "fillRuby": ["<ruby>継続<rt>けいぞく</rt></ruby>は", "<ruby>力<rt>ちから</rt></ruby>なり"], "visual": {"people": 1, "props": ["book", "calendar"], "accent": "#6f7ec7"}}, {"id": "suki", "emoji": "🎨", "level": 1, "plain": "好きこそ物の上手なれ", "ruby": "<ruby>好<rt>す</rt></ruby>きこそ<ruby>物<rt>もの</rt></ruby>の<ruby>上手<rt>じょうず</rt></ruby>なれ", "meaning": "好きなことは進んで取り組むので、自然と上達しやすいということ。", "scene": "絵を描くのが好きで、時間があると自分から描いていたら上手になった。", "sceneRuby": "<ruby>絵<rt>え</rt></ruby>を<ruby>描<rt>か</rt></ruby>くのが<ruby>好<rt>す</rt></ruby>きで、<ruby>時間<rt>じかん</rt></ruby>があると<ruby>自分<rt>じぶん</rt></ruby>から<ruby>描<rt>か</rt></ruby>いていたら<ruby>上手<rt>じょうず</rt></ruby>になった。", "fill": ["好きこそ", "物の上手なれ"], "fillRuby": ["<ruby>好<rt>す</rt></ruby>きこそ", "<ruby>物<rt>もの</rt></ruby>の<ruby>上手<rt>じょうず</rt></ruby>なれ"], "visual": {"people": 1, "props": ["canvas", "heart"], "accent": "#cf6ea1"}}, {"id": "hayaoki", "emoji": "🌅", "level": 1, "plain": "早起きは三文の徳", "ruby": "<ruby>早起<rt>はやお</rt></ruby>きは<ruby>三文<rt>さんもん</rt></ruby>の<ruby>徳<rt>とく</rt></ruby>", "meaning": "早起きをすると、何かよいことがあるということ。", "scene": "いつもより早く起きたので、朝の準備をゆっくりできた。", "sceneRuby": "いつもより<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きたので、<ruby>朝<rt>あさ</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>をゆっくりできた。", "fill": ["早起きは", "三文の徳"], "fillRuby": ["<ruby>早起<rt>はやお</rt></ruby>きは", "<ruby>三文<rt>さんもん</rt></ruby>の<ruby>徳<rt>とく</rt></ruby>"], "visual": {"people": 1, "props": ["sun", "clock"], "accent": "#e6a436"}}, {"id": "isseki", "emoji": "🛍️", "level": 2, "plain": "一石二鳥", "ruby": "<ruby>一石二鳥<rt>いっせきにちょう</rt></ruby>", "meaning": "一つの行動で、二つのよい結果を得ること。", "scene": "店まで歩いて運動をしながら、頼まれていた買い物も済ませた。", "sceneRuby": "<ruby>店<rt>みせ</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>いて<ruby>運動<rt>うんどう</rt></ruby>をしながら、<ruby>頼<rt>たの</rt></ruby>まれていた<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>も<ruby>済<rt>す</rt></ruby>ませた。", "fill": ["一石", "二鳥"], "fillRuby": ["<ruby>一石<rt>いっせき</rt></ruby>", "<ruby>二鳥<rt>にちょう</rt></ruby>"], "visual": {"people": 1, "props": ["walk", "cart"], "accent": "#4f9f85"}}, {"id": "korobanu", "emoji": "💾", "level": 2, "plain": "転ばぬ先の杖", "ruby": "<ruby>転<rt>ころ</rt></ruby>ばぬ<ruby>先<rt>さき</rt></ruby>の<ruby>杖<rt>つえ</rt></ruby>", "meaning": "失敗しないように、前もって準備や用心をしておくこと。", "scene": "発表の前に、データが消えても困らないよう予備のコピーを用意した。", "sceneRuby": "<ruby>発表<rt>はっぴょう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、データが<ruby>消<rt>き</rt></ruby>えても<ruby>困<rt>こま</rt></ruby>らないよう<ruby>予備<rt>よび</rt></ruby>のコピーを<ruby>用意<rt>ようい</rt></ruby>した。", "fill": ["転ばぬ先の", "杖"], "fillRuby": ["<ruby>転<rt>ころ</rt></ruby>ばぬ<ruby>先<rt>さき</rt></ruby>の", "<ruby>杖<rt>つえ</rt></ruby>"], "visual": {"people": 1, "props": ["computer", "backup"], "accent": "#5d80c7"}}, {"id": "anzuru", "emoji": "🎤", "level": 2, "plain": "案ずるより産むが易し", "ruby": "<ruby>案<rt>あん</rt></ruby>ずるより<ruby>産<rt>う</rt></ruby>むが<ruby>易<rt>やす</rt></ruby>し", "meaning": "始める前に心配するより、実際にやってみると意外に簡単なことがあるということ。", "scene": "発表が心配だったが、実際に始めてみたら思ったより落ち着いて話せた。", "sceneRuby": "<ruby>発表<rt>はっぴょう</rt></ruby>が<ruby>心配<rt>しんぱい</rt></ruby>だったが、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>めてみたら<ruby>思<rt>おも</rt></ruby>ったより<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>話<rt>はな</rt></ruby>せた。", "fill": ["案ずるより", "産むが易し"], "fillRuby": ["<ruby>案<rt>あん</rt></ruby>ずるより", "<ruby>産<rt>う</rt></ruby>むが<ruby>易<rt>やす</rt></ruby>し"], "visual": {"people": 1, "props": ["microphone", "speech"], "accent": "#9d69bd"}}, {"id": "narau", "emoji": "📱", "level": 2, "plain": "習うより慣れよ", "ruby": "<ruby>習<rt>なら</rt></ruby>うより<ruby>慣<rt>な</rt></ruby>れよ", "meaning": "説明を聞くだけでなく、実際に何度もやって慣れることが大切だということ。", "scene": "タブレットの説明を読むだけでなく、何度も操作して使い方を覚えた。", "sceneRuby": "タブレットの<ruby>説明<rt>せつめい</rt></ruby>を<ruby>読<rt>よ</rt></ruby>むだけでなく、<ruby>何度<rt>なんど</rt></ruby>も<ruby>操作<rt>そうさ</rt></ruby>して<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えた。", "fill": ["習うより", "慣れよ"], "fillRuby": ["<ruby>習<rt>なら</rt></ruby>うより", "<ruby>慣<rt>な</rt></ruby>れよ"], "visual": {"people": 1, "props": ["tablet", "finger"], "accent": "#4c98c2"}}, {"id": "tetsu", "emoji": "🔥", "level": 2, "plain": "鉄は熱いうちに打て", "ruby": "<ruby>鉄<rt>てつ</rt></ruby>は<ruby>熱<rt>あつ</rt></ruby>いうちに<ruby>打<rt>う</rt></ruby>て", "meaning": "関心や意欲が高いうちに、すぐ取り組むのがよいということ。", "scene": "新しい調理の手順を教わったその日に、もう一度練習して覚えた。", "sceneRuby": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>調理<rt>ちょうり</rt></ruby>の<ruby>手順<rt>てじゅん</rt></ruby>を<ruby>教<rt>おそ</rt></ruby>わったその<ruby>日<rt>ひ</rt></ruby>に、もう<ruby>一度<rt>いちど</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>して<ruby>覚<rt>おぼ</rt></ruby>えた。", "fill": ["鉄は熱いうちに", "打て"], "fillRuby": ["<ruby>鉄<rt>てつ</rt></ruby>は<ruby>熱<rt>あつ</rt></ruby>いうちに", "<ruby>打<rt>う</rt></ruby>て"], "visual": {"people": 1, "props": ["recipe", "flame"], "accent": "#e4714d"}}, {"id": "toki", "emoji": "⏰", "level": 2, "plain": "時は金なり", "ruby": "<ruby>時<rt>とき</rt></ruby>は<ruby>金<rt>かね</rt></ruby>なり", "meaning": "時間はお金と同じように大切なので、むだにしないほうがよいということ。", "scene": "待ち時間に、あとで必要になるプリントを整理しておいた。", "sceneRuby": "<ruby>待<rt>ま</rt></ruby>ち<ruby>時間<rt>じかん</rt></ruby>に、あとで<ruby>必要<rt>ひつよう</rt></ruby>になるプリントを<ruby>整理<rt>せいり</rt></ruby>しておいた。", "fill": ["時は", "金なり"], "fillRuby": ["<ruby>時<rt>とき</rt></ruby>は", "<ruby>金<rt>かね</rt></ruby>なり"], "visual": {"people": 1, "props": ["clock", "folder"], "accent": "#d49a36"}}, {"id": "kuchi", "emoji": "💬", "level": 2, "plain": "口は災いの元", "ruby": "<ruby>口<rt>くち</rt></ruby>は<ruby>災<rt>わざわ</rt></ruby>いの<ruby>元<rt>もと</rt></ruby>", "meaning": "よく考えずに話すと、思わぬトラブルを招くことがあるということ。", "scene": "よく考えずに言った一言で、友達を傷つけてしまった。", "sceneRuby": "よく<ruby>考<rt>かんが</rt></ruby>えずに<ruby>言<rt>い</rt></ruby>った<ruby>一言<rt>ひとこと</rt></ruby>で、<ruby>友達<rt>ともだち</rt></ruby>を<ruby>傷<rt>きず</rt></ruby>つけてしまった。", "fill": ["口は", "災いの元"], "fillRuby": ["<ruby>口<rt>くち</rt></ruby>は", "<ruby>災<rt>わざわ</rt></ruby>いの<ruby>元<rt>もと</rt></ruby>"], "visual": {"people": 2, "props": ["speech", "sad"], "accent": "#d75e69"}}, {"id": "todai", "emoji": "🔎", "level": 2, "plain": "灯台下暗し", "ruby": "<ruby>灯台<rt>とうだい</rt></ruby><ruby>下<rt>もと</rt></ruby><ruby>暗<rt>くら</rt></ruby>し", "meaning": "身近なことは、かえって気づきにくいということ。", "scene": "探していたプリントは、ずっと目の前の机の下に置いてあった。", "sceneRuby": "<ruby>探<rt>さが</rt></ruby>していたプリントは、ずっと<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>の<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>置<rt>お</rt></ruby>いてあった。", "fill": ["灯台下", "暗し"], "fillRuby": ["<ruby>灯台<rt>とうだい</rt></ruby><ruby>下<rt>もと</rt></ruby>", "<ruby>暗<rt>くら</rt></ruby>し"], "visual": {"people": 1, "props": ["desk", "search"], "accent": "#63819a"}}, {"id": "hana", "emoji": "🍡", "level": 2, "plain": "花より団子", "ruby": "<ruby>花<rt>はな</rt></ruby>より<ruby>団子<rt>だんご</rt></ruby>", "meaning": "見た目の美しさよりも、実際に役立つものや実益を選ぶこと。", "scene": "花見に行ったが、花を見るより食べ物のほうを楽しみにしていた。", "sceneRuby": "<ruby>花見<rt>はなみ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったが、<ruby>花<rt>はな</rt></ruby>を<ruby>見<rt>み</rt></ruby>るより<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>のほうを<ruby>楽<rt>たの</rt></ruby>しみにしていた。", "fill": ["花より", "団子"], "fillRuby": ["<ruby>花<rt>はな</rt></ruby>より", "<ruby>団子<rt>だんご</rt></ruby>"], "visual": {"people": 1, "props": ["flower", "snack"], "accent": "#d66e9b"}}, {"id": "go", "emoji": "🏢", "level": 3, "plain": "郷に入っては郷に従え", "ruby": "<ruby>郷<rt>ごう</rt></ruby>に<ruby>入<rt>い</rt></ruby>っては<ruby>郷<rt>ごう</rt></ruby>に<ruby>従<rt>したが</rt></ruby>え", "meaning": "新しい場所では、その場所の習慣や決まりに合わせるのがよいということ。", "scene": "実習先では、学校と違うやり方でも、その職場のルールを守って行動した。", "sceneRuby": "<ruby>実習先<rt>じっしゅうさき</rt></ruby>では、<ruby>学校<rt>がっこう</rt></ruby>と<ruby>違<rt>ちが</rt></ruby>うやり<ruby>方<rt>かた</rt></ruby>でも、その<ruby>職場<rt>しょくば</rt></ruby>のルールを<ruby>守<rt>まも</rt></ruby>って<ruby>行動<rt>こうどう</rt></ruby>した。", "fill": ["郷に入っては", "郷に従え"], "fillRuby": ["<ruby>郷<rt>ごう</rt></ruby>に<ruby>入<rt>い</rt></ruby>っては", "<ruby>郷<rt>ごう</rt></ruby>に<ruby>従<rt>したが</rt></ruby>え"], "visual": {"people": 2, "props": ["building", "rules"], "accent": "#527ea6"}}, {"id": "koukai", "emoji": "📅", "level": 3, "plain": "後悔先に立たず", "ruby": "<ruby>後悔<rt>こうかい</rt></ruby><ruby>先<rt>さき</rt></ruby>に<ruby>立<rt>た</rt></ruby>たず", "meaning": "終わってから後悔しても取り返せないので、前もってよく考えることが大切だということ。", "scene": "提出日を忘れてしまい、前の日に確認しておけばよかったと思った。", "sceneRuby": "<ruby>提出日<rt>ていしゅつび</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れてしまい、<ruby>前<rt>まえ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しておけばよかったと<ruby>思<rt>おも</rt></ruby>った。", "fill": ["後悔", "先に立たず"], "fillRuby": ["<ruby>後悔<rt>こうかい</rt></ruby>", "<ruby>先<rt>さき</rt></ruby>に<ruby>立<rt>た</rt></ruby>たず"], "visual": {"people": 1, "props": ["calendar", "late"], "accent": "#a07168"}}, {"id": "tatsutori", "emoji": "🧹", "level": 3, "plain": "立つ鳥跡を濁さず", "ruby": "<ruby>立<rt>た</rt></ruby>つ<ruby>鳥<rt>とり</rt></ruby><ruby>跡<rt>あと</rt></ruby>を<ruby>濁<rt>にご</rt></ruby>さず", "meaning": "その場を去るときは、後始末をきちんとして迷惑を残さないこと。", "scene": "教室を使ったあと、机を戻してごみを拾ってから部屋を出た。", "sceneRuby": "<ruby>教室<rt>きょうしつ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ったあと、<ruby>机<rt>つくえ</rt></ruby>を<ruby>戻<rt>もど</rt></ruby>してごみを<ruby>拾<rt>ひろ</rt></ruby>ってから<ruby>部屋<rt>へや</rt></ruby>を<ruby>出<rt>で</rt></ruby>た。", "fill": ["立つ鳥", "跡を濁さず"], "fillRuby": ["<ruby>立<rt>た</rt></ruby>つ<ruby>鳥<rt>とり</rt></ruby>", "<ruby>跡<rt>あと</rt></ruby>を<ruby>濁<rt>にご</rt></ruby>さず"], "visual": {"people": 1, "props": ["broom", "desk"], "accent": "#5a9d82"}}, {"id": "nouaru", "emoji": "🧑‍🏫", "level": 3, "plain": "能ある鷹は爪を隠す", "ruby": "<ruby>能<rt>のう</rt></ruby>ある<ruby>鷹<rt>たか</rt></ruby>は<ruby>爪<rt>つめ</rt></ruby>を<ruby>隠<rt>かく</rt></ruby>す", "meaning": "本当に実力のある人は、むやみに自分の力を自慢しないということ。", "scene": "とても得意なのに自慢せず、困っている友達を静かに手伝った。", "sceneRuby": "とても<ruby>得意<rt>とくい</rt></ruby>なのに<ruby>自慢<rt>じまん</rt></ruby>せず、<ruby>困<rt>こま</rt></ruby>っている<ruby>友達<rt>ともだち</rt></ruby>を<ruby>静<rt>しず</rt></ruby>かに<ruby>手伝<rt>てつだ</rt></ruby>った。", "fill": ["能ある鷹は", "爪を隠す"], "fillRuby": ["<ruby>能<rt>のう</rt></ruby>ある<ruby>鷹<rt>たか</rt></ruby>は", "<ruby>爪<rt>つめ</rt></ruby>を<ruby>隠<rt>かく</rt></ruby>す"], "visual": {"people": 2, "props": ["medal", "help"], "accent": "#7d70a5"}}, {"id": "nasake", "emoji": "🔄", "level": 3, "plain": "情けは人の為ならず", "ruby": "<ruby>情<rt>なさ</rt></ruby>けは<ruby>人<rt>ひと</rt></ruby>の<ruby>為<rt>ため</rt></ruby>ならず", "meaning": "人に親切にすると、その親切がめぐりめぐって自分にもよい形で返ってくるということ。", "scene": "困っていた友達を助けたら、後日、自分が困ったときにその友達が助けてくれた。", "sceneRuby": "<ruby>困<rt>こま</rt></ruby>っていた<ruby>友達<rt>ともだち</rt></ruby>を<ruby>助<rt>たす</rt></ruby>けたら、<ruby>後日<rt>ごじつ</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>困<rt>こま</rt></ruby>ったときにその<ruby>友達<rt>ともだち</rt></ruby>が<ruby>助<rt>たす</rt></ruby>けてくれた。", "fill": ["情けは", "人の為ならず"], "fillRuby": ["<ruby>情<rt>なさ</rt></ruby>けは", "<ruby>人<rt>ひと</rt></ruby>の<ruby>為<rt>ため</rt></ruby>ならず"], "visual": {"people": 2, "props": ["help", "cycle"], "accent": "#58a27a"}}];

for(const item of DATA){
  const meta=EXISTING_META[item.id];
  if(meta) Object.assign(item,meta);
}
for(const item of EXTRA_DATA) DATA.push(item);

const VISUAL_PROP_LABELS={
  calendar:"日付",target:"目標",retry:"再挑戦",star:"成功",canvas:"絵",eraser:"修正",toolbox:"道具",question:"？",
  road:"道",warning:"注意",coin:"貯金",piggy:"貯金",factory:"工場",eye:"見る",trophy:"大会",ball:"競技",
  walk:"歩く",spark:"発見",gift:"贈り物",pool:"水泳",splash:"水",speech:"会話",ear:"聞く",paper:"書類",
  pencil:"書く",bag:"持ち物",empty:"未実施",checklist:"確認",smile:"笑顔",table:"相談",idea:"考え",
  graph:"成長",teacher:"先生",help:"手伝う",flashlight:"ライト",water:"水",puzzle:"工作",wrench:"修理",
  book:"本",heart:"好き",sun:"朝",clock:"時間",cart:"買い物",computer:"PC",backup:"予備",microphone:"発表",
  tablet:"端末",finger:"操作",recipe:"手順",flame:"すぐ",folder:"整理",sad:"困る",desk:"机",search:"探す",
  flower:"花",snack:"食べ物",building:"職場",rules:"ルール",late:"遅れ",broom:"片付け",medal:"得意",
  cycle:"めぐる"
};
function svgPerson(x,y,accent,scale=1){
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <circle cx="0" cy="-22" r="10" fill="#ffd7b5" stroke="#5d5149" stroke-width="2"/>
    <path d="M-12 -10 Q0 -18 12 -10 L9 18 L-9 18 Z" fill="${accent}" stroke="#5d5149" stroke-width="2"/>
    <path d="M-7 18 L-10 39 M7 18 L10 39 M-11 -4 L-23 10 M11 -4 L23 8" fill="none" stroke="#5d5149" stroke-width="3" stroke-linecap="round"/>
  </g>`;
}
function svgProp(name,x,y,accent){
  const common=`stroke="#5d5149" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
  switch(name){
    case "calendar": return `<g><rect x="${x-18}" y="${y-15}" width="36" height="30" rx="4" fill="#fff" ${common}/><path d="M${x-18} ${y-6}H${x+18}" ${common}/><circle cx="${x-8}" cy="${y+3}" r="3" fill="${accent}"/><circle cx="${x+3}" cy="${y+3}" r="3" fill="${accent}"/></g>`;
    case "target": return `<g><circle cx="${x}" cy="${y}" r="17" fill="#fff" ${common}/><circle cx="${x}" cy="${y}" r="10" fill="#ffd966"/><circle cx="${x}" cy="${y}" r="4" fill="${accent}"/></g>`;
    case "retry": return `<g><path d="M${x+12} ${y-11} A17 17 0 1 0 ${x+13} ${y+10}" fill="none" ${common}/><path d="M${x+7} ${y-15}L${x+17} ${y-13}L${x+12} ${y-5}" fill="${accent}" ${common}/></g>`;
    case "star": return `<path d="M${x} ${y-17}l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z" fill="#ffd966" ${common}/>`;
    case "canvas": return `<g><rect x="${x-20}" y="${y-17}" width="40" height="29" fill="#fff" ${common}/><path d="M${x-12} ${y+12}L${x-20} ${y+28}M${x+12} ${y+12}L${x+20} ${y+28}M${x} ${y+12}V${y+28}" ${common}/><circle cx="${x-6}" cy="${y-5}" r="5" fill="#ffd966"/><path d="M${x-16} ${y+8}L${x-5} ${y-2}L${x+3} ${y+6}L${x+10} ${y}" fill="none" stroke="${accent}" stroke-width="3"/></g>`;
    case "eraser": return `<rect x="${x-13}" y="${y-7}" width="26" height="14" rx="3" fill="#f49aa6" ${common}/>`;
    case "toolbox": return `<g><rect x="${x-21}" y="${y-9}" width="42" height="25" rx="4" fill="${accent}" ${common}/><path d="M${x-10} ${y-9}v-7h20v7M${x-21} ${y+2}h42" ${common}/></g>`;
    case "question": return `<g><circle cx="${x}" cy="${y}" r="18" fill="#fff" ${common}/><text x="${x}" y="${y+8}" text-anchor="middle" font-size="24" font-weight="900" fill="${accent}">?</text></g>`;
    case "road": return `<g><path d="M${x-25} ${y+20}L${x-8} ${y-20}H${x+8}L${x+25} ${y+20}Z" fill="#c9c9c9" ${common}/><path d="M${x} ${y-14}V${y+15}" stroke="#fff" stroke-width="3" stroke-dasharray="6 5"/></g>`;
    case "warning": return `<g><path d="M${x} ${y-19}L${x+19} ${y+16}H${x-19}Z" fill="#ffd966" ${common}/><text x="${x}" y="${y+9}" text-anchor="middle" font-size="18" font-weight="900">!</text></g>`;
    case "coin": return `<g><circle cx="${x}" cy="${y}" r="15" fill="#ffd966" ${common}/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="14" font-weight="900">¥</text></g>`;
    case "piggy": return `<g><ellipse cx="${x}" cy="${y}" rx="22" ry="15" fill="#f6a7b4" ${common}/><circle cx="${x+20}" cy="${y-3}" r="7" fill="#f6a7b4" ${common}/><path d="M${x-12} ${y+11}v10M${x+8} ${y+12}v9M${x-3} ${y-15}v-7h10" ${common}/></g>`;
    case "factory": return `<g><path d="M${x-24} ${y+18}V${y-3}L${x-5} ${y-12}V${y-3}L${x+12} ${y-12}V${y+18}Z" fill="#b7d7e8" ${common}/><rect x="${x+14}" y="${y-20}" width="8" height="38" fill="#9e9e9e" ${common}/><rect x="${x-15}" y="${y+3}" width="8" height="8" fill="#fff"/></g>`;
    case "eye": return `<g><path d="M${x-20} ${y}Q${x} ${y-17} ${x+20} ${y}Q${x} ${y+17} ${x-20} ${y}Z" fill="#fff" ${common}/><circle cx="${x}" cy="${y}" r="7" fill="${accent}"/></g>`;
    case "trophy": return `<g><path d="M${x-12} ${y-15}H${x+12}V${y-3}Q${x+12} ${y+10} ${x} ${y+10}Q${x-12} ${y+10} ${x-12} ${y-3}Z" fill="#ffd966" ${common}/><path d="M${x} ${y+10}v10M${x-10} ${y+20}h20M${x-12} ${y-8}h-10v7q0 9 10 9M${x+12} ${y-8}h10v7q0 9-10 9" fill="none" ${common}/></g>`;
    case "ball": return `<circle cx="${x}" cy="${y}" r="17" fill="#fff" ${common}/><path d="M${x-15} ${y-5}Q${x} ${y+3} ${x+15} ${y-5}M${x} ${y-17}V${y+17}" fill="none" stroke="${accent}" stroke-width="2"/>`;
    case "walk": return `<g>${svgPerson(x,y,accent,.75)}<path d="M${x-20} ${y+35}h42" stroke="${accent}" stroke-width="3" stroke-dasharray="4 4"/></g>`;
    case "spark": return `<path d="M${x} ${y-18}l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="#ffd966" ${common}/>`;
    case "gift": return `<g><rect x="${x-20}" y="${y-8}" width="40" height="28" fill="#f2a0b5" ${common}/><rect x="${x-24}" y="${y-16}" width="48" height="10" fill="#f7c1cf" ${common}/><path d="M${x} ${y-16}V${y+20}M${x-13} ${y-17}q-7-9 0-12q10-2 13 12M${x+13} ${y-17}q7-9 0-12q-10-2-13 12" fill="none" ${common}/></g>`;
    case "pool": return `<g><rect x="${x-25}" y="${y-9}" width="50" height="29" rx="4" fill="#9fd8f3" ${common}/><path d="M${x-24} ${y}q8-5 16 0t16 0t16 0" fill="none" stroke="#fff" stroke-width="3"/></g>`;
    case "splash": return `<g fill="#68bce3"><circle cx="${x}" cy="${y}" r="6"/><circle cx="${x-10}" cy="${y+8}" r="4"/><circle cx="${x+11}" cy="${y+7}" r="4"/></g>`;
    case "speech": return `<g><rect x="${x-23}" y="${y-15}" width="46" height="28" rx="10" fill="#fff" ${common}/><path d="M${x-5} ${y+12}l-8 10 14-8" fill="#fff" ${common}/><circle cx="${x-10}" cy="${y}" r="2.5"/><circle cx="${x}" cy="${y}" r="2.5"/><circle cx="${x+10}" cy="${y}" r="2.5"/></g>`;
    case "ear": return `<path d="M${x+6} ${y-18}q-20-5-22 14q0 13 10 16q5 2 5 10h10q0-9-6-13q-7-5-5-13q2-9 11-7q8 2 6 11q-1 6-7 7" fill="#ffd7b5" ${common}/>`;
    case "paper": return `<g><rect x="${x-18}" y="${y-20}" width="36" height="42" rx="3" fill="#fff" ${common}/><path d="M${x-11} ${y-8}h22M${x-11} ${y}h18M${x-11} ${y+8}h15" stroke="${accent}" stroke-width="2"/></g>`;
    case "pencil": return `<g transform="rotate(-25 ${x} ${y})"><rect x="${x-18}" y="${y-4}" width="34" height="8" fill="#ffd966" ${common}/><path d="M${x+16} ${y-4}l10 4-10 4z" fill="#e0b090" ${common}/></g>`;
    case "bag": return `<g><rect x="${x-19}" y="${y-6}" width="38" height="28" rx="5" fill="${accent}" ${common}/><path d="M${x-10} ${y-6}q0-12 10-12t10 12" fill="none" ${common}/></g>`;
    case "empty": return `<g><rect x="${x-18}" y="${y-18}" width="36" height="36" rx="5" fill="#fff" ${common}/><path d="M${x-10} ${y-10}l20 20M${x+10} ${y-10}l-20 20" stroke="#bbb" stroke-width="3"/></g>`;
    case "checklist": return `<g><rect x="${x-21}" y="${y-20}" width="42" height="42" rx="4" fill="#fff" ${common}/><path d="M${x-14} ${y-9}l5 5 8-9M${x+3} ${y-9}h11M${x-14} ${y+5}l5 5 8-9M${x+3} ${y+5}h11" fill="none" stroke="${accent}" stroke-width="3"/></g>`;
    case "smile": return `<g><circle cx="${x}" cy="${y}" r="18" fill="#ffd7b5" ${common}/><circle cx="${x-6}" cy="${y-4}" r="2"/><circle cx="${x+6}" cy="${y-4}" r="2"/><path d="M${x-8} ${y+5}q8 9 16 0" fill="none" stroke="${accent}" stroke-width="2"/></g>`;
    case "table": return `<rect x="${x-26}" y="${y}" width="52" height="9" rx="3" fill="#c99a6b" ${common}/><path d="M${x-18} ${y+9}v18M${x+18} ${y+9}v18" ${common}/>`;
    case "idea": return `<g><circle cx="${x}" cy="${y-5}" r="13" fill="#fff6a8" ${common}/><path d="M${x-5} ${y+8}h10v7h-10zM${x} ${y-25}v-9M${x-20} ${y-18}l-7-7M${x+20} ${y-18}l7-7" ${common}/></g>`;
    case "graph": return `<g><path d="M${x-22} ${y+18}V${y-18}M${x-22} ${y+18}H${x+23}" ${common}/><path d="M${x-17} ${y+10}L${x-5} ${y+2}L${x+5} ${y+5}L${x+18} ${y-12}" fill="none" stroke="${accent}" stroke-width="4"/></g>`;
    case "teacher": return `<g>${svgPerson(x,y,accent,.7)}<rect x="${x+14}" y="${y-29}" width="31" height="24" rx="3" fill="#e8f2f4" ${common}/><path d="M${x+19} ${y-20}h20M${x+19} ${y-13}h14" stroke="${accent}" stroke-width="2"/></g>`;
    case "help": return `<g><path d="M${x-19} ${y+4}q10-15 20-2q9-12 20 2" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/><circle cx="${x-12}" cy="${y-10}" r="5" fill="#ffd7b5"/><circle cx="${x+13}" cy="${y-10}" r="5" fill="#ffd7b5"/></g>`;
    case "flashlight": return `<g transform="rotate(-20 ${x} ${y})"><rect x="${x-18}" y="${y-6}" width="25" height="12" rx="4" fill="${accent}" ${common}/><path d="M${x+7} ${y-10}h12v20h-12z" fill="#ddd" ${common}/><path d="M${x+20} ${y-13}l22-10v46l-22-10z" fill="#fff6b0" opacity=".75"/></g>`;
    case "water": return `<g><path d="M${x} ${y-21}q15 18 15 28a15 15 0 1 1-30 0q0-10 15-28z" fill="#79c7ef" ${common}/></g>`;
    case "puzzle": return `<g><path d="M${x-20} ${y-15}h15q-4 10 5 10t5-10h15v13q-10-4-10 5t10 5v13h-40v-36z" fill="#f0b95c" ${common}/></g>`;
    case "wrench": return `<path d="M${x-18} ${y-15}q9-8 17-2l-8 8 7 7 8-8q6 8-2 17l-17 17-8-8 17-17q-6-8 2-16z" fill="#aab2bd" ${common}/>`;
    case "book": return `<g><path d="M${x-24} ${y-14}q13-5 24 2v31q-11-7-24-2zM${x+24} ${y-14}q-13-5-24 2v31q11-7 24-2z" fill="#fff" ${common}/><path d="M${x} ${y-12}v31" ${common}/></g>`;
    case "heart": return `<path d="M${x} ${y+16}C${x-28} ${y-1} ${x-18} ${y-24} ${x} ${y-11}C${x+18} ${y-24} ${x+28} ${y-1} ${x} ${y+16}Z" fill="#ef7aa0" ${common}/>`;
    case "sun": return `<g><circle cx="${x}" cy="${y}" r="13" fill="#ffd45c" ${common}/><path d="M${x} ${y-25}v-10M${x} ${y+25}v10M${x-25} ${y}h-10M${x+25} ${y}h10M${x-18} ${y-18}l-7-7M${x+18} ${y-18}l7-7" ${common}/></g>`;
    case "clock": return `<g><circle cx="${x}" cy="${y}" r="19" fill="#fff" ${common}/><path d="M${x} ${y}v-11M${x} ${y}l10 6" ${common}/></g>`;
    case "cart": return `<g><path d="M${x-23} ${y-14}h7l6 23h24l7-17h-27" fill="#fff" ${common}/><circle cx="${x-4}" cy="${y+16}" r="4" fill="${accent}"/><circle cx="${x+14}" cy="${y+16}" r="4" fill="${accent}"/></g>`;
    case "computer": return `<g><rect x="${x-24}" y="${y-18}" width="48" height="31" rx="3" fill="#eaf1f7" ${common}/><path d="M${x} ${y+13}v9M${x-13} ${y+22}h26" ${common}/></g>`;
    case "backup": return `<g><rect x="${x-17}" y="${y-18}" width="34" height="36" rx="4" fill="#fff" ${common}/><path d="M${x-10} ${y-10}h20M${x-10} ${y-2}h20M${x-10} ${y+6}h12" stroke="${accent}" stroke-width="2"/><circle cx="${x+9}" cy="${y+9}" r="6" fill="#83c883"/></g>`;
    case "microphone": return `<g><rect x="${x-7}" y="${y-20}" width="14" height="27" rx="7" fill="${accent}" ${common}/><path d="M${x-15} ${y}q0 15 15 15t15-15M${x} ${y+15}v10M${x-9} ${y+25}h18" fill="none" ${common}/></g>`;
    case "tablet": return `<g><rect x="${x-18}" y="${y-24}" width="36" height="48" rx="5" fill="#eaf2f7" ${common}/><circle cx="${x}" cy="${y+18}" r="2.5" fill="#666"/></g>`;
    case "finger": return `<g><path d="M${x-4} ${y+20}V${y-6}q0-7 6-7t6 7v10l5-6q5-5 9-1q3 3 0 8l-13 21z" fill="#ffd7b5" ${common}/></g>`;
    case "recipe": return `<g><rect x="${x-19}" y="${y-21}" width="38" height="42" rx="4" fill="#fff" ${common}/><path d="M${x-11} ${y-10}h22M${x-11} ${y}h15M${x-11} ${y+10}h18" stroke="${accent}" stroke-width="2"/></g>`;
    case "flame": return `<path d="M${x} ${y+20}q-18-13-6-31q2 10 10 7q7-10 2-21q21 18 15 35q-5 14-21 10z" fill="#ff8b52" ${common}/>`;
    case "folder": return `<g><path d="M${x-24} ${y-14}h18l7 7h25v28h-50z" fill="#f0c85b" ${common}/></g>`;
    case "sad": return `<g><circle cx="${x}" cy="${y}" r="18" fill="#ffd7b5" ${common}/><circle cx="${x-6}" cy="${y-4}" r="2"/><circle cx="${x+6}" cy="${y-4}" r="2"/><path d="M${x-8} ${y+10}q8-9 16 0" fill="none" stroke="${accent}" stroke-width="2"/></g>`;
    case "desk": return `<g><rect x="${x-28}" y="${y-4}" width="56" height="10" rx="2" fill="#c99a6b" ${common}/><path d="M${x-20} ${y+6}v24M${x+20} ${y+6}v24" ${common}/><rect x="${x-10}" y="${y+12}" width="20" height="12" fill="#fff" ${common}/></g>`;
    case "search": return `<g><circle cx="${x-5}" cy="${y-5}" r="13" fill="none" stroke="${accent}" stroke-width="4"/><path d="M${x+5} ${y+5}l15 15" stroke="${accent}" stroke-width="5"/></g>`;
    case "flower": return `<g><circle cx="${x}" cy="${y}" r="6" fill="#ffd45c"/><g fill="#ef91b4">${[0,60,120,180,240,300].map(a=>`<ellipse cx="${x}" cy="${y-13}" rx="6" ry="10" transform="rotate(${a} ${x} ${y})"/>`).join("")}</g><path d="M${x} ${y+6}v25" stroke="#64a86a" stroke-width="3"/></g>`;
    case "snack": return `<g><circle cx="${x}" cy="${y-9}" r="8" fill="#f3c98f" ${common}/><circle cx="${x}" cy="${y+8}" r="8" fill="#f1ad82" ${common}/><path d="M${x} ${y-20}v40" stroke="#9b6b47" stroke-width="3"/></g>`;
    case "building": return `<g><rect x="${x-24}" y="${y-22}" width="48" height="44" fill="#bdd7e7" ${common}/><rect x="${x-7}" y="${y+5}" width="14" height="17" fill="#fff" ${common}/><path d="M${x-15} ${y-10}h8M${x+7} ${y-10}h8M${x-15} ${y}h8M${x+7} ${y}h8" stroke="#fff" stroke-width="4"/></g>`;
    case "rules": return `<g><rect x="${x-20}" y="${y-22}" width="40" height="44" rx="4" fill="#fff" ${common}/><path d="M${x-12} ${y-10}l4 4 7-8M${x+3} ${y-10}h10M${x-12} ${y+3}l4 4 7-8M${x+3} ${y+3}h10" fill="none" stroke="${accent}" stroke-width="3"/></g>`;
    case "late": return `<g><circle cx="${x}" cy="${y}" r="18" fill="#fff" ${common}/><path d="M${x} ${y}v-11M${x} ${y}l10 5" ${common}/><path d="M${x-24} ${y-23}l8 8M${x+24} ${y-23}l-8 8" stroke="#d75e69" stroke-width="4"/></g>`;
    case "broom": return `<g transform="rotate(-20 ${x} ${y})"><path d="M${x} ${y-28}v38" stroke="#9b6b47" stroke-width="4"/><path d="M${x-12} ${y+8}h24l8 21h-40z" fill="#e1b55d" ${common}/></g>`;
    case "medal": return `<g><circle cx="${x}" cy="${y+5}" r="14" fill="#ffd966" ${common}/><path d="M${x-8} ${y-8}l-5-20h10l5 20M${x+8} ${y-8}l5-20h-10l-5 20" fill="${accent}" ${common}/></g>`;
    case "cycle": return `<g><path d="M${x-5} ${y-18}a20 20 0 1 1-12 31" fill="none" stroke="${accent}" stroke-width="4"/><path d="M${x-21} ${y+15}l4-12 10 7" fill="${accent}" ${common}/></g>`;
    default: return `<g><circle cx="${x}" cy="${y}" r="18" fill="${accent}" opacity=".2" ${common}/></g>`;
  }
}
function sceneIllustration(k){
  const v=k.visual||{people:1,props:["question","spark"],accent:"#6f8ea5"};
  const accent=v.accent||"#6f8ea5";
  const people=v.people||1;
  let peopleSvg="";
  if(people===1) peopleSvg=svgPerson(45,63,accent,.75);
  else if(people===2) peopleSvg=svgPerson(35,64,accent,.64)+svgPerson(72,64,"#e18b65",.64);
  else peopleSvg=svgPerson(27,65,accent,.58)+svgPerson(59,65,"#e18b65",.58)+svgPerson(91,65,"#6ba780",.58);
  const positions=[[128,46],[148,79],[112,82]];
  const props=(v.props||[]).map((p,i)=>svgProp(p,positions[i%positions.length][0],positions[i%positions.length][1],accent)).join("");
  return `<svg class="scene-svg" viewBox="0 0 180 110" role="img" aria-label="場面のイラスト">
    <rect x="1" y="1" width="178" height="108" rx="16" fill="#fbfdff" stroke="#ddd5e8" stroke-width="2"/>
    <path d="M10 89H170" stroke="#d8d3cb" stroke-width="2"/>
    ${peopleSvg}${props}
  </svg>`;
}
function sceneHtml(k){
  return settings.furigana && k.sceneRuby ? k.sceneRuby : esc(k.scene);
}
function fillHalfHtml(k,index){
  if(settings.furigana && k.fillRuby) return k.fillRuby[index];
  return pieceText(k.fill[index]);
}
function anyPieceHtml(text){
  if(!settings.furigana) return esc(text);
  for(const item of DATA){
    if(item.fillRuby){
      if(item.fill[0]===text) return item.fillRuby[0];
      if(item.fill[1]===text) return item.fillRuby[1];
    }
  }
  return pieceText(text);
}
const DEFAULT_SETTINGS={
  furigana:true,speak:true,difficulty:2,questionCount:10,enabledIds:DATA.map(x=>x.id)
};
let settings=loadSettings();
let stats=JSON.parse(localStorage.getItem("kotowazaStats")||'{"correct":0,"total":0}');
let state={screen:"home"};

const app=document.getElementById("app");
const homeBtn=document.getElementById("homeBtn");
const furiganaToggle=document.getElementById("furiganaToggle");
const speakToggle=document.getElementById("speakToggle");
const progressSummary=document.getElementById("progressSummary");

homeBtn.onclick=showHome;
furiganaToggle.onclick=()=>{settings.furigana=!settings.furigana;saveSettings();updateHeader();rerender();};
speakToggle.onclick=()=>{settings.speak=!settings.speak;saveSettings();updateHeader();};

function loadSettings(){
  try{return {...DEFAULT_SETTINGS,...JSON.parse(localStorage.getItem("kotowazaSettingsV4")||"{}")};}
  catch(e){return {...DEFAULT_SETTINGS};}
}
function saveSettings(){localStorage.setItem("kotowazaSettingsV4",JSON.stringify(settings))}
function saveStats(){localStorage.setItem("kotowazaStats",JSON.stringify(stats));updateProgress()}
function updateProgress(){progressSummary.textContent=stats.total?`これまで ${stats.correct}/${stats.total} せいかい`:"これからスタート！"}
function updateHeader(){
  furiganaToggle.classList.toggle("active",settings.furigana);
  speakToggle.classList.toggle("active",settings.speak);
}
function setMode(mode){
  document.body.className="";
  document.body.classList.add("mode-"+mode);
}
function speak(text){
  if(!settings.speak||!("speechSynthesis" in window))return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang="ja-JP";u.rate=.9;speechSynthesis.speak(u);
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}
function kw(k){return settings.furigana?k.ruby:esc(k.plain)}

const HALF_RUBY={
  "石の上にも":"<ruby>石<rt>いし</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にも",
  "三年":"<ruby>三年<rt>さんねん</rt></ruby>",
  "七転び":"<ruby>七<rt>なな</rt></ruby><ruby>転<rt>ころ</rt></ruby>び",
  "八起き":"<ruby>八<rt>や</rt></ruby><ruby>起<rt>お</rt></ruby>き",
  "猿も木から":"<ruby>猿<rt>さる</rt></ruby>も<ruby>木<rt>き</rt></ruby>から",
  "落ちる":"<ruby>落<rt>お</rt></ruby>ちる",
  "猫に":"<ruby>猫<rt>ねこ</rt></ruby>に",
  "小判":"<ruby>小判<rt>こばん</rt></ruby>",
  "急がば":"<ruby>急<rt>いそ</rt></ruby>がば",
  "回れ":"<ruby>回<rt>まわ</rt></ruby>れ",
  "塵も積もれば":"<ruby>塵<rt>ちり</rt></ruby>も<ruby>積<rt>つ</rt></ruby>もれば",
  "山となる":"<ruby>山<rt>やま</rt></ruby>となる",
  "百聞は":"<ruby>百聞<rt>ひゃくぶん</rt></ruby>は",
  "一見にしかず":"<ruby>一見<rt>いっけん</rt></ruby>にしかず",
  "二兎を追う者は":"<ruby>二兎<rt>にと</rt></ruby>を<ruby>追<rt>お</rt></ruby>う<ruby>者<rt>もの</rt></ruby>は",
  "一兎をも得ず":"<ruby>一兎<rt>いっと</rt></ruby>をも<ruby>得<rt>え</rt></ruby>ず",
  "犬も歩けば":"<ruby>犬<rt>いぬ</rt></ruby>も<ruby>歩<rt>ある</rt></ruby>けば",
  "棒に当たる":"<ruby>棒<rt>ぼう</rt></ruby>に<ruby>当<rt>あ</rt></ruby>たる",
  "棚から":"<ruby>棚<rt>たな</rt></ruby>から",
  "ぼたもち":"ぼたもち",
  "河童の":"<ruby>河童<rt>かっぱ</rt></ruby>の",
  "川流れ":"<ruby>川流<rt>かわなが</rt></ruby>れ",
  "馬の耳に":"<ruby>馬<rt>うま</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>に",
  "念仏":"<ruby>念仏<rt>ねんぶつ</rt></ruby>",
  "弘法にも":"<ruby>弘法<rt>こうぼう</rt></ruby>にも",
  "筆の誤り":"<ruby>筆<rt>ふで</rt></ruby>の<ruby>誤<rt>あやま</rt></ruby>り",
  "隣の芝生は":"<ruby>隣<rt>となり</rt></ruby>の<ruby>芝生<rt>しばふ</rt></ruby>は",
  "青い":"<ruby>青<rt>あお</rt></ruby>い",
  "まかぬ種は":"まかぬ<ruby>種<rt>たね</rt></ruby>は",
  "生えぬ":"<ruby>生<rt>は</rt></ruby>えぬ",
  "石橋をたたいて":"<ruby>石橋<rt>いしばし</rt></ruby>をたたいて",
  "渡る":"<ruby>渡<rt>わた</rt></ruby>る",
  "笑う門には":"<ruby>笑<rt>わら</rt></ruby>う<ruby>門<rt>かど</rt></ruby>には",
  "福来る":"<ruby>福<rt>ふく</rt></ruby><ruby>来<rt>き</rt></ruby>る",
  "三人寄れば":"<ruby>三人<rt>さんにん</rt></ruby><ruby>寄<rt>よ</rt></ruby>れば",
  "文殊の知恵":"<ruby>文殊<rt>もんじゅ</rt></ruby>の<ruby>知恵<rt>ちえ</rt></ruby>",
  "雨垂れ":"<ruby>雨垂<rt>あまだ</rt></ruby>れ",
  "石を穿つ":"<ruby>石<rt>いし</rt></ruby>を<ruby>穿<rt>うが</rt></ruby>つ",
  "聞くは一時の恥":"<ruby>聞<rt>き</rt></ruby>くは<ruby>一時<rt>いっとき</rt></ruby>の<ruby>恥<rt>はじ</rt></ruby>",
  "聞かぬは一生の恥":"<ruby>聞<rt>き</rt></ruby>かぬは<ruby>一生<rt>いっしょう</rt></ruby>の<ruby>恥<rt>はじ</rt></ruby>"
};
function pieceText(text){return settings.furigana?(HALF_RUBY[text]||esc(text)):esc(text)}

const SCENE_RUBY_MAP = {
  "毎日":"<ruby>毎日<rt>まいにち</rt></ruby>",
  "練習":"<ruby>練習<rt>れんしゅう</rt></ruby>",
  "努力":"<ruby>努力<rt>どりょく</rt></ruby>",
  "失敗":"<ruby>失敗<rt>しっぱい</rt></ruby>",
  "何度":"<ruby>何度<rt>なんど</rt></ruby>",
  "立ち直":"<ruby>立<rt>た</rt></ruby>ち<ruby>直<rt>なお</rt></ruby>",
  "上手":"<ruby>上手<rt>じょうず</rt></ruby>",
  "高価":"<ruby>高価<rt>こうか</rt></ruby>",
  "道具":"<ruby>道具<rt>どうぐ</rt></ruby>",
  "使い方":"<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>",
  "危ない":"<ruby>危<rt>あぶ</rt></ruby>ない",
  "安全":"<ruby>安全<rt>あんぜん</rt></ruby>",
  "小さな":"<ruby>小<rt>ちい</rt></ruby>さな",
  "積み重ね":"<ruby>積<rt>つ</rt></ruby>み<ruby>重<rt>かさ</rt></ruby>ね",
  "結果":"<ruby>結果<rt>けっか</rt></ruby>",
  "貯金":"<ruby>貯金<rt>ちょきん</rt></ruby>",
  "金額":"<ruby>金額<rt>きんがく</rt></ruby>",
  "写真":"<ruby>写真<rt>しゃしん</rt></ruby>",
  "説明":"<ruby>説明<rt>せつめい</rt></ruby>",
  "実際":"<ruby>実際<rt>じっさい</rt></ruby>",
  "工場":"<ruby>工場<rt>こうじょう</rt></ruby>",
  "見学":"<ruby>見学<rt>けんがく</rt></ruby>",
  "同時":"<ruby>同時<rt>どうじ</rt></ruby>",
  "大会":"<ruby>大会<rt>たいかい</rt></ruby>",
  "練習も":"<ruby>練習<rt>れんしゅう</rt></ruby>も",
  "十分":"<ruby>十分<rt>じゅうぶん</rt></ruby>",
  "行動":"<ruby>行動<rt>こうどう</rt></ruby>",
  "発見":"<ruby>発見<rt>はっけん</rt></ruby>",
  "応募":"<ruby>応募<rt>おうぼ</rt></ruby>",
  "突然":"<ruby>突然<rt>とつぜん</rt></ruby>",
  "泳ぎ":"<ruby>泳<rt>およ</rt></ruby>ぎ",
  "得意":"<ruby>得意<rt>とくい</rt></ruby>",
  "注意":"<ruby>注意<rt>ちゅうい</rt></ruby>",
  "先生":"<ruby>先生<rt>せんせい</rt></ruby>",
  "友達":"<ruby>友達<rt>ともだち</rt></ruby>",
  "持ち物":"<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>",
  "練習を":"<ruby>練習<rt>れんしゅう</rt></ruby>を",
  "上達":"<ruby>上達<rt>じょうたつ</rt></ruby>",
  "確認":"<ruby>確認<rt>かくにん</rt></ruby>",
  "書類":"<ruby>書類<rt>しょるい</rt></ruby>",
  "提出":"<ruby>提出<rt>ていしゅつ</rt></ruby>",
  "明るく":"<ruby>明<rt>あか</rt></ruby>るく",
  "雰囲気":"<ruby>雰囲気<rt>ふんいき</rt></ruby>",
  "解決":"<ruby>解決<rt>かいけつ</rt></ruby>",
  "方法":"<ruby>方法<rt>ほうほう</rt></ruby>",
  "短い":"<ruby>短<rt>みじか</rt></ruby>い",
  "大きく":"<ruby>大<rt>おお</rt></ruby>きく",
  "質問":"<ruby>質問<rt>しつもん</rt></ruby>",
  "勇気":"<ruby>勇気<rt>ゆうき</rt></ruby>",
  "自分":"<ruby>自分<rt>じぶん</rt></ruby>",
  "目":"<ruby>目<rt>め</rt></ruby>",
  "見て":"<ruby>見<rt>み</rt></ruby>て",
  "聞こう":"<ruby>聞<rt>き</rt></ruby>こう",
  "書き間違える":"<ruby>書<rt>か</rt></ruby>き<ruby>間違<rt>まちが</rt></ruby>える"
};
function sceneText(text){
  if(!settings.furigana) return esc(text);
  let out = esc(text);
  const pairs = Object.entries(SCENE_RUBY_MAP).sort((a,b)=>b[0].length-a[0].length);
  for(const [plain, ruby] of pairs){
    out = out.split(plain).join(ruby);
  }
  return out;
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function sample(a,n){return shuffle(a).slice(0,Math.min(n,a.length))}
function activeData(){
  let d=DATA.filter(x=>settings.enabledIds.includes(x.id));
  if(settings.difficulty===1)d=d.filter(x=>x.level===1);
  else if(settings.difficulty===2)d=d.filter(x=>x.level<=2);
  return d.length?d:DATA.slice(0,6);
}
function choiceCount(){return settings.difficulty===1?2:3}
function rerender(){
  if(state.screen==="home")showHome();
  else if(state.screen==="study")showStudy(state.index,state.revealed);
  else if(state.screen==="meaning")renderMeaning();
  else if(state.screen==="scene")renderScene();
  else if(state.screen==="fill")renderFill();
  else if(state.screen==="challenge")renderChallenge();
  else if(state.screen==="teacher")showTeacher();
  else showHome();
}
function head(emoji,title,sub){
  return `<div class="mode-head"><div class="emoji">${emoji}</div><div><strong>${title}</strong><span>${sub}</span></div></div>`;
}
function meter(index,total,color="var(--blue)"){
  const pct=Math.max(0,Math.min(100,Math.round((index/total)*100)));
  return `<div class="progress-track" style="color:${color}"><div class="progress-fill" style="width:${pct}%"></div></div>`;
}
function record(correct,q){
  if(q.recorded)return;
  q.recorded=true;stats.total++;if(correct)stats.correct++;saveStats();
}

function showHome(){
  setMode("home");state={screen:"home"};
  app.innerHTML=`
    <section class="hero">
      <div class="big">🎡</div>
      <p class="mode-kicker">ことわざを「ちがう遊び方」でおぼえよう</p>
      <h2>きょうは どれで あそぶ？</h2>
      <p>モードごとに、することが変わります。読むだけではなく、めくる・探す・つなぐ・進むを使って学習します。</p>
    </section>
    <section class="mode-grid">
      ${homeCard("📖","ことわざカード","カードをめくって意味を見る","タップしてめくる","study")}
      ${homeCard("🎯","いみクイズ","ことわざに合う意味を選ぶ","3択から選ぶ","meaning")}
      ${homeCard("💭","ばめんさがし","ことわざに合う場面を見つける","場面カードを探す","scene")}
      ${homeCard("🧩","ことわざパズル","前半と後半をつなぐ","カードを入れる","fill")}
      ${homeCard("🏆","チャレンジマップ","問題を解いてゴールへ進む","10マス進む","challenge")}
      ${homeCard("⚙️","先生モード","難易度・問題数・出題内容を決める","設定する","teacher")}
    </section>`;
  document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openMode(b.dataset.open));
}
function homeCard(e,t,d,a,m){
  return `<button class="mode-card" data-open="${m}"><span class="mode-emoji">${e}</span><strong>${t}</strong><span class="desc">${d}</span><span class="action-tag">操作：${a}</span></button>`;
}
function openMode(m){
  if(m==="study")showStudy(0,false);
  else if(m==="teacher")showTeacher();
  else if(m==="challenge")startChallenge();
  else startQuiz(m);
}

/* ① 学ぶ：めくる */
function showStudy(index=0,revealed=false){
  setMode("study");
  const list=activeData();
  if(index<0)index=list.length-1;if(index>=list.length)index=0;
  const k=list[index];
  state={screen:"study",index,revealed};
  app.innerHTML=`
    <div class="study-wrap">
      ${head("📖","ことわざカード","カードをタップして、うらの意味を見よう")}
      <div class="scoreline"><span>${index+1} / ${list.length}</span><span>${revealed?"うら面":"おもて面"}</span></div>
      <div id="flashcard" class="flashcard ${revealed?"revealed":""}" tabindex="0" role="button" aria-label="カードをめくる">
        <div class="flashcard-inner">
          <section class="flash-face flash-front">
            <div class="flash-emoji">${k.emoji}</div>
            <div class="kotowaza">${kw(k)}</div>
            <div class="tap-hint">👆 タップして いみをみる</div>
          </section>
          <section class="flash-face flash-back">
            <div class="mode-kicker">いみ</div>
            <p style="font-size:1.15rem;font-weight:900">${k.meaning}</p>
            <div class="mode-kicker">こんな とき</div>
            <p>${k.scene}</p>
            <button class="secondary" id="speakStudy">🔊 よんで</button>
            <div class="tap-hint">👆 タップして ことわざにもどる</div>
          </section>
        </div>
      </div>
      <div class="study-nav">
        <button class="secondary" id="prevStudy">← まえ</button>
        <button class="primary" id="nextStudy">つぎ →</button>
      </div>
    </div>`;
  const card=document.getElementById("flashcard");
  card.onclick=e=>{
    if(e.target.id==="speakStudy")return;
    showStudy(index,!state.revealed);
  };
  card.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();showStudy(index,!state.revealed)}};
  const sp=document.getElementById("speakStudy");if(sp)sp.onclick=e=>{e.stopPropagation();speak(`${k.plain}。${k.meaning}`)};
  document.getElementById("prevStudy").onclick=()=>showStudy(index-1,false);
  document.getElementById("nextStudy").onclick=()=>showStudy(index+1,false);
}

/* 共通問題生成 */
function makeQuestions(type,count){
  const pool=activeData();
  const total=Math.min(count,pool.length);
  const picked=sample(pool,total);
  return picked.map(k=>({type,k,recorded:false,done:false}));
}
function distractors(k){
  return sample(activeData().filter(x=>x.id!==k.id),Math.max(1,choiceCount()-1));
}
function startQuiz(type){
  state={screen:type,index:0,score:0,questions:makeQuestions(type,settings.questionCount)};
  if(type==="meaning")renderMeaning();else if(type==="scene")renderScene();else renderFill();
}
function currentQ(){return state.questions[state.index]}
function finishOrNext(){
  state.index++;
  if(state.index>=state.questions.length){showResult(state.score,state.questions.length,state.screen);return true}
  return false;
}

/* ② 意味：選択クイズ */
function renderMeaning(){
  setMode("meaning");state.screen="meaning";
  const q=currentQ(); if(!q){showResult(state.score,state.questions.length,"meaning");return}
  const opts=shuffle([q.k,...distractors(q.k)]);
  app.innerHTML=`
    ${head("🎯","いみクイズ","ことわざを見て、意味を選ぼう")}
    <section class="meaning-board">
      <div class="scoreline"><span>もんだい ${state.index+1}/${state.questions.length}</span><span>せいかい ${state.score}</span></div>
      ${meter(state.index,state.questions.length,"#d69c00")}
      <div class="meaning-sign"><div class="kotowaza">${kw(q.k)}</div></div>
      <div class="answer-grid">
        ${opts.map(x=>`<button class="answer-btn" data-id="${x.id}">${esc(x.meaning)}</button>`).join("")}
      </div>
      <div id="feedback"></div>
    </section>`;
  document.querySelectorAll(".answer-btn").forEach(b=>b.onclick=()=>answerMeaning(b,q));
  speak(q.k.plain);
}
function answerMeaning(btn,q){
  if(q.done)return;
  const correct=btn.dataset.id===q.k.id;record(correct,q);q.done=true;
  document.querySelectorAll(".answer-btn").forEach(b=>{b.disabled=true;if(b.dataset.id===q.k.id)b.classList.add("correct")});
  if(correct){btn.classList.add("correct");state.score++}else btn.classList.add("wrong");
  document.getElementById("feedback").innerHTML=feedbackHtml(correct,q.k);
  bindNext(()=>{if(!finishOrNext())renderMeaning()});
}

/* ③ 場面：場面カードを探す */
function renderScene(){
  setMode("scene");state.screen="scene";
  const q=currentQ();if(!q){showResult(state.score,state.questions.length,"scene");return}
  const opts=shuffle([q.k,...distractors(q.k)]);
  app.innerHTML=`
    ${head("💭","ばめんさがし","ことわざに合う場面カードを見つけよう")}
    <section class="scene-board">
      <div class="scoreline"><span>ばめん ${state.index+1}/${state.questions.length}</span><span>せいかい ${state.score}</span></div>
      ${meter(state.index,state.questions.length,"#8b5cf6")}
      <div class="scene-prompt">
        <span class="small">この ことわざを つかうのは どんなとき？</span>
        <div class="kotowaza">${kw(q.k)}</div>
      </div>
      <div class="scene-grid">
        ${opts.map((x,i)=>`
          <button class="scene-card" data-id="${x.id}">
            <div class="scene-label">${["A","B","C"][i]||i+1}</div>
            <div class="scene-visual">${sceneIllustration(x)}</div>
            <div class="scene-text">${sceneHtml(x)}</div>
          </button>`).join("")}
      </div>
      <div id="feedback"></div>
    </section>`;
  document.querySelectorAll(".scene-card").forEach(b=>b.onclick=()=>answerScene(b,q));
  speak(q.k.plain);
}
function answerScene(btn,q){
  if(q.done)return;
  const correct=btn.dataset.id===q.k.id;record(correct,q);q.done=true;
  document.querySelectorAll(".scene-card").forEach(b=>{b.disabled=true;if(b.dataset.id===q.k.id)b.classList.add("correct")});
  if(correct){btn.classList.add("correct");state.score++}else btn.classList.add("wrong");
  document.getElementById("feedback").innerHTML=feedbackHtml(correct,q.k);
  bindNext(()=>{if(!finishOrNext())renderScene()});
}

/* ④ つなぐ：タップ/ドラッグでカードをスロットへ */
function renderFill(){
  setMode("fill");state.screen="fill";
  const q=currentQ();if(!q){showResult(state.score,state.questions.length,"fill");return}
  q.selected=q.selected||null;q.locked=q.locked||false;
  const ends=shuffle([q.k.fill[1],...distractors(q.k).map(x=>x.fill[1])]);
  q.ends=q.ends||ends;
  app.innerHTML=`
    ${head("🧩","ことわざパズル","後半カードをスロットへ入れて完成させよう")}
    <section class="fill-board">
      <div class="scoreline"><span>パズル ${state.index+1}/${state.questions.length}</span><span>せいかい ${state.score}</span></div>
      ${meter(state.index,state.questions.length,"#35a96f")}
      <div class="assemble-area">
        <div class="small">ことわざを かんせいさせよう</div>
        <div style="margin-top:13px">
          <span class="fixed-piece">${fillHalfHtml(q.k,0)}</span>
          <span class="connector">＋</span>
          <button id="dropSlot" class="drop-slot ${q.selected?"filled":""}">${q.selected?anyPieceHtml(q.selected):"ここに カードをいれる"}</button>
        </div>
      </div>
      <div class="piece-bank">
        ${q.ends.map((x,i)=>`<button class="movable-piece ${q.selected===x?"selected":""}" draggable="true" data-value="${esc(x)}">${anyPieceHtml(x)}</button>`).join("")}
      </div>
      <p class="small center">カードをタップ → スロットをタップ。パソコンではドラッグもできます。</p>
      <div class="check-row">
        <button class="primary" id="checkFill" ${q.selected?"":"disabled"}>こたえる</button>
        <button class="secondary" id="clearFill" ${q.selected?"":"disabled"}>カードをもどす</button>
      </div>
      <div id="feedback"></div>
    </section>`;
  bindFill(q);
}
function bindFill(q){
  const pieces=document.querySelectorAll(".movable-piece");
  pieces.forEach(p=>{
    p.onclick=()=>{if(q.locked)return;q.selected=p.dataset.value;renderFill()};
    p.ondragstart=e=>{e.dataTransfer.setData("text/plain",p.dataset.value)};
  });
  const slot=document.getElementById("dropSlot");
  slot.ondragover=e=>e.preventDefault();
  slot.ondrop=e=>{e.preventDefault();if(q.locked)return;q.selected=e.dataTransfer.getData("text/plain");renderFill()};
  slot.onclick=()=>{
    if(q.locked)return;
    const sel=document.querySelector(".movable-piece.selected");
    if(sel){q.selected=sel.dataset.value;renderFill()}
  };
  document.getElementById("clearFill").onclick=()=>{q.selected=null;renderFill()};
  document.getElementById("checkFill").onclick=()=>checkFill(q);
}
function checkFill(q){
  if(!q.selected||q.locked)return;
  const correct=q.selected===q.k.fill[1];
  if(correct){
    record(true,q);q.done=true;q.locked=true;state.score++;
    document.getElementById("feedback").innerHTML=feedbackHtml(true,q.k);
    bindNext(()=>{if(!finishOrNext())renderFill()});
  }else{
    if(!q.recorded)record(false,q);
    document.getElementById("feedback").innerHTML=`
      <div class="feedback bad">💡 おしい！ そのカードではありません。<br><span class="small">カードをもどして、もう一度えらべます。</span></div>`;
    q.selected=null;
    setTimeout(()=>renderFill(),650);
  }
}

/* ⑤ チャレンジ：5マスのマップ */
function startChallenge(){
  const pool=activeData();
  const count=Math.min(10,pool.length);
  const picked=sample(pool,count);
  const types=["meaning","scene","fill"];
  state={screen:"challenge",index:0,score:0,stars:0,questions:[]};
  for(let i=0;i<count;i++)state.questions.push({k:picked[i],type:types[i%3],recorded:false,done:false});
  renderChallenge();
}
function mapHtml(){
  let html="";
  const total=state.questions.length;
  for(let i=0;i<total;i++){
    const cls=i<state.index?"done":i===state.index?"current":"";
    html+=`<div class="map-node ${cls}"><div class="map-dot">${i<state.index?"★":i===state.index?"🚶":i+1}</div></div>`;
  }
  return `<div class="map-track" style="grid-template-columns:repeat(${Math.min(total,10)},1fr)">${html}</div>`;
}
function renderChallenge(){
  setMode("challenge");state.screen="challenge";
  if(state.index>=state.questions.length){showResult(state.score,state.questions.length,"challenge");return}
  const q=state.questions[state.index], d=distractors(q.k);
  let body="";
  if(q.type==="meaning"){
    const opts=shuffle([q.k,...d]);
    body=`<div class="small">🎯 いみ問題</div><div class="kotowaza center">${kw(q.k)}</div>
      <div class="challenge-options">${opts.map(x=>`<button class="challenge-option" data-right="${x.id===q.k.id?1:0}">${esc(x.meaning)}</button>`).join("")}</div>`;
  }else if(q.type==="scene"){
    const opts=shuffle([q.k,...d]);
    body=`<div class="small">💭 ばめん問題</div><div class="kotowaza center">${kw(q.k)}</div>
      <div class="challenge-options">${opts.map(x=>`<button class="challenge-option" data-right="${x.id===q.k.id?1:0}">${sceneHtml(x)}</button>`).join("")}</div>`;
  }else{
    const ends=shuffle([q.k.fill[1],...d.map(x=>x.fill[1])]);
    body=`<div class="small">🧩 つなぐ問題</div><div class="kotowaza center">${fillHalfHtml(q.k,0)} ＋ ？</div>
      <div class="challenge-options">${ends.map(x=>`<button class="challenge-option" data-right="${x===q.k.fill[1]?1:0}">${anyPieceHtml(x)}</button>`).join("")}</div>`;
  }
  app.innerHTML=`
    ${head("🏆","チャレンジマップ","正解すると1マス進む。10マスのゴールをめざそう！")}
    <section class="challenge-wrap">
      ${mapHtml()}
      <div class="reward-row">${"⭐".repeat(state.stars)}${"☆".repeat(Math.max(0,state.questions.length-state.stars))}</div>
      <div class="challenge-question">${body}</div>
      <div id="feedback"></div>
    </section>`;
  document.querySelectorAll(".challenge-option").forEach(b=>b.onclick=()=>answerChallenge(b,q));
}
function answerChallenge(btn,q){
  if(q.done)return;
  q.done=true;const correct=btn.dataset.right==="1";record(correct,q);
  document.querySelectorAll(".challenge-option").forEach(b=>{b.disabled=true;if(b.dataset.right==="1")b.classList.add("correct")});
  if(correct){btn.classList.add("correct");state.score++;state.stars++}else btn.classList.add("wrong");
  document.getElementById("feedback").innerHTML=feedbackHtml(correct,q.k,correct?"1マス すすんだ！":"つぎのマスで がんばろう！");
  bindNext(()=>{state.index++;renderChallenge()});
}

function feedbackHtml(correct,k,extra=""){
  return `<div class="feedback ${correct?"good":"bad"}">${correct?"🎉 せいかい！":"💡 おしい！"} ${extra}<br>
    <span class="small">${esc(k.plain)}：${esc(k.meaning)}</span></div>
    <div class="toolbar" style="margin-top:12px"><button class="primary" id="nextBtn">つぎへ →</button>
    <button class="secondary" id="readBtn">🔊 こたえを よんで</button></div>`;
}
function bindNext(fn){
  document.getElementById("nextBtn").onclick=fn;
  document.getElementById("readBtn").onclick=()=>{
    const q=state.questions[state.index];speak(`${q.k.plain}。${q.k.meaning}`);
  };
}

/* 結果 */
function showResult(score,total,from){
  setMode("result");
  const pct=Math.round(score/total*100);
  const medal=pct===100?"🏆":pct>=70?"🥇":pct>=40?"🥈":"🌱";
  const msg=pct===100?"ぜんもん せいかい！":pct>=70?"よくできました！":pct>=40?"あと すこし！":"くりかえすと おぼえられるよ！";
  state={screen:"result",from};
  app.innerHTML=`<section class="panel center">
    <div class="result-medal">${medal}</div><h2>けっか</h2>
    <div class="result-score">${score} / ${total}</div><p>${msg}</p>
    <div class="toolbar" style="justify-content:center">
      <button class="primary" id="againBtn">もういちど</button>
      <button class="secondary" id="resultHome">ホームへ</button>
    </div></section>`;
  document.getElementById("againBtn").onclick=()=>from==="challenge"?startChallenge():startQuiz(from);
  document.getElementById("resultHome").onclick=showHome;
  speak(`${score}もんせいかい。${msg}`);
}

/* 先生モード */
function showTeacher(){
  setMode("teacher");state={screen:"teacher"};
  app.innerHTML=`${head("⚙️","先生モード","出題範囲と学習の負荷を調整します")}
    <section class="panel">
      <div class="teacher-grid">
        <div>
          <div class="setting-box"><label>難易度</label>
            <select id="difficulty">
              <option value="1">⭐ やさしい（Lv.1・2択）</option>
              <option value="2">⭐⭐ ふつう（Lv.1〜2・3択）</option>
              <option value="3">⭐⭐⭐ むずかしい（すべて・3択）</option>
            </select>
          </div>
          <div class="setting-box"><label>通常モードの問題数</label>
            <select id="questionCount">
              <option value="5">5問</option>
              <option value="10">10問</option>
              <option value="20">20問</option>
              <option value="30">30問</option>
              <option value="40">40問</option>
            </select>
            <p class="small" style="margin:8px 0 0">同じことわざは重複させず、選んだ難易度・出題範囲の数まで出題します。</p>
          </div>
          <div class="setting-box">
            <div class="switchline"><strong>ふりがな</strong><input id="tfuri" type="checkbox"></div>
            <div class="switchline" style="margin-top:10px"><strong>読み上げ</strong><input id="tspeak" type="checkbox"></div>
          </div>
          <div class="setting-box"><strong>学習記録</strong><p>${stats.correct} / ${stats.total} 正解</p><button class="danger" id="resetStats">記録をリセット</button></div>
        </div>
        <div class="setting-box">
          <div class="switchline"><strong>使うことわざ</strong><span><button class="secondary" id="allOn">全部ON</button> <button class="secondary" id="allOff">全部OFF</button></span></div>
          <div class="kotowaza-checks" style="margin-top:10px">
            ${DATA.map(k=>`<label class="checkitem"><input type="checkbox" data-kid="${k.id}" ${settings.enabledIds.includes(k.id)?"checked":""}><span>${kw(k)}<br><span class="small">Lv.${k.level}</span></span></label>`).join("")}
          </div>
        </div>
      </div>
      <div class="toolbar" style="margin-top:16px"><button class="primary" id="saveTeacher">設定を保存</button><button class="secondary" id="teacherHome">ホームへ</button></div>
    </section>`;
  const difficultyEl=document.getElementById("difficulty");
  const questionCountEl=document.getElementById("questionCount");
  const tfuriEl=document.getElementById("tfuri");
  const tspeakEl=document.getElementById("tspeak");
  const allOnEl=document.getElementById("allOn");
  const allOffEl=document.getElementById("allOff");
  const resetStatsEl=document.getElementById("resetStats");
  const saveTeacherEl=document.getElementById("saveTeacher");
  const teacherHomeEl=document.getElementById("teacherHome");
  difficultyEl.value=String(settings.difficulty);questionCountEl.value=String(settings.questionCount);
  tfuriEl.checked=settings.furigana;tspeakEl.checked=settings.speak;
  allOnEl.onclick=()=>document.querySelectorAll("[data-kid]").forEach(x=>x.checked=true);
  allOffEl.onclick=()=>document.querySelectorAll("[data-kid]").forEach(x=>x.checked=false);
  resetStatsEl.onclick=()=>{stats={correct:0,total:0};saveStats();showTeacher()};
  saveTeacherEl.onclick=()=>{
    settings.difficulty=Number(difficultyEl.value);settings.questionCount=Number(questionCountEl.value);
    settings.furigana=tfuriEl.checked;settings.speak=tspeakEl.checked;
    const ids=[...document.querySelectorAll("[data-kid]:checked")].map(x=>x.dataset.kid);
    settings.enabledIds=ids.length?ids:[DATA[0].id];saveSettings();updateHeader();showHome();
  };
  teacherHomeEl.onclick=showHome;
}

updateHeader();updateProgress();showHome();
