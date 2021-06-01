function Fortune(){
    Systems();
}
function Random(max) {
    return Math.floor(Math.random() * max);
}
function luckyItems(max) {
    return Math.floor(Math.random() * max);
}
const Res = "Res";
const Res_title = ["大吉","中吉","小吉","凶","大凶"];
const Item = ["インドのガネーシャ","傘","オレンジの皮","バナナ","豆乳","水","コーヒー"];
const doc = document.getElementById('Res');
const doc1 = document.getElementById('Res1');
const doc2 = document.getElementById('Items_Title');
const item_HTML = document.getElementById('Item');
const Items_Text = "の方のラッキーアイテムはこちら↓";
const Res_Main = ["今日一日は<br>いい日になるでしょう","今日一日は<br>多少いい事が<br>あるでしょう","今日一日は<br>平凡な日に<br>なるでしょう","今日はいつもより<br>ついてない日です","今日は最悪な日に<br>なるでしょう"];
const Hcode = ["<h3>","</h3>","<br>","<p>","</p>","<span>","</span>","<h5>","</h5>","<h6>","</h3>"];
function Systems(){
  if(Random(4) == 0){
    doc.innerHTML = Hcode[5] + Res_title[0] + Hcode[6];
    doc1.innerHTML = Hcode[3] + Res_Main[0] + Hcode[4];
    doc2.innerHTML = Hcode[7] + Res_title[0] + Hcode[8] + Items_Text;
    if(luckyItems(5) == 0){
        item_HTML.innerHTML = Hcode[9] + Item[0] + Hcode[10];
    }else if(luckyItems(5) == 1){
        item_HTML.innerHTML = Hcode[9] + Item[1] + Hcode[10];
    }else if(luckyItems(5) == 2){
        item_HTML.innerHTML = Hcode[9] + Item[2] + Hcode[10];
    }else if(luckyItems(5) == 3){
        item_HTML.innerHTML = Hcode[9] + Item[3] + Hcode[10];
    }else if(luckyItems(5) == 4){
        item_HTML.innerHTML = Hcode[9] + Item[4] + Hcode[10];
    }else{
        item_HTML.innerHTML = Hcode[9] + Item[5] + Hcode[10];
    }
  }else if(Random(4) == 1){
    doc.innerHTML = Hcode[5] + Res_title[1] + Hcode[6];
    doc1.innerHTML = Hcode[3] + Res_Main[1] + Hcode[4];
    doc2.innerHTML = Hcode[7] + Res_title[1] + Hcode[8] + Items_Text;
    if(luckyItems(5) == 0){
        item_HTML.innerHTML = Hcode[9] + Item[0] + Hcode[10];
    }else if(luckyItems(5) == 1){
        item_HTML.innerHTML = Hcode[9] + Item[1] + Hcode[10];
    }else if(luckyItems(5) == 2){
        item_HTML.innerHTML = Hcode[9] + Item[2] + Hcode[10];
    }else if(luckyItems(5) == 3){
        item_HTML.innerHTML = Hcode[9] + Item[3] + Hcode[10];
    }else if(luckyItems(5) == 4){
        item_HTML.innerHTML = Hcode[9] + Item[4] + Hcode[10];
    }else{
        item_HTML.innerHTML = Hcode[9] + Item[5] + Hcode[10];
    }
  }else if(Random(4) == 2){
    doc.innerHTML = Hcode[5] + Res_title[2] + Hcode[6];
    doc1.innerHTML = Hcode[3] + Res_Main[2] + Hcode[4];
    doc2.innerHTML = Hcode[7] + Res_title[2] + Hcode[8] + Items_Text;
    if(luckyItems(5) == 0){
        item_HTML.innerHTML = Hcode[9] + Item[0] + Hcode[10];
    }else if(luckyItems(5) == 1){
        item_HTML.innerHTML = Hcode[9] + Item[1] + Hcode[10];
    }else if(luckyItems(5) == 2){
        item_HTML.innerHTML = Hcode[9] + Item[2] + Hcode[10];
    }else if(luckyItems(5) == 3){
        item_HTML.innerHTML = Hcode[9] + Item[3] + Hcode[10];
    }else if(luckyItems(5) == 4){
        item_HTML.innerHTML = Hcode[9] + Item[4] + Hcode[10];
    }else{
        item_HTML.innerHTML = Hcode[9] + Item[5] + Hcode[10];
    }
  }else if(Random(4) == 3){
    doc.innerHTML = Hcode[5] + Res_title[3] + Hcode[6];
    doc1.innerHTML = Hcode[3] + Res_Main[3] + Hcode[4];
    doc2.innerHTML = Hcode[7] + Res_title[3] + Hcode[8] + Items_Text;
    if(luckyItems(5) == 0){
        item_HTML.innerHTML = Hcode[9] + Item[0] + Hcode[10];
    }else if(luckyItems(5) == 1){
        item_HTML.innerHTML = Hcode[9] + Item[1] + Hcode[10];
    }else if(luckyItems(5) == 2){
        item_HTML.innerHTML = Hcode[9] + Item[2] + Hcode[10];
    }else if(luckyItems(5) == 3){
        item_HTML.innerHTML = Hcode[9] + Item[3] + Hcode[10];
    }else if(luckyItems(5) == 4){
        item_HTML.innerHTML = Hcode[9] + Item[4] + Hcode[10];
    }else{
        item_HTML.innerHTML = Hcode[9] + Item[5] + Hcode[10];
    }
  }else{
    doc.innerHTML =　Hcode[5] + Res_title[4] + Hcode[6];
    doc1.innerHTML = Hcode[3] + Res_Main[4] + Hcode[4];
    doc2.innerHTML = Hcode[7] + Res_title[4] + Hcode[8] + Items_Text;
    if(luckyItems(5) == 0){
        item_HTML.innerHTML = Hcode[9] + Item[0] + Hcode[10];
    }else if(luckyItems(5) == 1){
        item_HTML.innerHTML = Hcode[9] + Item[1] + Hcode[10];
    }else if(luckyItems(5) == 2){
        item_HTML.innerHTML = Hcode[9] + Item[2] + Hcode[10];
    }else if(luckyItems(5) == 3){
        item_HTML.innerHTML = Hcode[9] + Item[3] + Hcode[10];
    }else if(luckyItems(5) == 4){
        item_HTML.innerHTML = Hcode[9] + Item[4] + Hcode[10];
    }else{
        item_HTML.innerHTML = Hcode[9] + Item[5] + Hcode[10];
    }
  }
}
