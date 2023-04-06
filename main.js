function createCalendar(year, month) {
    // カレンダーを表示する要素を取得
    var calendar = document.getElementById("calendar");

    // 月の最初の日を取得
    var firstDay = new Date(year, month-1, 1);

    // 月の最後の日を取得
    var lastDay = new Date(year, month, 0);

    // カレンダーの見出しを設定
    var title = year + "年" + (month) + "月";
    calendar.innerHTML = "<h2>" + title + "</h2>";

    // カレンダーの表を生成
    var table = "<table class=\"table table-bordered\"><thead><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr></thead><tbody>";

    // カレンダーの最初の週を生成
    table += "<tr>";
    for (var i = 0; i < firstDay.getDay(); i++) {
        table += "<td></td>";
    }
    for (var i = 1; i <= 7 - firstDay.getDay(); i++) {
        table += "<td>" + i + "</td>";
    }
    table += "</tr>";

    // カレンダーの中間の週を生成
    var day = 7 - firstDay.getDay() + 1;
    while (day <= lastDay.getDate() - 7) {
        table += "<tr>";
        for (var i = 0; i < 7; i++) {
            table += "<td>" + day + "</td>";
            day++;
        }
        table += "</tr>";
    }

    // カレンダーの最後の週を生成
    table += "<tr>";
    console.log(day);
    console.log(lastDay.getDay());
    for (var i = day; i <= lastDay.getDate(); i++) {
        table += "<td>" + i + "</td>";
    }
    for (var i = 1; i < 7 - lastDay.getDay(); i++) {
        table += "<td></td>";
    }
    table += "</tr>";

    table += "</tbody></table>";
    calendar.innerHTML += table;
}

createCalendar(2023, 4);