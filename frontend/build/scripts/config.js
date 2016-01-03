var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Toronto,Canada',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '82eb208b4ded55299a959eb300bd722a'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Be productive today.',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hope the day is going well!'
        ],
        evening: [
            'Welcome to Las Vegas.',
            'No pain, no gain.',
            'Go to the gym!'
        ]
    },
    calendar: {
        maximumEntries: 5,
        url: "https://calendar.google.com/calendar/ical/tilomitra%40gmail.com/private-3a6f3e80175cd1ae7bc255d6a5261e58/basic.ics"
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
