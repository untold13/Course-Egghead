document.body.style.margin="0px"

 //ლურჯი ნაწილი
 let main = document.createElement("div")
 main.style.backgroundColor ="rgba(37, 43, 66, 1)"
 main.style.width='100%'
 main.style.height="1132px"
 document.body.appendChild(main)
 main.style.display = "flex"
 main.style.flexDirection = "column"
 main.style.justifyContent = "space-around"
// //თეთრი ნაწილი
 let footer = document.createElement('div')
 footer.style.backgroundColor ="#FFFFFF";
 footer.style.width='100%'
 footer.style.height="594px"
 document.body.appendChild(footer)

//ლურჯის მთავარი დივი
//ლურჯის მთავარი დივი
//ლურჯის მთავარი დივი
//ლურჯის მთავარი დივი
//ლურჯის მთავარი დივი
let heading_div = document.createElement("div");
heading_div.style.display = "flex"
heading_div.style.flexDirection = "column"
heading_div.style.alignItems = "center"
heading_div.style.gap = "40px"
//დიდი წარწერა
let welcome = document.createElement("h5")
welcome.innerHTML = "Welcome"
welcome.style.color = "#23A6F0"
welcome.style.fontSize = "16px"
welcome.style.padding = "0px"
welcome.style.margin = "0px"
//დიდი წარწერა
let headline = document.createElement("h1")
headline.innerHTML = "Selling on the internet like a pro"
headline.style.textAlign = "center"
headline.style.color = "#FFFFFF"
headline.style.fontSize = "58px"
headline.style.width = "542px"
headline.style.height = "160px"
headline.style.padding = "0px"
headline.style.margin = "0px"
//პატარა წარწერა
let sub_headline = document.createElement("h4")
sub_headline.innerHTML = "We know how large objects will act, but things on a small scale just do not act that way."
sub_headline.style.textAlign = "center"
sub_headline.style.color = "#FFFFFF"
sub_headline.style.fontSize = "20px"
sub_headline.style.lineHeight = "30px"
sub_headline.style.letterSpacing = "0.2px"
sub_headline.style.width = "472px"
sub_headline.style.height = "60px"
sub_headline.style.fontWeight ="400"
sub_headline.style.padding = "0px"
sub_headline.style.margin = "0px"
//ლურჯის ღილაკები
//ლურჯის ღილაკები
//ლურჯის ღილაკები
//ლურჯის ღილაკები
//ლურჯის ღილაკები
//ლურჯის ღილაკები
let button_div = document.createElement("div")
button_div.style.display = "flex"
button_div.style.gap = "10px"
//პირველი ღილაკი
let button1 = document.createElement("button")
button1.innerHTML = "Get Quote Now"
button1.style.fontSize = "14px"
button1.style.borderRadius = "5px"
button1.style.backgroundColor = "#23A6F0"
button1.style.color = "#FFFFFF"
button1.style.padding = "15px 40px 15px 40px"
button1.style.letterSpacing = "0.2px"
button1.style.fontSize = "14px"
button1.style.lineHeight = "22px"
button1.style.borderColor = "#23A6F0"
// მეორე ღილაკი
let button2 = document.createElement("button")
button2.innerHTML = "Learn More"
button2.style.fontSize = "14px"
button2.style.borderRadius = "5px"
button2.style.padding = "15px 40px 15px 40px"
button2.style.color = "#23A6F0"
button2.style.letterSpacing = "0.2px"
button2.style.backgroundColor = "transparent"
button2.style.fontSize = "14px"
button2.style.lineHeight = "22px"
button2.style.borderColor = "#23A6F0"
//ლურჯი ქვედა სამი კარტის დივი
//ლურჯი ქვედა სამი კარტის დივი
//ლურჯი ქვედა სამი კარტის დივი
//ლურჯი ქვედა სამი კარტის დივი
//ლურჯი ქვედა სამი კარტის დივი
let card_container = document.createElement("div")
card_container.style.display = "flex"
card_container.style.justifyContent = "center"
card_container.style.gap = "30px"
//თვითონ კარტები
let card1 = document.createElement("div")
card1.style.backgroundColor = "#FFFFFF"
card1.style.height = "292px"
card1.style.width = "328px"
let card2 = document.createElement("div")
card2.style.height = "292px"
card2.style.width = "328px"
card2.style.backgroundColor = "#FFFFFF"
let card3 = document.createElement("div")
card3.style.backgroundColor = "#23A6F0"
card3.style.height = "292px"
card3.style.width = "328px"
//კარტების სათაურები
let card1_h = document.createElement("h3")
card1_h.innerHTML = "training Courses"
card1_h.style.color = "#252B42"
card1_h.style.lineHeight = "24px"
card1_h.style.fontWeight = "700"
card1_h.style.letterSpacing = "0.1px"
card1_h.style.fontSize = "16px"

let card2_h = document.createElement("h3")
card2_h.innerHTML = "2,769 online courses"
card2_h.style.color = "#252B42"
card2_h.style.lineHeight = "24px"
card2_h.style.fontWeight = "700"
card2_h.style.letterSpacing = "0.1px"
card2_h.style.fontSize = "16px"

let card3_h = document.createElement("h3")
card3_h.innerHTML = "training Courses"
card3_h.style.color = "#FFFFFF"
card3_h.style.lineHeight = "24px"
card3_h.style.fontWeight = "700"
card3_h.style.letterSpacing = "0.1px"
card3_h.style.fontSize = "16px"

