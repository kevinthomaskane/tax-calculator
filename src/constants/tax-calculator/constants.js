export const PAY_BASIS_OPTIONS = ['Yearly', 'Monthly', 'Biweekly', 'Weekly', 'Daily', 'Hourly']

export const FILING_ACRONYMS = {
  'S': 'Single',
  'MFJ': 'Married Filing Jointly',
  'MFS': 'Married Filing Separately',
  'HOH': 'Head of Household'
}

export const FEDERAL_TAX_BRACKETS = {
  'tier-1': {
    rate: .1,
    S: {
      min: 0,
      max: 9700
    },
    MFJ: {
      min: 0,
      max: 19400
    },
    MFS: {
      min: 0,
      max: 9700
    },
    HOH: {
      min: 0,
      max: 13850
    }
  },
  'tier-2': {
    rate: .12,
    S: {
      min: 9701,
      max: 39475
    },
    MFJ: {
      min: 19401,
      max: 78950
    },
    MFS: {
      min: 9701,
      max: 39475
    },
    HOH: {
      min: 13851,
      max: 52850
    }
  },
  'tier-3': {
    rate: .22,
    S: {
      min: 39476,
      max: 84200
    },
    MFJ: {
      min: 78950,
      max: 168400
    },
    MFS: {
      min: 39476,
      max: 84200
    },
    HOH: {
      min: 52851,
      max: 84200
    }
  },
  'tier-4': {
    rate: .24,
    S: {
      min: 84201,
      max: 160725
    },
    MFJ: {
      min: 168401,
      max: 321450
    },
    MFS: {
      min: 84201,
      max: 160725
    },
    HOH: {
      min: 84201,
      max: 160700
    }
  },
  'tier-5': {
    rate: .32,
    S: {
      min: 160726,
      max: 204100
    },
    MFJ: {
      min: 321451,
      max: 408200
    },
    MFS: {
      min: 160726,
      max: 204100
    },
    HOH: {
      min: 160701,
      max: 204100
    }
  },
  'tier-6': {
    rate: .35,
    S: {
      min: 204101,
      max: 510300
    },
    MFJ: {
      min: 408201,
      max: 612350
    },
    MFS: {
      min: 204101,
      max: 306175
    },
    HOH: {
      min: 204101,
      max: 510300
    }
  },
  'tier-7': {
    rate: .37,
    S: {
      min: 510301,
      max: Infinity
    },
    MFJ: {
      min: 612351,
      max: Infinity
    },
    MFS: {
      min: 306176,
      max: Infinity
    },
    HOH: {
      min: 510301,
      max: Infinity
    }
  }
}

export const MEDICARE_TAX_BRACKETS = {
  'tier-1': {
    rate: .0145,
    min: 0,
    max: 200000
  },
  'tier-2': {
    rate: .0235,
    min: 200000,
    max: Infinity
  }
}

// don't have to pay SS tax on anything over 128400
export const SOCIAL_SECURITY_TAX_BRACKETS = {
  'tier-1': {
    rate: .062,
    min: 0,
    max: 128400,
    cap: -1
  },
  'tier-2': {
    rate: .062,
    min: 128401,
    max: Infinity,
    cap: 128400
  }
}

export const FEDERAL_STANDARD_DEDUCTIONS = {
  S: 12200,
  MFJ: 24400,
  MFS: 12200,
  HOH: 18350
}

export const STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


