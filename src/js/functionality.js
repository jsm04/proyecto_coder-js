const actualYear = 2022;
const locale = 'es';

const weekdays = [...Array(7).keys()];

const intlWeekDay = new Intl.DateTimeFormat(locale, {
	weekday: 'long',
});

const weekDaysNames = weekdays.map((weekDayIndex) => {
	const date = new Date(2021, 10, weekDayIndex + 1);
	const weekDayName = intlWeekDay.format(date);
	return weekDayName;
});

const renderedWeekDays = weekDaysNames
	.map((weekDayName) => `<li class="day">${weekDayName}</li>`)
	.join('');

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

		const title = `<h1 class="calendar-title mb-5 text-capitalize">${monthName} ${actualYear}</h1>`;

		return `${title}<ol class="calendar-ol"> ${renderedWeekDays} ${renderedDays}</ol>`;
	})
	.join();

document.getElementById('Calendar').innerHTML = html;