//კარტების პარაგრაფები
let card3_p = document.createElement("p")
card3_p.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."
card3_p.style.color ="#FFFFFF"
card3_p.style.lineHeight = "20px"
card3_p.style.fontWeight = "400"
card3_p.style.letterSpacing = "0.2px"
card3_p.style.fontSize = "14px"
let card2_p = document.createElement("p")
card2_p.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."
card2_p.style.color ="#737373"
card2_p.style.lineHeight = "20px"
card2_p.style.fontWeight = "400"
card2_p.style.letterSpacing = "0.2px"
card2_p.style.fontSize = "14px"
let card1_p = document.createElement("p")
card1_p.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."
card1_p.style.color ="#737373"
card1_p.style.lineHeight = "20px"
card1_p.style.fontWeight = "400"
card1_p.style.letterSpacing = "0.2px"
card1_p.style.fontSize = "14px"


//თეთრი ნაწილის წარწერების დივი
let footer_texts_div = document.createElement("div")
footer_texts_div.style.marginTop = "160px"
footer_texts_div.style.marginBottom = "80px"
footer_texts_div.style.display = "flex"
footer_texts_div.style.flexDirection = "column"
footer_texts_div.style.alignItems = "center"
footer_texts_div.style.gap = "10px"


let footer_blue_text = document.createElement("h6")
footer_blue_text.innerHTML = "Practice Advice"
footer_blue_text.style.fontSize = '14px'
footer_blue_text.style.fontWeight = '700'
footer_blue_text.style.lineHeight = '24px'
footer_blue_text.style.letterSpacing = '0.2px'
footer_blue_text.style.textAlign = 'center'
footer_blue_text.style.color = "#23A6F0"
footer_blue_text.style.margin = "0px"
footer_blue_text.style.padding = "0px"




let footer_bold_text = document.createElement("h2")
footer_bold_text.innerHTML = "Featured Products"
footer_bold_text.style.fontSize = "40px"
footer_bold_text.style.fontWeight = "700"
footer_bold_text.style.lineHeight = "50px" 
footer_bold_text.style.letterSpacing = "0.2px"
footer_bold_text.style.textAlign = "center"
footer_bold_text.style.color = "#252B42"
footer_bold_text.style.margin = "0px"
footer_bold_text.style.padding = "0px"





let footer_paragraph_text1 = document.createElement("p")
footer_paragraph_text1.innerHTML = "Problems trying to resolve the conflict between"
footer_paragraph_text1.style.fontSize = "14px"
footer_paragraph_text1.style.fontWeight = "400"
footer_paragraph_text1.style.lineHeight = "20px"
footer_paragraph_text1.style.letterSpacing = "0.2px"
footer_paragraph_text1.style.textAlign = "center"
footer_paragraph_text1.style.color = "#737373"
footer_paragraph_text1.style.margin = "0px"
footer_paragraph_text1.style.padding = "0px"

let footer_paragraph_text2 = document.createElement("p")
footer_paragraph_text2.innerHTML = "the two major realms of Classical physics: Newtonian mechanics "
footer_paragraph_text2.style.fontSize = "14px"
footer_paragraph_text2.style.fontWeight = "400"
footer_paragraph_text2.style.lineHeight = "20px"
footer_paragraph_text2.style.letterSpacing = "0.2px"
footer_paragraph_text2.style.textAlign = "center"
footer_paragraph_text2.style.color = "#737373"
footer_paragraph_text2.style.margin = "0px"
footer_paragraph_text2.style.padding = "0px"





let email_div = document.createElement("div")
email_div.style.display = "flex"
email_div.style.justifyContent = "center"

let input = document.createElement("input")
input.placeholder = "Your Email"
input.style.width = "688px"
input.style.height = "27px"
input.style.padding = "15px 20px"
input.style.outline = "none"
input.style.borderRadius = " 5px 0px 0px 5px "
input.style.border = "1px solid"
input.style.borderColor = "#E6E6E6"
input.style.color = "#737373"
input.style.background = "#F9F9F9"

let subscribe_button = document.createElement("button")
subscribe_button.textContent = "Subscribe"
subscribe_button.style.right = "0"
subscribe_button.style.width = "117px"
subscribe_button.style.height = "58px"
subscribe_button.style.borderRadius = "0px 5px 5px 0px"
subscribe_button.style.border = "none"
subscribe_button.style.padding = "15px 22px"
subscribe_button.style.fontSize = "14px"
subscribe_button.style.fontWeight = "400"
subscribe_button.style.lineHeight = "28px"
subscribe_button.style.color = "white"
subscribe_button.style.background = "#23A6F0"



main.appendChild(heading_div)
main.appendChild(card_container)
card_container.appendChild(card1)
card_container.appendChild(card2)
card_container.appendChild(card3)
card1.appendChild(card1_h)
card2.appendChild(card2_h)
card3.appendChild(card3_h)
card1.appendChild(card1_p)
card2.appendChild(card2_p)
card3.appendChild(card3_p)
heading_div.appendChild(welcome)
heading_div.appendChild(headline)
heading_div.appendChild(sub_headline)
heading_div.appendChild(button_div)
button_div.appendChild(button1)
button_div.appendChild(button2)
footer.appendChild(footer_texts_div)
footer_texts_div.appendChild(footer_blue_text)
footer_texts_div.appendChild(footer_bold_text)
footer_texts_div.appendChild(footer_paragraph_text1)
footer_texts_div.appendChild(footer_paragraph_text2)
footer.appendChild(email_div)
email_div.appendChild(input)
email_div.appendChild(subscribe_button)