export const STATE_STANDARD_DEDUCTIONS = {
  Alabama: {
    S: 2500,
    MFJ: 7500,
    MFS: 2500,
    HOH: 2500
  },
  Alaska: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Arizona: {
    S: 12400,
    MFJ: 24800,
    MFS: 12400,
    HOH: 12400
  },
  Arkansas: {
    S: 2200,
    MFJ: 4400,
    MFS: 2200,
    HOH: 2200
  },
  California: {
    S: 4401,
    MFJ: 8802,
    MFS: 4401,
    HOH: 4401
  },
  Colorado: {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  Connecticut: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  'District of Columbia': {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  Delaware: {
    S: 3250,
    MFJ: 6500,
    MFS: 3250,
    HOH: 3250
  },
  Florida: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Georgia: {
    S: 4600,
    MFJ: 6000,
    MFS: 4600,
    HOH: 4600
  },
  Hawaii: {
    S: 2200,
    MFJ: 4400,
    MFS: 2200,
    HOH: 2200
  },
  Idaho: {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  Illinois: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Indiana: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Iowa: {
    S: 2080,
    MFJ: 5120,
    MFS: 2080,
    HOH: 2080
  },
  Kansas: {
    S: 3000,
    MFJ: 7500,
    MFS: 3000,
    HOH: 3000
  },
  Kentucky: {
    S: 2590,
    MFJ: 5180,
    MFS: 2590,
    HOH: 2590
  },
  Louisiana: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Maine: {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  Maryland: {
    S: 2300,
    MFJ: 4600,
    MFS: 2300,
    HOH: 2300
  },
  Massachusetts: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Michigan: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Minnesota: {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 24400
  },
  Mississippi: {
    S: 2300,
    MFJ: 4600,
    MFS: 2300,
    HOH: 2300
  },
  Missouri: {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  Montana: {
    S: 4710,
    MFJ: 9420,
    MFS: 4710,
    HOH: 4710
  },
  Nebraska: {
    S: 7050,
    MFJ: 14100,
    MFS: 7050,
    HOH: 7050
  },
  Nevada: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  'New Hampshire': {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  'New Jersey': {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  'New Mexico': {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  'New York': {
    S: 8000,
    MFJ: 16050,
    MFS: 8000,
    HOH: 8000
  },
  'North Carolina': {
    S: 10000,
    MFJ: 20000,
    MFS: 10000,
    HOH: 10000
  },
  'North Dakota': {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Ohio: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Oklahoma: {
    S: 6350,
    MFJ: 12700,
    MFS: 6350,
    HOH: 6350
  },
  Oregon: {
    S: 2270,
    MFJ: 4545,
    MFS: 2270,
    HOH: 2270
  },
  Pennsylvania: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  'Rhode Island': {
    S: 8750,
    MFJ: 17500,
    MFS: 8750,
    HOH: 8750
  },
  'South Carolina': {
    S: 12200,
    MFJ: 24400,
    MFS: 12200,
    HOH: 12200
  },
  'South Dakota': {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Tennessee: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Texas: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Utah: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Vermont: {
    S: 6100,
    MFJ: 12200,
    MFS: 6100,
    HOH: 6100
  },
  Virginia: {
    S: 4500,
    MFJ: 9000,
    MFS: 4500,
    HOH: 4500
  },
  Washington: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  'West Virginia': {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  },
  Wisconsin: {
    S: 10860,
    MFJ: 20110,
    MFS: 10860,
    HOH: 10860
  },
  Wyoming: {
    S: 0,
    MFJ: 0,
    MFS: 0,
    HOH: 0
  }
}

export const STATE_TAX_BRACKETS = {
  Alabama: {
    'tier-1': {
      S: { min: 0, max: 500 },
      rate: 0.02,
      MFJ: { min: 0, max: 1000 },
      MFS: { min: 0, max: 500 },
      HOH: { min: 0, max: 500 },
    },
    'tier-2': {
      S: { min: 500, max: 3000 },
      rate: 0.04,
      MFJ: { min: 1000, max: 6000 },
      MFS: { min: 500, max: 3000 },
      HOH: { min: 500, max: 3000 },
    },
    'tier-3': {
      S: { min: 3000, max: Infinity },
      rate: 0.05,
      MFJ: { min: 6000, max: Infinity },
      MFS: { min: 3000, max: Infinity },
      HOH: { min: 3000, max: Infinity },
    },
  },
  Alaska: {
    rate: 0
  },
  Arizona: {
    'tier-1': {
      S: { min: 0, max: 26500 },
      rate: 0.02,
      MFJ: { min: 0, max: 53000 },
      MFS: { min: 0, max: 26500 },
      HOH: { min: 0, max: 53000 },
    },
    'tier-2': {
      S: { min: 26501, max: 53000 },
      rate: 0.03,
      MFJ: { min: 53001, max: 106000 },
      MFS: { min: 26501, max: 53000 },
      HOH: { min: 53001, max: 106000 },
    },
    'tier-3': {
      S: { min: 53001, max: 159000 },
      rate: 0.04,
      MFJ: { min: 106001, max: 318000 },
      MFS: { min: 53001, max: 159000 },
      HOH: { min: 106001, max: 318000 },
    },
    'tier-4': {
      S: { min: 159001, max: Infinity },
      rate: 0.04,
      MFJ: { min: 318001, max: Infinity },
      MFS: { min: 159001, max: Infinity },
      HOH: { min: 318001, max: Infinity },
    },
  },
  Arkansas: {
    'tier-1': { S: { min: 0, max: 4500 }, rate: 0 },
    'tier-2': { S: { min: 4500, max: 8900 }, rate: 0.02 },
    'tier-3': { S: { min: 8900, max: 13400 }, rate: 0.03 },
    'tier-4': { S: { min: 13400, max: 22200 }, rate: 0.03 },
    'tier-5': { S: { min: 22200, max: 37200 }, rate: 0.05 },
    'tier-6': { S: { min: 37200, max: 79300 }, rate: 0.06 },
    'tier-7': { S: { min: 79300, max: Infinity }, rate: 0.06 },
  },
  California: {
    'tier-1': {
      S: { min: 0, max: 8809 },
      rate: 0.01,
      MFJ: { min: 0, max: 17618 },
      MFS: { min: 0, max: 8809 },
      HOH: { min: 0, max: 17629 },
    },
    'tier-2': {
      S: { min: 8809, max: 20883 },
      rate: 0.02,
      MFJ: { min: 17618, max: 41766 },
      MFS: { min: 8809, max: 20883 },
      HOH: { min: 17629, max: 41768 },
    },
    'tier-3': {
      S: { min: 20883, max: 32960 },
      rate: 0.04,
      MFJ: { min: 41766, max: 65920 },
      MFS: { min: 20883, max: 32960 },
      HOH: { min: 41768, max: 53843 },
    },
    'tier-4': {
      S: { min: 32960, max: 45753 },
      rate: 0.06,
      MFJ: { min: 65920, max: 91506 },
      MFS: { min: 32960, max: 45753 },
      HOH: { min: 53843, max: 66636 },
    },
    'tier-5': {
      S: { min: 45753, max: 57824 },
      rate: 0.08,
      MFJ: { min: 91506, max: 115648 },
      MFS: { min: 45753, max: 57824 },
      HOH: { min: 66636, max: 78710 },
    },
    'tier-6': {
      S: { min: 57824, max: 295373 },
      rate: 0.09,
      MFJ: { min: 115648, max: 590746 },
      MFS: { min: 57824, max: 295373 },
      HOH: { min: 78710, max: 401705 },
    },
    'tier-7': {
      S: { min: 295373, max: 354445 },
      rate: 0.1,
      MFJ: { min: 590746, max: 708890 },
      MFS: { min: 295373, max: 354445 },
      HOH: { min: 401705, max: 482047 },
    },
    'tier-8': {
      S: { min: 354445, max: 590742 },
      rate: 0.11,
      MFJ: { min: 708890, max: 1181484 },
      MFS: { min: 354445, max: 590742 },
      HOH: { min: 482047, max: 803410 },
    },
    'tier-9': {
      S: { min: 590742, max: 1000000 },
      rate: 0.12,
      MFJ: { min: 1181484, max: 2000000 },
      MFS: { min: 590742, max: 1000000 },
      HOH: { min: 803410, max: 1000000 },
    },
    'tier-10': {
      S: { min: 1000000, max: Infinity },
      rate: 0.13,
      MFJ: { min: 2000000, max: Infinity },
      MFS: { min: 1000000, max: Infinity },
      HOH: { min: 1000000, max: Infinity },
    },
  },
  Colorado: {
    rate: .0463
  },
  Connecticut: {
    'tier-1': {
      S: { min: 0, max: 10000 },
      rate: 0.03,
      MFJ: { min: 0, max: 20000 },
      MFS: { min: 0, max: 10000 },
      HOH: { min: 0, max: 16000 },
    },
    'tier-2': {
      S: { min: 10000, max: 50000 },
      rate: 0.05,
      MFJ: { min: 20000, max: 100000 },
      MFS: { min: 10000, max: 50000 },
      HOH: { min: 16000, max: 80000 },
    },
    'tier-3': {
      S: { min: 50000, max: 100000 },
      rate: 0.05,
      MFJ: { min: 100000, max: 200000 },
      MFS: { min: 50000, max: 100000 },
      HOH: { min: 80000, max: 160000 },
    },
    'tier-4': {
      S: { min: 100000, max: 200000 },
      rate: 0.06,
      MFJ: { min: 200000, max: 400000 },
      MFS: { min: 100000, max: 200000 },
      HOH: { min: 160000, max: 320000 },
    },
    'tier-5': {
      S: { min: 200000, max: 250000 },
      rate: 0.06,
      MFJ: { min: 400000, max: 500000 },
      MFS: { min: 200000, max: 250000 },
      HOH: { min: 320000, max: 400000 },
    },
    'tier-6': {
      S: { min: 250000, max: 500000 },
      rate: 0.06,
      MFJ: { min: 500000, max: 1000000 },
      MFS: { min: 250000, max: 500000 },
      HOH: { min: 400000, max: 800000 },
    },
    'tier-7': {
      S: { min: 500000, max: Infinity },
      rate: 0.06,
      MFJ: { min: 1000000, max: Infinity },
      MFS: { min: 500000, max: Infinity },
      HOH: { min: 800000, max: Infinity },
    },
  },
  Delaware: {
    'tier-1': { S: { min: 0, max: 2000 }, rate: 0 },
    'tier-2': { S: { min: 2000, max: 5000 }, rate: 0.02 },
    'tier-3': { S: { min: 5000, max: 10000 }, rate: 0.03 },
    'tier-4': { S: { min: 10000, max: 20000 }, rate: 0.04 },
    'tier-5': { S: { min: 20000, max: 25000 }, rate: 0.05 },
    'tier-6': { S: { min: 25000, max: 60000 }, rate: 0.05 },
    'tier-7': { S: { min: 60000, max: Infinity }, rate: 0.06 },
  },
  'District of Columbia': {
    'tier-1': { S: { min: 0, max: 10000 }, rate: 0.04 },
    'tier-2': { S: { min: 10000, max: 40000 }, rate: 0.06 },
    'tier-3': { S: { min: 40000, max: 60000 }, rate: 0.06 },
    'tier-4': { S: { min: 60000, max: 350000 }, rate: 0.08 },
    'tier-5': { S: { min: 350000, max: 1000000 }, rate: 0.08 },
    'tier-6': { S: { min: 1000000, max: Infinity }, rate: 0.08 },
  },
  Florida: {
    rate: 0
  },
  Georgia: {
    'tier-1': {
      S: { min: 0, max: 750 },
      rate: 0.01,
      MFJ: { min: 0, max: 1000 },
      MFS: { min: 0, max: 500 },
      HOH: { min: 0, max: 1000 },
    },
    'tier-2': {
      S: { min: 750, max: 2250 },
      rate: 0.02,
      MFJ: { min: 1000, max: 3000 },
      MFS: { min: 500, max: 1500 },
      HOH: { min: 1000, max: 3000 },
    },
    'tier-3': {
      S: { min: 2250, max: 3750 },
      rate: 0.03,
      MFJ: { min: 3000, max: 5000 },
      MFS: { min: 1500, max: 2500 },
      HOH: { min: 3000, max: 5000 },
    },
    'tier-4': {
      S: { min: 3750, max: 5250 },
      rate: 0.04,
      MFJ: { min: 5000, max: 7000 },
      MFS: { min: 2500, max: 3500 },
      HOH: { min: 5000, max: 7000 },
    },
    'tier-5': {
      S: { min: 5250, max: 7000 },
      rate: 0.05,
      MFJ: { min: 7000, max: 10000 },
      MFS: { min: 3500, max: 5000 },
      HOH: { min: 7000, max: 10000 },
    },
    'tier-6': {
      S: { min: 7000, max: Infinity },
      rate: 0.05,
      MFJ: { min: 10000, max: Infinity },
      MFS: { min: 5000, max: Infinity },
      HOH: { min: 10000, max: Infinity },
    },
  },
  Hawaii: {
    'tier-1': {
      S: { min: 0, max: 2400 },
      rate: 0.01,
      MFJ: { min: 0, max: 4800 },
      MFS: { min: 0, max: 2400 },
      HOH: { min: 0, max: 3600 },
    },
    'tier-2': {
      S: { min: 2400, max: 4800 },
      rate: 0.03,
      MFJ: { min: 4800, max: 9600 },
      MFS: { min: 2400, max: 4800 },
      HOH: { min: 3600, max: 7200 },
    },
    'tier-3': {
      S: { min: 4800, max: 9600 },
      rate: 0.05,
      MFJ: { min: 9600, max: 19200 },
      MFS: { min: 4800, max: 9600 },
      HOH: { min: 7200, max: 14400 },
    },
    'tier-4': {
      S: { min: 9600, max: 14400 },
      rate: 0.06,
      MFJ: { min: 19200, max: 28800 },
      MFS: { min: 9600, max: 14400 },
      HOH: { min: 14400, max: 21600 },
    },
    'tier-5': {
      S: { min: 14400, max: 19200 },
      rate: 0.06,
      MFJ: { min: 28800, max: 38400 },
      MFS: { min: 14400, max: 19200 },
      HOH: { min: 21600, max: 28800 },
    },
    'tier-6': {
      S: { min: 19200, max: 24000 },
      rate: 0.07,
      MFJ: { min: 38400, max: 48000 },
      MFS: { min: 19200, max: 24000 },
      HOH: { min: 28800, max: 36000 },
    },
    'tier-7': {
      S: { min: 24000, max: 36000 },
      rate: 0.07,
      MFJ: { min: 48000, max: 72000 },
      MFS: { min: 24000, max: 36000 },
      HOH: { min: 36000, max: 54000 },
    },
    'tier-8': {
      S: { min: 36000, max: 48000 },
      rate: 0.07,
      MFJ: { min: 72000, max: 96000 },
      MFS: { min: 36000, max: 48000 },
      HOH: { min: 54000, max: 72000 },
    },
    'tier-9': {
      S: { min: 48000, max: 150000 },
      rate: 0.08,
      MFJ: { min: 96000, max: 300000 },
      MFS: { min: 48000, max: 150000 },
      HOH: { min: 72000, max: 225000 },
    },
    'tier-10': {
      S: { min: 150000, max: 175000 },
      rate: 0.09,
      MFJ: { min: 300000, max: 350000 },
      MFS: { min: 150000, max: 175000 },
      HOH: { min: 225000, max: 262500 },
    },
    'tier-11': {
      S: { min: 175000, max: 200000 },
      rate: 0.1,
      MFJ: { min: 350000, max: 400000 },
      MFS: { min: 175000, max: 200000 },
      HOH: { min: 262500, max: 300000 },
    },
    'tier-12': {
      S: { min: 200000, max: Infinity },
      rate: 0.11,
      MFJ: { min: 400000, max: Infinity },
      MFS: { min: 200000, max: Infinity },
      HOH: { min: 300000, max: Infinity },
    },
  },
  Idaho: {
    'tier-1': {
      S: { min: 0, max: 1541 },
      rate: 0.01,
      MFJ: { min: 0, max: 3082 },
      MFS: { min: 0, max: 1541 },
      HOH: { min: 0, max: 3082 },
    },
    'tier-2': {
      S: { min: 1541, max: 3081 },
      rate: 0.03,
      MFJ: { min: 3082, max: 6162 },
      MFS: { min: 1541, max: 3081 },
      HOH: { min: 3082, max: 6162 },
    },
    'tier-3': {
      S: { min: 3081, max: 4622 },
      rate: 0.03,
      MFJ: { min: 6162, max: 9244 },
      MFS: { min: 3081, max: 4622 },
      HOH: { min: 6162, max: 9244 },
    },
    'tier-4': {
      S: { min: 4622, max: 6162 },
      rate: 0.04,
      MFJ: { min: 9244, max: 12324 },
      MFS: { min: 4622, max: 6162 },
      HOH: { min: 9244, max: 12324 },
    },
    'tier-5': {
      S: { min: 6162, max: 7703 },
      rate: 0.05,
      MFJ: { min: 12324, max: 15406 },
      MFS: { min: 6162, max: 7703 },
      HOH: { min: 12324, max: 15406 },
    },
    'tier-6': {
      S: { min: 7703, max: 11554 },
      rate: 0.06,
      MFJ: { min: 15406, max: 23108 },
      MFS: { min: 7703, max: 11554 },
      HOH: { min: 15406, max: 23108 },
    },
    'tier-7': {
      S: { min: 11554, max: Infinity },
      rate: 0.06,
      MFJ: { min: 23108, max: Infinity },
      MFS: { min: 11554, max: Infinity },
      HOH: { min: 23108, max: Infinity },
    },
  },
  Illinois: {rate: .0495},
  Indiana: {rate: .0323},
  Iowa: {
    'tier-1': { S: { min: 0, max: 1638 }, rate: 0 },
    'tier-2': { S: { min: 1638, max: 3276 }, rate: 0 },
    'tier-3': { S: { min: 3276, max: 6552 }, rate: 0.02 },
    'tier-4': { S: { min: 6552, max: 14742 }, rate: 0.04 },
    'tier-5': { S: { min: 14742, max: 24570 }, rate: 0.05 },
    'tier-6': { S: { min: 24570, max: 32760 }, rate: 0.05 },
    'tier-7': { S: { min: 32760, max: 49140 }, rate: 0.06 },
    'tier-8': { S: { min: 49140, max: 73710 }, rate: 0.07 },
    'tier-9': { S: { min: 73710, max: Infinity }, rate: 0.08 },
  },
  Kansas: {
    'tier-1': {
      S: { min: 0, max: 15000 },
      rate: 0.03,
      MFJ: { min: 0, max: 30000 },
      MFS: { min: 0, max: 15000 },
      HOH: { min: 0, max: 15000 },
    },
    'tier-2': {
      S: { min: 15000, max: 30000 },
      rate: 0.05,
      MFJ: { min: 30000, max: 60000 },
      MFS: { min: 15000, max: 30000 },
      HOH: { min: 15000, max: 30000 },
    },
    'tier-3': {
      S: { min: 30000, max: Infinity },
      rate: 0.05,
      MFJ: { min: 60000, max: Infinity },
      MFS: { min: 30000, max: Infinity },
      HOH: { min: 30000, max: Infinity },
    },
  },
  Kentucky: {rate: .05},
  Louisiana: {
    'tier-1': {
      S: { min: 0, max: 12500 },
      rate: 0.02,
      MFJ: { min: 0, max: 25000 },
      MFS: { min: 0, max: 12500 },
      HOH: { min: 0, max: 12500 },
    },
    'tier-2': {
      S: { min: 12500, max: 50000 },
      rate: 0.04,
      MFJ: { min: 25000, max: 100000 },
      MFS: { min: 12500, max: 50000 },
      HOH: { min: 12500, max: 50000 },
    },
    'tier-3': {
      S: { min: 50000, max: Infinity },
      rate: 0.06,
      MFJ: { min: 100000, max: Infinity },
      MFS: { min: 50000, max: Infinity },
      HOH: { min: 50000, max: Infinity },
    },
  },
  Maine: {
    'tier-1': {
      S: { min: 0, max: 21850 },
      rate: 0.05,
      MFJ: { min: 0, max: 43700 },
      MFS: { min: 0, max: 21850 },
      HOH: { min: 0, max: 32750 },
    },
    'tier-2': {
      S: { min: 21850, max: 51700 },
      rate: 0.06,
      MFJ: { min: 43700, max: 103400 },
      MFS: { min: 21850, max: 51700 },
      HOH: { min: 32750, max: 77550 },
    },
    'tier-3': {
      S: { min: 51700, max: Infinity },
      rate: 0.07,
      MFJ: { min: 103400, max: Infinity },
      MFS: { min: 51700, max: Infinity },
      HOH: { min: 77550, max: Infinity },
    },
  },
  Maryland: {
    'tier-1': {
      S: { min: 0, max: 1000 },
      rate: 0.02,
      MFJ: { min: 0, max: 1000 },
      MFS: { min: 0, max: 1000 },
      HOH: { min: 0, max: 1000 },
    },
    'tier-2': {
      S: { min: 1000, max: 2000 },
      rate: 0.03,
      MFJ: { min: 1000, max: 2000 },
      MFS: { min: 1000, max: 2000 },
      HOH: { min: 1000, max: 2000 },
    },
    'tier-3': {
      S: { min: 2000, max: 3000 },
      rate: 0.04,
      MFJ: { min: 2000, max: 3000 },
      MFS: { min: 2000, max: 3000 },
      HOH: { min: 2000, max: 3000 },
    },
    'tier-4': {
      S: { min: 3000, max: 100000 },
      rate: 0.04,
      MFJ: { min: 3000, max: 150000 },
      MFS: { min: 3000, max: 100000 },
      HOH: { min: 3000, max: 150000 },
    },
    'tier-5': {
      S: { min: 100000, max: 125000 },
      rate: 0.05,
      MFJ: { min: 150000, max: 175000 },
      MFS: { min: 100000, max: 125000 },
      HOH: { min: 150000, max: 175000 },
    },
    'tier-6': {
      S: { min: 125000, max: 150000 },
      rate: 0.05,
      MFJ: { min: 175000, max: 225000 },
      MFS: { min: 125000, max: 150000 },
      HOH: { min: 175000, max: 225000 },
    },
    'tier-7': {
      S: { min: 150000, max: 250000 },
      rate: 0.05,
      MFJ: { min: 225000, max: 300000 },
      MFS: { min: 150000, max: 250000 },
      HOH: { min: 225000, max: 300000 },
    },
    'tier-8': {
      S: { min: 250000, max: Infinity },
      rate: 0.05,
      MFJ: { min: 300000, max: Infinity },
      MFS: { min: 250000, max: Infinity },
      HOH: { min: 300000, max: Infinity },
    },
  },
  Massachusetts: {rate: .0505},
  Michigan: {rate: .0425},
  Minnesota: {
    'tier-1': {
      S: { min: 0, max: 26520 },
      rate: 0.05,
      MFJ: { min: 0, max: 38770 },
      MFS: { min: 0, max: 19385 },
      HOH: { min: 0, max: 32650 },
    },
    'tier-2': {
      S: { min: 26520, max: 87110 },
      rate: 0.06,
      MFJ: { min: 38770, max: 154020 },
      MFS: { min: 19385, max: 77010 },
      HOH: { min: 32650, max: 131190 },
    },
    'tier-3': {
      S: { min: 87110, max: 161720 },
      rate: 0.07,
      MFJ: { min: 154020, max: 269010 },
      MFS: { min: 77010, max: 134505 },
      HOH: { min: 131190, max: 214980 },
    },
    'tier-4': {
      S: { min: 161720, max: Infinity },
      rate: 0.09,
      MFJ: { min: 269010, max: Infinity },
      MFS: { min: 134505, max: Infinity },
      HOH: { min: 214980, max: Infinity },
    },
  },
  Mississippi: {
    'tier-1': { S: { min: 0, max: 1000 }, rate: 0 },
    'tier-2': { S: { min: 1001, max: 5000 }, rate: 0.03 },
    'tier-3': { S: { min: 5001, max: 10000 }, rate: 0.04 },
    'tier-4': { S: { min: 10001, max: Infinity }, rate: 0.05 },
  },
  Missouri: {
    'tier-1': { S: { min: 0, max: 104 }, rate: 0 },
    'tier-2': { S: { min: 104, max: 1053 }, rate: 0.01 },
    'tier-3': { S: { min: 1053, max: 2106 }, rate: 0.02 },
    'tier-4': { S: { min: 2106, max: 3159 }, rate: 0.02 },
    'tier-5': { S: { min: 3159, max: 4212 }, rate: 0.03 },
    'tier-6': { S: { min: 4212, max: 5265 }, rate: 0.03 },
    'tier-7': { S: { min: 5265, max: 6318 }, rate: 0.04 },
    'tier-8': { S: { min: 6318, max: 7371 }, rate: 0.04 },
    'tier-9': { S: { min: 7371, max: 8424 }, rate: 0.05 },
    'tier-10': { S: { min: 8424, max: Infinity }, rate: 0.05 },
  },
  Montana: {
    'tier-1': { S: { min: 0, max: 3100 }, rate: 0.01 },
    'tier-2': { S: { min: 3100, max: 5400 }, rate: 0.02 },
    'tier-3': { S: { min: 5400, max: 8200 }, rate: 0.03 },
    'tier-4': { S: { min: 8200, max: 11100 }, rate: 0.04 },
    'tier-5': { S: { min: 11100, max: 14300 }, rate: 0.05 },
    'tier-6': { S: { min: 14300, max: 18400 }, rate: 0.06 },
    'tier-7': { S: { min: 18400, max: Infinity }, rate: 0.06 },
  },
  Nebraska: {
    'tier-1': {
      S: { min: 0, max: 3230 },
      rate: 0.02,
      MFJ: { min: 0, max: 6440 },
      MFS: { min: 0, max: 3230 },
      HOH: { min: 0, max: 6020 },
    },
    'tier-2': {
      S: { min: 3230, max: 19330 },
      rate: 0.03,
      MFJ: { min: 6440, max: 38680 },
      MFS: { min: 3230, max: 19330 },
      HOH: { min: 6020, max: 30940 },
    },
    'tier-3': {
      S: { min: 19330, max: 31160 },
      rate: 0.05,
      MFJ: { min: 38680, max: 62320 },
      MFS: { min: 19330, max: 31160 },
      HOH: { min: 30940, max: 46200 },
    },
    'tier-4': {
      S: { min: 31160, max: Infinity },
      rate: 0.06,
      MFJ: { min: 62320, max: Infinity },
      MFS: { min: 31160, max: Infinity },
      HOH: { min: 46200, max: Infinity },
    },
  },
  Nevada: {rate: 0},
  'New Hampshire': {rate: 0},
  'New Jersey': {
    'tier-1': {
      S: { min: 0, max: 20000 },
      rate: 0.01,
      MFJ: { min: 0, max: 20000 },
      MFS: { min: 0, max: 20000 },
      HOH: { min: 0, max: 20000 },
    },
    'tier-2': {
      S: { min: 20000, max: 35000 },
      rate: 0.01,
      MFJ: { min: 20000, max: 50000 },
      MFS: { min: 20000, max: 35000 },
      HOH: { min: 20000, max: 50000 },
    },
    'tier-3': {
      S: { min: 35000, max: 40000 },
      rate: 0.02,
      MFJ: { min: 50000, max: 70000 },
      MFS: { min: 35000, max: 40000 },
      HOH: { min: 50000, max: 70000 },
    },
    'tier-4': {
      S: { min: 40000, max: 75000 },
      rate: 0.03,
      MFJ: { min: 70000, max: 80000 },
      MFS: { min: 40000, max: 75000 },
      HOH: { min: 70000, max: 80000 },
    },
    'tier-5': {
      S: { min: 75000, max: 500000 },
      rate: 0.05,
      MFJ: { min: 80000, max: 150000 },
      MFS: { min: 75000, max: 500000 },
      HOH: { min: 80000, max: 150000 },
    },
    'tier-6': {
      S: { min: 500000, max: 5000000 },
      rate: 0.06,
      MFJ: { min: 150000, max: 500000 },
      MFS: { min: 500000, max: 5000000 },
      HOH: { min: 150000, max: 500000 },
    },
    'tier-7': {
      S: { min: 5000000, max: Infinity },
      rate: 0.08,
      MFJ: { min: 500000, max: 5000000 },
      MFS: { min: 5000000, max: Infinity },
      HOH: { min: 500000, max: 5000000 },
    },
    'tier-8': {
      MFJ: { min: 5000000, max: Infinity },
      rate: 0.1,
      HOH: { min: 5000000, max: Infinity },
    },
  },
  'New Mexico': {
    'tier-1': {
      S: { min: 0, max: 5500 },
      rate: 0.01,
      MFJ: { min: 0, max: 8000 },
      MFS: { min: 0, max: 4000 },
      HOH: { min: 0, max: 8000 },
    },
    'tier-2': {
      S: { min: 5500, max: 11000 },
      rate: 0.03,
      MFJ: { min: 8000, max: 16000 },
      MFS: { min: 4000, max: 8000 },
      HOH: { min: 8000, max: 16000 },
    },
    'tier-3': {
      S: { min: 11000, max: 16000 },
      rate: 0.04,
      MFJ: { min: 16000, max: 24000 },
      MFS: { min: 8000, max: 12000 },
      HOH: { min: 16000, max: 24000 },
    },
    'tier-4': {
      S: { min: 16000, max: Infinity },
      rate: 0.04,
      MFJ: { min: 24000, max: Infinity },
      MFS: { min: 12000, max: Infinity },
      HOH: { min: 24000, max: Infinity },
    },
  },
  'New York': {
    'tier-1': {
      S: { min: 0, max: 8500 },
      rate: 0.04,
      MFJ: { min: 0, max: 17150 },
      MFS: { min: 0, max: 8500 },
      HOH: { min: 0, max: 12800 },
    },
    'tier-2': {
      S: { min: 8500, max: 11700 },
      rate: 0.04,
      MFJ: { min: 17150, max: 23600 },
      MFS: { min: 8500, max: 11700 },
      HOH: { min: 12800, max: 17650 },
    },
    'tier-3': {
      S: { min: 11700, max: 13900 },
      rate: 0.05,
      MFJ: { min: 23600, max: 27900 },
      MFS: { min: 11700, max: 13900 },
      HOH: { min: 17650, max: 20900 },
    },
    'tier-4': {
      S: { min: 13900, max: 21400 },
      rate: 0.05,
      MFJ: { min: 27900, max: 43000 },
      MFS: { min: 13900, max: 21400 },
      HOH: { min: 20900, max: 32200 },
    },
    'tier-5': {
      S: { min: 21400, max: 80650 },
      rate: 0.06,
      MFJ: { min: 43000, max: 161550 },
      MFS: { min: 21400, max: 80650 },
      HOH: { min: 32200, max: 107650 },
    },
    'tier-6': {
      S: { min: 80650, max: 215400 },
      rate: 0.06,
      MFJ: { min: 161550, max: 323200 },
      MFS: { min: 80650, max: 215400 },
      HOH: { min: 107650, max: 269300 },
    },
    'tier-7': {
      S: { min: 215400, max: 1077550 },
      rate: 0.06,
      MFJ: { min: 323200, max: 2155350 },
      MFS: { min: 215400, max: 1077550 },
      HOH: { min: 269300, max: 1616450 },
    },
    'tier-8': {
      S: { min: 1077550, max: Infinity },
      rate: 0.08,
      MFJ: { min: 2155350, max: Infinity },
      MFS: { min: 1077550, max: Infinity },
      HOH: { min: 1616450, max: Infinity },
    },
  },
  'North Carolina': {rate: .0525},
  'North Dakota': {
    'tier-1': {
      S: { min: 0, max: 39450 },
      rate: 0.01,
      MFJ: { min: 0, max: 65900 },
      MFS: { min: 0, max: 32950 },
      HOH: { min: 0, max: 52850 },
    },
    'tier-2': {
      S: { min: 39450, max: 95500 },
      rate: 0.02,
      MFJ: { min: 65900, max: 159200 },
      MFS: { min: 32950, max: 79600 },
      HOH: { min: 52850, max: 136450 },
    },
    'tier-3': {
      S: { min: 95500, max: 199250 },
      rate: 0.02,
      MFJ: { min: 159200, max: 242550 },
      MFS: { min: 79600, max: 121275 },
      HOH: { min: 136450, max: 220900 },
    },
    'tier-4': {
      S: { min: 199250, max: 433200 },
      rate: 0.02,
      MFJ: { min: 242550, max: 433200 },
      MFS: { min: 121275, max: 216600 },
      HOH: { min: 220900, max: 433200 },
    },
    'tier-5': {
      S: { min: 433200, max: Infinity },
      rate: 0.02,
      MFJ: { min: 433200, max: Infinity },
      MFS: { min: 216600, max: Infinity },
      HOH: { min: 433200, max: Infinity },
    },
  },
  Ohio: {
    'tier-1': { S: { min: 0, max: 21750 }, rate: 0 },
    'tier-2': { S: { min: 21750, max: 43450 }, rate: 0.02 },
    'tier-3': { S: { min: 43450, max: 86900 }, rate: 0.03 },
    'tier-4': { S: { min: 86900, max: 108700 }, rate: 0.03 },
    'tier-5': { S: { min: 108700, max: 217400 }, rate: 0.04 },
    'tier-6': { S: { min: 217400, max: Infinity }, rate: 0.04 },
  },
  Oklahoma: {
    'tier-1': {
      S: { min: 0, max: 1000 },
      rate: 0,
      MFJ: { min: 0, max: 2000 },
      MFS: { min: 0, max: 1000 },
      HOH: { min: 0, max: 2000 },
    },
    'tier-2': {
      S: { min: 1000, max: 2500 },
      rate: 0.01,
      MFJ: { min: 2000, max: 5000 },
      MFS: { min: 1000, max: 2500 },
      HOH: { min: 2000, max: 5000 },
    },
    'tier-3': {
      S: { min: 2500, max: 3750 },
      rate: 0.02,
      MFJ: { min: 5000, max: 7500 },
      MFS: { min: 2500, max: 3750 },
      HOH: { min: 5000, max: 7500 },
    },
    'tier-4': {
      S: { min: 3750, max: 4900 },
      rate: 0.03,
      MFJ: { min: 7500, max: 9800 },
      MFS: { min: 3750, max: 4900 },
      HOH: { min: 7500, max: 9800 },
    },
    'tier-5': {
      S: { min: 4900, max: 7200 },
      rate: 0.04,
      MFJ: { min: 9800, max: 12200 },
      MFS: { min: 4900, max: 7200 },
      HOH: { min: 9800, max: 12200 },
    },
    'tier-6': {
      S: { min: 7200, max: Infinity },
      rate: 0.05,
      MFJ: { min: 12200, max: Infinity },
      MFS: { min: 7200, max: Infinity },
      HOH: { min: 12200, max: Infinity },
    },
  },
  Oregon: {
    'tier-1': {
      S: { min: 0, max: 3550 },
      rate: 0.05,
      MFJ: { min: 0, max: 7100 },
      MFS: { min: 0, max: 3550 },
      HOH: { min: 0, max: 7100 },
    },
    'tier-2': {
      S: { min: 3550, max: 8900 },
      rate: 0.07,
      MFJ: { min: 7100, max: 17800 },
      MFS: { min: 3550, max: 8900 },
      HOH: { min: 7100, max: 17800 },
    },
    'tier-3': {
      S: { min: 8900, max: 125000 },
      rate: 0.09,
      MFJ: { min: 17800, max: 250000 },
      MFS: { min: 8900, max: 125000 },
      HOH: { min: 17800, max: 250000 },
    },
    'tier-4': {
      S: { min: 125000, max: Infinity },
      rate: 0.09,
      MFJ: { min: 250000, max: Infinity },
      MFS: { min: 125000, max: Infinity },
      HOH: { min: 250000, max: Infinity },
    },
  },
  Pennsylvania: {rate: .0307},
  'Rhode Island': {
    'tier-1': { S: { min: 0, max: 64050 }, rate: 0.03 },
    'tier-2': { S: { min: 64050, max: 145600 }, rate: 0.04 },
    'tier-3': { S: { min: 145600, max: Infinity }, rate: 0.05 },
  },
  'South Carolina': {
    'tier-1': { S: { min: 0, max: 3030 }, rate: 0 },
    'tier-2': { S: { min: 3030, max: 6060 }, rate: 0.03 },
    'tier-3': { S: { min: 6060, max: 9090 }, rate: 0.04 },
    'tier-4': { S: { min: 9090, max: 12120 }, rate: 0.05 },
    'tier-5': { S: { min: 12120, max: 15160 }, rate: 0.06 },
    'tier-6': { S: { min: 15160, max: Infinity }, rate: 0.07 },
  },
  'South Dakota': {rate: 0},
  Tennessee: {rate: 0},
  Texas: {rate: 0},
  Utah: {rate: .0495},
  Vermont: {
    'tier-1': {
      S: { min: 0, max: 39600 },
      rate: 0.03,
      MFJ: { min: 0, max: 66150 },
      MFS: { min: 0, max: 33075 },
      HOH: { min: 0, max: 53100 },
    },
    'tier-2': {
      S: { min: 39600, max: 96000 },
      rate: 0.06,
      MFJ: { min: 66150, max: 159950 },
      MFS: { min: 33075, max: 79975 },
      HOH: { min: 53100, max: 137050 },
    },
    'tier-3': {
      S: { min: 96000, max: 200200 },
      rate: 0.07,
      MFJ: { min: 159950, max: 243750 },
      MFS: { min: 79975, max: 121875 },
      HOH: { min: 137050, max: 221950 },
    },
    'tier-4': {
      S: { min: 200200, max: Infinity },
      rate: 0.08,
      MFJ: { min: 243750, max: Infinity },
      MFS: { min: 121875, max: Infinity },
      HOH: { min: 221950, max: Infinity },
    },
  },
  Virginia: {
    'tier-1': { S: { min: 0, max: 3000 }, rate: 0.02 },
    'tier-2': { S: { min: 3000, max: 5000 }, rate: 0.03 },
    'tier-3': { S: { min: 5000, max: 17000 }, rate: 0.05 },
    'tier-4': { S: { min: 17000, max: Infinity }, rate: 0.05 },
  },
  Washington: {rate: 0},
  'West Virginia': {
    'tier-1': {
      S: { min: 0, max: 10000 },
      rate: 0.03,
      MFJ: { min: 0, max: 10000 },
      MFS: { min: 0, max: 5000 },
      HOH: { min: 0, max: 10000 },
    },
    'tier-2': {
      S: { min: 10000, max: 25000 },
      rate: 0.04,
      MFJ: { min: 10000, max: 25000 },
      MFS: { min: 5000, max: 12500 },
      HOH: { min: 10000, max: 25000 },
    },
    'tier-3': {
      S: { min: 25000, max: 40000 },
      rate: 0.04,
      MFJ: { min: 25000, max: 40000 },
      MFS: { min: 12500, max: 20000 },
      HOH: { min: 25000, max: 40000 },
    },
    'tier-4': {
      S: { min: 40000, max: 60000 },
      rate: 0.06,
      MFJ: { min: 40000, max: 60000 },
      MFS: { min: 20000, max: 30000 },
      HOH: { min: 40000, max: 60000 },
    },
    'tier-5': {
      S: { min: 60000, max: Infinity },
      rate: 0.06,
      MFJ: { min: 60000, max: Infinity },
      MFS: { min: 30000, max: Infinity },
      HOH: { min: 60000, max: Infinity },
    },
  },
  Wisconsin: {
    'tier-1': {
      S: { min: 0, max: 11760 },
      rate: 0.03,
      MFJ: { min: 0, max: 15680 },
      MFS: { min: 0, max: 7840 },
      HOH: { min: 0, max: 11760 },
    },
    'tier-2': {
      S: { min: 11760, max: 23520 },
      rate: 0.05,
      MFJ: { min: 15680, max: 31360 },
      MFS: { min: 7840, max: 15680 },
      HOH: { min: 11760, max: 23520 },
    },
    'tier-3': {
      S: { min: 23520, max: 258950 },
      rate: 0.06,
      MFJ: { min: 31360, max: 345270 },
      MFS: { min: 15680, max: 172630 },
      HOH: { min: 23520, max: 258950 },
    },
    'tier-4': {
      S: { min: 258950, max: Infinity },
      rate: 0.07,
      MFJ: { min: 345270, max: Infinity },
      MFS: { min: 172630, max: Infinity },
      HOH: { min: 258950, max: Infinity },
    },
  },
  Wyoming: {rate: 0},
}
