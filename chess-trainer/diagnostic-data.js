
(function(){
const C=window.CHESS_COURSE;
const old=C.questions.findIndex(q=>q.id==="M12-Q01");
if(old>=0) C.questions.splice(old,1);

const mod=C.modules.find(m=>m.id==="M12");
if(mod){
  mod.title="實戰診斷";
  mod.subtitle="直接下棋 → 分支追問 → 自動診斷 → 完整詳解";
}

C.questions.push(
{
 id:"M12-Q01",alias:"D1",module:"M12",difficulty:"難",title:"D1｜安靜著與強制將殺",
 type:"diagnostic",
 fen:"r1bqrk2/1pp1np2/p3pn2/3p2N1/1B3P2/NP1BP2P/P1PPQ3/R3K1R1 w - - 0 1",
 intro:"白方走。不要先找題型，只找你認為最強的棋。你必須一路把變化走完。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手是什麼？",
   expected:{from:"e2",to:"h5"},
   after:[{from:"f8",to:"g8"}],
   afterText:"黑方以 ...Kg8 回應。現在繼續找白方最強的一手。",
   success:"很好。你沒有被『一定要先將軍』綁住，而是找到安靜的 Qh5！。它把黑王逼進一個強制網。",
   alternatives:[
    {from:"g5",to:"e6",title:"Nxe6+：有將軍，但太早滿足",tag:"強迫著偏誤",pros:"你有先找 check，方向沒錯。",cons:"這手沒有利用完整的將殺幾何；本局存在更強的強制勝法。",coach:"找 checks 之後，再多問一次：有沒有一手『不是將軍，但下一手無法防』？"},
    {from:"g5",to:"f7",title:"Nxf7：看到雙攻／攻后",tag:"物質偏誤",pros:"馬到 f7 會碰到 d8 皇后，戰術感是有的。",cons:"你把『贏后』放在『將死』之前。若對方王已暴露，優先掃描 mating net。",coach:"攻王局面先比較：將死 > 贏后 > 贏小子。"},
    {from:"b4",to:"e7",title:"Bxe7+：強制但不夠強",tag:"check tunnel vision",pros:"你有注意 pinned knight 和將軍。",cons:"第一個看到的 check 不一定最好；它沒有像 Qh5 一樣把黑王的逃生格一起封死。",coach:"每找到一個 check，至少再找一個候選著再比較。"}
   ],
   other:{title:"其他走法",tag:"候選著產生",pros:"至少你在找主動手段。",cons:"這個局面有強制將殺；若完全沒把 Qh5 列入候選，代表攻王幾何掃描還不完整。",coach:"依序掃：王周圍逃生格 → 我方 queen/rook/bishop 的線 → knight 控制格 → quiet threat。"}
  },
  {
   prompt:"第 2 手：黑王已到 g8。白方怎麼繼續？",
   expected:{from:"h5",to:"h8"},
   after:[{from:"g8",to:"h8"}],
   afterText:"黑王被迫 Kxh8。現在找最後一手。",
   success:"Qh8+！這一步是皇后犧牲。重點不是皇后的分值，而是它把黑王強迫到 h8。",
   alternatives:[
    {from:"h5",to:"f7",title:"Qxf7+：自然將軍",tag:"過早兌現",pros:"仍是強制著。",cons:"你急著吃 f7，卻錯過把王『拖到指定格』的皇后犧牲。",coach:"將殺組合常需要先控制 king placement，而不是先收 material。"}
   ],
   other:{title:"其他走法",tag:"計算中斷",pros:"你已找到第一手的攻擊概念。",cons:"若第二手無法繼續，代表你可能只看到第一手效果，沒有在落子前算完整條強制線。",coach:"在攻王題裡，第一手落下前至少問：對方最佳回應後，我下一個 forcing move 是什麼？"}
  },
  {
   prompt:"第 3 手：黑王在 h8。白方一手結束。",
   expected:{from:"g5",to:"f7"},
   success:"Nxf7#。完成。前兩手皇后不是在『贏東西』，而是在安排黑王的位置，最後由騎士封死。",
   alternatives:[],
   other:{title:"其他走法",tag:"終局圖像辨識",pros:"你已經算到第三層。",cons:"最後一步若看不到 Nxf7#，通常是沒有完整檢查 king escape squares。",coach:"將軍後逐格檢查：王能逃哪裡？能吃掉將軍子嗎？能擋嗎？能由別子吃掉嗎？"}
  }
 ],
 report:{
  strength:"如果你能完整找到 Qh5 → Qh8+ → Nxf7#，代表你的 forcing-line calculation 與攻王幾何已經不錯。",
  focus:"若第一手卡住，重點練 quiet move；若第二或第三手卡住，重點是『第一手前就多算兩層』。",
  rule:"高效率搜尋：先找所有 checks，但不要停在 checks；再找 forcing threats，尤其是能限制王逃生格的 quiet move。",
  line:"Qh5! Kg8 → Qh8+! Kxh8 → Nxf7#"
 }
},
{
 id:"M12-Q02",alias:"D2",module:"M12",difficulty:"難",title:"D2｜被攻擊時不要自動防守",
 type:"diagnostic",
 fen:"r3r1k1/pp3p1p/5Q2/4q3/1P3N2/2BB2P1/1P5P/R6K w - - 0 1",
 intro:"白后正在被黑后攻擊。白方走。不要因為被攻擊就自動撤退，先找全盤最強的一手。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手？",
   expected:{from:"d3",to:"h7"},
   after:[{from:"g8",to:"h7"}],
   afterText:"黑王走 Kxh7。繼續。",
   success:"Bxh7+！你正確忽略了『皇后被攻擊』這件事，因為你有更強的 forcing move。",
   alternatives:[
    {from:"f6",to:"e5",title:"Qxe5：先處理被攻擊的皇后",tag:"威脅固定",pros:"你看到自己的皇后被攻擊，而且 Qxe5 還能吃掉對方皇后。",cons:"但這局存在直接將殺。只要有 forced mate，material concern 都是次要。",coach:"每次重要棋子被攻擊時，不要立刻回應；先做一次 CCT：Checks, Captures, Threats。"},
    {from:"f4",to:"g6",title:"Ng6：靠近王，但順序錯",tag:"move order",pros:"你有注意到 knight 對王翼的威脅。",cons:"真正關鍵是先用 Bxh7+ 強迫王的位置；順序錯就讓對手有防守時間。",coach:"戰術不只看『做什麼』，還要看『先做哪個』。"}
   ],
   other:{title:"其他走法",tag:"防守反射",pros:"你可能在處理皇后安全或一般發展。",cons:"局面有立即 forced mate；若沒先找 Bxh7+，代表對手威脅讓你的注意力被綁架。",coach:"自己的棋被攻擊時，先問：我能不能用更強的將軍迫使對手沒有時間吃它？"}
  },
  {
   prompt:"第 2 手：黑王在 h7。白方如何繼續強迫？",
   expected:{from:"f6",to:"f7"},
   after:[{from:"h7",to:"h8"}],
   afterText:"黑王選擇 ...Kh8。找最後一手。",
   success:"Qxf7+。這是第二個 forcing move；你沒有停下來收材料，而是繼續逼王。",
   alternatives:[],
   other:{title:"其他走法",tag:"forcing line 續航",pros:"你找到第一手犧牲。",cons:"若這裡停下，通常表示你在犧牲前沒有先算到『犧牲之後靠什麼繼續』。",coach:"任何 sacrifice 在落子前都要回答：對方接受後，我的下一個 forcing move 是什麼？"}
  },
  {
   prompt:"第 3 手：黑王到了 h8。白方一手將死。",
   expected:{from:"f4",to:"g6"},
   success:"Ng6#。完成。這條線的核心是 bishop sacrifice → queen forcing check → knight mate。",
   alternatives:[],
   other:{title:"其他走法",tag:"棋子協同",pros:"你已經逼王到角落。",cons:"若沒看到 Ng6#，通常是只追蹤 queen，沒有重新掃描 knight 的控制格。",coach:"每次王被逼到新位置，都重新掃一次所有己方棋子，而不是只看剛剛走的那顆。"}
  }
 ],
 branches:[
  "若 1...Kf8，白方直接 2.Ng6#。",
  "若 1...Kxh7 2.Qxf7+ Kh6，則 3.Qg6#。",
  "若 1...Kxh7 2.Qxf7+ Kh8，則 3.Ng6#。",
  "若 1...Kxh7 2.Qxf7+ Qg7，則 3.Qxg7#。"
 ],
 report:{
  strength:"完整解出代表你能在自己皇后受攻時仍優先計算 forcing moves。",
  focus:"最常見弱點是『被攻擊就自動反應』，以及 sacrifice 只算第一手、沒有算接受後的續手。",
  rule:"被攻擊 ≠ 必須處理。先問：我有沒有 check、強制 capture、或 mate threat，讓對手根本沒時間執行威脅？",
  line:"Bxh7+! Kxh7 → Qxf7+ Kh8 → Ng6#"
 }
},
{
 id:"M12-Q03",alias:"D3",module:"M12",difficulty:"深",title:"D3｜不要自動升后",
 type:"diagnostic",
 fen:"5r2/3R1P1k/7p/8/q7/1p6/PP6/K5Q1 w - - 0 1",
 intro:"白方走。這題有一個很不自然的決定。不要假設『升變一定選皇后』。",
 stages:[
  {
   prompt:"第 1 手：白方如何開始強制線？",
   expected:{from:"g1",to:"g8"},
   after:[{from:"f8",to:"g8"}],
   afterText:"黑車被迫 Rxg8。現在白兵到達 f8 時，你必須選升變棋子。",
   success:"Qg8+！皇后犧牲把 f8 清空，讓 f7 兵可以升變。",
   alternatives:[
    {from:"d7",to:"h7",title:"Rh7+：看起來直接",tag:"表面將軍",pros:"你有看到 rook 與 king 的接近。",cons:"它沒有像 Qg8+ 一樣強迫黑車離開 f8，因此沒有創造下一手升變的條件。",coach:"有時第一手的目的不是將死，而是『清除某一格』。"}
   ],
   other:{title:"其他走法",tag:"幾何／清格",pros:"你在找將軍或升變。",cons:"這題關鍵是先用 Qg8+ 把黑車從 f8 拉走。",coach:"看到即將升變的兵時，先問：升變格被誰佔住？能不能用 forcing move 把它引開？"}
  },
  {
   prompt:"第 2 手：f7 兵走到 f8。升變成哪一顆棋？",
   expected:{from:"f7",to:"f8",promotion:"n"},
   after:[{from:"h7",to:"h8"}],
   afterText:"黑王走 ...Kh8。最後一手。",
   success:"f8=N+！關鍵是升馬才會立刻攻擊 h7 的黑王。升后反而沒有 check。",
   alternatives:[
    {from:"f7",to:"f8",promotion:"q",title:"f8=Q：最自然，但錯",tag:"自動升后",pros:"皇后名義價值最高。",cons:"問題是 queen 在 f8 並不攻擊 h7，所以不是 forcing check；你給了黑方喘息。",coach:"升變不是選『最貴』，而是選『當下功能最強』。"},
    {from:"f7",to:"f8",promotion:"r",title:"f8=R：也沒有將軍",tag:"升變功能",pros:"車很強。",cons:"f8 的 rook 不攻擊 h7。",coach:"先看每種 promotion 對 king 的立即控制格。"},
    {from:"f7",to:"f8",promotion:"b",title:"f8=B：也沒有將軍",tag:"升變功能",pros:"象能控制長斜線。",cons:"從 f8 的 bishop 也不攻擊 h7。",coach:"只有 knight 從 f8 可以攻擊 h7。"}
   ],
   other:{title:"其他走法",tag:"underpromotion awareness",pros:"你知道要推兵。",cons:"若沒有比較 Q/R/B/N 的功能，就容易機械式升后。",coach:"promotion 前固定做 2 秒檢查：Q、R、B、N 哪個會 check／mate／fork？"}
  },
  {
   prompt:"第 3 手：黑王在 h8。白方一手將死。",
   expected:{from:"d7",to:"h7"},
   success:"Rh7#。完成。這題的精華是 Q sacrifice → knight underpromotion check → rook mate。",
   alternatives:[],
   other:{title:"其他走法",tag:"收尾幾何",pros:"你已找到最難的 underpromotion。",cons:"最後若沒看到 Rh7#，代表強制線末端還需要更完整地掃 rook lines。",coach:"每一個 check 後都重新列出王的所有逃生格，再找能一次封死的 long-range piece。"}
  }
 ],
 report:{
  strength:"能獨立找到 f8=N+，代表你不會被『棋子價值』的直覺綁架，能根據功能選 promotion。",
  focus:"若你升后，弱點不是不懂規則，而是 decision automation：把常見選項當成預設答案。",
  rule:"升變前永遠比較四種棋：哪個能 check？哪個能控制逃生格？哪個能形成 fork？",
  line:"Qg8+! Rxg8 → f8=N+! Kh8 → Rh7#"
 }
}
);
})();

