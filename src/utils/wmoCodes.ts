type WMOCode = {
  name: string
  icon: string
}
export const WMO_CODES: Record<number, WMOCode> = {
  0: {
    name: 'Clear',
    icon: 'clear@4x.png',
  },

  1: {
    name: 'Mainly Clear',
    icon: 'mostly-clear@4x.png',
  },
  2: {
    name: 'Partly Cloudy',
    icon: 'partly-cloudy@4x.png',
  },
  3: {
    name: 'Overcast',
    icon: 'overcast@4x.png',
  },

  45: {
    name: 'Fog',
    icon: 'fog@4x.png',
  },
  48: {
    name: 'Depositing Rime Fog',
    icon: 'rime-fog@4x.png',
  },

  51: {
    name: 'Light Drizzle',
    icon: 'light-drizzle@4x.png',
  },
  53: {
    name: 'Moderate Drizzle',
    icon: 'moderate-drizzle@4x.png',
  },
  55: {
    name: 'Dense Drizzle',
    icon: 'dense-drizzle@4x.png',
  },

  56: {
    name: 'Light Freezing Drizzle',
    icon: 'light-freezing-drizzle@4x.png',
  },
  57: {
    name: 'Dense Freezing Drizzle',
    icon: 'dense-freezing-drizzle@4x.png',
  },

  61: {
    name: 'Slight Rain',
    icon: 'light-rain@4x.png',
  },
  63: {
    name: 'Moderate Rain',
    icon: 'moderate-rain@4x.png',
  },
  65: {
    name: 'Heavy Rain',
    icon: 'heavy-rain@4x.png',
  },

  66: {
    name: 'Light Freezing Rain',
    icon: 'light-freezing-rain@4x.png',
  },
  67: {
    name: 'Heavy Freezing Rain',
    icon: 'heavy-freezing-rain@4x.png',
  },

  71: {
    name: 'Slight Snow',
    icon: 'slight-snowfall@4x.png',
  },
  73: {
    name: 'Moderate Snow',
    icon: 'moderate-snowfall@4x.png',
  },
  75: {
    name: 'Heavy Snow',
    icon: 'heavy-snowfall@4x.png',
  },

  77: {
    name: 'Snow Grains',
    icon: 'snowflake@4x.png',
  },

  80: {
    name: 'Slight Rain Showers',
    icon: 'light-rain@4x.png',
  },
  81: {
    name: 'Moderate Rain Showers',
    icon: 'moderate-rain@4x.png',
  },
  82: {
    name: 'Violent Rain Showers',
    icon: 'heavy-rain@4x.png',
  },

  85: {
    name: 'Slight Snow Showers',
    icon: 'slight-snowfall@4x.png',
  },
  86: {
    name: 'Heavy Snow Showers',
    icon: 'heavy-snowfall@4x.png',
  },

  95: {
    name: 'Thunderstorm',
    icon: 'thunderstorm@4x.png',
  },

  96: {
    name: 'Thunderstorm with Slight Hail',
    icon: 'thunderstorm-with-hail@4x.png',
  },
  99: {
    name: 'Thunderstorm with Heavy Hail',
    icon: 'thunderstorm-with-hail@4x.png',
  },
}
