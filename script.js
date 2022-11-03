const btn = document.getElementById('id_submit');

btn.onclick = () => {
    let text = document.getElementById('id_text').value;
    
    let texts = [];
    let start_num = 0;
    let end_num = 1;
    
    //  文字の切り出し
    for(let i = 0; i<text.length; i++) {
        texts.push(text.substring(start_num, end_num));
        start_num++;
        end_num++;
    }
    
    //  文字を実際に処理する
    for(let i = 0; i<texts.length; i++) {
        let ascii_code = texts[i].charCodeAt(0);
        texts[i] = String.fromCharCode(ascii_code + 1);
    }
    
    let result = texts.join('');
    document.getElementById('id_result').textContent = result;
    
}