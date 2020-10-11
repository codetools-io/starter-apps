export default function getWeekRange(baseDate) {
  const date = new Date(baseDate.valueOf());
  const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 0);
  const start = new Date(date.setDate(diff));
  const end = new Date(start.valueOf());

  start.setHours(0, 0, 0, 0);
  end.setDate(end.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return [start, end];
}
