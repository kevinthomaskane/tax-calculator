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
