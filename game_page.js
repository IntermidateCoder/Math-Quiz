player_1_name = localStorage.getItem("player1_name");
player_2_name = localStorage.getItem("player2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send() {
    get_word = document.getElementById("Word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_1 = word.replace(charAt1, "_");
    remove_2 = remove_1.replace(charAt2, "_");
    remove_3 = remove_2.replace(charAt3, "_");
    console.log(remove_3);

    question = "<h4 id='word_display'> Q. " + remove_3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_box'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Word").value = "";
}