(function(){
const C=window.CHESS_COURSE;
if(C.questions.some(q=>q.alias==="D4")) return;

C.questions.push(
{
 id:"M12-Q04",alias:"D4",module:"M12",difficulty:"深",title:"D4｜兩步結束",
 type:"diagnostic",
 fen:"5r1k/6pp/4Q2N/8/8/8/8/K7 w - - 0 1",
 intro:"白方走。找最強的一手，不要只因為看到將軍就立刻走。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手？",
   expected:{from:"e6",to:"g8"},
   after:[{from:"f8",to:"g8"}],
   afterText:"黑車被迫吃后：...Rxg8。現在白方一手結束。",
   success:"Qg8+！你主動把皇后送掉，目的不是換車，而是把黑車引到 g8，封死黑王唯一可能的逃生格。",
   alternatives:[
    {from:"h6",to:"f7",title:"Nf7+：先看到自然將軍",tag:"第一個將軍偏誤",pros:"你有先掃 check。",cons:"黑方仍有 ...Rxf7 或 ...Kg8；這不是強制結束。",coach:"找到一個 check 後，不要停。至少再比較一個 forcing candidate。"}
   ],
   other:{title:"其他走法",tag:"將殺圖像",pros:"你有在尋找主動著。",cons:"如果沒看到 Qg8+，通常是只盯棋子分值，沒看到『把自己的后送掉來堵逃生格』。",coach:"攻王時把自己的棋也當作可以用來改變幾何的工具。"}
  },
  {
   prompt:"第 2 手：黑車已在 g8。白方一手將死。",
   expected:{from:"h6",to:"f7"},
   success:"Nf7#。黑王被自己的 g7、h7 兵和 g8 車完全悶住。這就是典型 smothered mate 結構。",
   alternatives:[],
   other:{title:"其他走法",tag:"收尾檢查",pros:"你已找到皇后犧牲。",cons:"若沒看到 Nf7#，代表最後一步沒有逐格檢查黑王逃生格。",coach:"每次將軍前都確認：能逃？能吃？能擋？能由別子吃掉將軍子？"}
  }
 ],
 report:{
  strength:"這題主要測你是否能接受『皇后可以只是引離工具』，而不是永遠要保留最高分值棋子。",
  focus:"若你先走 Nf7+，代表 forcing moves 有掃到，但比較候選著的深度不足。",
  rule:"不要選第一個將軍；比較哪個將軍最能限制對手的唯一回應。",
  line:"Qg8+! Rxg8 → Nf7#"
 }
},
{
 id:"M12-Q05",alias:"D5",module:"M12",difficulty:"深",title:"D5｜先把防守者拉走",
 type:"diagnostic",
 fen:"3qr1k1/5ppp/4Q3/8/8/8/8/K3R3 w - - 0 1",
 intro:"白方走。局面看起來像交換，但其實有強制結束。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手？",
   expected:{from:"e6",to:"e8"},
   after:[{from:"d8",to:"e8"}],
   afterText:"黑后被迫 Qxe8。現在白方一手結束。",
   success:"Qxe8+！重點不是贏車，而是強迫黑后離開 d8、站到 e8，成為最後一手的目標。",
   alternatives:[
    {from:"e6",to:"f7",title:"Qxf7+：吃兵將軍",tag:"局部貪兵",pros:"是將軍，也拿到一兵。",cons:"黑王仍有 Kh8 或 Kxf7；你錯過直接強制將殺。",coach:"若有將軍，優先比較能否『迫使唯一回應』，不要先看拿多少 material。"}
   ],
   other:{title:"其他走法",tag:"引離",pros:"你有在找戰術。",cons:"這題的核心是把黑后引到 e8，再讓白車收尾。",coach:"問：哪一顆黑棋正在阻擋我的終結線？我能不能用 check 把它拉到指定位置？"}
  },
  {
   prompt:"第 2 手：黑后已在 e8。白方一手將死。",
   expected:{from:"e1",to:"e8"},
   success:"Rxe8#。第一手的皇后交換其實是在替車清路並固定黑后的落點。",
   alternatives:[],
   other:{title:"其他走法",tag:"轉換",pros:"你已完成第一步引離。",cons:"若此時沒看到 Rxe8#，表示你可能把第一手當作獨立交換，沒有預先看『交換後誰接手』。",coach:"每次主動交換前先問：交換完成後，我下一顆最強的棋子是哪一顆？"}
  }
 ],
 report:{
  strength:"這題測的是引離 defender 與 move sequence。",
  focus:"如果只看到 Qxf7+，你較容易被立即 material gain 吸引。",
  rule:"強制線常是『先把防守者移位，再讓後方棋子接手』。",
  line:"Qxe8+! Qxe8 → Rxe8#"
 }
},
{
 id:"M12-Q06",alias:"D6",module:"M12",difficulty:"深",title:"D6｜皇后已經掉了，還有沒有更大的事？",
 type:"diagnostic",
 fen:"r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 6",
 intro:"白方皇后已經被黑象吃掉。白方走。不要先想怎麼把 material 補回來。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手？",
   expected:{from:"c4",to:"f7"},
   after:[{from:"e8",to:"e7"}],
   afterText:"黑王只有一個合法回應：...Ke7。現在找最後一手。",
   success:"Bxf7+！雖然白后已掉，但黑王的位置比物質更重要。這手把王逼到 e7，進入最後的 mating net。",
   alternatives:[
    {from:"e5",to:"f7",title:"Nxf7：想先拿回 material",tag:"物質補償偏誤",pros:"你注意到 f7 是弱點。",cons:"它甚至不是 check，黑方有大量時間整理局面。",coach:"當對手王仍在中心，先算 checks；不要因為剛掉后就急著『賺回來』。"}
   ],
   other:{title:"其他走法",tag:"心理帳本",pros:"你可能在尋找補償。",cons:"掉后會讓人本能想追回 material，但棋局只看最後結果；forced mate 比后更值錢。",coach:"重大 material 變化後，重新從零掃一次 checks，而不是沿用原本的物質評估。"}
  },
  {
   prompt:"第 2 手：黑王在 e7。白方一手將死。",
   expected:{from:"c3",to:"d5"},
   success:"Nd5#。兩匹馬與 f7 的象協同封住黑王。這就是 Légal mate 的經典收尾。",
   alternatives:[],
   other:{title:"其他走法",tag:"棋子協同",pros:"你看到黑王仍很危險。",cons:"如果找不到 Nd5#，通常是只盯著剛剛走到 f7 的象，沒有重新掃描另一匹馬。",coach:"每當王被逼到新格，都重新掃所有己方棋子，不只追蹤上一手那顆。"}
  }
 ],
 report:{
  strength:"這題測你是否能在巨大 material 損失後仍保持戰術客觀性。",
  focus:"若你急著吃子補回來，容易出現 sunk-cost / material fixation。",
  rule:"棋子分值只是中間變數；forced mate 永遠優先。",
  line:"Bxf7+! Ke7 → Nd5#"
 }
},
{
 id:"M12-Q07",alias:"D7",module:"M12",difficulty:"深",title:"D7｜Morphy 終局",
 type:"diagnostic",
 fen:"4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 16",
 intro:"白方走。這是歷史上非常有名的一個位置。不要去猜棋手名字，只看盤面。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手？",
   expected:{from:"b3",to:"b8"},
   after:[{from:"d7",to:"b8"}],
   afterText:"黑馬被迫 Nxb8。現在白方一手結束。",
   success:"Qb8+！這是純粹的皇后犧牲。黑方只有 Nxb8 一個合法回應，白方因此把第 8 排完全清乾淨。",
   alternatives:[
    {from:"b3",to:"e6",title:"Qxe6+：直接吃掉黑后",tag:"贏后偏誤",pros:"你看到可以贏黑后，而且還帶將軍。",cons:"這很誘人，但局面其實有立即將死；贏后比將死差。",coach:"看到能贏后時也要多問一次：有沒有 forced mate？"}
   ],
   other:{title:"其他走法",tag:"強制回應",pros:"你可能找到其他主動手。",cons:"Qb8+ 的價值在於黑方只有唯一回應。越能縮小對手選擇，計算越可靠。",coach:"候選著排序時，特別標出『只有一個合法回應』的手。"}
  },
  {
   prompt:"第 2 手：黑馬已在 b8。白方一手將死。",
   expected:{from:"d1",to:"d8"},
   success:"Rd8#。皇后犧牲的真正目的，是把 d7 的馬引離並清空 d-file / 第 8 排。這是 Morphy Opera Game 的著名收尾。",
   alternatives:[],
   other:{title:"其他走法",tag:"清線",pros:"你成功找到第一手皇后犧牲。",cons:"若此處沒看到 Rd8#，表示第一手的『目的』還沒有連到後續 rook line。",coach:"犧牲前要能回答：犧牲完後，哪條線被打開？哪顆棋子因此突然變強？"}
  }
 ],
 report:{
  strength:"這題測 queen sacrifice、唯一回應與 line clearance。",
  focus:"如果你選 Qxe6+，代表你非常會看 material gain，但可能在『已經可以將死』時過早兌現。",
  rule:"當一手棋能把對手回應壓縮到唯一一手，通常值得優先深算。",
  line:"Qb8+! Nxb8 → Rd8#"
 }
}
);
})();