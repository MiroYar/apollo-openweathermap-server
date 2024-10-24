export const typeDefs = `#graphql
  type ForecastWeather {
    lat: Float
    lon: Float
    timezone: String
    timezone_offset: Int
    current: CurrentWeather,
    minutely: [Minutely]
    hourly: [Hourly]
    daily: [Daily]
    alerts: [Alert]
  }

  type CurrentWeather {
    dt: Int
    sunrise: Int
    sunset: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    dew_point: Float
    uvi: Float
    clouds: Int
    visibility: Int
    wind_speed: Float
    wind_deg: Int
    wind_gust: Float
    weather: [Weather]
  }

  type Weather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type Minutely {
    dt: Int
    precipitation: Int
  }

  type Hourly {
    dt: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    dew_point: Float
    uvi: Float
    clouds: Int
    visibility: Int
    wind_speed: Float
    wind_deg: Int
    wind_gust: Float
    weather: [Weather]
    pop: Float
  }

  type Daily {
    dt: Int
    sunrise: Int
    sunset: Int
    moonrise: Int
    moonset: Int
    moon_phase: Float
    summary: String
    temp: Temp
    feels_like: FeelsLike
    pressure: Int
    humidity: Int
    dew_point: Float
    wind_speed: Float
    wind_deg: Int
    wind_gust: Float
    weather:[Weather]
    clouds: Int
    pop: Float
    rain: Float
    uvi: Float
  }

  type Temp {
    day: Float
    min: Float
    max: Float
    night: Float
    eve: Float
    morn: Float
  }

  type FeelsLike {
    day: Float
    night: Float
    eve: Float
    morn: Float
  }

  type Alert {
    sender_name: String
    event: String
    start: Int
    end: Int
    description: String
    tags: [String]
  }

  type LocalNames {
    fo: String
    sh: String
    pa: String
    bg: String
    av: String
    he: String
    sq: String
    hr: String
    an: String
    my: String
    kn: String
    to: String
    gd: String
    el: String
    bn: String
    et: String
    sw: String
    km: String
    no: String
    ga: String
    yi: String
    ro: String
    az: String
    mg: String
    ig: String
    co: String
    sr: String
    cs: String
    en: String
    bi: String
    ar: String
    bm: String
    si: String
    mr: String
    fi: String
    ru: String
    lt: String
    wo: String
    se: String
    gl: String
    su: String
    ny: String
    nn: String
    oc: String
    eu: String
    ja: String
    kl: String
    or: String
    kv: String
    fj: String
    mi: String
    ur: String
    lv: String
    mk: String
    de: String
    ms: String
    so: String
    hu: String
    zu: String
    sk: String
    feature_name: String
    ne: String
    eo: String
    ee: String
    ko: String
    kk: String
    kw: String
    io: String
    pt: String
    ce: String
    ha: String
    hy: String
    th: String
    tt: String
    sm: String
    fa: String
    ab: String
    nv: String
    hi: String
    gn: String
    ky: String
    tl: String
    sc: String
    ml: String
    mt: String
    ht: String
    lb: String
    ug: String
    ka: String
    id: String
    ba: String
    qu: String
    cv: String
    tr: String
    ku: String
    bh: String
    ln: String
    sl: String
    ia: String
    sd: String
    uz: String
    ie: String
    cy: String
    be: String
    te: String
    tw: String
    gu: String
    nl: String
    cu: String
    ascii: String
    ff: String
    af: String
    uk: String
    ta: String
    bo: String
    wa: String
    vo: String
    yo: String
    br: String
    sn: String
    lo: String
    gv: String
    na: String
    os: String
    pl: String
    it: String
    mn: String
    ay: String
    om: String
    tk: String
    am: String
    fr: String
    rm: String
    bs: String
    da: String
    tg: String
    sa: String
    is: String
    vi: String
    es: String
    ps: String
    li: String
    zh: String
    sv: String
    ca: String
    fy: String
    st: String
    jv: String
  }

  type CityData {
    name: String
    local_names: LocalNames
    lat: Float
    lon: Float
    country: String
    state: String
  }

  type Query {
    getWeather(lat: Float!, lon: Float!, apiKey: String!, units: String, lang: String): ForecastWeather
    getCityData(cityName: String!, apiKey: String!, stateCode: String, countryCode: String, limit: Int): [CityData]
  }
`;
