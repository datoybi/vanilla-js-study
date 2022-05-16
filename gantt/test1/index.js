google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task ID");
  data.addColumn("string", "Task Name"); // 이름
  data.addColumn("date", "Start Date"); // 시작일
  data.addColumn("date", "End Date"); // 끝
  data.addColumn("number", "Duration"); // 기간
  data.addColumn("number", "Percent Complete");
  data.addColumn("string", "Dependencies");

  data.addRows([
    [
      "makingConcrete",
      "콘크리트 타공",
      new Date(2202, 5, 13),
      new Date(2202, 5, 20),
      null,
      100,
      null,
    ],
    [
      "preparing",
      "준비 작업",
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      "makingConcrete",
    ],
    [
      "makingRebar",
      "철근 가공",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      "preparing",
    ],
    [
      "makingFormwork",
      "거푸집 제작",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      "preparing",
    ],
    [
      "assamble",
      "조립",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      null,
    ],
    [
      "assambleJibo",
      "지보 조립",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      "assamble",
    ],
    [
      "assambleFormwork",
      "거푸집 조립",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      null,
    ],
  ]);

  var options = {
    height: 275,
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}
