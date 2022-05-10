const actualYear = 2021;
const locale = 'es';

const weekdays = [...Array(7).keys()];
const intlWeekDay = new Intl.DateTimeFormat(locale, {
	weekday: 'long',
});

const weekDaysNames = weekdays.map((weekDayIndex) => {
	const weekDayName = intlWeekDay.format(
		new Date(2021, 10, weekDayIndex + 1)
	);
	return weekDayName;
});

const months = [...Array(12).keys()];
const intl = new Intl.DateTimeFormat(locale, { month: 'long' });

const calendar = months.map((monthKey) => {
	const monthName = intl.format(new Date(actualYear, monthKey));
	const nextMonthIndex = monthKey + 1;
	const daysOfMonth = new Date(2022, nextMonthIndex, 0).getDate();
	return {
		monthName,
		daysOfMonth,
		startsOn: 0,
	};
});

const html = calendar
	.map(({ daysOfMonth, monthName }) => {
		const days = [...Array(daysOfMonth).keys()];

		const renderedDays = days
			.map((day) => `<li class="num">${day + 1}</li>`)
			.join('');

		const title = `<h1 class="calendar-title mb-5 text-capitalize">${monthName} ${actualYear}</h1><ol class="calendar-ol">${renderedDays}</ol>`;

		return title;
	})
	.join();

document.getElementById('Calendar').innerHTML = html;
